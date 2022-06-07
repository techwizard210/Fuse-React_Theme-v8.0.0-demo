import FuseExample from '@fuse/core/FuseExample';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import { Link } from 'react-router-dom';
import FuseSvgIcon from '@fuse/core/FuseSvgIcon';

/* eslint import/no-webpack-loader-syntax: off */
/* eslint import/extensions: off */

function ReactApexchartsDoc() {
  return (
    <>
      <div className="flex w-full items-center justify-between mb-24">
        <Typography variant="h4" className="">
          react-apexcharts
        </Typography>
        <Button
          variant="contained"
          color="secondary"
          component="a"
          href="https://github.com/apexcharts/react-apexcharts"
          target="_blank"
          role="button"
          startIcon={<FuseSvgIcon>heroicons-outline:external-link</FuseSvgIcon>}
        >
          Reference
        </Button>
      </div>

      <Typography className="mb-16" component="p">
        React.js wrapper for ApexCharts to build interactive visualizations in react.
      </Typography>

      <hr />

      <Typography className="text-32 mt-32 mb-8" component="h2">
        Example Usages
      </Typography>

      <FuseExample
        className="mb-64"
        component={require('./examples/Area.js').default}
        raw={require('!raw-loader!./examples/Area.js')}
      />

      <FuseExample
        className="mb-64"
        component={require('./examples/Bar.js').default}
        raw={require('!raw-loader!./examples/Bar.js')}
      />

      <FuseExample
        className="mb-64"
        component={require('./examples/Column.js').default}
        raw={require('!raw-loader!./examples/Column.js')}
      />

      <FuseExample
        className="mb-64"
        component={require('./examples/Donut.js').default}
        raw={require('!raw-loader!./examples/Donut.js')}
      />

      <FuseExample
        className="mb-64"
        component={require('./examples/Line.js').default}
        raw={require('!raw-loader!./examples/Line.js')}
      />

      <FuseExample
        className="mb-64"
        component={require('./examples/RadialBar.js').default}
        raw={require('!raw-loader!./examples/RadialBar.js')}
      />

      <Typography className="text-32 mt-32 mb-8" component="h2">
        Demos
      </Typography>

      <ul>
        <li className="mb-8">
          <Link to="/dashboards/analytics">Analytics Dashboard</Link>
        </li>
        <li className="mb-8">
          <Link to="/dashboards/project">Project Dashboard</Link>
        </li>
      </ul>
    </>
  );
}

export default ReactApexchartsDoc;
