import { Grid } from "minesweeper-wasm";

export default class Button {
  constructor(parentEl, grid) {
    if (!parentEl) return;
    this.parent_component = parentEl;
    this.button = this.parent_component.elem.appendChild(
      document.createElement("button")
    );
    this.grid = grid;
    this.add_interaction();
  }
  add_interaction() {
    this.button.onclick = (ev) => {
      this.grid.plant_mines();
      this.parent_component.clean();
      this.parent_component.render();
    };
  }

  render() {
    this.button.innerHTML = "RESET";
  }
}
