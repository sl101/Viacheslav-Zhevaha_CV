import { useContext, useEffect, useState } from "react";
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
					<li key={index}>
						<div className={s.project}>
							<h3 className={s.job__position}>{item.position}</h3>
							<p className={s.job__date}>{item.date}</p>
						</div>
						<div className={s.job__title}>
							<div
								className={s.job__icon}
								style={{ backgroundColor: item.iconBg }}>
								<img
									src={item.icon}
									alt='icon'
								/>
							</div>
							<p>
								{item.jobTitle}
							</p>
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
