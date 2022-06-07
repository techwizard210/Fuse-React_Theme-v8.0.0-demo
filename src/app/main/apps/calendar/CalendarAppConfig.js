import { lazy } from 'react';

const CalendarApp = lazy(() => import('./CalendarApp'));

const CalendarAppConfig = {
  settings: {
    layout: {
      config: {},
    },
  },
  routes: [
    {
      path: 'apps/calendar',
      element: <CalendarApp />,
    },
  ],
};

export default CalendarAppConfig;
