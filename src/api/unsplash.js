import axios from 'axios';

export default axios.create({
  baseURL: 'https://api.unsplash.com',
  headers: {
    Authorization: 'Client-ID ozooyxPANhCQifYOlqfbaXb-Wf89CoswdAYr6XLPbCg',
  },
});
