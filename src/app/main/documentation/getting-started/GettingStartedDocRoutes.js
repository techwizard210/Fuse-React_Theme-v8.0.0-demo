import { lazy } from 'react';

const IntroductionDoc = lazy(() => import('./introduction/IntroductionDoc'));
const InstallationDoc = lazy(() => import('./installation/InstallationDoc'));
const GitRepositoryDoc = lazy(() => import('./git-repository/GitRepositoryDoc'));

const GettingStartedDocRoutes = [
  {
    path: 'getting-started/introduction',
    element: <IntroductionDoc />,
  },
  {
    path: 'getting-started/installation',
    element: <InstallationDoc />,
  },
  {
    path: 'getting-started/git-repository',
    element: <GitRepositoryDoc />,
  },
];

export default GettingStartedDocRoutes;
