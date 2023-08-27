import { useContext } from "react";
import avatar from "./assets/sl_.jpg";
import { LangContext } from "../../context/LangContext";
import s from "./Header.module.css";

export function Header() {
	const { lang, setLang } = useContext(LangContext);
	return (
		<header className={s.header}>
			<div className={s.header__image}>
				<img src={avatar} alt="Viacheslav Zhevaha foto" />
			</div>
			<div className={s.performance}>
				<p>Viacheslav Zhevaha</p>
				<h1>Frontend Entwickler</h1>
				<div className={s.header__lang}>
					<span
						className={`${s.lang_item} ${s[lang ? "active" : ""] || ""}`}
						onClick={() => setLang(true)}
					>
						en
					</span>
					<span
						className={`${s.lang_item} ${s[!lang ? "active" : ""] || ""}`}
						onClick={() => setLang(false)}
					>
						de
					</span>
				</div>
			</div>
		</header>
	);
}
