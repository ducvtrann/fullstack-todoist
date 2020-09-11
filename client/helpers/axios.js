import axios from 'axios';

export default axios.create({
  baseURL:
    process.env.NODE_ENV === 'production'
      ? process.env.PROD_BASE_URL
      : process.env.DEV_BASE_URL,
});
