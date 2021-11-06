import { Pane } from "@moai/core";
import { useState } from "react";
import { Form } from "../form/form";
import { Heading } from "../heading/heading";
import { PrefsPane } from "../prefs/prefs";
import { usePrefs } from "../prefs/state";
import { Item, Result } from "../result/result";
import s from "./app.module.css";

export const App = (): JSX.Element => {
	const prefs = usePrefs();
	const [items, setItems] = useState<Item[]>([]);
	return (
		<div className={s.container}>
			<Heading />
			<div style={{ marginTop: 20 }}>
				<Pane>
					<PrefsPane prefs={prefs} />
					<Form setItems={setItems} />
					<Result items={items} />
				</Pane>
			</div>
		</div>
	);
};
