import "@moai/core/dist/bundle.css";
import React from "react";
import ReactDOM from "react-dom";
import { App } from "./app/app";
import { loadTheme, updateTheme } from "./prefs/state";
import "./styles/app.css";

// Setup theme for website
const theme = loadTheme();
updateTheme(theme);

ReactDOM.render(
	<React.StrictMode>
		<App />
	</React.StrictMode>,
	document.getElementById("root")
);
