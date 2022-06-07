import { lazy } from 'react';
import { Navigate } from 'react-router-dom';
import AcademyApp from './AcademyApp';

const Course = lazy(() => import('./course/Course'));
const Courses = lazy(() => import('./courses/Courses'));

const AcademyAppConfig = {
  settings: {
    layout: {},
  },
  routes: [
    {
      path: 'apps/academy',
      element: <AcademyApp />,
      children: [
        {
          path: '',
          element: <Navigate to="/apps/academy/courses" />,
        },
        {
          path: 'courses/:courseId/*',
          element: <Course />,
        },
        {
          path: 'courses',
          element: <Courses />,
        },
      ],
    },
  ],
};

export default AcademyAppConfig;
