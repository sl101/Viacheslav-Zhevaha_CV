import { links_de, links_en } from "../../data/data";
import { AsideLinkItem } from "..";
import s from "./AsideLinksList.module.css";
import { useContext } from "react";
import { LangContext } from "../../context/LangContext";

export function AsideLinksList() {
	const { lang } = useContext(LangContext);
	return (
		<ul className={s.aside__links}>
			{(lang ? links_en : links_de).map((link) => (
				<AsideLinkItem key={link.id} link={link} />
			))}
		</ul>
	);
}
