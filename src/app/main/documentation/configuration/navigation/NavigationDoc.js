import Typography from '@mui/material/Typography';
import { Link } from 'react-router-dom';

function NavigationDoc() {
  return (
    <>
      <Typography variant="h4" className="mb-40 font-700">
        Navigation
      </Typography>

      <Typography className="mb-24" variant="h5">
        Default Configuration
      </Typography>

      <Typography className="mb-16" component="p">
        The theme navigation array is located at <code>app/configs/navigationConfig.js</code>
      </Typography>

      <Typography className="mb-16" component="p">
        This configuration is the initial state of the Fuse.navigation redux state.
      </Typography>

      <Typography className="mb-16" component="p">
        The navigation items can be updated, removed, added with redux actions from anywhere of the
        app.
      </Typography>

      <Typography className="mb-16" component="p">
        Check out FuseNavigation component details for redux actions, item types, etc. at:{' '}
        <Link to="/documentation/fuse-components/fuse-navigation">FuseNavigation Docs</Link>
      </Typography>
    </>
  );
}

export default NavigationDoc;
