import axios, { AxiosInstance } from "axios";

import {BASE_URL, TIMEOUT } from './config';

const instance : AxiosInstance = axios.create({
    baseURL: BASE_URL,
    timeout: TIMEOUT
})

export default instance;