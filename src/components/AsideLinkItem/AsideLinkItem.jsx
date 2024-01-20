import s from "./AsideLinkItem.module.css";

export function AsideLinkItem({ link }) {
	return (
		<li>
			{link.href ? (
				<a
					className={`${s.aside__link} ${s[link.img ? "code" : ""] || ""}`}
					href={link.href}
					target={link.target}
					aria-label={link.label}
				>
					<div className={s.icon}>
						<i className={link.icon} aria-hidden="true" />
					</div>
					<span>{link.text}</span>
				</a>
			) : (
				<p className={s.aside__title}>
					{link.icon ? (
						<div className={s.icon}>
							<i className={link.icon} class={link.icon} aria-hidden="true" />
						</div>
					) : (
						<img src={link.img} alt={link.alt} />
					)}
					<span>{link.text}</span>
				</p>
			)}

			{link.content ? (
				<ul className={s.values_list}>
					{link.content.map((elem, index) => (
						<li key={index}>
							{link.alt === "globe" ? Object.keys(elem) : ""}
							<span className={s.values_item}>{Object.values(elem)}</span>
						</li>
					))}
				</ul>
			) : (
				""
			)}
		</li>
	);
}
