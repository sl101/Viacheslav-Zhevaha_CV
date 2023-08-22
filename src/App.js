import "./App.css";
import {
	Aside,
	Experience,
	Header,
	Profile,
	Projects,
	Skills,
} from "./components/";

function App() {
	return (
		<div className="container">
			<Header />
			<main className="main">
				<Aside />
				<div class="page__wrapper">
					<Profile />
					<Skills />
					<Projects />
					<Experience />
				</div>
			</main>
		</div>
	);
}

export default App;
