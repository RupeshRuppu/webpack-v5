const path = require("path");
const MiniCssExtractPlugin = require("mini-css-extract-plugin");
const HtmlWebpackPlugin = require("html-webpack-plugin");
const { CleanWebpackPlugin } = require("clean-webpack-plugin");
const ReactRefreshWebpackPlugin = require("@pmmmwh/react-refresh-webpack-plugin");
const CssMinimizerPlugin = require("css-minimizer-webpack-plugin");
const { BundleAnalyzerPlugin } = require("webpack-bundle-analyzer");

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

	entry: "./src/index.js",

	output: {
		assetModuleFilename: "images/[hash][ext][query]",
		path: path.resolve(__dirname, "dist"),
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

	plugins: [
		new CleanWebpackPlugin(),
		new MiniCssExtractPlugin(),
		new HtmlWebpackPlugin({
			template: "./src/index.html",
		}),
		new ReactRefreshWebpackPlugin(),
		new BundleAnalyzerPlugin(),
	],

	resolve: {
		extensions: [".js", ".jsx"],
	},

	optimization: {
		minimize: true,
		minimizer: [new CssMinimizerPlugin()],
	},

	devServer: {
		static: {
			directory: path.join(__dirname, "dist"),
		},
		port: 3000,
		hot: true,
	},
};
