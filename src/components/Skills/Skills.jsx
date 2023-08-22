import s from "./Skills.module.css";

export function Skills() {
	return (
		<section class={s.skills}>
			<h2 className="title">Fähigkeiten</h2>
			<ul className={s.skills__list}>
				<li>
					<span>
						Programmiersprachen: <b>JavaScript, HTML5, CSS3, SASS </b>
					</span>
					<span>
						. Erfahrungen mit <b>Java, Node.js, Android SDK</b>
					</span>
				</li>
				<li>
					Bibliotheken/Frameworks: <b>React, Redux, Vue</b>
				</li>
				<li>
					Datenbanken: <b>SQL, MongoDB</b>
				</li>
				<li>
					Versionskontrollsysteme: <b>Git</b>
				</li>
				<li>Domänenanalyse, Planung und Entwicklungslebenszyklus</li>
				<li>
					Sprachen: <span>Englisch, Deutsch, Ukrainisch, Russisch</span>
				</li>
			</ul>
		</section>
	);
}
