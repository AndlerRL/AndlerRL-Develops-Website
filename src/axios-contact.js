import Axios from 'axios';

const instance = Axios.create({
  headers: {
    "Accept": "application/json"
  }
});

export default instance;