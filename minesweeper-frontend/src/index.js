/**
 * The entry point
 */

import App from "./components/app";

window.addEventListener("load", () => {
  const app = new App(document.getElementById("app"), 20, 20, 10);
  app.render();
});
