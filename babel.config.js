module.exports = {
	presets: [
		"@babel/preset-env",
		[
			"@babel/preset-react",
			{
				runtime: "automatic",
			},
		],
	],
};

/*
  since react v17 they have partnered with babel on this so we don't need to import React whenever we use jsx in a file.
*/
