import { lazy } from 'react';
import { Navigate } from 'react-router-dom';

const ClassicSignUpPage = lazy(() => import('./ClassicSignUpPage'));
const ModernSignUpPage = lazy(() => import('./ModernSignUpPage'));
const ModernReversedSignUpPage = lazy(() => import('./ModernReversedSignUpPage'));
const SplitScreenSignUpPage = lazy(() => import('./SplitScreenSignUpPage'));
const SplitScreenReversedSignUpPage = lazy(() => import('./SplitScreenReversedSignUpPage'));
const FullScreenSignUpPage = lazy(() => import('./FullScreenSignUpPage'));
const FullScreenReversedSignUpPage = lazy(() => import('./FullScreenReversedSignUpPage'));

const signUpPagesConfig = {
  settings: {
    layout: {
      config: {},
    },
  },
  routes: [
    {
      path: 'pages/authentication/sign-up',
      children: [
        {
          path: '',
          element: <Navigate to="classic" />,
        },
        {
          path: 'classic',
          element: <ClassicSignUpPage />,
        },
        {
          path: 'modern',
          element: <ModernSignUpPage />,
        },
        {
          path: 'modern-reversed',
          element: <ModernReversedSignUpPage />,
        },
        {
          path: 'split-screen',
          element: <SplitScreenSignUpPage />,
        },
        {
          path: 'split-screen-reversed',
          element: <SplitScreenReversedSignUpPage />,
        },
        {
          path: 'full-screen',
          element: <FullScreenSignUpPage />,
        },
        {
          path: 'full-screen-reversed',
          element: <FullScreenReversedSignUpPage />,
        },
      ],
    },
  ],
};

export default signUpPagesConfig;
