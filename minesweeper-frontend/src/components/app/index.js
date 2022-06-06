import Field from "../grid";
import Button from "../button";
import { Grid } from "minesweeper-wasm";
import { memory } from "minesweeper-wasm/minesweeper_wasm_bg";
export default class App {
  constructor(elem, rows, cols, mines) {
    if (!elem) return;
    this.elem = elem;
    this.rows = rows;
    this.cols = cols;
    this.mines = mines;
    this.grid = Grid.new(rows, cols, mines);
    this.grid.plant_mines();
    const cells_ptr = this.grid.get_cells();
    this.cells = new Uint8Array(
      memory.buffer,
      cells_ptr,
      this.rows * this.cols
    );
    this.button = new Button(this, this.grid);
    this.table = new Field(this, this.grid, this.cells);
  }
  render() {
    this.table.render();
    this.button.render();
  }

  clean() {
    this.table.destroy();
    this.table = new Field(this, this.grid, this.cells);
    this.render();
  }
}
