import axios from 'axios';
import configs from '../../env.config';

const instance = axios.create({
  baseURL: configs.api,
});

export default instance;
