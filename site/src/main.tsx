import "@moai/core/dist/bundle.css";
import React from "react";
import ReactDOM from "react-dom";
import { App } from "./app/app";
import "./styles/app.css";

ReactDOM.render(
	<React.StrictMode>
		<App />
	</React.StrictMode>,
	document.getElementById("root")
);
