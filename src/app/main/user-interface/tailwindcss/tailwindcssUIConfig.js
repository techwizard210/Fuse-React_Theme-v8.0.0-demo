import { lazy } from 'react';

const TailwindCssUI = lazy(() => import('./TailwindCssUI'));

const tailwindcssUIConfig = {
  settings: {
    layout: {
      config: {},
    },
  },
  routes: [
    {
      path: 'ui/tailwindcss',
      element: <TailwindCssUI />,
    },
  ],
};

export default tailwindcssUIConfig;
