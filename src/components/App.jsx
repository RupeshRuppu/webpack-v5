import "../styles/index.scss";
import Persons from "./Persons";
import sword from "../images/swc-sword.png";
import swordSvg from "../images/sword.svg";

function App() {
	return (
		<>
			<section className="hero"></section>
			<main>
				<section>
					<h1>Oh Hi, React</h1>
				</section>
				<img src={sword} alt="sword" width={250} />
				<img src={swordSvg} alt="sword" width={250} />
				<Persons />
			</main>
		</>
	);
}

export default App;
