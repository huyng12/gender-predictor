import { SetState } from "@moai/core/dist/types/utils/utils";
import React, { useState } from "react";
import { predict } from "../api/api";
import { Item } from "../result/result";

export interface FormState {
	names: string;
	setNames: SetState<string>;
	loading: boolean;
	onSubmit: (e: React.FormEvent) => void;
}

interface Props {
	setItems: SetState<Item[]>;
}

export const useForm = (props: Props): FormState => {
	const [names, setNames] = useState("");
	const [loading, setLoading] = useState(false);

	const onSubmit = (e: React.FormEvent) => {
		e.preventDefault();
		setLoading(true);

		const listOfNames = names.split("\n").filter((s) => s.length > 0);
		predict(listOfNames)
			.then((items) => props.setItems(items))
			.finally(() => setLoading(false));
	};

	return { names, setNames, loading, onSubmit };
};
