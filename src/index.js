import "./styles/index.scss";

const person = {
	walk: () => `yes`,
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
