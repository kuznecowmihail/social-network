import axios from 'axios';

const baseURL = 'http://192.168.1.90:3001/api/1.0';
const axiosConfig = {
    baseURL: baseURL,
    timeout: 30000,
};
export const getApp = () => axios.create(axiosConfig);
export const isAccess = response => {
    let status = response && response.status;
    if (status !== 200) {
        console.log('request error');
        return false;
    }
    return true;
}