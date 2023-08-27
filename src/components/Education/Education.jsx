import { useContext } from "react";
import { LangContext } from "../../context/LangContext";
import { educations_de, educations_en } from "../../data/data";
import s from "./Education.module.css";

export function Education() {
	const { lang } = useContext(LangContext);
	const educations = lang ? educations_en : educations_de;

	return (
		<section className="education">
			<h2 className="title">{lang ? "Education" : "Ausbildung "}</h2>
			<ul className="education_list">
				{educations.map((elem) => (
					<li key={elem.id} className="education_item">
						<div className="education__info">
							<h4 className={s.subtitle}>{elem.title}</h4>
							<p>{elem.description}</p>
						</div>
						<p className="date">{elem.date}</p>
					</li>
				))}
			</ul>
		</section>
	);
}
