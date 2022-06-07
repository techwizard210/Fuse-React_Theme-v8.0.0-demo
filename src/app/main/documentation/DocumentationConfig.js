import { lazy } from 'react';
import { Navigate } from 'react-router-dom';
import AuthenticationDocRoutes from './authentication/AuthenticationDocRoutes';
import DevelopmentDocRoutes from './development/DevelopmentDocRoutes';
import FuseComponentsRoutes from './fuse-components/FuseComponentsRoutes';
import GettingStartedDocRoutes from './getting-started/GettingStartedDocRoutes';
import MaterialUIComponentsRoutes from './material-ui-components/MaterialUIComponentsRoutes';
import ThemingDocRoutes from './theming/ThemingDocRoutes';
import ThirdPartyComponentsRoutes from './third-party-components/ThirdPartyComponentsRoutes';
import ConfigurationDocRoutes from './configuration/ConfigurationDocRoutes';
import MockApiDoc from './mock-api/MockApiDoc';

const DocumentationPageLayout = lazy(() => import('./DocumentationPageLayout'));
const ChangelogDoc = lazy(() => import('./changelog/ChangelogDoc'));

const DocumentationConfig = {
  routes: [
    {
      path: 'documentation',
      element: <Navigate to="/documentation/getting-started/introduction" />,
    },
    {
      path: 'documentation/mock-api',
      element: <MockApiDoc />,
    },
    {
      path: 'documentation',
      element: <DocumentationPageLayout />,
      children: [
        {
          path: 'changelog',
          element: <ChangelogDoc />,
        },
        ...GettingStartedDocRoutes,
        ...DevelopmentDocRoutes,
        ...ThemingDocRoutes,
        ...ConfigurationDocRoutes,
        ...AuthenticationDocRoutes,
        ...FuseComponentsRoutes,
        ...MaterialUIComponentsRoutes,
        ...ThirdPartyComponentsRoutes,
      ],
    },
  ],
};

export default DocumentationConfig;
