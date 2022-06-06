use js_sys::Math;
use wasm_bindgen::prelude::*;
type Point = (usize, usize);
#[wasm_bindgen]
extern "C" {
    fn alert(s: &str);
    #[wasm_bindgen(js_namespace = console)]
    fn log(s: &str);
}
/*
Smallest possible implementation of Cell, using 8 bits
First bit (left to right) is used to represent is cell is a mine or not (1 = mine, 0 = not mine)
Second bit (left to right) is used to represent if the cell has been revealed or not (1 = revealed, 0 = not revealed)
Third bit (left to right) is used to represent if the cell has been flagged or not (1 = flagged, 0 = not flagged)
Last five bits (left to right) are used to represent the number of mines adjacent to the cell
*/
type Cell = u8;
const IS_MINE_MASK: Cell = 0b10000000;
const IS_REVEALED_MASK: Cell = 0b01000000;
const IS_FLAGGED_MASK: Cell = 0b00100000;
const NOT_MINE_BITS: Cell = 0b11100000;
const COUNT_MINE_BITS: Cell = 0b00011111;
#[wasm_bindgen]
#[derive(Clone, Debug, PartialEq, Eq)]
pub enum State {
    Running,
    Won,
    Lost,
}

#[wasm_bindgen]
#[derive(Clone, Debug, PartialEq, Eq)]
pub struct Grid {
    width: usize,
    height: usize,
    cells: Vec<Cell>,
    num_mines: u32,
    num_flags: u32,
    num_revealed: u32,
    mines_revealed: u32,
}

impl Grid {
    pub fn plant_mines_manual(&mut self, mines: Vec<Point>) {
        self.reset_grid();
        for (row, col) in mines {
            let index = self.get_index(row, col);
            self.cells[index] |= IS_MINE_MASK;
        }
        self.set_mines_count();
    }
}
#[wasm_bindgen]
impl Grid {
    pub fn new(width: usize, height: usize, number_of_mines: u32) -> Grid {
        let cells = vec![0; width * height];
        Grid {
            width,
            height,
            cells,
            num_mines: number_of_mines,
            num_flags: 0,
            num_revealed: 0,
            mines_revealed: 0,
        }
    }

    pub fn plant_mines(&mut self) {
        self.reset_grid();
        let mut mines_placed = 0;
        while mines_placed < self.num_mines {
            let index = (Math::random() * (self.width * self.height) as f64) as usize;
            if self.cells[index] & IS_MINE_MASK == 0 {
                self.cells[index] |= IS_MINE_MASK;
                mines_placed += 1;
            }
        }
        self.set_mines_count();
    }

    pub fn set_mines_count(&mut self) {
        for idx in 0..(self.width * self.height) as usize {
            let row = self.get_row_from_index(idx);
            let col = self.get_col_from_index(idx);
            self.cells[idx] = (self.cells[idx] & NOT_MINE_BITS) | self.count_bombs_nearby(row, col);
        }
    }

    pub fn get_cells(&self) -> *const Cell {
        // Thanks to Conway's Game of Life. This is
        // helpful to let the js access the memory where we store
        // the cells and to have a lightweight solution
        self.cells.as_ptr()
    }

    pub fn get_index(&self, x: usize, y: usize) -> usize {
        ((y * self.width) + x) as usize
    }

    pub fn get_row_from_index(&self, index: usize) -> usize {
        index % (self.height as usize)
    }

    pub fn get_col_from_index(&self, index: usize) -> usize {
        index / (self.width as usize)
    }

    fn count_bombs_nearby(&self, row: usize, column: usize) -> u8 {
        let mut count = 0;
        for delta_row in [self.height - 1, 0, 1].iter().cloned() {
            for delta_col in [self.width - 1, 0, 1].iter().cloned() {
                if delta_row == 0 && delta_col == 0 {
                    continue;
                }
                let neighbor_row = (row + delta_row as usize) % self.height;
                let neighbor_col = (column + delta_col as usize) % self.width;
                if (neighbor_col as i32 - column as i32).abs() > 1
                    || (neighbor_row as i32 - row as i32).abs() > 1
                {
                    continue;
                }
                let idx = self.get_index(neighbor_row, neighbor_col);
                count += (self.cells[idx] & IS_MINE_MASK) >> 7;
            }
        }
        count
    }
    pub fn reset_grid(&mut self) {
        for cell in self.cells.iter_mut() {
            *cell = 0;
        }
    }

    fn get_neighbors(
        &self,
        row: usize,
        column: usize,
        f: Option<&dyn Fn(Point) -> bool>,
    ) -> Vec<Point> {
        let mut neighbors = Vec::new();
        for delta_row in [self.height - 1, 0, 1].iter().cloned() {
            for delta_col in [self.width - 1, 0, 1].iter().cloned() {
                let neighbor_row = (row + delta_row) % self.height;
                let neighbor_col = (column + delta_col) % self.width;
                if delta_row == 0 && delta_col == 0 {
                    continue;
                }
                if (neighbor_col as i32 - column as i32).abs() > 1
                    || (neighbor_row as i32 - row as i32).abs() > 1
                {
                    continue;
                }
                match f {
                    Some(f) => {
                        if f((neighbor_row, neighbor_col)) {
                            neighbors.push((neighbor_row, neighbor_col));
                        }
                    }
                    None => neighbors.push((neighbor_row, neighbor_col)),
                }
            }
        }
        neighbors
    }

    fn get_revealable_neighbors(&self, row: usize, column: usize) -> Vec<Point> {
        if self.cells[self.get_index(row, column)] & COUNT_MINE_BITS != 0 {
            return Vec::new();
        }
        self.get_neighbors(
            row,
            column,
            Some(&|(r, c)| {
                let idx = self.get_index(r, c);
                (self.cells[idx] & IS_REVEALED_MASK) == 0 && (self.cells[idx] & IS_MINE_MASK) == 0
            }),
        )
    }

    pub fn propagate_reveal_cell(&mut self, row: usize, column: usize) {
        let mut neighbors = vec![(row, column)];
        // loop and iteratively reveal neighbors
        while !neighbors.is_empty() {
            // get the first neighbor
            let (neighbor_row, neighbor_col) = neighbors.swap_remove(0);
            self.reveal_cell(neighbor_row, neighbor_col);
            for new_neighbor in self.get_revealable_neighbors(neighbor_row, neighbor_col) {
                if !neighbors.contains(&new_neighbor) {
                    neighbors.push(new_neighbor);
                }
            }
        }
    }

    pub fn reveal_cell(&mut self, row: usize, column: usize) {
        let idx = self.get_index(row, column);
        if self.cells[idx] & IS_REVEALED_MASK != 0 {
            return;
        }
        self.cells[idx] |= IS_REVEALED_MASK;
        if (self.cells[idx] & IS_MINE_MASK) != 0 {
            self.mines_revealed += 1;
        }
        self.num_revealed += 1;
    }

    pub fn get_state(&self) -> State {
        if self.mines_revealed > 0 {
            State::Lost
        } else if self.num_revealed == (self.width * self.height) as u32 - self.num_mines {
            State::Won
        } else {
            State::Running
        }
    }
}
