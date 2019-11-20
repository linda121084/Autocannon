import axios from 'axios';

export const API_URL = 'http://3.113.93.143';
export const API_PATH = '/facts_backend-2.8/rest';

export const RUN_SPEC = {
  connections: 10,
  duration: 120,
  pipelining: 1,
};

export const HEADERS_OPTS = {
  'Content-type': 'application/json; charset=UTF-8',
};

export const LOGIN_FUNCS = {
  url: `${API_URL + API_PATH}/permissions/login`,
  async Admin() {
    const login = await axios.post(this.url, {
      userName: '858142',
      password: '858142',
    });

    return login.data.DATA.token;
  },
  async User() {
    const login = await axios.post(this.url, {
      userName: '336716',
      password: '336716',
    });

    return login.data.DATA.token;
  },
};
