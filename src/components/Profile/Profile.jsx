import { useContext } from "react";
import { LangContext } from "../../context/LangContext";
import { profile_de, profile_en } from "../../data/data";
import s from "./Profile.module.css"

export function Profile() {
	const { lang } = useContext(LangContext);
	const context = lang ? profile_en : profile_de;

	const content = {
		description: (
			<p
				dangerouslySetInnerHTML={{
					__html: context.description
				}}
			/>
		)}

	return (
		<section>
			<h2 className="title">{context.title}</h2>
			<div className={s.profile_description}>
				{content.description}
			</div>
		</section>
	);
}
