import { useContext } from "react";
import { LangContext } from "../../context/LangContext";
import { experiences_de, experiences_en, contacts_en, contacts_de } from "../../data/data";
import s from "./Experience.module.css";

export function Experience() {
	const { lang } = useContext(LangContext);
	const experiences = lang ? experiences_en : experiences_de;
	const contacts = lang ? contacts_en : contacts_de;

	return (
		<section className={s.experience_wrapper}>
			<h2 className="title">{lang ? "Relevant Work Experience:" : "Einschlägige Berufserfahrung:"}</h2>
			<ul className={s.experiences__list}>
				{experiences?.map((experience, index) => (
					<li key={index}>
						<div className={s.experience}>
							<div
								className={s.experience__icon}
								style={{ backgroundColor: experience.iconBg }}>
								<img
									src={experience.icon}
									alt='icon'
								/>
							</div>

							<div className={s.experience__top}>
								<h3 className={s.experience__position}>{experience.position}</h3>
								<span>{experience.title}</span>
							</div>

							<p className={s.experience__date}>{experience.date}</p>
						</div>
						<div className={s.experience_title}>
							<a
								className={s.experience_title_link}
								href={experience.link}
								target="blank"
							>
								{experience.project_title}
							</a>
						</div>
						<div>
							<p className={s.experience_description}>{experience.description}</p>
							{experience.projects &&
								<p className={s.experience_description}>
									{experience.prescription}
									<a
										className={s.portfolio_link}
										href={contacts[6].href}
										target="blank">
										portfolio:
									</a>
								</p>
							}
						</div>
						{experience?.projects &&
							<ul className={s.projects_list}>
								{experience.projects.map((project, project_key) =>
									<li key={project_key} className={s.project}>
										<div className={s.project_wrapper}>

											<span className={s.project_title}>
												{project.project_title}
											</span>
											<a
												className={s.project_name}
												href={project.link}
												target="blank">
												{project.project_name}
											</a>
										</div>
									</li>
								)}
							</ul>
						}
					</li>
				))}
			</ul>
		</section >
	);
}
