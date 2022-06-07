import { lazy } from 'react';

const ThemeShemesDoc = lazy(() => import('./theme-schemes/ThemeShemesDoc'));
const ThemeLayoutsDoc = lazy(() => import('./theme-layouts/ThemeLayoutsDoc'));
const PageLayoutsDoc = lazy(() => import('./page-layouts/PageLayoutsDoc'));
const RTLSupportDoc = lazy(() => import('./rtl-support/RTLSupportDoc'));
const ChangingDefaultFontDoc = lazy(() => import('./changing-default-font/ChangingDefaultFontDoc'));

const ThemingDocRoutes = [
  {
    path: 'theming/theme-schemes',
    element: <ThemeShemesDoc />,
  },
  {
    path: 'theming/theme-layouts',
    element: <ThemeLayoutsDoc />,
  },
  {
    path: 'theming/page-layouts',
    element: <PageLayoutsDoc />,
  },
  {
    path: 'theming/rtl-support',
    element: <RTLSupportDoc />,
  },
  {
    path: 'theming/changing-default-font',
    element: <ChangingDefaultFontDoc />,
  },
];

export default ThemingDocRoutes;
