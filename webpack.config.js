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
	devtool: "source-map",

	output: {
		assetModuleFilename: "images/[hash][ext][query]",
	},

	module: {
		rules: [
			{
				test: /\.jsx?$/,
				exclude: /node_modules/,
				use: {
					loader: "babel-loader",
				},
			},
			{
				test: /\.(s[ac]|c)ss$/i,
				use: [
					MiniCssExtractPlugin.loader,
					"css-loader",
					"postcss-loader",
					"sass-loader",
				],
			},
			{
				test: /\.(png|jpe?g|gif|svg)$/i,
				type: "asset",
				parser: {
					dataUrlCondition: {
						maxSize: 30 * 1024,
					},
				},
			},
		],
	},

	plugins: [new MiniCssExtractPlugin()],

	resolve: {
		extensions: [".js", ".jsx"],
	},

	devServer: {
		static: {
			directory: path.join(__dirname, "dist"),
		},
		port: 3000,
		hot: true,
	},
};
