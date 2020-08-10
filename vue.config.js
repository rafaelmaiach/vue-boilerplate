/* eslint-disable no-param-reassign */
const path = require('path');

const { NODE_ENV, VUE_APP_CORE_URL } = process.env;

const isProduction = NODE_ENV === 'production';
const backendUrl = VUE_APP_CORE_URL || 'http://localhost:3000';

module.exports = {
	lintOnSave: false,

	devServer: {
		proxy: {
			'^/api': {
				target: backendUrl,
			},
		},
	},

	chainWebpack: (config) => {
		if (isProduction) {
			const vueTypesShimPath = path.resolve(__dirname, 'node_modules/vue-types/es/shim.js');
			config.resolve.alias.set('vue-types', vueTypesShimPath);
		}

		config
			.plugin('html')
			.tap((args) => {
				args[0].title = 'Vue.js Boilerplate';
				return args;
			});
	},

	css: {
		loaderOptions: {
			scss: {
				additionalData: `
					@import "@/styles/variables";
				`,
			},
		},
	},

	pwa: {
		name: 'Vue.js Boilerplate',
		workboxPluginMode: 'InjectManifest',
		manifestPath: 'manifest.json',
		iconPaths: {
			appleTouchIcon: 'img/icons/apple-touch-icon-152x152.png',
			favicon16: 'img/icons/favicon-16x16.png',
			favicon32: 'img/icons/favicon-32x32.png',
			maskIcon: 'img/icons/safari-pinned-tab.svg',
			msTileImage: 'img/icons/msapplication-icon-144x144.png',
		},
		workboxOptions: {
			swSrc: 'src/registerServiceWorker.js',
		},
	},
};
