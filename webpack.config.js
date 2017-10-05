const path = require('path');
const ExtractTextPlugin = require('extract-text-webpack-plugin');

module.exports = {
	entry: './source/ssr.js',
	output: {
		path: path.resolve(__dirname, 'public'),
		filename: 'bundle.js',
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
				loader: 'babel-loader'
			},
			{
				test: /\.css$/,
				loader: ExtractTextPlugin.extract({
					fallback: 'isomorphic-style-loader',
					use: ['css-loader']
				})
			}
		]
	},
	plugins: [
		new ExtractTextPlugin('style.css')
	]
};

