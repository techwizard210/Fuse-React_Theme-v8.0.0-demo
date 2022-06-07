import FuseExample from '@fuse/core/FuseExample';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import { Link } from 'react-router-dom';
import FuseSvgIcon from '@fuse/core/FuseSvgIcon';

/* eslint import/no-webpack-loader-syntax: off */
/* eslint import/extensions: off */

function GoogleMapReactDoc() {
  return (
    <>
      <div className="flex w-full items-center justify-between mb-24">
        <Typography variant="h4" className="">
          GoogleMapReact
        </Typography>
        <Button
          variant="contained"
          color="secondary"
          component="a"
          href="https://github.com/google-map-react/google-map-react"
          target="_blank"
          role="button"
          startIcon={<FuseSvgIcon>heroicons-outline:external-link</FuseSvgIcon>}
        >
          Reference
        </Button>
      </div>
      <Typography className="mb-16" component="p">
        <code>google-map-react</code> is a component written over a small set of the Google Maps
        API.
      </Typography>

      <hr />

      <Typography className="text-32 mt-32 mb-8" component="h2">
        Example Usages
      </Typography>

      <FuseExample
        className="mb-64"
        component={require('./examples/simple.js').default}
        raw={require('!raw-loader!./examples/simple.js')}
      />

      <Typography className="text-32 mt-32 mb-8" component="h2">
        Demos
      </Typography>

      <ul>
        <li className="mb-8">
          <Link to="/dashboards/analytics">Analytics Dashboard</Link>
        </li>
      </ul>
    </>
  );
}

export default GoogleMapReactDoc;
