import avatar from "./assets/sl_.jpg";
import s from "./Header.module.css";

export function Header() {
	return (
		<header className={s.header}>
			<div className={s.header__image}>
				<img src={avatar} alt="Viacheslav Zhevaha foto" />
			</div>
			<div className={s.performance}>
				<p>Viacheslav Zhevaha</p>
				<h1>Frontend Entwickler</h1>
			</div>
		</header>
	);
}
