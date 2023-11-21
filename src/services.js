import axios from 'axios';

const BASE_URL = 'https://json-placeholder.mock.beeceptor.com';

const instance = axios.create({
  baseURL: BASE_URL,
});

export const fetchData = (action, params = {}) => {
  const paths = {
    getAllCompanies: '/companies',
    getQueryCompany: `/companies/${params.company}`,
  }
  return new Promise((res, rej) => {
    instance.get(paths[action])
      .then((response) => {
        res(response.data);
      })
      .catch(err => {
        rej(err);
      }) 
  })
}