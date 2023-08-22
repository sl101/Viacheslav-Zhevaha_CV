import s from "./Education.module.css";

export function Education() {
	return (
		<section class="education">
			<h2 class="title">Education</h2>
			<ul class="education_list">
				<li class="education_item">
					<div class="education__info">
						<h4 class="subtitle">Tel-Ran programming school</h4>
						<p>Frontend Developer. Berlin, Germany </p>
					</div>
					<p class="date">September 2022 - present</p>
				</li>
				<li class="education_item">
					<div class="education__info">
						<h4 class="subtitle">STEP Computer Academy</h4>
						<p>Development of mobile applications for Android. Kyiv, Ukraine</p>
					</div>
					<p class="date">2014-2015, Diploma</p>
				</li>
				<li class="education_item">
					<div class="education__info">
						<h4 class="subtitle">
							Kyiv National Economic University named after Vadym Hetman
						</h4>
						<p>Master of Accounting and Audit. Kyiv, Ukraine</p>
					</div>
					<p class="date">2012, Diploma</p>
				</li>
			</ul>
		</section>
	);
}
