import { lazy } from 'react';
import { Navigate } from 'react-router-dom';

const ClassicResetPasswordPage = lazy(() => import('./ClassicResetPasswordPage'));
const ModernResetPasswordPage = lazy(() => import('./ModernResetPasswordPage'));
const ModernReversedResetPasswordPage = lazy(() => import('./ModernReversedResetPasswordPage'));
const SplitScreenResetPasswordPage = lazy(() => import('./SplitScreenResetPasswordPage'));
const SplitScreenReversedResetPasswordPage = lazy(() =>
  import('./SplitScreenReversedResetPasswordPage')
);
const FullScreenResetPasswordPage = lazy(() => import('./FullScreenResetPasswordPage'));
const FullScreenReversedResetPasswordPage = lazy(() =>
  import('./FullScreenReversedResetPasswordPage')
);

const resetPasswordPagesConfig = {
  settings: {
    layout: {
      config: {},
    },
  },
  routes: [
    {
      path: 'pages/authentication/reset-password',
      children: [
        {
          path: '',
          element: <Navigate to="classic" />,
        },
        {
          path: 'classic',
          element: <ClassicResetPasswordPage />,
        },
        {
          path: 'modern',
          element: <ModernResetPasswordPage />,
        },
        {
          path: 'modern-reversed',
          element: <ModernReversedResetPasswordPage />,
        },
        {
          path: 'split-screen',
          element: <SplitScreenResetPasswordPage />,
        },
        {
          path: 'split-screen-reversed',
          element: <SplitScreenReversedResetPasswordPage />,
        },
        {
          path: 'full-screen',
          element: <FullScreenResetPasswordPage />,
        },
        {
          path: 'full-screen-reversed',
          element: <FullScreenReversedResetPasswordPage />,
        },
      ],
    },
  ],
};

export default resetPasswordPagesConfig;
