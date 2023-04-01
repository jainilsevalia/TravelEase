import Axios from 'axios';

export const axios = Axios.create({
	baseURL: 'https://trip-ease-server.onrender.com',
	// withCredentials: true,
});
