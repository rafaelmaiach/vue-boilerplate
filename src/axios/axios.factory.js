import axios from 'axios';
import { requestInterceptor, responseSuccessInterceptor, responseErrorInterceptor } from './interceptors';

function Factory(baseURL) {
	if (!baseURL || typeof baseURL !== 'string') {
		throw new Error('Base url must be set when getting a custom axios instance');
	}

	const instance = axios.create({
		baseURL,
		withCredentials: true,
	});

	// Add a request interceptor
	instance.interceptors.request.use(requestInterceptor);

	// Add a response interceptor
	instance.interceptors.response.use(
		responseSuccessInterceptor,
		responseErrorInterceptor,
	);

	return instance;
}

export default Factory;
