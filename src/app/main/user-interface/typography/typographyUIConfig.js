import { lazy } from 'react';

const TypographyUI = lazy(() => import('./TypographyUI'));

const typographyUIConfig = {
  settings: {
    layout: {
      config: {},
    },
  },
  routes: [
    {
      path: 'ui/typography',
      element: <TypographyUI />,
    },
  ],
};

export default typographyUIConfig;
