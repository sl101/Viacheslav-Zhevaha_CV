import { useContext } from "react";
import { LangContext } from "../../context/LangContext";
import { educations_de, educations_en } from "../../data/data";
import s from "./Education.module.css";

export function Education() {
	const { lang } = useContext(LangContext);
	const educations = lang ? educations_en : educations_de;

	return (
		<section className={s.education}>
			<h2 className="title">{lang ? "Education:" : "Ausbildung: "}</h2>
			<ul className={s.education_list}>
				{educations.map((elem) => (
					<li key={elem.id} className={s.education_item}>
						<div className={s.education__info}>
							<h4>{elem.title}</h4>
							<p className={s.subtitle}>{elem.description}</p>
						</div>
						<p className={s.date}>{elem.date}</p>
					</li>
				))}
			</ul>
		</section>
	);
}
