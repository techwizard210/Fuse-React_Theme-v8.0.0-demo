import FuseExample from '@fuse/core/FuseExample';
import FuseHighlight from '@fuse/core/FuseHighlight';
import FuseSvgIcon from '@fuse/core/FuseSvgIcon';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
/* eslint import/no-webpack-loader-syntax: off */
/* eslint import/extensions: off */
/* eslint no-unused-vars: off */
/* eslint-disable jsx-a11y/accessible-emoji */

function TextFieldsDoc(props) {
  return (
    <>
      <div className="flex flex-1 grow-0 items-center justify-end">
        <Button
          className="normal-case"
          variant="contained"
          color="secondary"
          component="a"
          href="https://mui.com/components/text-fields"
          target="_blank"
          role="button"
          startIcon={<FuseSvgIcon>heroicons-outline:external-link</FuseSvgIcon>}
        >
          Reference
        </Button>
      </div>
      <Typography className="text-40 my-16 font-700" component="h1">
        Text field
      </Typography>
      <Typography className="description">Text fields let users enter and edit text.</Typography>

      <Typography className="mb-40" component="div">
        Text fields allow users to enter text into a UI. They typically appear in forms and dialogs.
      </Typography>
      <Typography className="text-32 mt-40 mb-10 font-700" component="h2">
        Basic TextField
      </Typography>
      <Typography className="mb-40" component="div">
        The <code>TextField</code> wrapper component is a complete form control including a label,
        input, and help text. It comes with three variants: outlined (default), filled, and
        standard.
      </Typography>
      <Typography className="mb-40" component="div">
        <FuseExample
          name="BasicTextFields.js"
          className="my-24"
          iframe={false}
          component={require('../components/text-fields/BasicTextFields.js').default}
          raw={require('!raw-loader!../components/text-fields/BasicTextFields.js')}
        />
      </Typography>
      <Typography className="mb-40" component="div">
        <strong>Note:</strong> The standard variant of the <code>TextField</code> is no longer
        documented in the <a href="https://material.io/">Material Design guidelines</a>(
        <a href="https://medium.com/google-design/the-evolution-of-material-designs-text-fields-603688b3fe03">
          here&#39;s why
        </a>
        ), but MUI will continue to support it.
      </Typography>
      <Typography className="text-32 mt-40 mb-10 font-700" component="h2">
        Form props
      </Typography>
      <Typography className="mb-40" component="div">
        Standard form attributes are supported e.g. <code>required</code>, <code>disabled</code>,{' '}
        <code>type</code>, etc. as well as a <code>helperText</code> which is used to give context
        about a field&#39;s input, such as how the input will be used.
      </Typography>
      <Typography className="mb-40" component="div">
        <FuseExample
          name="FormPropsTextFields.js"
          className="my-24"
          iframe={false}
          component={require('../components/text-fields/FormPropsTextFields.js').default}
          raw={require('!raw-loader!../components/text-fields/FormPropsTextFields.js')}
        />
      </Typography>
      <Typography className="text-32 mt-40 mb-10 font-700" component="h2">
        Validation
      </Typography>
      <Typography className="mb-40" component="div">
        The <code>error</code> prop toggles the error state. The <code>helperText</code> prop can
        then be used to provide feedback to the user about the error.
      </Typography>
      <Typography className="mb-40" component="div">
        <FuseExample
          name="ValidationTextFields.js"
          className="my-24"
          iframe={false}
          component={require('../components/text-fields/ValidationTextFields.js').default}
          raw={require('!raw-loader!../components/text-fields/ValidationTextFields.js')}
        />
      </Typography>
      <Typography className="text-32 mt-40 mb-10 font-700" component="h2">
        Multiline
      </Typography>
      <Typography className="mb-40" component="div">
        The <code>multiline</code> prop transforms the text field into a{' '}
        <a href="/material-ui/react-textarea-autosize/">TextareaAutosize</a> element. Unless the{' '}
        <code>rows</code> prop is set, the height of the text field dynamically matches its content
        (using <a href="/material-ui/react-textarea-autosize/">TextareaAutosize</a>). You can use
        the <code>minRows</code> and <code>maxRows</code> props to bound it.
      </Typography>
      <Typography className="mb-40" component="div">
        <FuseExample
          name="MultilineTextFields.js"
          className="my-24"
          iframe={false}
          component={require('../components/text-fields/MultilineTextFields.js').default}
          raw={require('!raw-loader!../components/text-fields/MultilineTextFields.js')}
        />
      </Typography>
      <Typography className="text-32 mt-40 mb-10 font-700" component="h2">
        Select
      </Typography>
      <Typography className="mb-40" component="div">
        The <code>select</code> prop makes the text field use the{' '}
        <a href="/material-ui/react-select/">Select</a> component internally.
      </Typography>
      <Typography className="mb-40" component="div">
        <FuseExample
          name="SelectTextFields.js"
          className="my-24"
          iframe={false}
          component={require('../components/text-fields/SelectTextFields.js').default}
          raw={require('!raw-loader!../components/text-fields/SelectTextFields.js')}
        />
      </Typography>
      <Typography className="text-32 mt-40 mb-10 font-700" component="h2">
        Icons
      </Typography>
      <Typography className="mb-40" component="div">
        There are multiple ways to display an icon with a text field.
      </Typography>
      <Typography className="mb-40" component="div">
        <FuseExample
          name="InputWithIcon.js"
          className="my-24"
          iframe={false}
          component={require('../components/text-fields/InputWithIcon.js').default}
          raw={require('!raw-loader!../components/text-fields/InputWithIcon.js')}
        />
      </Typography>
      <Typography className="text-20 mt-20 mb-10 font-700" component="h3">
        Input Adornments
      </Typography>
      <Typography className="mb-40" component="div">
        The main way is with an <code>InputAdornment</code>. This can be used to add a prefix, a
        suffix, or an action to an input. For instance, you can use an icon button to hide or reveal
        the password.
      </Typography>
      <Typography className="mb-40" component="div">
        <FuseExample
          name="InputAdornments.js"
          className="my-24"
          iframe={false}
          component={require('../components/text-fields/InputAdornments.js').default}
          raw={require('!raw-loader!../components/text-fields/InputAdornments.js')}
        />
      </Typography>
      <Typography className="text-32 mt-40 mb-10 font-700" component="h2">
        Sizes
      </Typography>
      <Typography className="mb-40" component="div">
        Fancy smaller inputs? Use the <code>size</code> prop.
      </Typography>
      <Typography className="mb-40" component="div">
        <FuseExample
          name="TextFieldSizes.js"
          className="my-24"
          iframe={false}
          component={require('../components/text-fields/TextFieldSizes.js').default}
          raw={require('!raw-loader!../components/text-fields/TextFieldSizes.js')}
        />
      </Typography>
      <Typography className="mb-40" component="div">
        The <code>filled</code> variant input height can be further reduced by rendering the label
        outside of it.
      </Typography>
      <Typography className="mb-40" component="div">
        <FuseExample
          name="TextFieldHiddenLabel.js"
          className="my-24"
          iframe={false}
          component={require('../components/text-fields/TextFieldHiddenLabel.js').default}
          raw={require('!raw-loader!../components/text-fields/TextFieldHiddenLabel.js')}
        />
      </Typography>
      <Typography className="text-32 mt-40 mb-10 font-700" component="h2">
        Margin
      </Typography>
      <Typography className="mb-40" component="div">
        The <code>margin</code> prop can be used to alter the vertical spacing of the text field.
        Using <code>none</code> (default) doesn&#39;t apply margins to the <code>FormControl</code>{' '}
        whereas <code>dense</code> and <code>normal</code> do.
      </Typography>
      <Typography className="mb-40" component="div">
        <FuseExample
          name="LayoutTextFields.js"
          className="my-24"
          iframe={false}
          component={require('../components/text-fields/LayoutTextFields.js').default}
          raw={require('!raw-loader!../components/text-fields/LayoutTextFields.js')}
        />
      </Typography>
      <Typography className="text-32 mt-40 mb-10 font-700" component="h2">
        Full width
      </Typography>
      <Typography className="mb-40" component="div">
        <code>fullWidth</code> can be used to make the input take up the full width of its
        container.
      </Typography>
      <Typography className="mb-40" component="div">
        <FuseExample
          name="FullWidthTextField.js"
          className="my-24"
          iframe={false}
          component={require('../components/text-fields/FullWidthTextField.js').default}
          raw={require('!raw-loader!../components/text-fields/FullWidthTextField.js')}
        />
      </Typography>
      <Typography className="text-32 mt-40 mb-10 font-700" component="h2">
        Uncontrolled vs. Controlled
      </Typography>
      <Typography className="mb-40" component="div">
        The component can be controlled or uncontrolled.
      </Typography>
      <Typography className="mb-40" component="div">
        <FuseExample
          name="StateTextFields.js"
          className="my-24"
          iframe={false}
          component={require('../components/text-fields/StateTextFields.js').default}
          raw={require('!raw-loader!../components/text-fields/StateTextFields.js')}
        />
      </Typography>
      <Typography className="text-32 mt-40 mb-10 font-700" component="h2">
        Components
      </Typography>
      <Typography className="mb-40" component="div">
        <code>TextField</code> is composed of smaller components (
        <a href="/material-ui/api/form-control/">
          <code>FormControl</code>
        </a>
        ,
        <a href="/material-ui/api/input/">
          <code>Input</code>
        </a>
        ,
        <a href="/material-ui/api/filled-input/">
          <code>FilledInput</code>
        </a>
        ,
        <a href="/material-ui/api/input-label/">
          <code>InputLabel</code>
        </a>
        ,
        <a href="/material-ui/api/outlined-input/">
          <code>OutlinedInput</code>
        </a>
        , and{' '}
        <a href="/material-ui/api/form-helper-text/">
          <code>FormHelperText</code>
        </a>
        ) that you can leverage directly to significantly customize your form inputs.
      </Typography>
      <Typography className="mb-40" component="div">
        You might also have noticed that some native HTML input properties are missing from the{' '}
        <code>TextField</code> component. This is on purpose. The component takes care of the most
        used properties. Then, it&#39;s up to the user to use the underlying component shown in the
        following demo. Still, you can use <code>inputProps</code> (and <code>InputProps</code>,{' '}
        <code>InputLabelProps</code> properties) if you want to avoid some boilerplate.
      </Typography>
      <Typography className="mb-40" component="div">
        <FuseExample
          name="ComposedTextField.js"
          className="my-24"
          iframe={false}
          component={require('../components/text-fields/ComposedTextField.js').default}
          raw={require('!raw-loader!../components/text-fields/ComposedTextField.js')}
        />
      </Typography>
      <Typography className="text-32 mt-40 mb-10 font-700" component="h2">
        Inputs
      </Typography>
      <Typography className="mb-40" component="div">
        <FuseExample
          name="Inputs.js"
          className="my-24"
          iframe={false}
          component={require('../components/text-fields/Inputs.js').default}
          raw={require('!raw-loader!../components/text-fields/Inputs.js')}
        />
      </Typography>
      <Typography className="text-32 mt-40 mb-10 font-700" component="h2">
        Color
      </Typography>
      <Typography className="mb-40" component="div">
        The <code>color</code> prop changes the highlight color of the text field when focused.
      </Typography>
      <Typography className="mb-40" component="div">
        <FuseExample
          name="ColorTextFields.js"
          className="my-24"
          iframe={false}
          component={require('../components/text-fields/ColorTextFields.js').default}
          raw={require('!raw-loader!../components/text-fields/ColorTextFields.js')}
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
          name="CustomizedInputs.js"
          className="my-24"
          iframe={false}
          component={require('../components/text-fields/CustomizedInputs.js').default}
          raw={require('!raw-loader!../components/text-fields/CustomizedInputs.js')}
        />
      </Typography>
      <Typography className="mb-40" component="div">
        Customization does not stop at CSS. You can use composition to build custom components and
        give your app a unique feel. Below is an example using the{' '}
        <a href="/material-ui/api/input-base/">
          <code>InputBase</code>
        </a>{' '}
        component, inspired by Google Maps.
      </Typography>
      <Typography className="mb-40" component="div">
        <FuseExample
          name="CustomizedInputBase.js"
          className="my-24"
          iframe={false}
          component={require('../components/text-fields/CustomizedInputBase.js').default}
          raw={require('!raw-loader!../components/text-fields/CustomizedInputBase.js')}
        />
      </Typography>
      <Typography className="mb-40" component="div">
        🎨 If you are looking for inspiration, you can check{' '}
        <a href="https://mui-treasury.com/styles/text-field/">
          MUI Treasury&#39;s customization examples
        </a>
        .
      </Typography>
      <Typography className="text-32 mt-40 mb-10 font-700" component="h2">
        <code>useFormControl</code>
      </Typography>
      <Typography className="mb-40" component="div">
        For advanced customization use cases, a <code>useFormControl()</code> hook is exposed. This
        hook returns the context value of the parent <code>FormControl</code> component.
      </Typography>
      <Typography className="mb-40" component="div">
        <strong>API</strong>
      </Typography>

      <FuseHighlight component="pre" className="language-jsx">
        {` 
import { useFormControl } from '@mui/material/FormControl';
`}
      </FuseHighlight>
      <Typography className="mb-40" component="div">
        <strong>Returns</strong>
      </Typography>
      <Typography className="mb-40" component="div">
        <code>value</code> (<em>object</em>):
      </Typography>
      <ul>
        <li>
          <code>value.adornedStart</code> (<em>bool</em>): Indicate whether the child{' '}
          <code>Input</code> or <code>Select</code> component has a start adornment.
        </li>
        <li>
          <code>value.setAdornedStart</code> (<em>func</em>): Setter function for{' '}
          <code>adornedStart</code> state value.
        </li>
        <li>
          <code>value.color</code> (<em>string</em>): The theme color is being used, inherited from{' '}
          <code>FormControl</code> <code>color</code> prop .
        </li>
        <li>
          <code>value.disabled</code> (<em>bool</em>): Indicate whether the component is being
          displayed in a disabled state, inherited from <code>FormControl</code>{' '}
          <code>disabled</code> prop.
        </li>
        <li>
          <code>value.error</code> (<em>bool</em>): Indicate whether the component is being
          displayed in an error state, inherited from <code>FormControl</code> <code>error</code>{' '}
          prop
        </li>
        <li>
          <code>value.filled</code> (<em>bool</em>): Indicate whether input is filled
        </li>
        <li>
          <code>value.focused</code> (<em>bool</em>): Indicate whether the component and its
          children are being displayed in a focused state
        </li>
        <li>
          <code>value.fullWidth</code> (<em>bool</em>): Indicate whether the component is taking up
          the full width of its container, inherited from <code>FormControl</code>{' '}
          <code>fullWidth</code> prop
        </li>
        <li>
          <code>value.hiddenLabel</code> (<em>bool</em>): Indicate whether the label is being
          hidden, inherited from <code>FormControl</code> <code>hiddenLabel</code> prop
        </li>
        <li>
          <code>value.required</code> (<em>bool</em>): Indicate whether the label is indicating that
          the input is required input, inherited from the <code>FormControl</code>{' '}
          <code>required</code> prop
        </li>
        <li>
          <code>value.size</code> (<em>string</em>): The size of the component, inherited from the{' '}
          <code>FormControl</code> <code>size</code> prop
        </li>
        <li>
          <code>value.variant</code> (<em>string</em>): The variant is being used by the{' '}
          <code>FormControl</code> component and its children, inherited from{' '}
          <code>FormControl</code> <code>variant</code> prop
        </li>
        <li>
          <code>value.onBlur</code> (<em>func</em>): Should be called when the input is blurred
        </li>
        <li>
          <code>value.onFocus</code> (<em>func</em>): Should be called when the input is focused
        </li>
        <li>
          <code>value.onEmpty</code> (<em>func</em>): Should be called when the input is emptied
        </li>
        <li>
          <code>value.onFilled</code> (<em>func</em>): Should be called when the input is filled
        </li>
      </ul>
      <Typography className="mb-40" component="div">
        <strong>Example</strong>
      </Typography>
      <Typography className="mb-40" component="div">
        <FuseExample
          name="UseFormControl.js"
          className="my-24"
          iframe={false}
          component={require('../components/text-fields/UseFormControl.js').default}
          raw={require('!raw-loader!../components/text-fields/UseFormControl.js')}
        />
      </Typography>
      <Typography className="text-32 mt-40 mb-10 font-700" component="h2">
        Limitations
      </Typography>
      <Typography className="text-20 mt-20 mb-10 font-700" component="h3">
        Shrink
      </Typography>
      <Typography className="mb-40" component="div">
        The input label &quot;shrink&quot; state isn&#39;t always correct. The input label is
        supposed to shrink as soon as the input is displaying something. In some circumstances, we
        can&#39;t determine the &quot;shrink&quot; state (number input, datetime input, Stripe
        input). You might notice an overlap.
      </Typography>
      <Typography className="mb-40" component="div">
        {' '}
        src="/material-ui-static/images/text-fields/shrink.png" alt="shrink/>
      </Typography>
      <Typography className="mb-40" component="div">
        To workaround the issue, you can force the &quot;shrink&quot; state of the label.
      </Typography>

      <FuseHighlight component="pre" className="language-jsx">
        {` 
<TextField InputLabelProps={{ shrink: true }} />
`}
      </FuseHighlight>
      <Typography className="mb-40" component="div">
        or
      </Typography>

      <FuseHighlight component="pre" className="language-jsx">
        {` 
<InputLabel shrink>Count</InputLabel>
`}
      </FuseHighlight>
      <Typography className="text-20 mt-20 mb-10 font-700" component="h3">
        Floating label
      </Typography>
      <Typography className="mb-40" component="div">
        The floating label is absolutely positioned. It won&#39;t impact the layout of the page.
        Make sure that the input is larger than the label to display correctly.
      </Typography>
      <Typography className="text-20 mt-20 mb-10 font-700" component="h3">
        type=&quot;number&quot;
      </Typography>
      <Typography className="mb-40" component="div">
        Inputs of type=&quot;number&quot; have potential usability issues:
      </Typography>
      <ul>
        <li>
          Allowing certain non-numeric characters (&#39;e&#39;, &#39;+&#39;, &#39;-&#39;,
          &#39;.&#39;) and silently discarding others
        </li>
        <li>
          The functionality of scrolling to increment/decrement the number can cause accidental and
          hard-to-notice changes
        </li>
      </ul>
      <Typography className="mb-40" component="div">
        and more - see{' '}
        <a href="https://technology.blog.gov.uk/2020/02/24/why-the-gov-uk-design-system-team-changed-the-input-type-for-numbers/">
          this article
        </a>{' '}
        by the GOV.UK Design System team for a more detailed explanation.
      </Typography>
      <Typography className="mb-40" component="div">
        For number validation, one viable alternative is to use the default input
        type=&quot;text&quot; with the <em>pattern</em> attribute, for example:
      </Typography>

      <FuseHighlight component="pre" className="language-jsx">
        {` 
<TextField inputProps={{ inputMode: 'numeric', pattern: '[0-9]*' }} />
`}
      </FuseHighlight>
      <Typography className="mb-40" component="div">
        In the future, we might provide a{' '}
        <a href="https://github.com/mui/material-ui/issues/19154">number input component</a>.
      </Typography>
      <Typography className="text-20 mt-20 mb-10 font-700" component="h3">
        Helper text
      </Typography>
      <Typography className="mb-40" component="div">
        The helper text prop affects the height of the text field. If two text fields are placed
        side by side, one with a helper text and one without, they will have different heights. For
        example:
      </Typography>
      <Typography className="mb-40" component="div">
        <FuseExample
          name="HelperTextMisaligned.js"
          className="my-24"
          iframe={false}
          component={require('../components/text-fields/HelperTextMisaligned.js').default}
          raw={require('!raw-loader!../components/text-fields/HelperTextMisaligned.js')}
        />
      </Typography>
      <Typography className="mb-40" component="div">
        This can be fixed by passing a space character to the <code>helperText</code> prop:
      </Typography>
      <Typography className="mb-40" component="div">
        <FuseExample
          name="HelperTextAligned.js"
          className="my-24"
          iframe={false}
          component={require('../components/text-fields/HelperTextAligned.js').default}
          raw={require('!raw-loader!../components/text-fields/HelperTextAligned.js')}
        />
      </Typography>
      <Typography className="text-32 mt-40 mb-10 font-700" component="h2">
        Integration with 3rd party input libraries
      </Typography>
      <Typography className="mb-40" component="div">
        You can use third-party libraries to format an input. You have to provide a custom
        implementation of the <code>{`<input>`}</code> element with the <code>inputComponent</code>{' '}
        property.
      </Typography>
      <Typography className="mb-40" component="div">
        The following demo uses the <a href="https://github.com/uNmAnNeR/imaskjs">react-imask</a>{' '}
        and <a href="https://github.com/s-yadav/react-number-format">react-number-format</a>{' '}
        libraries. The same concept could be applied to{' '}
        <a href="https://github.com/mui/material-ui/issues/16037">e.g. react-stripe-element</a>.
      </Typography>
      <Typography className="mb-40" component="div">
        <FuseExample
          name="FormattedInputs.js"
          className="my-24"
          iframe={false}
          component={require('../components/text-fields/FormattedInputs.js').default}
          raw={require('!raw-loader!../components/text-fields/FormattedInputs.js')}
        />
      </Typography>
      <Typography className="mb-40" component="div">
        The provided input component should expose a ref with a value that implements the following
        interface:
      </Typography>

      <FuseHighlight component="pre" className="language-ts">
        {` 
interface InputElement {
  focus(): void;
  value?: string;
}
`}
      </FuseHighlight>

      <FuseHighlight component="pre" className="language-jsx">
        {` 
const MyInputComponent = React.forwardRef((props, ref) => {
  const { component: Component, ...other } = props;

  // implement \`InputElement\` interface
  React.useImperativeHandle(ref, () => ({
    focus: () => {
      // logic to focus the rendered component from 3rd party belongs here
    },
    // hiding the value e.g. react-stripe-elements
  }));

  // \`Component\` will be your \`SomeThirdPartyComponent\` from below
  return <Component {...other} />;
});

// usage
<TextField
  InputProps={{
    inputComponent: MyInputComponent,
    inputProps: {
      component: SomeThirdPartyComponent,
    },
  
/>;
`}
      </FuseHighlight>
      <Typography className="text-32 mt-40 mb-10 font-700" component="h2">
        Accessibility
      </Typography>
      <Typography className="mb-40" component="div">
        In order for the text field to be accessible,{' '}
        <strong>the input should be linked to the label and the helper text</strong>. The underlying
        DOM nodes should have this structure:
      </Typography>

      <FuseHighlight component="pre" className="language-jsx">
        {` 
<div className="form-control">
  <label for="my-input">Email address</label>
  <input id="my-input" aria-describedby="my-helper-text" />
  <span id="my-helper-text">We'll never share your email.</span>
</div>
`}
      </FuseHighlight>
      <ul>
        <li>
          If you are using the <code>TextField</code> component, you just have to provide a unique{' '}
          <code>id</code> unless you&#39;re using the <code>TextField</code> only client side. Until
          the UI is hydrated <code>TextField</code> without an explicit <code>id</code> will not
          have associated labels.
        </li>
        <li>If you are composing the component:</li>
      </ul>

      <FuseHighlight component="pre" className="language-jsx">
        {` 
<FormControl>
  <InputLabel htmlFor="my-input">Email address</InputLabel>
  <Input id="my-input" aria-describedby="my-helper-text" />
  <FormHelperText id="my-helper-text">We'll never share your email.</FormHelperText>
</FormControl>
`}
      </FuseHighlight>
      <Typography className="text-32 mt-40 mb-10 font-700" component="h2">
        Complementary projects
      </Typography>
      <Typography className="mb-40" component="div">
        For more advanced use cases, you might be able to take advantage of:
      </Typography>
      <ul>
        <li>
          <a href="https://react-hook-form.com/">react-hook-form</a>: React hook for form
          validation.
        </li>
        <li>
          <a href="https://github.com/dohomi/react-hook-form-mui">react-hook-form-mui</a>: MUI and
          react-hook-form combined.
        </li>
        <li>
          <a href="https://github.com/stackworx/formik-mui">formik-material-ui</a>: Bindings for
          using MUI with <a href="https://formik.org/">formik</a>.
        </li>
        <li>
          <a href="https://github.com/erikras/redux-form-material-ui">redux-form-material-ui</a>:
          Bindings for using MUI with <a href="https://redux-form.com/">Redux Form</a>.
        </li>
        <li>
          <a href="https://github.com/lookfirst/mui-rff">mui-rff</a>: Bindings for using MUI with{' '}
          <a href="https://final-form.org/react">React Final Form</a>.
        </li>
        <li>
          <a href="https://www.npmjs.com/package/@ui-schema/ds-material">@ui-schema/ds-material</a>{' '}
          Bindings for using Material UI with{' '}
          <a href="https://github.com/ui-schema/ui-schema">UI Schema</a>. JSON Schema compatible.
        </li>
        <li>
          <a href="https://data-driven-forms.org/provided-mappers/mui-component-mapper">
            @data-driven-forms/mui-component-mapper
          </a>
          : Bindings for using Material UI with{' '}
          <a href="https://github.com/data-driven-forms/react-forms">Data Driven Forms</a>.
        </li>
      </ul>
    </>
  );
}

export default TextFieldsDoc;
