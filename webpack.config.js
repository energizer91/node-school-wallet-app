const path = require('path');
const ExtractTextPlugin = require('extract-text-webpack-plugin');

module.exports = [
	{
		name: 'Client bundling',
		entry: './source/client/index.js',
		output: {
			path: path.resolve(__dirname, 'public'),
			filename: 'bundle.js'
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
	},
	{
		name: 'Server bundling',
		entry: [
			'babel-polyfill',
			'./source/ssr.js'
		],
		output: {
			path: path.resolve(__dirname, 'dist'),
			filename: 'server.js',
			libraryTarget: 'umd'
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
					loader: 'ignore-loader'
				}
			]
		},
		resolve: {
			modules: [
				__dirname,
				'node_modules'
			]
		},
	}
];

