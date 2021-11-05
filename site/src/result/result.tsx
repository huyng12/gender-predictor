import { Pane, Table, Tag } from "@moai/core";

interface Algorithm {
	name: string;
}

interface Predict {
	gender: "male" | "female";
	accuracy: number;
	algorithm: Algorithm;
}

export interface Item {
	name: string;
	predicts: Predict[];
}

interface Props {
	items: Item[];
}

const getAccuracyColor = (accuracy: number) => {
	if (accuracy < 0.5) return Tag.colors.red;
	if (accuracy < 0.8) return Tag.colors.yellow;
	return Tag.colors.green;
};

export const Result = (props: Props): JSX.Element => {
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
								const [predict] = row.predicts;
								const color =
									predict.gender === "male"
										? Tag.colors.blue
										: Tag.colors.pink;
								return (
									<Tag color={color}>{predict.gender}</Tag>
								);
							},
						},
						{
							title: "Accuracy",
							render: (row): JSX.Element => {
								const [predict] = row.predicts;
								const color = getAccuracyColor(
									predict.accuracy
								);
								return (
									<Tag color={color}>
										{predict.accuracy.toFixed(4)}
									</Tag>
								);
							},
						},
					]}
					fill
				></Table>
			</Pane>
		</div>
	);
};
