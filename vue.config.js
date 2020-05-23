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
	},

	css: {
		loaderOptions: {
			sass: {
				prependData: `
					@import "@/styles/variables.scss";
					@import "@/styles/media-queries.scss";
				`,
			},
		},
	},
};
