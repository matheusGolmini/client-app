import axios from 'axios';

const api = axios.create({
    baseURL: 'https://a694-2804-7f4-3487-59c1-1cbe-61e6-6e21-c839.ngrok.io/',
    headers: {
        Accept: 'application/json'
    }
});

export default api;