import { SetState } from "@moai/core/dist/types/utils/utils";
import { useState } from "react";

export enum Theme {
	LIGHT = "light",
	DARK = "dark",
	SYSTEM = "system",
}

export interface PrefsState {
	theme: Theme;
	setTheme: SetState<Theme>;
}

export const usePrefs = (): PrefsState => {
	const [theme, setTheme] = useState<Theme>(Theme.SYSTEM);
	return { theme, setTheme };
};
