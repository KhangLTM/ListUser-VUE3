import axios from 'axios';

const baseURL = _VUE_APP_API_BASE_ || '';
const interceptors = axios.create({
    baseURL,
    headers: {
        "Content-Type": "application/json",
        Authorization: '',
    },
});

export default interceptors;
