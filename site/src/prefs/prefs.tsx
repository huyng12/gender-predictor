import { DivPx, Switcher, SwitcherOption } from "@moai/core";
import s from "./prefs.module.css";
import { PrefsState, Theme } from "./state";

interface Props {
	prefs: PrefsState;
}

export const PrefsPane = (props: Props): JSX.Element => {
	const options: SwitcherOption<Theme>[] = [
		{ value: Theme.LIGHT, label: "Light" },
		{ value: Theme.SYSTEM, label: "System" },
		{ value: Theme.DARK, label: "Dark" },
	];
	return (
		<div className={s.container}>
			<span>Theme:</span>
			<DivPx size={16} />
			<Switcher
				options={options}
				value={props.prefs.theme}
				setValue={props.prefs.setTheme}
			/>
		</div>
	);
};
