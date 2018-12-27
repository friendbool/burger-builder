import axios from 'axios';

const instance = axios.create({
    baseURL: 'https://react-my-burger-af1f9.firebaseio.com/'
});

export default instance;