import { SetState } from "@moai/core/dist/types/utils/utils";
import { useState } from "react";

export enum Mode {
	SINGLE = "single",
	BATCH = "batch",
}

export interface PrefsState {
	mode: Mode;
	setMode: SetState<Mode>;
}

export const usePrefs = (): PrefsState => {
	const [mode, setMode] = useState<Mode>(Mode.SINGLE);
	return { mode, setMode };
};
