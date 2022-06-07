import FuseExample from '@fuse/core/FuseExample';
import FuseHighlight from '@fuse/core/FuseHighlight';
import FuseSvgIcon from '@fuse/core/FuseSvgIcon';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
/* eslint import/no-webpack-loader-syntax: off */
/* eslint import/extensions: off */
/* eslint no-unused-vars: off */
/* eslint-disable jsx-a11y/accessible-emoji */

function SnackbarsDoc(props) {
  return (
    <>
      <div className="flex flex-1 grow-0 items-center justify-end">
        <Button
          className="normal-case"
          variant="contained"
          color="secondary"
          component="a"
          href="https://mui.com/components/snackbars"
          target="_blank"
          role="button"
          startIcon={<FuseSvgIcon>heroicons-outline:external-link</FuseSvgIcon>}
        >
          Reference
        </Button>
      </div>
      <Typography className="text-40 my-16 font-700" component="h1">
        Snackbar
      </Typography>
      <Typography className="description">
        Snackbars provide brief notifications. The component is also known as a toast.
      </Typography>

      <Typography className="mb-40" component="div">
        Snackbars inform users of a process that an app has performed or will perform. They appear
        temporarily, towards the bottom of the screen. They shouldn&#39;t interrupt the user
        experience, and they don&#39;t require user input to disappear.
      </Typography>
      <Typography className="mb-40" component="div">
        Snackbars contain a single line of text directly related to the operation performed. They
        may contain a text action, but no icons. You can use them to display notifications.
      </Typography>
      <Typography className="mb-40" component="div">
        <strong>Frequency</strong>: Only one snackbar may be displayed at a time.
      </Typography>
      <Typography className="text-32 mt-40 mb-10 font-700" component="h2">
        Simple snackbars
      </Typography>
      <Typography className="mb-40" component="div">
        A basic snackbar that aims to reproduce Google Keep&#39;s snackbar behavior.
      </Typography>
      <Typography className="mb-40" component="div">
        <FuseExample
          name="SimpleSnackbar.js"
          className="my-24"
          iframe={false}
          component={require('../components/snackbars/SimpleSnackbar.js').default}
          raw={require('!raw-loader!../components/snackbars/SimpleSnackbar.js')}
        />
      </Typography>
      <Typography className="text-32 mt-40 mb-10 font-700" component="h2">
        Customization
      </Typography>
      <Typography className="mb-40" component="div">
        Here are some examples of customizing the component. You can learn more about this in the{' '}
        <a href="/material-ui/customization/how-to-customize/">overrides documentation page</a>.
      </Typography>
      <Typography className="mb-40" component="div">
        <FuseExample
          name="CustomizedSnackbars.js"
          className="my-24"
          iframe={false}
          component={require('../components/snackbars/CustomizedSnackbars.js').default}
          raw={require('!raw-loader!../components/snackbars/CustomizedSnackbars.js')}
        />
      </Typography>
      <Typography className="text-32 mt-40 mb-10 font-700" component="h2">
        Positioned snackbars
      </Typography>
      <Typography className="mb-40" component="div">
        In wide layouts, snackbars can be left-aligned or center-aligned if they are consistently
        placed on the same spot at the bottom of the screen, however there may be circumstances
        where the placement of the snackbar needs to be more flexible. You can control the position
        of the snackbar by specifying the <code>anchorOrigin</code> prop.
      </Typography>
      <Typography className="mb-40" component="div">
        <FuseExample
          name="PositionedSnackbar.js"
          className="my-24"
          iframe={false}
          component={require('../components/snackbars/PositionedSnackbar.js').default}
          raw={require('!raw-loader!../components/snackbars/PositionedSnackbar.js')}
        />
      </Typography>
      <Typography className="text-32 mt-40 mb-10 font-700" component="h2">
        Message Length
      </Typography>
      <Typography className="mb-40" component="div">
        Some snackbars with varying message length.
      </Typography>
      <Typography className="mb-40" component="div">
        <FuseExample
          name="LongTextSnackbar.js"
          className="my-24"
          iframe={false}
          component={require('../components/snackbars/LongTextSnackbar.js').default}
          raw={require('!raw-loader!../components/snackbars/LongTextSnackbar.js')}
        />
      </Typography>
      <Typography className="text-32 mt-40 mb-10 font-700" component="h2">
        Transitions
      </Typography>
      <Typography className="text-20 mt-20 mb-10 font-700" component="h3">
        Consecutive Snackbars
      </Typography>
      <Typography className="mb-40" component="div">
        When multiple snackbar updates are necessary, they should appear one at a time.
      </Typography>
      <Typography className="mb-40" component="div">
        <FuseExample
          name="ConsecutiveSnackbars.js"
          className="my-24"
          iframe={false}
          component={require('../components/snackbars/ConsecutiveSnackbars.js').default}
          raw={require('!raw-loader!../components/snackbars/ConsecutiveSnackbars.js')}
        />
      </Typography>
      <Typography className="text-20 mt-20 mb-10 font-700" component="h3">
        Snackbars and floating action buttons (FABs)
      </Typography>
      <Typography className="mb-40" component="div">
        Snackbars should appear above FABs (on mobile).
      </Typography>
      <Typography className="mb-40" component="div">
        <FuseExample
          name="FabIntegrationSnackbar.js"
          className="my-24"
          iframe
          component={require('../components/snackbars/FabIntegrationSnackbar.js').default}
          raw={require('!raw-loader!../components/snackbars/FabIntegrationSnackbar.js')}
        />
      </Typography>
      <Typography className="text-20 mt-20 mb-10 font-700" component="h3">
        Change transition
      </Typography>
      <Typography className="mb-40" component="div">
        <a href="/material-ui/transitions/#grow">Grow</a> is the default transition but you can use
        a different one.
      </Typography>
      <Typography className="mb-40" component="div">
        <FuseExample
          name="TransitionsSnackbar.js"
          className="my-24"
          iframe={false}
          component={require('../components/snackbars/TransitionsSnackbar.js').default}
          raw={require('!raw-loader!../components/snackbars/TransitionsSnackbar.js')}
        />
      </Typography>
      <Typography className="text-20 mt-20 mb-10 font-700" component="h3">
        Control Slide direction
      </Typography>
      <Typography className="mb-40" component="div">
        You can change the direction of the <a href="/material-ui/transitions/#slide">Slide</a>{' '}
        transition.
      </Typography>
      <Typography className="mb-40" component="div">
        Example of making the slide transition to the left:
      </Typography>

      <FuseHighlight component="pre" className="language-jsx">
        {` 
import Slide from '@mui/material/Slide';

function TransitionLeft(props) {
  return <Slide {...props} direction="left" />;
}

export default function MyComponent() {
  return <Snackbar TransitionComponent={TransitionLeft} />;
}
`}
      </FuseHighlight>
      <Typography className="mb-40" component="div">
        Other examples:
      </Typography>
      <Typography className="mb-40" component="div">
        <FuseExample
          name="DirectionSnackbar.js"
          className="my-24"
          iframe={false}
          component={require('../components/snackbars/DirectionSnackbar.js').default}
          raw={require('!raw-loader!../components/snackbars/DirectionSnackbar.js')}
        />
      </Typography>
      <Typography className="text-32 mt-40 mb-10 font-700" component="h2">
        Complementary projects
      </Typography>
      <Typography className="mb-40" component="div">
        For more advanced use cases you might be able to take advantage of:
      </Typography>
      <Typography className="text-20 mt-20 mb-10 font-700" component="h3">
        notistack
      </Typography>
      <Typography className="mb-40" component="div">
        {' '}
        src="https://img.shields.io/github/stars/iamhosseindhv/notistack.svg?style=social&label=Stars"
        alt="stars/> src="https://img.shields.io/npm/dm/notistack.svg" alt="npm downloads/>
      </Typography>
      <Typography className="mb-40" component="div">
        This example demonstrates how to use{' '}
        <a href="https://github.com/iamhosseindhv/notistack">notistack</a>. notistack has an{' '}
        <strong>imperative API</strong> that makes it easy to display snackbars, without having to
        handle their open/close state. It also enables you to <strong>stack</strong> them on top of
        one another (although this is discouraged by the Material Design guidelines).
      </Typography>
      <Typography className="mb-40" component="div">
        <FuseExample
          name="IntegrationNotistack.js"
          className="my-24"
          iframe={false}
          component={require('../components/snackbars/IntegrationNotistack.js').default}
          raw={require('!raw-loader!../components/snackbars/IntegrationNotistack.js')}
        />
      </Typography>
      <Typography className="text-32 mt-40 mb-10 font-700" component="h2">
        Accessibility
      </Typography>
      <Typography className="mb-40" component="div">
        (WAI-ARIA:{' '}
        <a href="https://www.w3.org/TR/wai-aria-1.1/#alert">
          https://www.w3.org/TR/wai-aria-1.1/#alert
        </a>
        )
      </Typography>
      <Typography className="mb-40" component="div">
        By default, the snackbar won&#39;t auto-hide. However, if you decide to use the{' '}
        <code>autoHideDuration</code> prop, it&#39;s recommended to give the user{' '}
        <a href="https://www.w3.org/TR/UNDERSTANDING-WCAG20/time-limits.html">sufficient time</a> to
        respond.
      </Typography>
      <Typography className="mb-40" component="div">
        When open, <strong>every</strong> <code>Snackbar</code> will be dismissed if{' '}
        <kbd className="key">Escape</kbd> is pressed. Unless you don&#39;t handle{' '}
        <code>onClose</code> with the <code>{`"escapeKeyDown"`}</code> reason. If you want to limit
        this behavior to only dismiss the oldest currently open Snackbar call{' '}
        <code>event.preventDefault</code> in <code>onClose</code>.
      </Typography>

      <FuseHighlight component="pre" className="language-jsx">
        {` 
export default function MyComponent() {
  const [open, setOpen] = React.useState(true);

  return (
    <React.Fragment>
      <Snackbar
        open={open}
        onClose={(event, reason) => {
          // \`reason === 'escapeKeyDown'\` if \`Escape\` was pressed
          setOpen(false);
          // call \`event.preventDefault\` to only close one Snackbar at a time.
        
      />
      <Snackbar open={open} onClose={() => setOpen(false)} />
    </React.Fragment>
  );
}
`}
      </FuseHighlight>
    </>
  );
}

export default SnackbarsDoc;
