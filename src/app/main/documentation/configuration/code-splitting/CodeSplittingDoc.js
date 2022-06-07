import FuseHighlight from '@fuse/core/FuseHighlight';
import Typography from '@mui/material/Typography';

function CodeSplittingDoc() {
  return (
    <>
      <Typography variant="h4" className="mb-40 font-700">
        Code Splitting
      </Typography>

      <Typography className="mb-16" component="p">
        Code-splitting your app can help you “lazy-load” just the things that are currently needed
        by the user, which can dramatically improve the performance of your app. While you haven’t
        reduced the overall amount of code in your app, you’ve avoided loading code that the user
        may never need, and reduced the amount of code needed during the initial load.
      </Typography>

      <Typography className="text-20 mt-20 mb-10 font-700" variant="h5">
        Route-based code splitting
      </Typography>

      <Typography className="mb-16" component="p">
        We are using <b>React.lazy</b> function to dynamically import component.
        <br />
        <b>FuseSuspense</b> component is created to avoid the repetition of <b>React.Suspense </b>
        component defaults, which is used in the theme layouts.
        <br />
        Check out the examples below to see dynamically or regular way of importing the components.
      </Typography>

      <div className="space-y-24">
        <div className="">
          <Typography className="text-16 mt-16 mb-10 font-700" variant="h6">
            Lazy Loaded Component:
          </Typography>

          <FuseHighlight component="pre" className="language-jsx my-16">
            {`
              import { lazy } from 'react';

              const AnalyticsDashboardApp = lazy(() => import('./AnalyticsDashboardApp'));
              
              const AnalyticsDashboardAppConfig = {
                settings: {
                  layout: {
                    config: {}
                  }
                },
                routes: [
                  {
                    path: 'apps/dashboards/analytics',
                    element: <AnalyticsDashboardApp />
                  }
                ],
              };
              
              export default AnalyticsDashboardAppConfig;

            `}
          </FuseHighlight>
        </div>

        <div className="w-ful">
          <Typography className="text-16 mt-16 mb-10 font-700" variant="h6">
            Regular Loaded Component:
          </Typography>

          <FuseHighlight component="pre" className="language-jsx my-16">
            {`
                import AnalyticsDashboardApp from './AnalyticsDashboardApp';

                export const AnalyticsDashboardAppConfig = {
                    settings: {
                        layout: {
                            config: {}
                        }
                    },
                    routes  : [
                        {
                            path     : '/apps/dashboards/analytics',
                            element:AnalyticsDashboardApp
                        }
                    ]
                };
            `}
          </FuseHighlight>
        </div>
      </div>

      <Typography className="text-20 mt-20 mb-10 font-700" variant="h5">
        Code splitting the Redux reducers (Dynamically loaded reducers)
      </Typography>

      <Typography className="mb-16" component="p">
        We created Higher Order Component <code>withReducer</code> to load redux reducer before the
        component render.
        <br />
        You just need to pass the <b>key</b> and the <b>reducer</b> to the component.
      </Typography>

      <FuseHighlight component="pre" className="language-jsx my-16">
        {`
          import withReducer from 'app/store/withReducer';
          import reducer from './store';
          .
          .
          export default withReducer('analyticsDashboardApp', reducer)(AnalyticsDashboardApp);
        `}
      </FuseHighlight>
    </>
  );
}

export default CodeSplittingDoc;
