import FuseExample from '@fuse/core/FuseExample';
import FuseHighlight from '@fuse/core/FuseHighlight';
import FuseSvgIcon from '@fuse/core/FuseSvgIcon';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
/* eslint import/no-webpack-loader-syntax: off */
/* eslint import/extensions: off */
/* eslint no-unused-vars: off */
/* eslint-disable jsx-a11y/accessible-emoji */

function SteppersDoc(props) {
  return (
    <>
      <div className="flex flex-1 grow-0 items-center justify-end">
        <Button
          className="normal-case"
          variant="contained"
          color="secondary"
          component="a"
          href="https://mui.com/components/steppers"
          target="_blank"
          role="button"
          startIcon={<FuseSvgIcon>heroicons-outline:external-link</FuseSvgIcon>}
        >
          Reference
        </Button>
      </div>
      <Typography className="text-40 my-16 font-700" component="h1">
        Stepper
      </Typography>
      <Typography className="description">
        Steppers convey progress through numbered steps. It provides a wizard-like workflow.
      </Typography>

      <Typography className="mb-40" component="div">
        Steppers display progress through a sequence of logical and numbered steps. They may also be
        used for navigation. Steppers may display a transient feedback message after a step is
        saved.
      </Typography>
      <ul>
        <li>
          <strong>Types of Steps</strong>: Editable, Non-editable, Mobile, Optional
        </li>
        <li>
          <strong>Types of Steppers</strong>: Horizontal, Vertical, Linear, Non-linear
        </li>
      </ul>
      <Typography className="mb-40" component="div">
        :::warning
        <strong>Note:</strong> Steppers are no longer documented in the{' '}
        <a href="https://material.io/">Material Design guidelines</a>, but Material UI will continue
        to support them. :::
      </Typography>
      <Typography className="text-32 mt-40 mb-10 font-700" component="h2">
        Horizontal stepper
      </Typography>
      <Typography className="mb-40" component="div">
        Horizontal steppers are ideal when the contents of one step depend on an earlier step.
      </Typography>
      <Typography className="mb-40" component="div">
        Avoid using long step names in horizontal steppers.
      </Typography>
      <Typography className="text-20 mt-20 mb-10 font-700" component="h3">
        Linear
      </Typography>
      <Typography className="mb-40" component="div">
        A linear stepper allows the user to complete the steps in sequence.
      </Typography>
      <Typography className="mb-40" component="div">
        The <code>Stepper</code> can be controlled by passing the current step index (zero-based) as
        the <code>activeStep</code> prop. <code>Stepper</code> orientation is set using the{' '}
        <code>orientation</code> prop.
      </Typography>
      <Typography className="mb-40" component="div">
        This example also shows the use of an optional step by placing the <code>optional</code>{' '}
        prop on the second <code>Step</code> component. Note that it&#39;s up to you to manage when
        an optional step is skipped. Once you&#39;ve determined this for a particular step you must
        set <code>{`completed={false}`}</code> to signify that even though the active step index has
        gone beyond the optional step, it&#39;s not actually complete.
      </Typography>
      <Typography className="mb-40" component="div">
        <FuseExample
          name="HorizontalLinearStepper.js"
          className="my-24"
          iframe={false}
          component={require('../components/steppers/HorizontalLinearStepper.js').default}
          raw={require('!raw-loader!../components/steppers/HorizontalLinearStepper.js')}
        />
      </Typography>
      <Typography className="text-20 mt-20 mb-10 font-700" component="h3">
        Non-linear
      </Typography>
      <Typography className="mb-40" component="div">
        Non-linear steppers allow the user to enter a multi-step flow at any point.
      </Typography>
      <Typography className="mb-40" component="div">
        This example is similar to the regular horizontal stepper, except steps are no longer
        automatically set to <code>{`disabled={true}`}</code> based on the <code>activeStep</code>{' '}
        prop.
      </Typography>
      <Typography className="mb-40" component="div">
        The use of the <code>StepButton</code> here demonstrates clickable step labels, as well as
        setting the <code>completed</code>
        flag. However because steps can be accessed in a non-linear fashion, it&#39;s up to your own
        implementation to determine when all steps are completed (or even if they need to be
        completed).
      </Typography>
      <Typography className="mb-40" component="div">
        <FuseExample
          name="HorizontalNonLinearStepper.js"
          className="my-24"
          iframe={false}
          component={require('../components/steppers/HorizontalNonLinearStepper.js').default}
          raw={require('!raw-loader!../components/steppers/HorizontalNonLinearStepper.js')}
        />
      </Typography>
      <Typography className="text-20 mt-20 mb-10 font-700" component="h3">
        Alternative label
      </Typography>
      <Typography className="mb-40" component="div">
        Labels can be placed below the step icon by setting the <code>alternativeLabel</code> prop
        on the <code>Stepper</code> component.
      </Typography>
      <Typography className="mb-40" component="div">
        <FuseExample
          name="HorizontalLinearAlternativeLabelStepper.js"
          className="my-24"
          iframe={false}
          component={
            require('../components/steppers/HorizontalLinearAlternativeLabelStepper.js').default
          }
          raw={require('!raw-loader!../components/steppers/HorizontalLinearAlternativeLabelStepper.js')}
        />
      </Typography>
      <Typography className="text-20 mt-20 mb-10 font-700" component="h3">
        Error step
      </Typography>
      <Typography className="mb-40" component="div">
        <FuseExample
          name="HorizontalStepperWithError.js"
          className="my-24"
          iframe={false}
          component={require('../components/steppers/HorizontalStepperWithError.js').default}
          raw={require('!raw-loader!../components/steppers/HorizontalStepperWithError.js')}
        />
      </Typography>
      <Typography className="text-20 mt-20 mb-10 font-700" component="h3">
        Customized horizontal stepper
      </Typography>
      <Typography className="mb-40" component="div">
        Here is an example of customizing the component. You can learn more about this in the{' '}
        <a href="/material-ui/customization/how-to-customize/">overrides documentation page</a>.
      </Typography>
      <Typography className="mb-40" component="div">
        <FuseExample
          name="CustomizedSteppers.js"
          className="my-24"
          iframe={false}
          component={require('../components/steppers/CustomizedSteppers.js').default}
          raw={require('!raw-loader!../components/steppers/CustomizedSteppers.js')}
        />
      </Typography>
      <Typography className="text-32 mt-40 mb-10 font-700" component="h2">
        Vertical stepper
      </Typography>
      <Typography className="mb-40" component="div">
        Vertical steppers are designed for narrow screen sizes. They are ideal for mobile. All the
        features of the horizontal stepper can be implemented.
      </Typography>
      <Typography className="mb-40" component="div">
        <FuseExample
          name="VerticalLinearStepper.js"
          className="my-24"
          iframe={false}
          component={require('../components/steppers/VerticalLinearStepper.js').default}
          raw={require('!raw-loader!../components/steppers/VerticalLinearStepper.js')}
        />
      </Typography>
      <Typography className="text-20 mt-20 mb-10 font-700" component="h3">
        Performance
      </Typography>
      <Typography className="mb-40" component="div">
        The content of a step is unmounted when closed. If you need to make the content available to
        search engines or render expensive component trees inside your modal while optimizing for
        interaction responsiveness it might be a good idea to keep the step mounted with:
      </Typography>

      <FuseHighlight component="pre" className="language-jsx">
        {` 
<StepContent TransitionProps={{ unmountOnExit: false }} />
`}
      </FuseHighlight>
      <Typography className="text-32 mt-40 mb-10 font-700" component="h2">
        Mobile stepper
      </Typography>
      <Typography className="mb-40" component="div">
        This component implements a compact stepper suitable for a mobile device. It has more
        limited functionality than the vertical stepper. See{' '}
        <a href="https://material.io/archive/guidelines/components/steppers.html#steppers-types-of-steps">
          mobile steps
        </a>{' '}
        for its inspiration.
      </Typography>
      <Typography className="mb-40" component="div">
        The mobile stepper supports three variants to display progress through the available steps:
        text, dots, and progress.
      </Typography>
      <Typography className="text-20 mt-20 mb-10 font-700" component="h3">
        Text
      </Typography>
      <Typography className="mb-40" component="div">
        The current step and total number of steps are displayed as text.
      </Typography>
      <Typography className="mb-40" component="div">
        <FuseExample
          name="TextMobileStepper.js"
          className="my-24"
          iframe={false}
          component={require('../components/steppers/TextMobileStepper.js').default}
          raw={require('!raw-loader!../components/steppers/TextMobileStepper.js')}
        />
      </Typography>
      <Typography className="text-20 mt-20 mb-10 font-700" component="h3">
        Text with carousel effect
      </Typography>
      <Typography className="mb-40" component="div">
        This demo uses
        <a href="https://github.com/oliviertassinari/react-swipeable-views">
          react-swipeable-views
        </a>{' '}
        to create a carousel.
      </Typography>
      <Typography className="mb-40" component="div">
        <FuseExample
          name="SwipeableTextMobileStepper.js"
          className="my-24"
          iframe={false}
          component={require('../components/steppers/SwipeableTextMobileStepper.js').default}
          raw={require('!raw-loader!../components/steppers/SwipeableTextMobileStepper.js')}
        />
      </Typography>
      <Typography className="text-20 mt-20 mb-10 font-700" component="h3">
        Dots
      </Typography>
      <Typography className="mb-40" component="div">
        Use dots when the number of steps is small.
      </Typography>
      <Typography className="mb-40" component="div">
        <FuseExample
          name="DotsMobileStepper.js"
          className="my-24"
          iframe={false}
          component={require('../components/steppers/DotsMobileStepper.js').default}
          raw={require('!raw-loader!../components/steppers/DotsMobileStepper.js')}
        />
      </Typography>
      <Typography className="text-20 mt-20 mb-10 font-700" component="h3">
        Progress
      </Typography>
      <Typography className="mb-40" component="div">
        Use a progress bar when there are many steps, or if there are steps that need to be inserted
        during the process (based on responses to earlier steps).
      </Typography>
      <Typography className="mb-40" component="div">
        <FuseExample
          name="ProgressMobileStepper.js"
          className="my-24"
          iframe={false}
          component={require('../components/steppers/ProgressMobileStepper.js').default}
          raw={require('!raw-loader!../components/steppers/ProgressMobileStepper.js')}
        />
      </Typography>
    </>
  );
}

export default SteppersDoc;
