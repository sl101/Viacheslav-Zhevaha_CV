import s from "./AsideLinkItem.module.css";

export function AsideLinkItem({ link }) {
	return (
		<li>
			<a
				className={`${s.aside__link} ${s[link.img ? "code" : ""] || ""}`}
				href={link.href}
				target="blank"
				aria-label={link.label}
			>
				{link.icon ? (
					<i className={link.icon} aria-hidden="true" />
				) : (
					<img src={link.img} alt={link.alt} />
				)}

				<span>{link.text}</span>
			</a>
		</li>
	);
}
