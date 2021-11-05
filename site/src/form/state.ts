import { SetState } from "@moai/core/dist/types/utils/utils";
import React, { useState } from "react";

export interface FormState {
	names: string;
	setNames: SetState<string>;
	loading: boolean;
	onSubmit: (e: React.FormEvent) => void;
}

export const useForm = (): FormState => {
	const [names, setNames] = useState("");
	const [loading, setLoading] = useState(false);

	const onSubmit = (e: React.FormEvent) => {
		e.preventDefault();
		setLoading(true);
		setTimeout(() => setLoading(false), 1000);
	};

	return { names, setNames, loading, onSubmit };
};
