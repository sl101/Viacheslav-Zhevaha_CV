import s from "./Projects.module.css";

export function Projects() {
	return (
		<section class="experience">
			<h2 class="title">Projekte</h2>
			<ul class="experience__list">
				<li class="experience__item">
					<h3 class={s.job__title}>
						<a href="https://github.com/SergeySev/Online_Store">Online Store</a>
						<p>(Gruppenprojekt)</p>
					</h3>
					<ul class="job__description">
						<li>
							Verwendete Technologien: HTML, CSS, JavaScript, REACT,
							Redux-Toolkit
						</li>
						<li>
							Gruppenarbeit an einem Online-Shop-Projekt. Das Projekt nutzt die
							<b> Agile</b> Anwendungsentwicklungsmethodik. Beteiligt an
							fortgeschrittenen Konzepten der Gruppeninteraktion,
							<b> Scrum</b> Projektmanagementsystem. Als Ergebnis verfügen wir
							über eine voll funktionsfähige <b> Client-Server Anwendung</b> mit
							einem separat in <b>Python</b> geschriebenen Backend, einem{" "}
							<b>MongoDB</b> Datenbankverwaltungssystem, das auf dem{" "}
							<b>Docker</b> Anwendungscontainer basiert. Clientseitige Anwendung
							unter Verwendung der <b>REACT</b> Bibliothek, der
							<b> Redux-Toolkit</b> Statusverwaltungsbibliothek und einer Reihe
							zusätzlicher Bibliotheken verwandter Technologien. Das Projekt
							implementiert die vollständige Autorisierung und Authentifizierung
							des Käufers, den Vergleich von Waren, die Filterung usw.
						</li>
					</ul>
				</li>

				<li class="experience__item">
					<h3 class={s.job__title}>
						<a href="https://sl101.github.io/TEL-Ran-Diploma-project">
							Garden, online Store
						</a>
						<p>(Diplomarbeit TEL-RAN)</p>
					</h3>
					<ul class="job__description">
						<li>
							Verwendete Technologien: HTML, CSS, JavaScript, REACT, Redux
						</li>
						<li>
							Das Projekt wird mit der REACT-Bibliothek geschrieben Verwendung
							der REDUX-Statusverwaltungsbibliothek und eines lokalen
							Datenspeichers. Das Projekt implementiert die Filterung und
							Sortierung von Waren. Hinzufügen, Artikel aus dem Warenkorb
							entfernen. Zusätzlich verwendete Bibliotheken: (
							<b>
								react-router-dom, react-router-hash-link, redux,
								react-redux,redux-thunk, react-icons, uuid,react-hook-form
							</b>
							)
						</li>
					</ul>
				</li>

				<li class="experience__item">
					<h3 class={s.job__title}>
						<a href="https://sl101.github.io/TelRan-fake-store/#/">
							Merchandise Store
						</a>
						<p>(Persönliches Lernprojekt)</p>
					</h3>
					<ul class="job__description">
						<li>Verwendete Technologien: HTML, CSS, JavaScript, REACT</li>
						<li>
							Das Projekt verwendete Abrufanforderungen an die API, um eine
							Liste zu erstellen Produkte. Responsive Anwendungen werden in
							REACT mit Native geschrieben REACT-Status und lokaler
							Datenspeicher. Das Projekt implementierte die Filtern von Waren,
							Arbeiten mit einem Warenkorb.
						</li>
					</ul>
				</li>

				<li class="experience__item">
					<h3 class={s.job__title}>
						<a href="https://sl101.github.io/Viacheslav_Zhevaha/index.html">
							Portfolio
						</a>
						<p>(Persönliche Website)</p>
					</h3>
					<ul class="job__description">
						<li>Verwendete Technologien: HTML, CSS, JavaScript</li>
						<li>
							Persönliche Seite, gehostet auf der Github Pages-Technologie.
							Reaktionsfreudig Anwendung für die persönliche Präsentation. Die
							Anwendung Nutzt Layout-Technologien-Raster bei flexibler
							Platzierung von Elementen, Relative Positionierung. Der
							Slider-Bereich enthält Links zu anderen Persönliche und berufliche
							Projekte.
						</li>
					</ul>
				</li>

				<li class="experience__item">
					<h3 class={s.job__title}>
						<a href="https://sl101.github.io/BarberShop/app/index.html">
							Barber shop
						</a>
						<p>(Persönliches Lernprojekt)</p>
					</h3>
					<ul class="job__description">
						<li>Verwendete Technologien: HTML, CSS, JavaScript</li>
						<li>
							Die Schulungsvorlage für den Online-Shop wird auf Github-Seiten
							gehostet Technologie. Zugängliche, reaktionsfähige Anwendung mit
							verschiedenen Adaptive Layout-Technologien, Flex- und Grid-Raster,
							CSS-Animationen, Schieberegler. Es wird reines Javascript
							verwendet.
						</li>
					</ul>
				</li>
			</ul>
		</section>
	);
}
