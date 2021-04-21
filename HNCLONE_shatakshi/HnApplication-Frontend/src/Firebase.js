import axios from 'axios';

const instance = axios.create({
    baseURL : 'https://hnclone-d80ce-default-rtdb.firebaseio.com/'
});

export default instance;