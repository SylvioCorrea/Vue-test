import axios from 'axios';

const apiClient = axios.create({
  baseURL: 'http://localhost:3000',
  withCredentials: false,
  headers: {
    Accept: 'application/json',
    'Content-type': 'application/json'
  }
});

export default {
  getEvents(id = '') {
    return apiClient.get('/events/' + id);
  },
  postEvent(postBody) {
    return apiClient.post('/events', postBody);
  }
};
