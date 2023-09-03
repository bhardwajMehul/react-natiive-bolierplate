import axios from 'axios';
import { Platform } from 'react-native';

export const instance = axios.create({
  // TODO: set the base URL
  baseURL: '',
  headers: {
    'Content-Type': 'application/json',
    'X-Platform': Platform.OS,
  },
  timeout: 3000,
});
