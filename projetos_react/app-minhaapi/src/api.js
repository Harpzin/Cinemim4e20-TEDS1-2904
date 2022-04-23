import axios from 'axios';

const api = axios.creat({
    baseURL: "http://localhost:3000/api/colaboradores"
});

export default api;