module.exports = {
	extends: 'stylelint-config-recommended',
	rules: {
		'property-no-unknown': [
			true,
			{
				ignoreProperties: ['yamoney-nodejs-school']
			}
		]
	},
	ignoreFiles: [
		'dist/*.css',
		'node_modules'
	]
}
