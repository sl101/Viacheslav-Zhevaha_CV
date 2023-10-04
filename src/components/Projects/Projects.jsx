import { useContext } from "react";
import { LangContext } from "../../context/LangContext";
import { projects_de, projects_en } from "../../data/data";
import s from "./Projects.module.css";

export function Projects() {
	const { lang } = useContext(LangContext);
	const projects = lang ? projects_en : projects_de;

	return (
		<section className="experience">
			<h2 className="title">{lang ? "Projects" : "Projekte"}</h2>
			<ul className="experience__list">
				{projects.map((project) => (
					<li key={project.id} className="experience__item">
						<h3 className={s.job__title}>
							<a href={project.link}>{project.title}</a>
						</h3>
						<ul className="job__description">
							<li>{project.technologies}</li>
							<li>{project.description}</li>
						</ul>
					</li>
				))}
			</ul>
		</section>
	);
}
