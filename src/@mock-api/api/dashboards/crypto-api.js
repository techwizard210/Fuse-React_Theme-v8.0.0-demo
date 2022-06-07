import mockApi from '../../mock-api.json';
import mock from '../../mock';

const widgets = mockApi.components.examples.crypto_dashboard_widgets.value;

mock.onGet('/api/dashboards/crypto/widgets').reply((config) => {
  return [200, widgets];
});
