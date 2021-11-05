import "@moai/core/dist/bundle.css";
import "@moai/core/dist/font/remote.css";
import React from "react";
import ReactDOM from "react-dom";
import { App } from "./app/app";

ReactDOM.render(
	<React.StrictMode>
		<App />
	</React.StrictMode>,
	document.getElementById("root")
);
