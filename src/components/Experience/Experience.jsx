import s from "./Experience.module.css";

export function Experience() {
	return (
		<section class="experience">
			<h2 class="title">Erfahrung</h2>
			<ul class="experience__list">
				<li class="experience__item">
					<h3 class="job__title">Freiberuflicher Frontend-Entwickler</h3>
					<div class="job__info">
						<h4 class="subtitle">Verschiedene Clients, Remote</h4>
						<p class="date">Januar 2022 – Heute</p>
					</div>
					<ul class="job__description">
						<li>
							Hatte Erfahrung in der Entwicklung von Schnittstellen in HTML/CSS,
							Javascript. Die Aufgabe bestand darin, ein barrierefreies,
							adaptives Layout mit modernen Mitteln zu schaffen Technologien —
							ein Raster, flexible Platzierung von Elementen auf der Seite. Die
							Entwicklung erforderte die Interaktion mit anderen Entwicklern und
							dem Kunden, für den das Versionskontrollsystem Git verwendet
							wurde.
						</li>
					</ul>
				</li>

				<li class="experience__item">
					<h3 class="job__title">Verkaufsleiter</h3>
					<div class="job__info">
						<h4 class="subtitle">
							Vienna Insurance Group (Ukrainische Versicherungsgruppe), Kiew,
							Ukraine
						</h4>
						<p class="date">September 2008 – Oktober 2019</p>
					</div>
					<ul class="job__description">
						<li>
							Entwicklung einer persönlichen Webanwendung für einen
							Versicherungsvertreter. ICH Ich habe HTML/CSS zum Schreiben
							verwendet. Ziel war es, neue Kunden zu gewinnen die
							Versicherungsprodukte des Unternehmens zu verkaufen.
						</li>
						<li>
							Zur Förderung erarbeitete ich einen Vorschlag zur Umsetzung einer
							mobilen Anwendung, die die Dienstleistungen und Produkte darstellt
							des Unternehmens.
						</li>
						<li>
							Leitete ein Team von Vertriebsmitarbeitern und führte den Vertrieb
							erfolgreich durch Ziele für verschiedene Versicherungsprodukte
						</li>
						<li>
							Entwicklung und Umsetzung von Marketingstrategien zur Steigerung
							der Marke Sensibilisierung und Steigerung des Umsatzwachstums
						</li>
					</ul>
				</li>
			</ul>
		</section>
	);
}
