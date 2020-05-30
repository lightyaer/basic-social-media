import axios from 'axios';
import qs from 'qs';
import { USER_API_URL } from './userEnum';

const userAxiosInstance = axios.create({
  headers: {
    'Content-Type': 'application/json'
  },
  paramsSerializer: params => {
    return qs.stringify(params, { indices: false });
  }
});

const SERVER_URL = process.env.VUE_APP_SERVER_URL;

export const getAllUsersApi = () => {
  return userAxiosInstance.request({
    method: 'get',
    url: `${SERVER_URL}${USER_API_URL}`
  });
};

export const getUserByIdApi = id => {
  return userAxiosInstance.request({
    method: 'get',
    url: `${SERVER_URL}${USER_API_URL}/${id}`
  });
};

export const addFriendApi = (userId, friendId) => {
  return userAxiosInstance.request({
    method: 'post',
    url: `${SERVER_URL}${USER_API_URL}/friend`,
    data: {
      userId,
      friendId
    }
  });
};
