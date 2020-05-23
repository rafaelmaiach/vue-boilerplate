module.exports = {
	preset: '@vue/cli-plugin-unit-jest',
	testMatch: ['**/*.spec.js'],
	transformIgnorePatterns: ['<rootDir>/node_modules'],
	collectCoverageFrom: [
		'src/**/*.{js,vue}',
		'!src/main.js',
		'!src/registerServiceWorker.js',
		'!src/store/**/index.js',
		'!src/store/**/mutationsTypes.js',
		'!src/router/index.js',
		'!src/i18n/index.js',
	],
};
