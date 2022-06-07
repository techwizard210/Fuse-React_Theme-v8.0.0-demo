import { lazy } from 'react';
import TaskForm from './task/TaskForm';

const TasksApp = lazy(() => import('./TasksApp'));

const TasksAppConfig = {
  settings: {
    layout: {
      config: {},
    },
  },
  routes: [
    {
      path: 'apps/tasks',
      element: <TasksApp />,
      children: [
        {
          path: ':id',
          element: <TaskForm />,
        },
        {
          path: ':id/:type',
          element: <TaskForm />,
        },
      ],
    },
  ],
};

export default TasksAppConfig;
