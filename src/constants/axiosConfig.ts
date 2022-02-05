import {AxiosRequestConfig} from 'axios';

export const githubServiceConfig: AxiosRequestConfig = {
  baseURL: 'https://api.github.com',
  headers: {
    Accept: 'application/vnd.github.v3+json',
  },
};
