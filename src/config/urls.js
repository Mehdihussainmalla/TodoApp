export const BASE_API_URL = 'http://192.168.100.101:8001/api';
export const getApiUrl = (endpoint) => BASE_API_URL + endpoint;

export const LOGIN = getApiUrl('/login');
export const SIGNUP = getApiUrl('/signup');