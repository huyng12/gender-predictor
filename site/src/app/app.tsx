import { background as bg, border as bd } from "@moai/core";
import { Batch } from "../batch/batch";
import { Heading } from "../heading/heading";
import { PrefsPane } from "../prefs/prefs";
import { Mode, usePrefs } from "../prefs/state";
import { Single } from "../single/single";
import s from "./app.module.css";

const classes = {
	container: s.container,
	card: [s.card, bg.strong, bd.strong, bd.radius].join(" "),
	children: s.children,
};

export const App = (): JSX.Element => {
	const prefs = usePrefs();
	return (
		<div className={classes.container}>
			<Heading />
			<div className={classes.card}>
				<PrefsPane prefs={prefs} />
				<div className={classes.children}>
					{prefs.mode === Mode.SINGLE && <Single />}
					{prefs.mode === Mode.BATCH && <Batch />}
				</div>
			</div>
		</div>
	);
};
