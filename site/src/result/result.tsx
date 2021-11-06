import { Pane, Table, Tag } from "@moai/core";
import s from "./result.module.css";

interface Predict {
	gender: "male" | "female";
	accuracy: number;
	model_name: string;
}

export interface Item {
	name: string;
	predicts: Predict[];
	gender: Predict["gender"];
	accuracy: Predict["accuracy"];
}

interface Props {
	items: Item[];
}

const getAccuracyColor = (accuracy: number) => {
	if (accuracy < 0.5) return Tag.colors.red;
	if (accuracy < 0.8) return Tag.colors.yellow;
	return Tag.colors.green;
};

const getGenderColor = (gender: "male" | "female") => {
	return gender === "male" ? Tag.colors.blue : Tag.colors.pink;
};

export const ExpandedRow = (row: Item): JSX.Element => {
	return (
		<table className={s.table}>
			{row.predicts.map((predict) => (
				<tr key={predict.model_name}>
					<td>{predict.model_name}</td>
					<td>
						<Tag color={getGenderColor(predict.gender)}>
							{predict.gender}
						</Tag>
					</td>
					<td>
						<Tag color={getAccuracyColor(predict.accuracy)}>
							{predict.accuracy.toFixed(4)}
						</Tag>
					</td>
				</tr>
			))}
		</table>
	);
};

export const Result = (props: Props): JSX.Element | null => {
	if (props.items.length === 0) return null;
	return (
		<div style={{ marginTop: 20 }}>
			<Pane noPadding>
				<Table<Item>
					rows={props.items}
					rowKey={(_, index) => index.toString()}
					columns={[
						{
							title: "Name",
							render: "name",
						},
						{
							title: "Gender",
							render: (row): JSX.Element => {
								const color = getGenderColor(row.gender);
								return <Tag color={color}>{row.gender}</Tag>;
							},
						},
						{
							title: "Accuracy",
							render: (row): JSX.Element => {
								const color = getAccuracyColor(row.accuracy);
								return (
									<Tag color={color}>
										{row.accuracy.toFixed(4)}
									</Tag>
								);
							},
						},
					]}
					expandable={{ render: ExpandedRow }}
					fill
				></Table>
			</Pane>
		</div>
	);
};
