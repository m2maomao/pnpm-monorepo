import axios, {AxiosInstance} from 'axios';

const api:AxiosInstance = axios.create({
  headers: {
    'Content-Type': 'application/json'
  }
})

api.interceptors.request.use(function (config) {
  // Do something before request is sent
  // token
  return config;
}, function (error) {
  // Do something with request error
  return Promise.reject(error);
});

// Add a response interceptor
api.interceptors.response.use(function (response) {
  // Any status code that lie within the range of 2xx cause this function to trigger
  // Do something with response data
  console.log(24, response);
  if (response.status !== 200) {
    Promise.reject(response);
  }
  return response;
}, function (error) {
  console.log(29, error.response);
  // Any status codes that falls outside the range of 2xx cause this function to trigger
  // Do something with response error
  return Promise.reject(error);
});

export default api;