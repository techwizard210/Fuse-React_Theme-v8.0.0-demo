import FuseExample from '@fuse/core/FuseExample';
import FuseHighlight from '@fuse/core/FuseHighlight';
import FuseSvgIcon from '@fuse/core/FuseSvgIcon';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
/* eslint import/no-webpack-loader-syntax: off */
/* eslint import/extensions: off */
/* eslint no-unused-vars: off */
/* eslint-disable jsx-a11y/accessible-emoji */

function ClickAwayListenerDoc(props) {
  return (
    <>
      <div className="flex flex-1 grow-0 items-center justify-end">
        <Button
          className="normal-case"
          variant="contained"
          color="secondary"
          component="a"
          href="https://mui.com/components/click-away-listener"
          target="_blank"
          role="button"
          startIcon={<FuseSvgIcon>heroicons-outline:external-link</FuseSvgIcon>}
        >
          Reference
        </Button>
      </div>
      <Typography className="text-40 my-16 font-700" component="h1">
        Click-away listener
      </Typography>
      <Typography className="description">
        Detect if a click event happened outside of an element. It listens for clicks that occur
        somewhere in the document.
      </Typography>

      <ul>
        <li>
          📦 <a href="/size-snapshot">992 B gzipped</a>.
        </li>
        <li>⚛️ Supports portals</li>
      </ul>
      <Typography className="text-32 mt-40 mb-10 font-700" component="h2">
        Example
      </Typography>
      <Typography className="mb-40" component="div">
        For instance, if you need to hide a menu dropdown when people click anywhere else on your
        page:
      </Typography>
      <Typography className="mb-40" component="div">
        <FuseExample
          name="ClickAway.js"
          className="my-24"
          iframe={false}
          component={require('../components/click-away-listener/ClickAway.js').default}
          raw={require('!raw-loader!../components/click-away-listener/ClickAway.js')}
        />
      </Typography>
      <Typography className="mb-40" component="div">
        Notice that the component only accepts one child element. You can find a more advanced demo
        on the{' '}
        <a href="/material-ui/react-menu/#menulist-composition">Menu documentation section</a>.
      </Typography>
      <Typography className="text-32 mt-40 mb-10 font-700" component="h2">
        Portal
      </Typography>
      <Typography className="mb-40" component="div">
        The following demo uses{' '}
        <a href="/material-ui/react-portal/">
          <code>Portal</code>
        </a>{' '}
        to render the dropdown into a new &quot;subtree&quot; outside of current DOM hierarchy.
      </Typography>
      <Typography className="mb-40" component="div">
        <FuseExample
          name="PortalClickAway.js"
          className="my-24"
          iframe={false}
          component={require('../components/click-away-listener/PortalClickAway.js').default}
          raw={require('!raw-loader!../components/click-away-listener/PortalClickAway.js')}
        />
      </Typography>
      <Typography className="text-32 mt-40 mb-10 font-700" component="h2">
        Leading edge
      </Typography>
      <Typography className="mb-40" component="div">
        By default, the component responds to the trailing events (click + touch end). However, you
        can configure it to respond to the leading events (mouse down + touch start).
      </Typography>
      <Typography className="mb-40" component="div">
        <FuseExample
          name="LeadingClickAway.js"
          className="my-24"
          iframe={false}
          component={require('../components/click-away-listener/LeadingClickAway.js').default}
          raw={require('!raw-loader!../components/click-away-listener/LeadingClickAway.js')}
        />
      </Typography>
      <Typography className="mb-40" component="div">
        :::warning ⚠️ In this mode, only interactions on the scrollbar of the document is ignored.
        :::
      </Typography>
      <Typography className="text-32 mt-40 mb-10 font-700" component="h2">
        Accessibility
      </Typography>
      <Typography className="mb-40" component="div">
        By default <code>{`<ClickAwayListener />`}</code> will add an <code>onClick</code> handler
        to its children. This can result in e.g. screen readers announcing the children as
        clickable. However, the purpose of the <code>onClick</code> handler is not to make{' '}
        <code>children</code> interactive.
      </Typography>
      <Typography className="mb-40" component="div">
        In order to prevent screen readers from marking non-interactive children as
        &quot;clickable&quot; add <code>{`role="presentation"`}</code> to the immediate children:
      </Typography>

      <FuseHighlight component="pre" className="language-tsx">
        {` 
<ClickAwayListener>
  <div role="presentation">
    <h1>non-interactive heading</h1>
  </div>
</ClickAwayListern>
`}
      </FuseHighlight>
      <Typography className="mb-40" component="div">
        This is also required to fix a quirk in NVDA when using Firefox that prevents announcement
        of alert messages (see{' '}
        <a href="https://github.com/mui/material-ui/issues/29080">mui/material-ui#29080</a>).
      </Typography>
      <Typography className="text-32 mt-40 mb-10 font-700" component="h2">
        Unstyled
      </Typography>
      <ul>
        <li>
          📦 <a href="https://bundlephobia.com/package/@mui/base@latest">981 B gzipped</a>
        </li>
      </ul>
      <Typography className="mb-40" component="div">
        As the component does not have any styles, it also comes with the Base package.
      </Typography>

      <FuseHighlight component="pre" className="language-js">
        {` 
import ClickAwayListener from '@mui/base/ClickAwayListener';
`}
      </FuseHighlight>
    </>
  );
}

export default ClickAwayListenerDoc;
