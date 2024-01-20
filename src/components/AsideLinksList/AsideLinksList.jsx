import { links_de, links_en, contacts_en, contacts_de } from "../../data/data";
import { AsideLinkItem } from "..";
import s from "./AsideLinksList.module.css";
import { useContext } from "react";
import { LangContext } from "../../context/LangContext";

export function AsideLinksList({ content }) {
	console.log("🚀 ~ AsideLinksList ~ content:", content);
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
