import axios from 'axios'

const API_URL = 'http://192.168.1.4:5000';

export const getUsers = async() => {
    try{
        const response = await axios.get(`${API_URL}/users`);
        console.log(response);
        return response.data.data;
    }catch(error){
        console.error('There was an error fetching the users:', error);
        throw error;
    }
};