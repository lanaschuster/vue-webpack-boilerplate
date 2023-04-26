import axios from 'axios';

const httpClient = axios.create({
  baseURL: process.env.VUE_PRODUCTS_API_URL,
  headers: {
    'Content-Type': 'application/json'
  }
});

// interceptors here

export default httpClient;
