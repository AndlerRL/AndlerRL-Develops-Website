import Axios from 'axios';

const instance = Axios.create({
  baseURL: 'https://smtp.andlerrl.co',
  headers: {
    'Access-Control-Allow-Origin': '*',
    'Access-Control-Allow-Methods': 'GET,PUT,POST,DELETE',
    'Access-Control-Allow-Headers': 'Content-Type'
  }
});

export default instance;