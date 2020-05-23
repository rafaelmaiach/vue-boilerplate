module.exports = {
	'*.{js,vue}': [
		'yarn lint',
		'yarn test:unit',
	],
	'*.{css,vue}': 'yarn lint:styles',
};
