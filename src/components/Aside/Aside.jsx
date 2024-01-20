import { AsideLinksList } from "../";
import s from "./Aside.module.css";

export function Aside() {
	return (
		<aside className={s.aside}>
			<AsideLinksList />
			<p className={s.aside__title}>
				<i class="fa-solid fa-address-card" aria-hidden="true" />
				<span>Contacts</span>
			</p>
			<AsideLinksList content="contacts" />
		</aside>
	);
}
