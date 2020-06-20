import React from "react";
import ReactDOM from "react-dom";
import App from "./App";

import {showBurgerMenu} from './components/layout/showBurgerMenu'

document.addEventListener("click", showBurgerMenu);

ReactDOM.render(<App />, document.getElementById("root"));
