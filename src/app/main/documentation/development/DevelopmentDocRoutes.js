import { lazy } from 'react';

const DevelopmentServerDoc = lazy(() => import('./development-server/DevelopmentServerDoc'));
const ProductionDoc = lazy(() => import('./production/ProductionDoc'));
const DeploymentDoc = lazy(() => import('./deployment/DeploymentDoc'));
const DirectoryStructureDoc = lazy(() => import('./directory-structure/DirectoryStructureDoc'));
const ApiCallsDoc = lazy(() => import('./api-calls/ApiCallsDoc'));
const UpdatingFuseReactDoc = lazy(() => import('./updating-fuse-react/UpdatingFuseReactDoc'));
const IDEsDoc = lazy(() => import('./ides-vscode-webstorm/IDEsDoc'));
const HerokuNotesDoc = lazy(() => import('./heroku-notes/HerokuNotesDoc'));

const DevelopmentDocRoutes = [
  {
    path: 'development/development-server',
    element: <DevelopmentServerDoc />,
  },
  {
    path: 'development/production',
    element: <ProductionDoc />,
  },
  {
    path: 'development/deployment',
    element: <DeploymentDoc />,
  },
  {
    path: 'development/directory-structure',
    element: <DirectoryStructureDoc />,
  },
  {
    path: 'development/api-calls',
    element: <ApiCallsDoc />,
  },
  {
    path: 'development/updating-fuse-react',
    element: <UpdatingFuseReactDoc />,
  },
  {
    path: 'development/ides-vscode-webstorm',
    element: <IDEsDoc />,
  },
  {
    path: 'development/heroku-notes',
    element: <HerokuNotesDoc />,
  },
];

export default DevelopmentDocRoutes;
