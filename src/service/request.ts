import axios, {  AxiosInstance, AxiosRequestConfig } from "axios";

import {BASE_URL, TIMEOUT } from './config';

const instance : AxiosInstance = axios.create({
    baseURL: BASE_URL,
    timeout: TIMEOUT
})

instance.interceptors.request.use((config:AxiosRequestConfig) => {
    let token = localStorage.getItem('token');
    if(token) {
        config.headers["Authorization"] = token;
    }

    return config;
})

export default instance;