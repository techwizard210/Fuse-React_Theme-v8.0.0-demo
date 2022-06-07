import mockApi from '../../mock-api.json';
import mock from '../../mock';

const heroiconsApi = mockApi.components.examples.icons_heroicons.value;
const materialIconsApi = mockApi.components.examples.icons_material.value;
const featherIconsApi = mockApi.components.examples.icons_feather.value;

mock.onGet('/api/ui/icons/heroicons').reply((config) => {
  return [200, heroiconsApi];
});

mock.onGet('/api/ui/icons/material').reply((config) => {
  return [200, materialIconsApi];
});

mock.onGet('/api/ui/icons/feather').reply((config) => {
  return [200, featherIconsApi];
});
