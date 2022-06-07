import mockApi from '../../mock-api.json';
import mock from '../../mock';

const widgets = mockApi.components.examples.analytics_dashboard_widgets.value;

mock.onGet('/api/dashboards/analytics/widgets').reply((config) => {
  return [200, widgets];
});
