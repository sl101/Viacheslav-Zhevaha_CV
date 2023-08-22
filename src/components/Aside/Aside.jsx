import { AsideLinksList } from "../";
import s from "./Aside.module.css";

export function Aside() {
	return (
		<aside className={s.aside}>
			<h2 className={`title ${s.title__contacts}`}>Contacts:</h2>
			<AsideLinksList />
		</aside>
	);
}
