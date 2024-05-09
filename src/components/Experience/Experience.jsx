import { useContext, useEffect, useState } from "react";
import { LangContext } from "../../context/LangContext";
import { experiences_de, experiences_en, medcol_de, medcol_en } from "../../data/data";
import axios from 'axios';
import s from "./Experience.module.css";

export function Experience() {
	const { lang } = useContext(LangContext);
	const experiences = lang ? experiences_en : experiences_de;
	const medcol = lang ? medcol_en : medcol_de;

	const recommendation = 'https://drive.google.com/file/d/1aUscF7kNJrqIIsOZxozXRS7iFtlhMIZD/view?usp=sharing';

	return (
		<section className="experience">
			<h2 className="title">{lang ? "Experience" : "Erfahrung"}</h2>
			<div className={s.experience__item}>
				<div className={s.project}>
					<h3 className={s.job__title}>{medcol.jobTitle}</h3>
					<p className={s.job__date}>{medcol.date}</p>
				</div>
				<ul className={s.projects}>
					{medcol?.projects?.map((project, projectKey) => (
						<li key={projectKey} className={s.project_item}>
							<a
								className={s.projects_title}
								href={recommendation}
								target="blank"
							>
								{project.projectTitle}
							</a>
							<p className={s.projects_description}>{project.text}</p>
						</li>
					))}
				</ul>
			</div>

			<ul className={s.experience__list}>
				{experiences?.map((item, index) => (
					<li key={index}>
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
		</section >
	);
}
