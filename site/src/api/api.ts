import axios from "axios";
import { Item } from "../result/result";

const req = axios.create({
	baseURL: import.meta.env.PROD ? import.meta.env.VITE_API_URL : "/api",
	timeout: 15000,
	headers: {
		"Content-Type": "application/json",
	},
});

export const predict = async (names: string[]): Promise<Item[]> => {
	interface Response {
		data: {
			uuid: string;
			name: string;
			model_name: string;
			gender: "male" | "female";
			accuracy: number;
		}[];
	}

	const transformResponse = (res: Response): Item[] => {
		const data = res.data;

		const result: Record<string, Response["data"]> = {};
		for (const item of data) {
			if (!result[item.uuid]) result[item.uuid] = [];
			result[item.uuid].push(item);
		}

		const items: Item[] = Object.keys(result).map((uuid): Item => {
			const predicts = result[uuid];
			return { name: predicts[0].name, predicts: predicts };
		});

		return items;
	};

	return req
		.post<Response>("/predict", { names })
		.then((r) => r.data)
		.then(transformResponse);
};
