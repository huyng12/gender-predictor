import { text } from "@moai/core";
import s from "./heading.module.css";

const info = {
	title: "Gender Predictor 🙎‍♂️🙎‍♀️",
	description: "Predict the gender of Vietnamese names",
};

export const Heading = (): JSX.Element => {
	return (
		<div>
			<p className={s.tagline}>
				<span>{info.title}</span>
				<br />
				<span className={text.muted}>{info.description}</span>
			</p>
		</div>
	);
};
