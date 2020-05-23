import AxiosFactory from './axios.factory';

const coreApiUrl = process.env.CORE_API_URL || '/api';
const commonInstance = AxiosFactory(coreApiUrl);

export default commonInstance;
