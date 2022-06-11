import axios from 'axios';
import { API_URl } from './api-url';

const instance = axios.create({
    baseURL: API_URl,
    headers: {
        "Content-Type":"application/json"
    }
})

// instance.interceptors.request.use((config) => {
//     return config
// }, (error) => {
//     return Promise.reject(error)
// })
// instance.interceptors.response.use((config) => {
//     return config
// }, (error) => {
//     return Promise.reject(error)
// })

export default instance;