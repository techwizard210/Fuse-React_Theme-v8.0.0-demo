import mockApi from '../../mock-api.json';
import mock from '../../mock';

const widgets = mockApi.components.examples.finance_dashboard_widgets.value;

mock.onGet('/api/dashboards/finance/widgets').reply((config) => {
  return [200, widgets];
});
