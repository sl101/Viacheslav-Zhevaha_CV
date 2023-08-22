import { links } from "../../data/data";
import { AsideLinkItem } from "..";
import s from "./AsideLinksList.module.css";

export function AsideLinksList() {
	return (
		<ul className={s.aside__links}>
			{links.map((link) => (
				<AsideLinkItem key={link.id} link={link} />
			))}
		</ul>
	);
}
