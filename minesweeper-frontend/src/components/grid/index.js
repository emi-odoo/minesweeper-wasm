const REVEALED_BIT = 0b01000000;
const MINE_BIT = 0b10000000;
const MINE_COUNT = 0b00011111;
export default class Field {
  constructor(parentEl, grid, cells) {
    if (!parentEl) return;
    this.parent_component = parentEl;
    this.table = this.parent_component.elem.appendChild(
      document.createElement("table")
    );
    this.grid = grid;
    this.cells = cells;
    this.rows = this.parent_component.rows;
    for (var i = 0; i < this.parent_component.rows; i++) {
      const row = this.table.insertRow(i);
      for (var j = 0; j < this.parent_component.cols; j++) {
        row.insertCell(j);
      }
    }
    this.add_interaction();
  }
  add_interaction() {
    this.table.onclick = (ev) => {
      const cell = ev.target;
      this.grid.propagate_reveal_cell(
        cell.cellIndex,
        cell.parentElement.rowIndex
      );
      this.parent_component.render();
    };
  }
  choose_background(count) {
    let greyscale = 255 - (count / 8) * 255;
    return `rgb(${greyscale},${greyscale},${greyscale})`;
  }

  render() {
    for (var i = 0, row; (row = this.table.rows[i]); i++) {
      for (var j = 0, html_cell; (html_cell = row.cells[j]); j++) {
        const cell = this.cells[i * this.rows + j];
        if ((cell & MINE_BIT) >> 7 === 1 && (cell & REVEALED_BIT) >> 6 === 1) {
          html_cell.style.background = "red";
        } else if ((cell & REVEALED_BIT) >> 6 === 1) {
          html_cell.innerHTML = cell & MINE_COUNT || "";
          html_cell.style.background = this.choose_background(
            cell & MINE_COUNT
          );
        }
      }
    }
    if (this.grid.get_state() === 2) {
      alert("You lose!");
    } else if (this.grid.get_state() === 1) {
      alert("You win!");
    }
  }

  destroy() {
    this.parent_component.elem.removeChild(this.table);
  }
}
