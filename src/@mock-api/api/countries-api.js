import mockApi from '../mock-api.json';
import mock from '../mock';

const countriesApi = mockApi.components.examples.countries.value;

mock.onGet('/api/countries').reply((config) => {
  return [200, countriesApi];
});
