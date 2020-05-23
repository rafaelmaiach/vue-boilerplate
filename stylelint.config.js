module.exports = {
	extends: 'stylelint-config-sass-guidelines',
	rules: {
		indentation: 'tab',
		'order/properties-alphabetical-order': null,
	},
	plugins: [
		'stylelint-scss',
	],
};
