const path = require("path");
const MiniCssExtractPlugin = require("mini-css-extract-plugin");

module.exports = {
	mode: "development",
	entry: {
		spacer: "./scss/utils/spacer.scss",
	},
	output: {
		path: path.resolve(__dirname, "css"),
	},
	watch: true,
	module: {
		rules: [
			{
				test: /\.s?css$/,
				use: [
					"style-loader",
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
					{
						loader: "sass-loader",
						options: {
							sassOptions: {
								outputStyle: "compressed",
							},
						},
					},
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
