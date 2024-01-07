import { useContext } from "react";
import { LangContext } from "../../context/LangContext";
import { experiences_de, experiences_en } from "../../data/data";
import s from "./Experience.module.css";

export function Experience() {
	const { lang } = useContext(LangContext);
	const experiences = lang ? experiences_en : experiences_de;

	return (
		<section className="experience">
			<h2 className="title">{lang ? "Experience" : "Erfahrung"}</h2>
			<ul className="experience__list">
				{experiences?.map((item, index) => (
					<li key={index} className="experience__item">
						<h3 className="job__title">{item.title}</h3>
						<div className="job__info">
							<h4 className={s.subtitle}>
								<a className={s.subtitle_link} href={item.link}>
									{item.subtitle}
								</a>
							</h4>
							<p className="date">{item.date}</p>
						</div>
						<ul className="job__description">
							{item?.descriptions?.map((elem, i) => (
								<li key={i}>
									<p style={{ fontSize: "18px" }}>{elem.text}</p>
									<ul>
										{elem?.links?.map((unit, j) => (
											<li
												key={j}
												style={{ listStyle: "none", marginTop: "4px" }}
											>
												<a className={s.works_links} href={unit.link}>
													{unit.title}
												</a>
											</li>
										))}
									</ul>
								</li>
							))}
						</ul>
					</li>
				))}
			</ul>
		</section>
	);
}
