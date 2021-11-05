import { background as bg, border as bd } from "@moai/core";
import { PrefsPane } from "../prefs/prefs";
import { usePrefs } from "../prefs/state";
import s from "./app.module.css";

const classes = {
	container: [s.container, bg.strong, bd.strong, bd.radius].join(" "),
};

export const App = (): JSX.Element => {
	const prefs = usePrefs();
	return (
		<div className={classes.container}>
			<PrefsPane prefs={prefs} />
		</div>
	);
};
