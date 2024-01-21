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
			<ul className={s.experience__list}>
				{experiences?.map((item, index) => (
					<li key={index} className={s.experience__item}>
						<div className={s.project}>
							<h3 className={s.job__title}>{item.jobTitle}</h3>
							<p className={s.job__date}>{item.date}</p>
						</div>
						<ul className={s.projects}>
							{item?.projects?.map((project, projectKey) => (
								<li key={projectKey} className={s.project_item}>
									<a
										className={s.projects_title}
										href={project.link}
										target="blank"
									>
										{project.projectTitle}
									</a>
									<p className={s.projects_description}>{project.text}</p>
								</li>
							))}
						</ul>
					</li>
				))}
			</ul>
		</section>
	);
}
