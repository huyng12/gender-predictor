import { Button, text, TextArea } from "@moai/core";
import { BsGenderAmbiguous } from "react-icons/bs";
import s from "./form.module.css";
import { useForm } from "./state";

export const Form = (): JSX.Element => {
	const form = useForm();
	return (
		<div className={s.container}>
			<form className={s.form} onSubmit={form.onSubmit}>
				<div>
					<label
						htmlFor="names"
						className={[text.strong, text.muted].join(" ")}
						style={{ display: "block", marginBottom: 5 }}
					>
						List of names
					</label>
					<TextArea
						id="names"
						rows={5}
						value={form.names}
						setValue={form.setNames}
						disabled={form.loading}
					/>
				</div>
				<div className={s.buttonPane}>
					<Button
						type="submit"
						busy={form.loading}
						disabled={form.loading}
						icon={BsGenderAmbiguous}
						iconRight
						highlight
					>
						Predict gender
					</Button>
				</div>
			</form>
		</div>
	);
};
