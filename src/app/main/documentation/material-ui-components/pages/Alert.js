import FuseExample from '@fuse/core/FuseExample';
import FuseSvgIcon from '@fuse/core/FuseSvgIcon';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
/* eslint import/no-webpack-loader-syntax: off */
/* eslint import/extensions: off */
/* eslint no-unused-vars: off */
/* eslint-disable jsx-a11y/accessible-emoji */

function AlertDoc(props) {
  return (
    <>
      <div className="flex flex-1 grow-0 items-center justify-end">
        <Button
          className="normal-case"
          variant="contained"
          color="secondary"
          component="a"
          href="https://mui.com/components/alert"
          target="_blank"
          role="button"
          startIcon={<FuseSvgIcon>heroicons-outline:external-link</FuseSvgIcon>}
        >
          Reference
        </Button>
      </div>
      <Typography className="text-40 my-16 font-700" component="h1">
        Alert
      </Typography>
      <Typography className="description">
        An alert displays a short, important message in a way that attracts the user's attention
        without interrupting the user's task.
      </Typography>

      <Typography className="mb-40" component="div">
        <strong>Note:</strong> This component is not documented in the{' '}
        <a href="https://material.io/">Material Design guidelines</a>, but MUI supports it.
      </Typography>
      <Typography className="text-32 mt-40 mb-10 font-700" component="h2">
        Basic alerts
      </Typography>
      <Typography className="mb-40" component="div">
        The alert offers four severity levels that set a distinctive icon and color.
      </Typography>
      <Typography className="mb-40" component="div">
        <FuseExample
          name="BasicAlerts.js"
          className="my-24"
          iframe={false}
          component={require('../components/alert/BasicAlerts.js').default}
          raw={require('!raw-loader!../components/alert/BasicAlerts.js')}
        />
      </Typography>
      <Typography className="text-32 mt-40 mb-10 font-700" component="h2">
        Description
      </Typography>
      <Typography className="mb-40" component="div">
        You can use the <code>AlertTitle</code> component to display a formatted title above the
        content.
      </Typography>
      <Typography className="mb-40" component="div">
        <FuseExample
          name="DescriptionAlerts.js"
          className="my-24"
          iframe={false}
          component={require('../components/alert/DescriptionAlerts.js').default}
          raw={require('!raw-loader!../components/alert/DescriptionAlerts.js')}
        />
      </Typography>
      <Typography className="text-32 mt-40 mb-10 font-700" component="h2">
        Actions
      </Typography>
      <Typography className="mb-40" component="div">
        An alert can have an action, such as a close or undo button. It is rendered after the
        message, at the end of the alert.
      </Typography>
      <Typography className="mb-40" component="div">
        If an <code>onClose</code> callback is provided and no <code>action</code> prop is set, a
        close icon is displayed. The <code>action</code> prop can be used to provide an alternative
        action, for example using a Button or IconButton.
      </Typography>
      <Typography className="mb-40" component="div">
        <FuseExample
          name="ActionAlerts.js"
          className="my-24"
          iframe={false}
          component={require('../components/alert/ActionAlerts.js').default}
          raw={require('!raw-loader!../components/alert/ActionAlerts.js')}
        />
      </Typography>
      <Typography className="text-20 mt-20 mb-10 font-700" component="h3">
        Transition
      </Typography>
      <Typography className="mb-40" component="div">
        You can use a <a href="/material-ui/transitions/">transition component</a> such as{' '}
        <code>Collapse</code> to transition the appearance of the alert.
      </Typography>
      <Typography className="mb-40" component="div">
        <FuseExample
          name="TransitionAlerts.js"
          className="my-24"
          iframe={false}
          component={require('../components/alert/TransitionAlerts.js').default}
          raw={require('!raw-loader!../components/alert/TransitionAlerts.js')}
        />
      </Typography>
      <Typography className="text-32 mt-40 mb-10 font-700" component="h2">
        Icons
      </Typography>
      <Typography className="mb-40" component="div">
        The <code>icon</code> prop allows you to add an icon to the beginning of the alert
        component. This will override the default icon for the specified severity.
      </Typography>
      <Typography className="mb-40" component="div">
        You can change the default severity to icon mapping with the <code>iconMapping</code> prop.
        This can be defined globally using{' '}
        <a href="/material-ui/customization/theme-components/#default-props">theme customization</a>
        .
      </Typography>
      <Typography className="mb-40" component="div">
        Setting the icon prop to <code>false</code> will remove the icon altogether.
      </Typography>
      <Typography className="mb-40" component="div">
        <FuseExample
          name="IconAlerts.js"
          className="my-24"
          iframe={false}
          component={require('../components/alert/IconAlerts.js').default}
          raw={require('!raw-loader!../components/alert/IconAlerts.js')}
        />
      </Typography>
      <Typography className="text-32 mt-40 mb-10 font-700" component="h2">
        Variants
      </Typography>
      <Typography className="mb-40" component="div">
        Two additional variants are available – outlined, and filled:
      </Typography>
      <Typography className="text-20 mt-20 mb-10 font-700" component="h3">
        Outlined
      </Typography>
      <Typography className="mb-40" component="div">
        <FuseExample
          name="OutlinedAlerts.js"
          className="my-24"
          iframe={false}
          component={require('../components/alert/OutlinedAlerts.js').default}
          raw={require('!raw-loader!../components/alert/OutlinedAlerts.js')}
        />
      </Typography>
      <Typography className="text-20 mt-20 mb-10 font-700" component="h3">
        Filled
      </Typography>
      <Typography className="mb-40" component="div">
        <FuseExample
          name="FilledAlerts.js"
          className="my-24"
          iframe={false}
          component={require('../components/alert/FilledAlerts.js').default}
          raw={require('!raw-loader!../components/alert/FilledAlerts.js')}
        />
      </Typography>
      <Typography className="text-32 mt-40 mb-10 font-700" component="h2">
        Toast
      </Typography>
      <Typography className="mb-40" component="div">
        You can use the Snackbar to{' '}
        <a href="/material-ui/react-snackbar/#customized-snackbars">display a toast</a> with the
        Alert.
      </Typography>
      <Typography className="text-32 mt-40 mb-10 font-700" component="h2">
        Color
      </Typography>
      <Typography className="mb-40" component="div">
        The <code>color</code> prop will override the default color for the specified severity.
      </Typography>
      <Typography className="mb-40" component="div">
        <FuseExample
          name="ColorAlerts.js"
          className="my-24"
          iframe={false}
          component={require('../components/alert/ColorAlerts.js').default}
          raw={require('!raw-loader!../components/alert/ColorAlerts.js')}
        />
      </Typography>
      <Typography className="text-32 mt-40 mb-10 font-700" component="h2">
        Accessibility
      </Typography>
      <Typography className="mb-40" component="div">
        (WAI-ARIA:{' '}
        <a href="https://www.w3.org/TR/wai-aria-practices/#alert">
          https://www.w3.org/TR/wai-aria-practices/#alert
        </a>
        )
      </Typography>
      <Typography className="mb-40" component="div">
        When the component is dynamically displayed, the content is automatically announced by most
        screen readers. At this time, screen readers do not inform users of alerts that are present
        when the page loads.
      </Typography>
      <Typography className="mb-40" component="div">
        Using color to add meaning only provides a visual indication, which will not be conveyed to
        users of assistive technologies such as screen readers. Ensure that information denoted by
        the color is either obvious from the content itself (for example the visible text), or is
        included through alternative means, such as additional hidden text.
      </Typography>
      <Typography className="mb-40" component="div">
        Actions must have a tab index of 0 so that they can be reached by keyboard-only users.
      </Typography>
    </>
  );
}

export default AlertDoc;
