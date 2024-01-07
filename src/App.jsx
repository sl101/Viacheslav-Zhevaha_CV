import { useState } from "react";
import { LangContext } from "./context/LangContext";
import {
	Aside,
	Education,
	Experience,
	Header,
	Profile,
	Projects,
} from "./components";
import "./App.css";

function App() {
	const [lang, setLang] = useState(true);
	return (
		<LangContext.Provider
			value={{
				lang,
				setLang,
			}}
		>
			<div className="container">
				<Header />
				<main className="main">
					<Aside />
					<div className="page__wrapper">
						<Profile />
						{/*<Projects />*/}
						<Experience />
						<Education />
					</div>
				</main>
			</div>
		</LangContext.Provider>
	);
}

export default App;
