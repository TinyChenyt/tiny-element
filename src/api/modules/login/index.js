import request from '@/utils/request';

const getUserInfo = () => {
  return request.get('/user/info');
};

const token = (data) => {
  return request.post('/user/login', data);
};

export default {
  getUserInfo,
  token
};