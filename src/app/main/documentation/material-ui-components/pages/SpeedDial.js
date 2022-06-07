import FuseExample from '@fuse/core/FuseExample';
import FuseSvgIcon from '@fuse/core/FuseSvgIcon';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
/* eslint import/no-webpack-loader-syntax: off */
/* eslint import/extensions: off */
/* eslint no-unused-vars: off */
/* eslint-disable jsx-a11y/accessible-emoji */

function SpeedDialDoc(props) {
  return (
    <>
      <div className="flex flex-1 grow-0 items-center justify-end">
        <Button
          className="normal-case"
          variant="contained"
          color="secondary"
          component="a"
          href="https://mui.com/components/speed-dial"
          target="_blank"
          role="button"
          startIcon={<FuseSvgIcon>heroicons-outline:external-link</FuseSvgIcon>}
        >
          Reference
        </Button>
      </div>
      <Typography className="text-40 my-16 font-700" component="h1">
        Speed dial
      </Typography>
      <Typography className="description">
        When pressed, a floating action button can display three to six related actions in the form
        of a speed dial.
      </Typography>

      <Typography className="mb-40" component="div">
        If more than six actions are needed, something other than a FAB should be used to present
        them.
      </Typography>
      <Typography className="text-32 mt-40 mb-10 font-700" component="h2">
        Basic speed dial
      </Typography>
      <Typography className="mb-40" component="div">
        The floating action button can display related actions.
      </Typography>
      <Typography className="mb-40" component="div">
        <FuseExample
          name="BasicSpeedDial.js"
          className="my-24"
          iframe={false}
          component={require('../components/speed-dial/BasicSpeedDial.js').default}
          raw={require('!raw-loader!../components/speed-dial/BasicSpeedDial.js')}
        />
      </Typography>
      <Typography className="text-32 mt-40 mb-10 font-700" component="h2">
        Playground
      </Typography>
      <Typography className="mb-40" component="div">
        <FuseExample
          name="PlaygroundSpeedDial.js"
          className="my-24"
          iframe={false}
          component={require('../components/speed-dial/PlaygroundSpeedDial.js').default}
          raw={require('!raw-loader!../components/speed-dial/PlaygroundSpeedDial.js')}
        />
      </Typography>
      <Typography className="text-32 mt-40 mb-10 font-700" component="h2">
        Controlled speed dial
      </Typography>
      <Typography className="mb-40" component="div">
        The open state of the component can be controlled with the <code>open</code>/
        <code>onOpen</code>/<code>onClose</code> props.
      </Typography>
      <Typography className="mb-40" component="div">
        <FuseExample
          name="ControlledOpenSpeedDial.js"
          className="my-24"
          iframe={false}
          component={require('../components/speed-dial/ControlledOpenSpeedDial.js').default}
          raw={require('!raw-loader!../components/speed-dial/ControlledOpenSpeedDial.js')}
        />
      </Typography>
      <Typography className="text-32 mt-40 mb-10 font-700" component="h2">
        Custom close icon
      </Typography>
      <Typography className="mb-40" component="div">
        You can provide an alternate icon for the closed and open states using the <code>icon</code>{' '}
        and <code>openIcon</code> props of the <code>SpeedDialIcon</code> component.
      </Typography>
      <Typography className="mb-40" component="div">
        <FuseExample
          name="OpenIconSpeedDial.js"
          className="my-24"
          iframe={false}
          component={require('../components/speed-dial/OpenIconSpeedDial.js').default}
          raw={require('!raw-loader!../components/speed-dial/OpenIconSpeedDial.js')}
        />
      </Typography>
      <Typography className="text-32 mt-40 mb-10 font-700" component="h2">
        Persistent action tooltips
      </Typography>
      <Typography className="mb-40" component="div">
        The SpeedDialActions tooltips can be displayed persistently so that users don&#39;t have to
        long-press to see the tooltip on touch devices.
      </Typography>
      <Typography className="mb-40" component="div">
        It is enabled here across all devices for demo purposes, but in production it could use the{' '}
        <code>isTouch</code> logic to conditionally set the prop.
      </Typography>
      <Typography className="mb-40" component="div">
        <FuseExample
          name="SpeedDialTooltipOpen.js"
          className="my-24"
          iframe={false}
          component={require('../components/speed-dial/SpeedDialTooltipOpen.js').default}
          raw={require('!raw-loader!../components/speed-dial/SpeedDialTooltipOpen.js')}
        />
      </Typography>
      <Typography className="text-32 mt-40 mb-10 font-700" component="h2">
        Accessibility
      </Typography>
      <Typography className="text-20 mt-20 mb-10 font-700" component="h3">
        ARIA
      </Typography>
      <Typography className="text-16 mt-16 mb-10" component="h4">
        Required
      </Typography>
      <ul>
        <li>
          You should provide an <code>ariaLabel</code> for the speed dial component.
        </li>
        <li>
          You should provide a <code>tooltipTitle</code> for each speed dial action.
        </li>
      </ul>
      <Typography className="text-16 mt-16 mb-10" component="h4">
        Provided
      </Typography>
      <ul>
        <li>
          The Fab has <code>aria-haspopup</code>, <code>aria-expanded</code> and{' '}
          <code>aria-controls</code> attributes.
        </li>
        <li>
          The speed dial actions container has <code>{`role="menu"`}</code> and{' '}
          <code>aria-orientation</code> set according to the direction.
        </li>
        <li>
          The speed dial actions have <code>{`role="menuitem"`}</code>, and an{' '}
          <code>aria-describedby</code> attribute that references the associated tooltip.
        </li>
      </ul>
      <Typography className="text-20 mt-20 mb-10 font-700" component="h3">
        Keyboard
      </Typography>
      <ul>
        <li>The speed dial opens on focus.</li>
        <li>
          The Space and Enter keys trigger the selected speed dial action, and toggle the speed dial
          open state.
        </li>
        <li>
          The cursor keys move focus to the next or previous speed dial action. (Note that any
          cursor direction can be used initially to open the speed dial. This enables the expected
          behavior for the actual or perceived orientation of the speed dial, for example for a
          screen reader user who perceives the speed dial as a drop-down menu.)
        </li>
        <li>
          The Escape key closes the speed dial and, if a speed dial action was focused, returns
          focus to the Fab.
        </li>
      </ul>
    </>
  );
}

export default SpeedDialDoc;
