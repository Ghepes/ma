import axios from 'axios';

const status = 'prod'
//export const API_URL = status === 'dev' ? 'http://172.16.61.222:9050' : 'http://202.164.212.238:9030';
export const API_URL = 'http://182.163.112.209:8888';
export const faker_url = "http://202.164.212.238:9050"
export const TOKEN = "AUTH_TOKEN"
const jwt = localStorage.getItem(TOKEN);
export const credentials = {
  "GOOGLE_CLIENT_ID": "705019730299-kfb5arnuisah2135tka05uka6h7v901a.apps.googleusercontent.com",
  "FACEBOOK_APP_ID": "788095958681659"
}
export const API = axios.create({
  baseURL: API_URL,
  timeout: 10000,
  headers: {
    "Authorization": `Bearer ${localStorage.getItem(TOKEN)}`,
    "Content-Type": "application/json"
  }
})
API.interceptors.request.use(
  function(config) {
    const token = localStorage.getItem(TOKEN); 
    if (token) {
      config.headers["Authorization"] = 'Bearer ' + token;
    }
    return config;
  },
  function(error) {
    return Promise.reject(error);
  }
);
export const PUBLIC_API = axios.create({
  baseURL: API_URL,
  timeout: 10000,
  headers:{
    "Content-Type": "application/json"
  }
})

export const FAKER_API = axios.create({
  timeout: 10000
})

export const DOWNLOADER = axios.create({
  timeout: 10000
})

