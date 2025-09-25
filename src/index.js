const person = {
	walk: () => `yes`,
};

const rupesh = {
	...person,
	name: "rupesh",
};

console.log(rupesh);
