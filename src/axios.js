import axios from 'axios';
import { API_BASE_URL } from './config';

// Create the axios instance with base URL and credentials
const axiosInstance = axios.create({
    baseURL: API_BASE_URL,
    withCredentials: true, // Ensure credentials are included in cross-origin requests
});

// Set up a request interceptor to add the Authorization header with the token
axiosInstance.interceptors.request.use(
    (config) => {
        // Get token from localStorage (or sessionStorage if that's where you store it)
        const token = localStorage.getItem('userToken'); 

        // Only add the token to headers if the route is private (requires token)
        if (token && !config.headers['Public-Route']) {
            // Attach the token to the Authorization header
            config.headers['Authorization'] = `Bearer ${token}`;
        }

        return config;
    },
    (error) => {
        // Handle request errors
        return Promise.reject(error);
    }
);

// Handle response interceptor if needed (for example, to refresh token or handle errors globally)
axiosInstance.interceptors.response.use(
    (response) => response,
    (error) => {
        // Handle response errors here
        if (error.response && error.response.status === 401) {
            // Optionally handle 401 errors (e.g., redirect to login page)
            console.error('Unauthorized access - Please log in again.');
        }
        return Promise.reject(error);
    }
);

export default axiosInstance;
