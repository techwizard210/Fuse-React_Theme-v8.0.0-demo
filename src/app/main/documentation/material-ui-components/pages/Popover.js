import FuseExample from '@fuse/core/FuseExample';
import FuseSvgIcon from '@fuse/core/FuseSvgIcon';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
/* eslint import/no-webpack-loader-syntax: off */
/* eslint import/extensions: off */
/* eslint no-unused-vars: off */
/* eslint-disable jsx-a11y/accessible-emoji */

function PopoverDoc(props) {
  return (
    <>
      <div className="flex flex-1 grow-0 items-center justify-end">
        <Button
          className="normal-case"
          variant="contained"
          color="secondary"
          component="a"
          href="https://mui.com/components/popover"
          target="_blank"
          role="button"
          startIcon={<FuseSvgIcon>heroicons-outline:external-link</FuseSvgIcon>}
        >
          Reference
        </Button>
      </div>
      <Typography className="text-40 my-16 font-700" component="h1">
        Popover
      </Typography>
      <Typography className="description">
        A Popover can be used to display some content on top of another.
      </Typography>

      <Typography className="mb-40" component="div">
        Things to know when using the <code>Popover</code> component:
      </Typography>
      <ul>
        <li>
          The component is built on top of the{' '}
          <a href="/material-ui/react-modal/">
            <code>Modal</code>
          </a>{' '}
          component.
        </li>
        <li>
          The scroll and click away are blocked unlike with the{' '}
          <a href="/material-ui/react-popper/">
            <code>Popper</code>
          </a>{' '}
          component.
        </li>
      </ul>
      <Typography className="text-32 mt-40 mb-10 font-700" component="h2">
        Basic Popover
      </Typography>
      <Typography className="mb-40" component="div">
        <FuseExample
          name="BasicPopover.js"
          className="my-24"
          iframe={false}
          component={require('../components/popover/BasicPopover.js').default}
          raw={require('!raw-loader!../components/popover/BasicPopover.js')}
        />
      </Typography>
      <Typography className="text-32 mt-40 mb-10 font-700" component="h2">
        Anchor playground
      </Typography>
      <Typography className="mb-40" component="div">
        Use the radio buttons to adjust the <code>anchorOrigin</code> and{' '}
        <code>transformOrigin</code> positions. You can also set the <code>anchorReference</code> to{' '}
        <code>anchorPosition</code> or <code>anchorEl</code>. When it is <code>anchorPosition</code>
        , the component will, instead of <code>anchorEl</code>, refer to the{' '}
        <code>anchorPosition</code> prop which you can adjust to set the position of the popover.
      </Typography>
      <Typography className="mb-40" component="div">
        <FuseExample
          name="AnchorPlayground.js"
          className="my-24"
          iframe={false}
          component={require('../components/popover/AnchorPlayground.js').default}
          raw={require('!raw-loader!../components/popover/AnchorPlayground.js')}
        />
      </Typography>
      <Typography className="text-32 mt-40 mb-10 font-700" component="h2">
        Mouse over interaction
      </Typography>
      <Typography className="mb-40" component="div">
        This demo demonstrates how to use the <code>Popover</code> component and the mouseover event
        to achieve popover behavior.
      </Typography>
      <Typography className="mb-40" component="div">
        <FuseExample
          name="MouseOverPopover.js"
          className="my-24"
          iframe={false}
          component={require('../components/popover/MouseOverPopover.js').default}
          raw={require('!raw-loader!../components/popover/MouseOverPopover.js')}
        />
      </Typography>
      <Typography className="text-32 mt-40 mb-10 font-700" component="h2">
        Complementary projects
      </Typography>
      <Typography className="mb-40" component="div">
        For more advanced use cases, you might be able to take advantage of:
      </Typography>
      <Typography className="text-20 mt-20 mb-10 font-700" component="h3">
        PopupState helper
      </Typography>
      <Typography className="mb-40" component="div">
        There is a 3rd party package{' '}
        <a href="https://github.com/jcoreio/material-ui-popup-state">
          <code>material-ui-popup-state</code>
        </a>{' '}
        that takes care of popover state for you in most cases.
      </Typography>
      <Typography className="mb-40" component="div">
        <FuseExample
          name="PopoverPopupState.js"
          className="my-24"
          iframe={false}
          component={require('../components/popover/PopoverPopupState.js').default}
          raw={require('!raw-loader!../components/popover/PopoverPopupState.js')}
        />
      </Typography>
    </>
  );
}

export default PopoverDoc;
