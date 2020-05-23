/**
 * Request interceptor to alter requests
 * @param {Object} config Axios configuration
 */
const requestInterceptor = config => config;

/**
 * Facilitate the access to returned data
 * @param {Object} response returned response from request
 */
const responseSuccessInterceptor = response => response.data;

/**
 * Facilitate access to returned rejection
 * @param {Object} error returned rejection
 */
const responseErrorInterceptor = (error) => {
	const response = error.response || error;
	return Promise.reject(response.data || response);
};

export {
	requestInterceptor,
	responseSuccessInterceptor,
	responseErrorInterceptor,
};
