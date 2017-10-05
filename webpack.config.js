const path = require('path');
const ExtractTextPlugin = require('extract-text-webpack-plugin');

module.exports = {
	entry: './source/ssr.js',
	output: {
		path: path.resolve(__dirname, 'dist'),
		filename: 'server.js',
		libraryTarget: 'commonjs2',
		publicPath: '/assets/'
	},
	target: 'node',
	node: {
		console: false,
		global: false,
		process: false,
		Buffer: false,
		__filename: false,
		__dirname: false
	},
	module: {
		loaders: [
			{
				test: /\.js$/,
				loader: 'babel-loader',
				include: path.join(__dirname, '.', 'source'),
				exclude: path.join(__dirname, '.', 'node_modules')
			},
			{
				test: /\.css$/,
				use: ExtractTextPlugin.extract(['css-loader'])
			}
		]
	},
	plugins: [
		new ExtractTextPlugin('style.css')
	]
};

