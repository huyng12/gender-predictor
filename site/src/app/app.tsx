import { Pane } from "@moai/core";
import { Form } from "../form/form";
import { Heading } from "../heading/heading";
import { PrefsPane } from "../prefs/prefs";
import { usePrefs } from "../prefs/state";
import { Result } from "../result/result";
import s from "./app.module.css";

export const App = (): JSX.Element => {
	const prefs = usePrefs();
	return (
		<div className={s.container}>
			<Heading />
			<div style={{ marginTop: 20 }}>
				<Pane>
					<PrefsPane prefs={prefs} />
					<Form />
					<Result
						items={[
							{
								name: "Nguyễn Minh Huy",
								predicts: [
									{
										gender: "male",
										accuracy: 0.997829,
										algorithm: { name: "Multinominal NB" },
									},
									{
										gender: "male",
										accuracy: 0.977119,
										algorithm: { name: "KNN" },
									},
								],
							},
							{
								name: "Lê Đoàn Minh Hằng",
								predicts: [
									{
										gender: "female",
										accuracy: 0.901241,
										algorithm: { name: "Multinominal NB" },
									},
									{
										gender: "female",
										accuracy: 0.921311,
										algorithm: { name: "KNN" },
									},
								],
							},
						]}
					/>
				</Pane>
			</div>
		</div>
	);
};
