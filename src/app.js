// For local files:
// import DEFAULT_EXPORT, {NAME_EXPORTS} from "./RELATIVE_PATH_TO_LOCAL_FILE"

// for node moduiles
// import DEFAULT_EXPORT, {NAME_EXPORTS} from "MODULE_NAME"

import React from "react";
import ReactDOM from "react-dom";
import IndecisionApp from "./components/IndecisionApp";
import "normalize.css/normalize.css";
import "./styles/styles.scss";

ReactDOM.render(<IndecisionApp />, document.getElementById("app"));

// npx babel src/app.js -o public/scripts/app.js --presets=@babel/env,@babel/react --watch
