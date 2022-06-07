import FuseExample from '@fuse/core/FuseExample';
import FuseHighlight from '@fuse/core/FuseHighlight';
import FuseSvgIcon from '@fuse/core/FuseSvgIcon';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
/* eslint import/no-webpack-loader-syntax: off */
/* eslint import/extensions: off */
/* eslint no-unused-vars: off */
/* eslint-disable jsx-a11y/accessible-emoji */

function NoSsrDoc(props) {
  return (
    <>
      <div className="flex flex-1 grow-0 items-center justify-end">
        <Button
          className="normal-case"
          variant="contained"
          color="secondary"
          component="a"
          href="https://mui.com/components/no-ssr"
          target="_blank"
          role="button"
          startIcon={<FuseSvgIcon>heroicons-outline:external-link</FuseSvgIcon>}
        >
          Reference
        </Button>
      </div>
      <Typography className="text-40 my-16 font-700" component="h1">
        No SSR
      </Typography>
      <Typography className="description">
        NoSsr purposely removes components from the subject of Server Side Rendering (SSR).
      </Typography>

      <Typography className="mb-40" component="div">
        This component can be useful in a variety of situations:
      </Typography>
      <ul>
        <li>Escape hatch for broken dependencies not supporting SSR.</li>
        <li>Improve the time-to-first paint on the client by only rendering above the fold.</li>
        <li>Reduce the rendering time on the server.</li>
        <li>Under too heavy server load, you can turn on service degradation.</li>
        <li>
          Improve the time-to-interactive by only rendering what&#39;s important (with the{' '}
          <code>defer</code> property).
        </li>
      </ul>
      <Typography className="text-32 mt-40 mb-10 font-700" component="h2">
        Client-side deferring
      </Typography>
      <Typography className="mb-40" component="div">
        <FuseExample
          name="SimpleNoSsr.js"
          className="my-24"
          iframe={false}
          component={require('../components/no-ssr/SimpleNoSsr.js').default}
          raw={require('!raw-loader!../components/no-ssr/SimpleNoSsr.js')}
        />
      </Typography>
      <Typography className="text-32 mt-40 mb-10 font-700" component="h2">
        Frame deferring
      </Typography>
      <Typography className="mb-40" component="div">
        At its core, the NoSsr component&#39;s purpose is to <strong>defer rendering</strong>. As
        it&#39;s illustrated in the previous demo, you can use it to defer the rendering from the
        server to the client.
      </Typography>
      <Typography className="mb-40" component="div">
        But you can also use it to defer the rendering within the client itself. You can{' '}
        <strong>wait a screen frame</strong> with the <code>defer</code> property to render the
        children. React does{' '}
        <a href="https://reactjs.org/docs/strict-mode.html#detecting-unexpected-side-effects">
          2 commits
        </a>{' '}
        instead of 1.
      </Typography>
      <Typography className="mb-40" component="div">
        <FuseExample
          name="FrameDeferring.js"
          className="my-24"
          iframe={false}
          component={require('../components/no-ssr/FrameDeferring.js').default}
          raw={require('!raw-loader!../components/no-ssr/FrameDeferring.js')}
        />
      </Typography>
      <Typography className="text-32 mt-40 mb-10 font-700" component="h2">
        Unstyled
      </Typography>
      <ul>
        <li>
          📦 <a href="https://bundlephobia.com/package/@mui/base@latest">362 B gzipped</a>
        </li>
      </ul>
      <Typography className="mb-40" component="div">
        As the component does not have any styles, it also comes with the Base package.
      </Typography>

      <FuseHighlight component="pre" className="language-js">
        {` 
import NoSsr from '@mui/base/NoSsr';
`}
      </FuseHighlight>
    </>
  );
}

export default NoSsrDoc;
