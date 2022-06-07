import FuseExample from '@fuse/core/FuseExample';
import FuseHighlight from '@fuse/core/FuseHighlight';
import FuseSvgIcon from '@fuse/core/FuseSvgIcon';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
/* eslint import/no-webpack-loader-syntax: off */
/* eslint import/extensions: off */
/* eslint no-unused-vars: off */
/* eslint-disable jsx-a11y/accessible-emoji */

function DrawersDoc(props) {
  return (
    <>
      <div className="flex flex-1 grow-0 items-center justify-end">
        <Button
          className="normal-case"
          variant="contained"
          color="secondary"
          component="a"
          href="https://mui.com/components/drawers"
          target="_blank"
          role="button"
          startIcon={<FuseSvgIcon>heroicons-outline:external-link</FuseSvgIcon>}
        >
          Reference
        </Button>
      </div>
      <Typography className="text-40 my-16 font-700" component="h1">
        Drawer
      </Typography>
      <Typography className="description">
        Navigation drawers provide access to destinations in your app. Side sheets are surfaces
        containing supplementary content that are anchored to the left or right edge of the screen.
      </Typography>

      <Typography className="mb-40" component="div">
        Navigation drawers (or &quot;sidebars&quot;) provide access to destinations and app
        functionality, such as switching accounts. They can either be permanently on-screen or
        controlled by a navigation menu icon.
      </Typography>
      <Typography className="mb-40" component="div">
        <a href="https://material.io/components/sheets-side">Side sheets</a> are supplementary
        surfaces primarily used on tablet and desktop.
      </Typography>
      <Typography className="text-32 mt-40 mb-10 font-700" component="h2">
        Temporary drawer
      </Typography>
      <Typography className="mb-40" component="div">
        Temporary navigation drawers can toggle open or closed. Closed by default, the drawer opens
        temporarily above all other content until a section is selected.
      </Typography>
      <Typography className="mb-40" component="div">
        The Drawer can be cancelled by clicking the overlay or pressing the Esc key. It closes when
        an item is selected, handled by controlling the <code>open</code> prop.
      </Typography>
      <Typography className="mb-40" component="div">
        <FuseExample
          name="TemporaryDrawer.js"
          className="my-24"
          iframe={false}
          component={require('../components/drawers/TemporaryDrawer.js').default}
          raw={require('!raw-loader!../components/drawers/TemporaryDrawer.js')}
        />
      </Typography>
      <Typography className="text-20 mt-20 mb-10 font-700" component="h3">
        Swipeable
      </Typography>
      <Typography className="mb-40" component="div">
        You can make the drawer swipeable with the <code>SwipeableDrawer</code> component.
      </Typography>
      <Typography className="mb-40" component="div">
        This component comes with a 2 kB gzipped payload overhead. Some low-end mobile devices
        won&#39;t be able to follow the fingers at 60 FPS. You can use the{' '}
        <code>disableBackdropTransition</code> prop to help.
      </Typography>
      <Typography className="mb-40" component="div">
        <FuseExample
          name="SwipeableTemporaryDrawer.js"
          className="my-24"
          iframe={false}
          component={require('../components/drawers/SwipeableTemporaryDrawer.js').default}
          raw={require('!raw-loader!../components/drawers/SwipeableTemporaryDrawer.js')}
        />
      </Typography>
      <Typography className="mb-40" component="div">
        The following properties are used in this documentation website for optimal usability of the
        component:
      </Typography>
      <ul>
        <li>
          iOS is hosted on high-end devices. The backdrop transition can be enabled without dropping
          frames. The performance will be good enough.
        </li>
        <li>
          iOS has a &quot;swipe to go back&quot; feature that interferes with the discovery feature,
          so discovery has to be disabled.
        </li>
      </ul>

      <FuseHighlight component="pre" className="language-jsx">
        {` 
const iOS =
  typeof navigator !== 'undefined' && /iPad|iPhone|iPod/.test(navigator.userAgent);

<SwipeableDrawer disableBackdropTransition={!iOS} disableDiscovery={iOS} />;
`}
      </FuseHighlight>
      <Typography className="text-20 mt-20 mb-10 font-700" component="h3">
        Swipeable edge
      </Typography>
      <Typography className="mb-40" component="div">
        You can configure the <code>SwipeableDrawer</code> to have a visible edge when closed.
      </Typography>
      <Typography className="mb-40" component="div">
        If you are on a desktop, you can toggle the drawer with the &quot;OPEN&quot; button. If you
        are on mobile, you can open the demo in CodeSandbox (&quot;edit&quot; icon) and swipe.
      </Typography>
      <Typography className="mb-40" component="div">
        <FuseExample
          name="SwipeableEdgeDrawer.js"
          className="my-24"
          iframe
          component={require('../components/drawers/SwipeableEdgeDrawer.js').default}
          raw={require('!raw-loader!../components/drawers/SwipeableEdgeDrawer.js')}
        />
      </Typography>
      <Typography className="text-20 mt-20 mb-10 font-700" component="h3">
        Keep mounted
      </Typography>
      <Typography className="mb-40" component="div">
        To ensure a temporary drawer is not unmounted, specify the <code>ModalProps</code> prop
        like:
      </Typography>

      <FuseHighlight component="pre" className="language-jsx">
        {` 
<Drawer
  variant="temporary"
  ModalProps={{
    keepMounted: true,
  
/>
`}
      </FuseHighlight>
      <Typography className="mb-40" component="div">
        More details in the{' '}
        <a href="/material-ui/react-modal/#performance">Modal performance section</a>.
      </Typography>
      <Typography className="text-32 mt-40 mb-10 font-700" component="h2">
        Responsive drawer
      </Typography>
      <Typography className="mb-40" component="div">
        You can use the <code>temporary</code> variant to display a drawer for small screens and{' '}
        <code>permanent</code> for a drawer for wider screens.
      </Typography>
      <Typography className="mb-40" component="div">
        <FuseExample
          name="ResponsiveDrawer.js"
          className="my-24"
          iframe
          component={require('../components/drawers/ResponsiveDrawer.js').default}
          raw={require('!raw-loader!../components/drawers/ResponsiveDrawer.js')}
        />
      </Typography>
      <Typography className="text-32 mt-40 mb-10 font-700" component="h2">
        Persistent drawer
      </Typography>
      <Typography className="mb-40" component="div">
        Persistent navigation drawers can toggle open or closed. The drawer sits on the same surface
        elevation as the content. It is closed by default and opens by selecting the menu icon, and
        stays open until closed by the user. The state of the drawer is remembered from action to
        action and session to session.
      </Typography>
      <Typography className="mb-40" component="div">
        When the drawer is outside of the page grid and opens, the drawer forces other content to
        change size and adapt to the smaller viewport.
      </Typography>
      <Typography className="mb-40" component="div">
        Persistent navigation drawers are acceptable for all sizes larger than mobile. They are not
        recommended for apps with multiple levels of hierarchy that require using an up arrow for
        navigation.
      </Typography>
      <Typography className="mb-40" component="div">
        <FuseExample
          name="PersistentDrawerLeft.js"
          className="my-24"
          iframe
          component={require('../components/drawers/PersistentDrawerLeft.js').default}
          raw={require('!raw-loader!../components/drawers/PersistentDrawerLeft.js')}
        />
        <FuseExample
          name="PersistentDrawerRight.js"
          className="my-24"
          iframe
          component={require('../components/drawers/PersistentDrawerRight.js').default}
          raw={require('!raw-loader!../components/drawers/PersistentDrawerRight.js')}
        />
      </Typography>
      <Typography className="text-32 mt-40 mb-10 font-700" component="h2">
        Mini variant drawer
      </Typography>
      <Typography className="mb-40" component="div">
        In this variation, the persistent navigation drawer changes its width. Its resting state is
        as a mini-drawer at the same elevation as the content, clipped by the app bar. When
        expanded, it appears as the standard persistent navigation drawer.
      </Typography>
      <Typography className="mb-40" component="div">
        The mini variant is recommended for apps sections that need quick selection access alongside
        content.
      </Typography>
      <Typography className="mb-40" component="div">
        <FuseExample
          name="MiniDrawer.js"
          className="my-24"
          iframe
          component={require('../components/drawers/MiniDrawer.js').default}
          raw={require('!raw-loader!../components/drawers/MiniDrawer.js')}
        />
      </Typography>
      <Typography className="text-32 mt-40 mb-10 font-700" component="h2">
        Permanent drawer
      </Typography>
      <Typography className="mb-40" component="div">
        Permanent navigation drawers are always visible and pinned to the left edge, at the same
        elevation as the content or background. They cannot be closed.
      </Typography>
      <Typography className="mb-40" component="div">
        Permanent navigation drawers are the <strong>recommended default for desktop</strong>.
      </Typography>
      <Typography className="text-20 mt-20 mb-10 font-700" component="h3">
        Full-height navigation
      </Typography>
      <Typography className="mb-40" component="div">
        Apps focused on information consumption that use a left-to-right hierarchy.
      </Typography>
      <Typography className="mb-40" component="div">
        <FuseExample
          name="PermanentDrawerLeft.js"
          className="my-24"
          iframe
          component={require('../components/drawers/PermanentDrawerLeft.js').default}
          raw={require('!raw-loader!../components/drawers/PermanentDrawerLeft.js')}
        />
        <FuseExample
          name="PermanentDrawerRight.js"
          className="my-24"
          iframe
          component={require('../components/drawers/PermanentDrawerRight.js').default}
          raw={require('!raw-loader!../components/drawers/PermanentDrawerRight.js')}
        />
      </Typography>
      <Typography className="text-20 mt-20 mb-10 font-700" component="h3">
        Clipped under the app bar
      </Typography>
      <Typography className="mb-40" component="div">
        Apps focused on productivity that require balance across the screen.
      </Typography>
      <Typography className="mb-40" component="div">
        <FuseExample
          name="ClippedDrawer.js"
          className="my-24"
          iframe
          component={require('../components/drawers/ClippedDrawer.js').default}
          raw={require('!raw-loader!../components/drawers/ClippedDrawer.js')}
        />
      </Typography>
    </>
  );
}

export default DrawersDoc;
