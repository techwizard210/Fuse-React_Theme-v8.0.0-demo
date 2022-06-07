import FuseExample from '@fuse/core/FuseExample';
import FuseSvgIcon from '@fuse/core/FuseSvgIcon';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
/* eslint import/no-webpack-loader-syntax: off */
/* eslint import/extensions: off */
/* eslint no-unused-vars: off */
/* eslint-disable jsx-a11y/accessible-emoji */

function BottomNavigationDoc(props) {
  return (
    <>
      <div className="flex flex-1 grow-0 items-center justify-end">
        <Button
          className="normal-case"
          variant="contained"
          color="secondary"
          component="a"
          href="https://mui.com/components/bottom-navigation"
          target="_blank"
          role="button"
          startIcon={<FuseSvgIcon>heroicons-outline:external-link</FuseSvgIcon>}
        >
          Reference
        </Button>
      </div>
      <Typography className="text-40 my-16 font-700" component="h1">
        Bottom navigation
      </Typography>
      <Typography className="description">
        Bottom navigation bars allow movement between primary destinations in an app.
      </Typography>

      <Typography className="mb-40" component="div">
        Bottom navigation bars display three to five destinations at the bottom of a screen. Each
        destination is represented by an icon and an optional text label. When a bottom navigation
        icon is tapped, the user is taken to the top-level navigation destination associated with
        that icon.
      </Typography>
      <Typography className="text-32 mt-40 mb-10 font-700" component="h2">
        Bottom navigation
      </Typography>
      <Typography className="mb-40" component="div">
        When there are only <strong>three</strong> actions, display both icons and text labels at
        all times.
      </Typography>
      <Typography className="mb-40" component="div">
        <FuseExample
          name="SimpleBottomNavigation.js"
          className="my-24"
          iframe={false}
          component={require('../components/bottom-navigation/SimpleBottomNavigation.js').default}
          raw={require('!raw-loader!../components/bottom-navigation/SimpleBottomNavigation.js')}
        />
      </Typography>
      <Typography className="text-32 mt-40 mb-10 font-700" component="h2">
        Bottom navigation with no label
      </Typography>
      <Typography className="mb-40" component="div">
        If there are <strong>four</strong> or <strong>five</strong> actions, display inactive views
        as icons only.
      </Typography>
      <Typography className="mb-40" component="div">
        <FuseExample
          name="LabelBottomNavigation.js"
          className="my-24"
          iframe={false}
          component={require('../components/bottom-navigation/LabelBottomNavigation.js').default}
          raw={require('!raw-loader!../components/bottom-navigation/LabelBottomNavigation.js')}
        />
      </Typography>
      <Typography className="text-32 mt-40 mb-10 font-700" component="h2">
        Fixed positioning
      </Typography>
      <Typography className="mb-40" component="div">
        This demo keeps bottom navigation fixed to the bottom, no matter the amount of content
        on-screen.
      </Typography>
      <Typography className="mb-40" component="div">
        <FuseExample
          name="FixedBottomNavigation.js"
          className="my-24"
          iframe
          component={require('../components/bottom-navigation/FixedBottomNavigation.js').default}
          raw={require('!raw-loader!../components/bottom-navigation/FixedBottomNavigation.js')}
        />
      </Typography>
      <Typography className="text-32 mt-40 mb-10 font-700" component="h2">
        Third-party routing library
      </Typography>
      <Typography className="mb-40" component="div">
        One frequent use case is to perform navigation on the client only, without an HTTP
        round-trip to the server. The <code>BottomNavigationAction</code> component provides the{' '}
        <code>component</code> prop to handle this use case. Here is a{' '}
        <a href="/material-ui/guides/routing/">more detailed guide</a>.
      </Typography>
    </>
  );
}

export default BottomNavigationDoc;
