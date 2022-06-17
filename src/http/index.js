import axios from 'axios'
const REACT_APP_API_URL = 'http://192.168.3.5:5666/' 
// http://192.168.3.5:5666/

export const $host = axios.create({
    baseURL: REACT_APP_API_URL
})

