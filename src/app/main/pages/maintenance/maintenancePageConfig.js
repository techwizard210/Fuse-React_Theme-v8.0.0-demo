import { lazy } from 'react';

const MaintenancePage = lazy(() => import('./MaintenancePage'));

const maintenancePageConfig = {
  settings: {
    layout: {
      config: {},
    },
  },
  routes: [
    {
      path: 'pages/maintenance',
      element: <MaintenancePage />,
    },
  ],
};

export default maintenancePageConfig;
