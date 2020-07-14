const path = require("path");
const MiniCssExtractPlugin = require("mini-css-extract-plugin");

module.exports = {
	mode: "development",
	entry: {
		spacer: "./scss/utils/spacer.scss",
	},
	output: {
		filename: "[name].js",
		path: path.resolve(__dirname, "build"),
	},
	watch: true,
	module: {
		rules: [
			{
				test: /\.s?css$/,
				use: [
					{
						loader: MiniCssExtractPlugin.loader,
						options: {
							esModule: true,
						},
					},
					{
						loader: "css-loader",
						options: {
							importLoaders: 1,
						},
					},
					"sass-loader",
				],
			},
		],
	},
	plugins: [
		new MiniCssExtractPlugin({
			filename: "[name].css",
			chunkFilename: "[id].css",
		}),
	],
};
