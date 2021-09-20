import axios from 'axios';

const api = axios.create({
    baseURL: 'https://f838-2804-7f4-3487-59c1-f2aa-c262-dbe2-c235.ngrok.io/'
});

export default api;