import FuseExample from '@fuse/core/FuseExample';
import FuseHighlight from '@fuse/core/FuseHighlight';
import FuseSvgIcon from '@fuse/core/FuseSvgIcon';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
/* eslint import/no-webpack-loader-syntax: off */
/* eslint import/extensions: off */
/* eslint no-unused-vars: off */
/* eslint-disable jsx-a11y/accessible-emoji */

function AppBarDoc(props) {
  return (
    <>
      <div className="flex flex-1 grow-0 items-center justify-end">
        <Button
          className="normal-case"
          variant="contained"
          color="secondary"
          component="a"
          href="https://mui.com/components/app-bar"
          target="_blank"
          role="button"
          startIcon={<FuseSvgIcon>heroicons-outline:external-link</FuseSvgIcon>}
        >
          Reference
        </Button>
      </div>
      <Typography className="text-40 my-16 font-700" component="h1">
        App bar
      </Typography>
      <Typography className="description">
        The App bar displays information and actions relating to the current screen.
      </Typography>

      <Typography className="mb-40" component="div">
        The top App bar provides content and actions related to the current screen. It&#39;s used
        for branding, screen titles, navigation, and actions.
      </Typography>
      <Typography className="mb-40" component="div">
        It can transform into a contextual action bar or be used as a navbar.
      </Typography>
      <Typography className="text-32 mt-40 mb-10 font-700" component="h2">
        Basic App bar
      </Typography>
      <Typography className="mb-40" component="div">
        <FuseExample
          name="ButtonAppBar.js"
          className="my-24"
          iframe={false}
          component={require('../components/app-bar/ButtonAppBar.js').default}
          raw={require('!raw-loader!../components/app-bar/ButtonAppBar.js')}
        />
      </Typography>
      <Typography className="text-32 mt-40 mb-10 font-700" component="h2">
        App bar with menu
      </Typography>
      <Typography className="mb-40" component="div">
        <FuseExample
          name="MenuAppBar.js"
          className="my-24"
          iframe={false}
          component={require('../components/app-bar/MenuAppBar.js').default}
          raw={require('!raw-loader!../components/app-bar/MenuAppBar.js')}
        />
      </Typography>
      <Typography className="text-32 mt-40 mb-10 font-700" component="h2">
        App bar with responsive menu
      </Typography>
      <Typography className="mb-40" component="div">
        <FuseExample
          name="ResponsiveAppBar.js"
          className="my-24"
          iframe={false}
          component={require('../components/app-bar/ResponsiveAppBar.js').default}
          raw={require('!raw-loader!../components/app-bar/ResponsiveAppBar.js')}
        />
      </Typography>
      <Typography className="text-32 mt-40 mb-10 font-700" component="h2">
        App bar with search field
      </Typography>
      <Typography className="mb-40" component="div">
        A side searchbar.
      </Typography>
      <Typography className="mb-40" component="div">
        <FuseExample
          name="SearchAppBar.js"
          className="my-24"
          iframe={false}
          component={require('../components/app-bar/SearchAppBar.js').default}
          raw={require('!raw-loader!../components/app-bar/SearchAppBar.js')}
        />
      </Typography>
      <Typography className="text-32 mt-40 mb-10 font-700" component="h2">
        App bar with a primary search field
      </Typography>
      <Typography className="mb-40" component="div">
        A primary searchbar.
      </Typography>
      <Typography className="mb-40" component="div">
        <FuseExample
          name="PrimarySearchAppBar.js"
          className="my-24"
          iframe={false}
          component={require('../components/app-bar/PrimarySearchAppBar.js').default}
          raw={require('!raw-loader!../components/app-bar/PrimarySearchAppBar.js')}
        />
      </Typography>
      <Typography className="text-32 mt-40 mb-10 font-700" component="h2">
        Dense (desktop only)
      </Typography>
      <Typography className="mb-40" component="div">
        <FuseExample
          name="DenseAppBar.js"
          className="my-24"
          iframe={false}
          component={require('../components/app-bar/DenseAppBar.js').default}
          raw={require('!raw-loader!../components/app-bar/DenseAppBar.js')}
        />
      </Typography>
      <Typography className="text-32 mt-40 mb-10 font-700" component="h2">
        Prominent
      </Typography>
      <Typography className="mb-40" component="div">
        A prominent app bar.
      </Typography>
      <Typography className="mb-40" component="div">
        <FuseExample
          name="ProminentAppBar.js"
          className="my-24"
          iframe={false}
          component={require('../components/app-bar/ProminentAppBar.js').default}
          raw={require('!raw-loader!../components/app-bar/ProminentAppBar.js')}
        />
      </Typography>
      <Typography className="text-32 mt-40 mb-10 font-700" component="h2">
        Bottom App bar
      </Typography>
      <Typography className="mb-40" component="div">
        <FuseExample
          name="BottomAppBar.js"
          className="my-24"
          iframe
          component={require('../components/app-bar/BottomAppBar.js').default}
          raw={require('!raw-loader!../components/app-bar/BottomAppBar.js')}
        />
      </Typography>
      <Typography className="text-32 mt-40 mb-10 font-700" component="h2">
        Fixed placement
      </Typography>
      <Typography className="mb-40" component="div">
        When you render the app bar position fixed, the dimension of the element doesn&#39;t impact
        the rest of the page. This can cause some part of your content to be invisible, behind the
        app bar. Here are 3 possible solutions:
      </Typography>
      <ol>
        <li>
          You can use <code>{`position="sticky"`}</code> instead of fixed. ⚠️ sticky is not
          supported by IE11.
        </li>
        <li>
          You can render a second <code>{`<Toolbar />`}</code> component:
        </li>
      </ol>

      <FuseHighlight component="pre" className="language-jsx">
        {` 
function App() {
  return (
    <React.Fragment>
      <AppBar position="fixed">
        <Toolbar>{/* content */}</Toolbar>
      </AppBar>
      <Toolbar />
    </React.Fragment>
  );
}
`}
      </FuseHighlight>
      <ol start="3">
        <li>
          You can use <code>theme.mixins.toolbar</code> CSS:
        </li>
      </ol>

      <FuseHighlight component="pre" className="language-jsx">
        {` 
const Offset = styled('div')(({ theme }) => theme.mixins.toolbar);

function App() {
  return (
    <React.Fragment>
      <AppBar position="fixed">
        <Toolbar>{/* content */}</Toolbar>
      </AppBar>
      <Offset />
    </React.Fragment>
  );
}
`}
      </FuseHighlight>
      <Typography className="text-32 mt-40 mb-10 font-700" component="h2">
        Scrolling
      </Typography>
      <Typography className="mb-40" component="div">
        You can use the <code>useScrollTrigger()</code> hook to respond to user scroll actions.
      </Typography>
      <Typography className="text-20 mt-20 mb-10 font-700" component="h3">
        Hide App bar
      </Typography>
      <Typography className="mb-40" component="div">
        The app bar hides on scroll down to leave more space for reading.
      </Typography>
      <Typography className="mb-40" component="div">
        <FuseExample
          name="HideAppBar.js"
          className="my-24"
          iframe
          component={require('../components/app-bar/HideAppBar.js').default}
          raw={require('!raw-loader!../components/app-bar/HideAppBar.js')}
        />
      </Typography>
      <Typography className="text-20 mt-20 mb-10 font-700" component="h3">
        Elevate App bar
      </Typography>
      <Typography className="mb-40" component="div">
        The app bar elevates on scroll to communicate that the user is not at the top of the page.
      </Typography>
      <Typography className="mb-40" component="div">
        <FuseExample
          name="ElevateAppBar.js"
          className="my-24"
          iframe
          component={require('../components/app-bar/ElevateAppBar.js').default}
          raw={require('!raw-loader!../components/app-bar/ElevateAppBar.js')}
        />
      </Typography>
      <Typography className="text-20 mt-20 mb-10 font-700" component="h3">
        Back to top
      </Typography>
      <Typography className="mb-40" component="div">
        A floating action buttons appears on scroll to make it easy to get back to the top of the
        page.
      </Typography>
      <Typography className="mb-40" component="div">
        <FuseExample
          name="BackToTop.js"
          className="my-24"
          iframe
          component={require('../components/app-bar/BackToTop.js').default}
          raw={require('!raw-loader!../components/app-bar/BackToTop.js')}
        />
      </Typography>
      <Typography className="text-20 mt-20 mb-10 font-700" component="h3">
        <code>{`useScrollTrigger([options]) => trigger`}</code>
      </Typography>
      <Typography className="text-16 mt-16 mb-10" component="h4">
        Arguments
      </Typography>
      <ol>
        <li>
          <Typography className="mb-40" component="div">
            <code>options</code> (<em>object</em> [optional]):
          </Typography>
          <ul>
            <li>
              <code>options.disableHysteresis</code> (<em>bool</em> [optional]): Defaults to{' '}
              <code>false</code>. Disable the hysteresis. Ignore the scroll direction when
              determining the <code>trigger</code> value.
            </li>
            <li>
              <code>options.target</code> (<em>Node</em> [optional]): Defaults to{' '}
              <code>window</code>.
            </li>
            <li>
              <code>options.threshold</code> (<em>number</em> [optional]): Defaults to{' '}
              <code>100</code>. Change the <code>trigger</code> value when the vertical scroll
              strictly crosses this threshold (exclusive).
            </li>
          </ul>
        </li>
      </ol>
      <Typography className="text-16 mt-16 mb-10" component="h4">
        Returns
      </Typography>
      <Typography className="mb-40" component="div">
        <code>trigger</code>: Does the scroll position match the criteria?
      </Typography>
      <Typography className="text-16 mt-16 mb-10" component="h4">
        Examples
      </Typography>

      <FuseHighlight component="pre" className="language-jsx">
        {` 
import useScrollTrigger from '@mui/material/useScrollTrigger';

function HideOnScroll(props) {
  const trigger = useScrollTrigger();
  return (
    <Slide in={!trigger}>
      <div>Hello</div>
    </Slide>
  );
}
`}
      </FuseHighlight>
      <Typography className="text-32 mt-40 mb-10 font-700" component="h2">
        Enable color on dark
      </Typography>
      <Typography className="mb-40" component="div">
        Following the{' '}
        <a href="https://material.io/design/color/dark-theme.html">Material Design guidelines</a>,
        the <code>color</code> prop has no effect on the appearance of the app bar in dark mode. You
        can override this behavior by setting the <code>enableColorOnDark</code> prop to{' '}
        <code>true</code>.
      </Typography>
      <Typography className="mb-40" component="div">
        <FuseExample
          name="EnableColorOnDarkAppBar.js"
          className="my-24"
          iframe={false}
          component={require('../components/app-bar/EnableColorOnDarkAppBar.js').default}
          raw={require('!raw-loader!../components/app-bar/EnableColorOnDarkAppBar.js')}
        />
      </Typography>
    </>
  );
}

export default AppBarDoc;
