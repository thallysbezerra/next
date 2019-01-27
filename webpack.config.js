const HtmlWebPackPlugin = require("html-webpack-plugin");

module.exports = {
	module: {
		rules: [
			{
				test: /\.(js|jsx)$/,
				exclude: /node_modules/,
				use: { loader: "babel-loader" }
			},
			{
				test: /\.html$/,
				use: { loader: "html-loader" }
			},
			{
				test: /\.(css|scss)$/,
				exclude: /node_modules/,
				use: [
					{ loader: "style-loader" },
					{ loader: "css-loader" },
					{ loader: "sass-loader" }
				]
			},
			{
				test: /\.(gif|png|svg)$/,
				use: { loader: "file-loader" }
			},
			{
				test: /.(ttf|otf|eot|woff(2)?)(\?[a-z0-9]+)?$/,
				exclude: /images/,
				use: [
				  {
					loader: 'file-loader',
					options: {
					  outputPath: 'fonts/',
					  name: '[name][hash].[ext]',
					},
				  },
				],
			  }
			]
		},
	plugins: [
		new HtmlWebPackPlugin({
			template: "./src/index.html",
			filename: "./index.html"
		})
	  ]
};