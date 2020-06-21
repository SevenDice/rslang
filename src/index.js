import React from "react";
import ReactDOM from "react-dom";
import App from "./App";

import { showBurgerMenu } from "./components/layout/showBurgerMenu";

document.addEventListener("click", showBurgerMenu);

document.addEventListener("click", (e) => {
  if (e.target.closest(".nav-link")) {
    console.log(e.target.href);
  }
});

ReactDOM.render(<App />, document.getElementById("root"));
