const HtmlWebpackPlugin = require('html-webpack-plugin');
const ExtractTextPlugin = require('extract-text-webpack-plugin');

const path = require('path');

module.exports = {
	entry: './src/index.js',
	output: {
		path: path.resolve(__dirname, 'dist'),
		filename: 'index.js'
	},
	module: {
		rules: [
			{
				test: /\.js$/,
				use: [
					'eslint-loader',
					'babel-loader'
				]
			},
			{
				test: /\.css$/,
				use: ExtractTextPlugin.extract({
					use: 'css-loader!postcss-loader'
				})
			}
		]
	},
	plugins: [
		new HtmlWebpackPlugin(),
		new ExtractTextPlugin({
			filename: 'styles.css'
		})
	]
};
