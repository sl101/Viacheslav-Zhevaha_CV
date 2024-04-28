import { links_de, links_en, contacts_en, contacts_de } from "../../data/data";
import { AsideLinkItem } from "..";
import { useContext } from "react";
import { LangContext } from "../../context/LangContext";
import s from "./AsideLinksList.module.css";

export function AsideLinksList({ content }) {
	const { lang } = useContext(LangContext);

	const context =
		content == "contacts"
			? lang
				? contacts_en
				: contacts_de
			: lang
			? links_en
			: links_de;
	return (
		<ul className={`${s.aside__links} ${s[content ? content : ""] || ""}`}>
			{context.map((link) => (
				<AsideLinkItem key={link.id} link={link} />
			))}
		</ul>
	);
}
