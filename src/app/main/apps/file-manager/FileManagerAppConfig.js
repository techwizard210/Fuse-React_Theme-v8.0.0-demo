import { lazy } from 'react';

const FileManagerApp = lazy(() => import('./FileManagerApp'));

const FileManagerAppConfig = {
  settings: {
    layout: {
      config: {},
    },
  },
  routes: [
    {
      path: 'apps/file-manager',
      element: <FileManagerApp />,
    },
    {
      path: 'apps/file-manager/:folderId',
      element: <FileManagerApp />,
    },
  ],
};

export default FileManagerAppConfig;
