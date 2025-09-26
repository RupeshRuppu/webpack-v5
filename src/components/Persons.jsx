import { useState } from "react";

const person = {
	walk: true,
};

const rupesh = {
	...person,
	name: "rupesh",
};

const rujith = {
	...person,
	name: "rujith",
};

console.log(rupesh, rujith);

function Persons() {
	const [person, setPerson] = useState({});
	return (
		<div>
			<h3>Current Person</h3>
			<button
				onClick={() => {
					setPerson(rupesh);
				}}
			>
				Person Rupesh
			</button>
			<button
				onClick={() => {
					setPerson(rujith);
				}}
			>
				Person Rujith
			</button>

			<ul>
				{Object.keys(person).map(p => {
					return (
						<li key={p}>
							{p}:{JSON.stringify(person[p])}
						</li>
					);
				})}
			</ul>
		</div>
	);
}

export default Persons;
