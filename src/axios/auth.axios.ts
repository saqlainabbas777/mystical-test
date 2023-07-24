// import axios, {AxiosInstance} from 'axios';
//
// // ----------------------------------------------------------------------
//
// const axiosInstance: AxiosInstance  = axios.create({
//     baseURL: 'https://mystic-swap.herokuapp.com/' as string,
// });
//
// axiosInstance.interceptors.response.use(
//     (response) => response,
//     (error) => Promise.reject((error.response && error.response.data) || 'Something went wrong')
// );
//
// export default axiosInstance;


import axios, { RawAxiosRequestConfig } from 'axios';

const axiosConfig: RawAxiosRequestConfig<any> = {
    baseURL: 'https://mystic-swap.herokuapp.com', // Replace this with your desired base URL
    headers: {
        'Content-Type': 'application/json',
        // You can add other headers here if needed
    },
    params: {
        // Default URL parameters, if any
    },
};

const axiosInstance = axios.create(axiosConfig);
export default axiosInstance;
