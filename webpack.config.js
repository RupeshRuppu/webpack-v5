const path = require("path");
const MiniCssExtractPlugin = require("mini-css-extract-plugin");

let mode = "development";
let target = "web";
if (process.env.NODE_ENV === "production") {
	mode = "production";
	target = "browserslist";
}

module.exports = {
	mode,
	target,
	/* devtool: false, 'source-map' */
	devtool: "source-map",

	module: {
		rules: [
			{
				test: /\.js$/,
				exclude: /node_modules/,
				use: {
					loader: "babel-loader",
				},
			},
			{
				test: /\.(s[ac]|c)ss$/i,
				/*
				   test: /\.s?css$/i,
            */
				use: [
					MiniCssExtractPlugin.loader,
					"css-loader",
					"postcss-loader",
					"sass-loader",
				],
			},
		],
	},

	plugins: [new MiniCssExtractPlugin()],

	devServer: {
		static: {
			directory: path.join(__dirname, "dist"),
		},
		port: 3000,
		hot: true,
	},
};
