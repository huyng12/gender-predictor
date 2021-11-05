import { Switcher, SwitcherOption } from "@moai/core";
import { Mode, PrefsState } from "./state";

interface Props {
	prefs: PrefsState;
}

export const PrefsPane = (props: Props): JSX.Element => {
	const options: SwitcherOption<Mode>[] = [
		{ value: Mode.SINGLE, label: "Single" },
		{ value: Mode.BATCH, label: "Batch" },
	];
	return (
		<Switcher
			options={options}
			value={props.prefs.mode}
			setValue={props.prefs.setMode}
		/>
	);
};
