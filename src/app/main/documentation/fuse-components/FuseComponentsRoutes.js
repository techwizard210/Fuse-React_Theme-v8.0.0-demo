import { lazy } from 'react';

const FuseThemeDoc = lazy(() => import('./fuse-theme/FuseThemeDoc'));
const FuseAuthorizationDoc = lazy(() => import('./fuse-authorization/FuseAuthorizationDoc'));
const FuseLayoutDoc = lazy(() => import('./fuse-layout/FuseLayoutDoc'));
const FusePageCardedDoc = lazy(() => import('./fuse-page-carded/FusePageCardedDoc'));
const FusePageSimpleDoc = lazy(() => import('./fuse-page-simple/FusePageSimpleDoc'));
const FuseScrollbarsDoc = lazy(() => import('./fuse-scrollbars/FuseScrollbarsDoc'));
const FuseHighlightDoc = lazy(() => import('./fuse-highlight/FuseHighlightDoc'));
const FuseCountdownDoc = lazy(() => import('./fuse-countdown/FuseCountdownDoc'));
const FuseNavigationDoc = lazy(() => import('./fuse-navigation/FuseNavigationDoc'));
const FuseMessageDoc = lazy(() => import('./fuse-message/FuseMessageDoc'));
const FuseDialogDoc = lazy(() => import('./fuse-dialog/FuseDialogDoc'));

const FuseComponentsRoutes = [
  {
    path: 'fuse-components/fuse-theme',
    element: <FuseThemeDoc />,
  },
  {
    path: 'fuse-components/fuse-authorization',
    element: <FuseAuthorizationDoc />,
  },
  {
    path: 'fuse-components/fuse-layout',
    element: <FuseLayoutDoc />,
  },
  {
    path: 'fuse-components/fuse-page-carded',
    element: <FusePageCardedDoc />,
  },
  {
    path: 'fuse-components/fuse-page-simple',
    element: <FusePageSimpleDoc />,
  },
  {
    path: 'fuse-components/fuse-scrollbars',
    element: <FuseScrollbarsDoc />,
  },
  {
    path: 'fuse-components/fuse-highlight',
    element: <FuseHighlightDoc />,
  },
  {
    path: 'fuse-components/fuse-countdown',
    element: <FuseCountdownDoc />,
  },
  {
    path: 'fuse-components/fuse-navigation',
    element: <FuseNavigationDoc />,
  },
  {
    path: 'fuse-components/fuse-message',
    element: <FuseMessageDoc />,
  },
  {
    path: 'fuse-components/fuse-dialog',
    element: <FuseDialogDoc />,
  },
];

export default FuseComponentsRoutes;
