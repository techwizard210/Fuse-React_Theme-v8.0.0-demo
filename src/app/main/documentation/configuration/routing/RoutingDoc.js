import FuseHighlight from '@fuse/core/FuseHighlight';
import Typography from '@mui/material/Typography';

function RoutingDoc() {
  return (
    <>
      <Typography variant="h4" className="mb-40 font-700">
        Routing
      </Typography>

      <Typography className="mb-16" component="p">
        Fuse React routing system based on{' '}
        <a href="https://reacttraining.com/react-router/" target="_blank" rel="noopener noreferrer">
          react-router
        </a>{' '}
        and its package{' '}
        <a
          href="https://github.com/ReactTraining/react-router/tree/master/packages/react-router-config"
          target="_blank"
          rel="noopener noreferrer"
        >
          react-router-config
        </a>
        .
      </Typography>

      <Typography className="mb-16" component="p">
        For the modular approach and route based Fuse settings, we are using config files and
        generate routes from those files.
      </Typography>

      <Typography className="mb-16" component="p">
        For example, have a look at the code below <code>MailboxAppConfig.js</code>. You can
        override all settings for a particular route.
      </Typography>

      <FuseHighlight component="pre" className="language-jsx mb-24">
        {require('!raw-loader!src/app/main/apps/mailbox/MailboxAppConfig.js')}
      </FuseHighlight>

      <Typography className="mb-16" component="p">
        Then we import and generate routes from that file in <code>app/configs/routesConfig</code>
      </Typography>

      <FuseHighlight component="pre" className="language-jsx mb-32">
        {`
          import {appsRoutes} from '../main/apps/mailbox/MailboxAppConfig.js';
          import FuseUtils from '@fuse/utils';
          import { Navigate } from 'react-router-dom';

          const routeConfigs = [
              MailAppConfig
          ];
          
          const routes = [
            ...FuseUtils.generateRoutesFromConfigs(routeConfigs, settingsConfig.defaultAuth),
            {
              path: '/',
              element: <Navigate to="dashboards/analytics" />,
              auth: settingsConfig.defaultAuth,
            },
            {
              path: 'loading',
              element: <FuseLoading />,
            },
            {
              path: '*',
              element: <Navigate to="pages/error/404" />,
            },
          ];
          
          export default routes;
      `}
      </FuseHighlight>
    </>
  );
}

export default RoutingDoc;
