import { lazy } from 'react';
import { Navigate } from 'react-router-dom';
import ScrumboardApp from './ScrumboardApp';

const Board = lazy(() => import('./board/Board'));
const Boards = lazy(() => import('./boards/Boards'));

const ScrumboardAppConfig = {
  settings: {
    layout: {},
  },
  routes: [
    {
      path: 'apps/scrumboard',
      element: <ScrumboardApp />,
      children: [
        {
          path: '',
          element: <Navigate to="/apps/scrumboard/boards" />,
        },
        {
          path: 'boards',
          element: <Boards />,
        },
        {
          path: 'boards/:boardId',
          element: <Board />,
        },
      ],
    },
  ],
};

export default ScrumboardAppConfig;
