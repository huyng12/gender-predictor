import { SetState } from "@moai/core/dist/types/utils/utils";
import { useEffect, useState } from "react";

export enum Theme {
	LIGHT = "light",
	DARK = "dark",
	SYSTEM = "system",
}

export interface PrefsState {
	theme: Theme;
	setTheme: SetState<Theme>;
}

export const loadTheme = (): Theme => {
	const theme = window.localStorage.getItem("theme") as Theme;
	return theme ?? Theme.SYSTEM;
};

const getPrefersColorScheme = (): Theme.LIGHT | Theme.DARK => {
	const isDark =
		window.matchMedia &&
		window.matchMedia("(prefers-color-scheme: dark)").matches;
	return isDark ? Theme.DARK : Theme.LIGHT;
};

export const updateTheme = (theme: Theme): void => {
	const html = document.documentElement;
	const variant = theme === Theme.SYSTEM ? getPrefersColorScheme() : theme;
	if (html.className !== variant) {
		html.className = variant;
	}
};

export const usePrefs = (): PrefsState => {
	const [theme, setTheme] = useState<Theme>(() => loadTheme());

	useEffect(() => {
		console.log(theme);
		updateTheme(theme);
		window.localStorage.setItem("theme", theme);
	}, [theme]);

	return { theme, setTheme };
};
