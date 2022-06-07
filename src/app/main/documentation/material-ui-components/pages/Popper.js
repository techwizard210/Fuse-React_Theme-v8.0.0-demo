import FuseExample from '@fuse/core/FuseExample';
import FuseSvgIcon from '@fuse/core/FuseSvgIcon';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
/* eslint import/no-webpack-loader-syntax: off */
/* eslint import/extensions: off */
/* eslint no-unused-vars: off */
/* eslint-disable jsx-a11y/accessible-emoji */

function PopperDoc(props) {
  return (
    <>
      <div className="flex flex-1 grow-0 items-center justify-end">
        <Button
          className="normal-case"
          variant="contained"
          color="secondary"
          component="a"
          href="https://mui.com/components/popper"
          target="_blank"
          role="button"
          startIcon={<FuseSvgIcon>heroicons-outline:external-link</FuseSvgIcon>}
        >
          Reference
        </Button>
      </div>
      <Typography className="text-40 my-16 font-700" component="h1">
        Popper
      </Typography>
      <Typography className="description">
        A Popper can be used to display some content on top of another. It's an alternative to
        react-popper.
      </Typography>

      <Typography className="mb-40" component="div">
        Some important features of the <code>Popper</code> component:
      </Typography>
      <ul>
        <li>
          🕷 Popper relies on the 3rd party library (<a href="https://popper.js.org/">Popper.js</a>)
          for perfect positioning.
        </li>
        <li>💄 It&#39;s an alternative API to react-popper. It aims for simplicity.</li>
        <li>
          📦 <a href="/size-snapshot">8 kB gzipped</a>.
        </li>
        <li>
          The children is{' '}
          <a href="/material-ui/react-portal/">
            <code>Portal</code>
          </a>{' '}
          to the body of the document to avoid rendering problems. You can disable this behavior
          with <code>disablePortal</code>.
        </li>
        <li>
          The scroll isn&#39;t blocked like with the{' '}
          <a href="/material-ui/react-popover/">
            <code>Popover</code>
          </a>{' '}
          component. The placement of the popper updates with the available area in the viewport.
        </li>
        <li>
          Clicking away does not hide the <code>Popper</code> component. If you need this behavior,
          you can use{' '}
          <a href="/material-ui/react-click-away-listener/">
            <code>ClickAwayListener</code>
          </a>{' '}
          - see the example in the{' '}
          <a href="/material-ui/react-menu/#menulist-composition">menu documentation section</a>.
        </li>
        <li>
          The <code>anchorEl</code> is passed as the reference object to create a new{' '}
          <code>Popper.js</code> instance.
        </li>
      </ul>
      <Typography className="text-32 mt-40 mb-10 font-700" component="h2">
        Basic popper
      </Typography>
      <Typography className="mb-40" component="div">
        <FuseExample
          name="SimplePopper.js"
          className="my-24"
          iframe={false}
          component={require('../components/popper/SimplePopper.js').default}
          raw={require('!raw-loader!../components/popper/SimplePopper.js')}
        />
      </Typography>
      <Typography className="text-32 mt-40 mb-10 font-700" component="h2">
        Transitions
      </Typography>
      <Typography className="mb-40" component="div">
        The open/close state of the popper can be animated with a render prop child and a transition
        component. This component should respect the following conditions:
      </Typography>
      <ul>
        <li>Be a direct child descendent of the popper.</li>
        <li>
          Call the <code>onEnter</code> callback prop when the enter transition starts.
        </li>
        <li>
          Call the <code>onExited</code> callback prop when the exit transition is completed. These
          two callbacks allow the popper to unmount the child content when closed and fully
          transitioned.
        </li>
      </ul>
      <Typography className="mb-40" component="div">
        Popper has built-in support for{' '}
        <a href="https://github.com/reactjs/react-transition-group">react-transition-group</a>.
      </Typography>
      <Typography className="mb-40" component="div">
        <FuseExample
          name="TransitionsPopper.js"
          className="my-24"
          iframe={false}
          component={require('../components/popper/TransitionsPopper.js').default}
          raw={require('!raw-loader!../components/popper/TransitionsPopper.js')}
        />
      </Typography>
      <Typography className="mb-40" component="div">
        Alternatively, you can use <a href="https://github.com/pmndrs/react-spring">react-spring</a>
        .
      </Typography>
      <Typography className="mb-40" component="div">
        <FuseExample
          name="SpringPopper.js"
          className="my-24"
          iframe={false}
          component={require('../components/popper/SpringPopper.js').default}
          raw={require('!raw-loader!../components/popper/SpringPopper.js')}
        />
      </Typography>
      <Typography className="text-32 mt-40 mb-10 font-700" component="h2">
        Positioned popper
      </Typography>
      <Typography className="mb-40" component="div">
        <FuseExample
          name="PositionedPopper.js"
          className="my-24"
          iframe={false}
          component={require('../components/popper/PositionedPopper.js').default}
          raw={require('!raw-loader!../components/popper/PositionedPopper.js')}
        />
      </Typography>
      <Typography className="text-32 mt-40 mb-10 font-700" component="h2">
        Scroll playground
      </Typography>
      <Typography className="mb-40" component="div">
        <FuseExample
          name="ScrollPlayground.js"
          className="my-24"
          iframe={false}
          component={require('../components/popper/ScrollPlayground.js').default}
          raw={require('!raw-loader!../components/popper/ScrollPlayground.js')}
        />
      </Typography>
      <Typography className="text-32 mt-40 mb-10 font-700" component="h2">
        Virtual element
      </Typography>
      <Typography className="mb-40" component="div">
        The value of the <code>anchorEl</code> prop can be a reference to a fake DOM element. You
        need to create an object shaped like the{' '}
        <a href="https://popper.js.org/docs/v2/virtual-elements/">
          <code>VirtualElement</code>
        </a>
        .
      </Typography>
      <Typography className="mb-40" component="div">
        Highlight part of the text to see the popper:
      </Typography>
      <Typography className="mb-40" component="div">
        <FuseExample
          name="VirtualElementPopper.js"
          className="my-24"
          iframe={false}
          component={require('../components/popper/VirtualElementPopper.js').default}
          raw={require('!raw-loader!../components/popper/VirtualElementPopper.js')}
        />
      </Typography>
      <Typography className="text-32 mt-40 mb-10 font-700" component="h2">
        Complementary projects
      </Typography>
      <Typography className="mb-40" component="div">
        For more advanced use cases you might be able to take advantage of:
      </Typography>
      <Typography className="text-20 mt-20 mb-10 font-700" component="h3">
        PopupState helper
      </Typography>
      <Typography className="mb-40" component="div">
        There is a 3rd party package{' '}
        <a href="https://github.com/jcoreio/material-ui-popup-state">
          <code>material-ui-popup-state</code>
        </a>{' '}
        that takes care of popper state for you in most cases.
      </Typography>
      <Typography className="mb-40" component="div">
        <FuseExample
          name="PopperPopupState.js"
          className="my-24"
          iframe={false}
          component={require('../components/popper/PopperPopupState.js').default}
          raw={require('!raw-loader!../components/popper/PopperPopupState.js')}
        />
      </Typography>
    </>
  );
}

export default PopperDoc;
