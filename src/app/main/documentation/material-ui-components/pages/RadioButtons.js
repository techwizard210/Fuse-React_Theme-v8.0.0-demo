import FuseExample from '@fuse/core/FuseExample';
import FuseHighlight from '@fuse/core/FuseHighlight';
import FuseSvgIcon from '@fuse/core/FuseSvgIcon';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
/* eslint import/no-webpack-loader-syntax: off */
/* eslint import/extensions: off */
/* eslint no-unused-vars: off */
/* eslint-disable jsx-a11y/accessible-emoji */

function RadioButtonsDoc(props) {
  return (
    <>
      <div className="flex flex-1 grow-0 items-center justify-end">
        <Button
          className="normal-case"
          variant="contained"
          color="secondary"
          component="a"
          href="https://mui.com/components/radio-buttons"
          target="_blank"
          role="button"
          startIcon={<FuseSvgIcon>heroicons-outline:external-link</FuseSvgIcon>}
        >
          Reference
        </Button>
      </div>
      <Typography className="text-40 my-16 font-700" component="h1">
        Radio
      </Typography>
      <Typography className="description">
        Radio buttons allow the user to select one option from a set.
      </Typography>

      <Typography className="mb-40" component="div">
        Use radio buttons when the user needs to see all available options. If available options can
        be collapsed, consider using a <a href="/material-ui/react-select/">Select component</a>{' '}
        because it uses less space.
      </Typography>
      <Typography className="mb-40" component="div">
        Radio buttons should have the most commonly used option selected by default.
      </Typography>
      <Typography className="text-32 mt-40 mb-10 font-700" component="h2">
        Radio group
      </Typography>
      <Typography className="mb-40" component="div">
        <code>RadioGroup</code> is a helpful wrapper used to group <code>Radio</code> components
        that provides an easier API, and proper keyboard accessibility to the group.
      </Typography>
      <Typography className="mb-40" component="div">
        <FuseExample
          name="RadioButtonsGroup.js"
          className="my-24"
          iframe={false}
          component={require('../components/radio-buttons/RadioButtonsGroup.js').default}
          raw={require('!raw-loader!../components/radio-buttons/RadioButtonsGroup.js')}
        />
      </Typography>
      <Typography className="text-20 mt-20 mb-10 font-700" component="h3">
        Direction
      </Typography>
      <Typography className="mb-40" component="div">
        To lay out the buttons horizontally, set the <code>row</code> prop:
      </Typography>
      <Typography className="mb-40" component="div">
        <FuseExample
          name="RowRadioButtonsGroup.js"
          className="my-24"
          iframe={false}
          component={require('../components/radio-buttons/RowRadioButtonsGroup.js').default}
          raw={require('!raw-loader!../components/radio-buttons/RowRadioButtonsGroup.js')}
        />
      </Typography>
      <Typography className="text-20 mt-20 mb-10 font-700" component="h3">
        Controlled
      </Typography>
      <Typography className="mb-40" component="div">
        You can control the radio with the <code>value</code> and <code>onChange</code> props:
      </Typography>
      <Typography className="mb-40" component="div">
        <FuseExample
          name="ControlledRadioButtonsGroup.js"
          className="my-24"
          iframe={false}
          component={require('../components/radio-buttons/ControlledRadioButtonsGroup.js').default}
          raw={require('!raw-loader!../components/radio-buttons/ControlledRadioButtonsGroup.js')}
        />
      </Typography>
      <Typography className="text-32 mt-40 mb-10 font-700" component="h2">
        Standalone radio buttons
      </Typography>
      <Typography className="mb-40" component="div">
        <code>Radio</code> can also be used standalone, without the RadioGroup wrapper.
      </Typography>
      <Typography className="mb-40" component="div">
        <FuseExample
          name="RadioButtons.js"
          className="my-24"
          iframe={false}
          component={require('../components/radio-buttons/RadioButtons.js').default}
          raw={require('!raw-loader!../components/radio-buttons/RadioButtons.js')}
        />
      </Typography>
      <Typography className="text-32 mt-40 mb-10 font-700" component="h2">
        Size
      </Typography>
      <Typography className="mb-40" component="div">
        Use the <code>size</code> prop or customize the font size of the svg icons to change the
        size of the radios.
      </Typography>
      <Typography className="mb-40" component="div">
        <FuseExample
          name="SizeRadioButtons.js"
          className="my-24"
          iframe={false}
          component={require('../components/radio-buttons/SizeRadioButtons.js').default}
          raw={require('!raw-loader!../components/radio-buttons/SizeRadioButtons.js')}
        />
      </Typography>
      <Typography className="text-32 mt-40 mb-10 font-700" component="h2">
        Color
      </Typography>
      <Typography className="mb-40" component="div">
        <FuseExample
          name="ColorRadioButtons.js"
          className="my-24"
          iframe={false}
          component={require('../components/radio-buttons/ColorRadioButtons.js').default}
          raw={require('!raw-loader!../components/radio-buttons/ColorRadioButtons.js')}
        />
      </Typography>
      <Typography className="text-32 mt-40 mb-10 font-700" component="h2">
        Label placement
      </Typography>
      <Typography className="mb-40" component="div">
        You can change the placement of the label with the <code>FormControlLabel</code>{' '}
        component&#39;s <code>labelPlacement</code> prop:
      </Typography>
      <Typography className="mb-40" component="div">
        <FuseExample
          name="FormControlLabelPlacement.js"
          className="my-24"
          iframe={false}
          component={require('../components/radio-buttons/FormControlLabelPlacement.js').default}
          raw={require('!raw-loader!../components/radio-buttons/FormControlLabelPlacement.js')}
        />
      </Typography>
      <Typography className="text-32 mt-40 mb-10 font-700" component="h2">
        Show error
      </Typography>
      <Typography className="mb-40" component="div">
        In general, radio buttons should have a value selected by default. If this is not the case,
        you can display an error if no value is selected when the form is submitted:
      </Typography>
      <Typography className="mb-40" component="div">
        <FuseExample
          name="ErrorRadios.js"
          className="my-24"
          iframe={false}
          component={require('../components/radio-buttons/ErrorRadios.js').default}
          raw={require('!raw-loader!../components/radio-buttons/ErrorRadios.js')}
        />
      </Typography>
      <Typography className="text-32 mt-40 mb-10 font-700" component="h2">
        Customization
      </Typography>
      <Typography className="mb-40" component="div">
        Here is an example of customizing the component. You can learn more about this in the{' '}
        <a href="/material-ui/customization/how-to-customize/">overrides documentation page</a>.
      </Typography>
      <Typography className="mb-40" component="div">
        <FuseExample
          name="CustomizedRadios.js"
          className="my-24"
          iframe={false}
          component={require('../components/radio-buttons/CustomizedRadios.js').default}
          raw={require('!raw-loader!../components/radio-buttons/CustomizedRadios.js')}
        />
      </Typography>
      <Typography className="text-32 mt-40 mb-10 font-700" component="h2">
        <code>useRadioGroup</code>
      </Typography>
      <Typography className="mb-40" component="div">
        For advanced customization use cases, a <code>useRadioGroup()</code> hook is exposed. It
        returns the context value of the parent radio group. The Radio component uses this hook
        internally.
      </Typography>
      <Typography className="text-20 mt-20 mb-10 font-700" component="h3">
        API
      </Typography>

      <FuseHighlight component="pre" className="language-jsx">
        {` 
import { useRadioGroup } from '@mui/material/RadioGroup';
`}
      </FuseHighlight>
      <Typography className="text-16 mt-16 mb-10" component="h4">
        Returns
      </Typography>
      <Typography className="mb-40" component="div">
        <code>value</code> (<em>object</em>):
      </Typography>
      <ul>
        <li>
          <code>value.name</code> (<em>string</em> [optional]): The name used to reference the value
          of the control.
        </li>
        <li>
          <code>value.onChange</code> (<em>func</em> [optional]): Callback fired when a radio button
          is selected.
        </li>
        <li>
          <code>value.value</code> (<em>any</em> [optional]): Value of the selected radio button.
        </li>
      </ul>
      <Typography className="text-16 mt-16 mb-10" component="h4">
        Example
      </Typography>
      <Typography className="mb-40" component="div">
        <FuseExample
          name="UseRadioGroup.js"
          className="my-24"
          iframe={false}
          component={require('../components/radio-buttons/UseRadioGroup.js').default}
          raw={require('!raw-loader!../components/radio-buttons/UseRadioGroup.js')}
        />
      </Typography>
      <Typography className="text-32 mt-40 mb-10 font-700" component="h2">
        When to use
      </Typography>
      <ul>
        <li>
          <a href="https://www.nngroup.com/articles/checkboxes-vs-radio-buttons/">
            Checkboxes vs. Radio Buttons
          </a>
        </li>
      </ul>
      <Typography className="text-32 mt-40 mb-10 font-700" component="h2">
        Accessibility
      </Typography>
      <Typography className="mb-40" component="div">
        (WAI-ARIA:{' '}
        <a href="https://www.w3.org/TR/wai-aria-practices/#radiobutton">
          https://www.w3.org/TR/wai-aria-practices/#radiobutton
        </a>
        )
      </Typography>
      <ul>
        <li>
          All form controls should have labels, and this includes radio buttons, checkboxes, and
          switches. In most cases, this is done by using the <code>{`<label>`}</code> element (
          <a href="/material-ui/api/form-control-label/">FormControlLabel</a>).
        </li>
        <li>
          When a label can&#39;t be used, it&#39;s necessary to add an attribute directly to the
          input component. In this case, you can apply the additional attribute (e.g.{' '}
          <code>aria-label</code>, <code>aria-labelledby</code>, <code>title</code>) via the{' '}
          <code>inputProps</code> property.
        </li>
      </ul>

      <FuseHighlight component="pre" className="language-jsx">
        {` 
<Radio
  value="radioA"
  inputProps={{
    'aria-label': 'Radio A',
  
/>
`}
      </FuseHighlight>
    </>
  );
}

export default RadioButtonsDoc;
