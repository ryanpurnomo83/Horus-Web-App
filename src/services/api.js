import axios from 'axios';

// Gunakan proxy di development, langsung di production
const API_BASE_URL = import.meta.env.DEV 
  ? '/api'  // Gunakan proxy di development
  : 'https://horus-ryan-backend.onrender.com';

export const getUsersWithAxios = async() => {
  try {
      const response = await axios.get(`${API_BASE_URL}/users`);
      console.log('✅ Axios response status:', response.status);
      console.log('📊 Response data:', response.data);
      return response.data.data;
  } catch (error) {
      console.error('❌ Axios error:', error.message);
      console.error('❌ Error config:', error.config);
      if (error.response) {
          console.error('Error response:', error.response.data);
          console.error('Error status:', error.response.status);
      }
      throw error;
  }
};

// Fungsi untuk mendapatkan user by ID
export const getUserById = async (userId) => {
  try {
      const response = await axios.get(`${API_BASE_URL}/users`);
      console.log('✅ Get user by ID response:', response.data);
      const allUsers = response.data.data;
      const foundUser = allUsers.find(user => user.id == userId);
      if(foundUser){
        console.log('User found:', foundUser);
        return foundUser;
      }else{
        console.log('User not found with ID:', userId);
        console.log('Available users:', allUsers.map(u => ({
          id: u.id, username: u.username
        })));
        throw new Error(`User with ID ${userId} not found`);
      }
      //return response.data.data;
  } catch (error) {
      console.error('❌ Error getting user by ID:', error.message);
      if (error.response) {
          console.error('Error response:', error.response.data);
          console.error('Error status:', error.response.status);
      }
      throw error;
  }
};

// Fungsi untuk update user
export const updateUser = async (userId, userData) => {
  try {
      const response = await axios.put(`${API_BASE_URL}/users/${userId}`, userData);
      console.log('✅ Update user response:', response.data);
      return response.data;
  } catch (error) {
      console.error('❌ Error updating user:', error.message);
      if (error.response) {
          console.error('Error response:', error.response.data);
          console.error('Error status:', error.response.status);
      }
      throw error;
  }
};