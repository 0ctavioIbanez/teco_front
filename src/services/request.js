import axios from 'axios'
const baseURL = process.env.REACT_APP_DEV_BASEURL;

export const request = axios.create({
    baseURL
})
