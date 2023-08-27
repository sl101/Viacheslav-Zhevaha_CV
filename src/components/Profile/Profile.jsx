import { useContext } from "react";
import { LangContext } from "../../context/LangContext";
import { profile_de, profile_en } from "../../data/data";

export function Profile() {
	const { lang } = useContext(LangContext);
	const context = lang ? profile_en : profile_de;

	return (
		<section>
			<h2 className="title">{context.title}</h2>
			<div>
				<p>{context.description}</p>
			</div>
		</section>
	);
}
