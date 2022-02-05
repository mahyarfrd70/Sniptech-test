import axios, {AxiosInstance, AxiosRequestConfig} from 'axios';
import {githubServiceConfig} from '../constants/axiosConfig';

const applyInterceptors = (instance: AxiosInstance): AxiosInstance => {
  instance.interceptors.response.use(
    (response) => {
      return response;
    },
    (error) => {
      return Promise.reject(error?.response);
    },
  );
  return instance;
};

const createServer = (options: AxiosRequestConfig): AxiosInstance => {
  const axiosInstance = axios.create(options);
  return applyInterceptors(axiosInstance);
};

// we can create different service like below.
// it would be useful for micro services
export const githubService: AxiosInstance = createServer(githubServiceConfig);
