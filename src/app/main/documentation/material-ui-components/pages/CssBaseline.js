import FuseHighlight from '@fuse/core/FuseHighlight';
import FuseSvgIcon from '@fuse/core/FuseSvgIcon';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
/* eslint import/no-webpack-loader-syntax: off */
/* eslint import/extensions: off */
/* eslint no-unused-vars: off */
/* eslint-disable jsx-a11y/accessible-emoji */

function CssBaselineDoc(props) {
  return (
    <>
      <div className="flex flex-1 grow-0 items-center justify-end">
        <Button
          className="normal-case"
          variant="contained"
          color="secondary"
          component="a"
          href="https://mui.com/components/css-baseline"
          target="_blank"
          role="button"
          startIcon={<FuseSvgIcon>heroicons-outline:external-link</FuseSvgIcon>}
        >
          Reference
        </Button>
      </div>
      <Typography className="text-40 my-16 font-700" component="h1">
        CSS Baseline
      </Typography>
      <Typography className="description">
        MUI provides a CssBaseline component to kickstart an elegant, consistent, and simple
        baseline to build upon.
      </Typography>

      <Typography className="text-32 mt-40 mb-10 font-700" component="h2">
        Global reset
      </Typography>
      <Typography className="mb-40" component="div">
        You might be familiar with{' '}
        <a href="https://github.com/necolas/normalize.css">normalize.css</a>, a collection of HTML
        element and attribute style-normalizations.
      </Typography>

      <FuseHighlight component="pre" className="language-jsx">
        {` 
import * as React from 'react';
import CssBaseline from '@mui/material/CssBaseline';

export default function MyApp() {
  return (
    <React.Fragment>
      <CssBaseline />
      {/* The rest of your application */}
    </React.Fragment>
  );
}
`}
      </FuseHighlight>
      <Typography className="text-32 mt-40 mb-10 font-700" component="h2">
        Scoping on children
      </Typography>
      <Typography className="mb-40" component="div">
        However, you might be progressively migrating a website to MUI, using a global reset might
        not be an option. It&#39;s possible to apply the baseline only to the children by using the{' '}
        <code>ScopedCssBaseline</code> component.
      </Typography>

      <FuseHighlight component="pre" className="language-jsx">
        {` 
import * as React from 'react';
import ScopedCssBaseline from '@mui/material/ScopedCssBaseline';
import MyApp from './MyApp';

export default function MyApp() {
  return (
    <ScopedCssBaseline>
      {/* The rest of your application */}
      <MyApp />
    </ScopedCssBaseline>
  );
}
`}
      </FuseHighlight>
      <Typography className="mb-40" component="div">
        ⚠️ Make sure you import <code>ScopedCssBaseline</code> first to avoid box-sizing conflicts
        as in the above example.
      </Typography>
      <Typography className="text-32 mt-40 mb-10 font-700" component="h2">
        Approach
      </Typography>
      <Typography className="text-20 mt-20 mb-10 font-700" component="h3">
        Page
      </Typography>
      <Typography className="mb-40" component="div">
        The <code>{`<html>`}</code> and <code>{`<body>`}</code> elements are updated to provide
        better page-wide defaults. More specifically:
      </Typography>
      <ul>
        <li>The margin in all browsers is removed.</li>
        <li>
          The default Material Design background color is applied. It&#39;s using{' '}
          <a href="/material-ui/customization/default-theme/?expand-path=$.palette.background">
            <code>theme.palette.background.default</code>
          </a>{' '}
          for standard devices and a white background for print devices.
        </li>
        <li>
          If <code>enableColorScheme</code> is provided to <code>CssBaseline</code>, native
          components color will be set by applying{' '}
          <a href="https://web.dev/color-scheme/">
            <code>color-scheme</code>
          </a>{' '}
          on <code>{`<html>`}</code>. The value used is provided by the theme property{' '}
          <code>theme.palette.mode</code>.
        </li>
      </ul>
      <Typography className="text-20 mt-20 mb-10 font-700" component="h3">
        Layout
      </Typography>
      <ul>
        <li>
          <code>box-sizing</code> is set globally on the <code>{`<html>`}</code> element to{' '}
          <code>border-box</code>. Every element—including <code>*::before</code> and{' '}
          <code>*::after</code> are declared to inherit this property, which ensures that the
          declared width of the element is never exceeded due to padding or border.
        </li>
      </ul>
      <Typography className="text-20 mt-20 mb-10 font-700" component="h3">
        Scrollbars
      </Typography>
      <Typography className="mb-40" component="div">
        :::error This API is deprecated, consider using <a href="#color-scheme">color-scheme</a>{' '}
        instead. :::
      </Typography>
      <Typography className="mb-40" component="div">
        The colors of the scrollbars can be customized to improve the contrast (especially on
        Windows). Add this code to your theme (for dark mode).
      </Typography>

      <FuseHighlight component="pre" className="language-jsx">
        {` 
import darkScrollbar from '@mui/material/darkScrollbar';
const theme = createTheme({
  components: {
    MuiCssBaseline: {
      styleOverrides: {
        body: theme.palette.mode === 'dark' ? darkScrollbar() : null,
      },
    },
  },
});
`}
      </FuseHighlight>
      <Typography className="mb-40" component="div">
        Be aware, however, that using this utility (and customizing <code>-webkit-scrollbar</code>)
        forces MacOS to always show the scrollbar.
      </Typography>
      <Typography className="text-20 mt-20 mb-10 font-700" component="h3">
        Color scheme
      </Typography>
      <Typography className="mb-40" component="div">
        This API is introduced in @mui/material (v5.1.0) for switching between{' '}
        <code>{`"light"`}</code> and <code>{`"dark"`}</code> modes of native components such as
        scrollbar, using the <code>color-scheme</code> CSS property. To enable it, you can set{' '}
        <code>enableColorScheme=true</code> as follows:
      </Typography>

      <FuseHighlight component="pre" className="language-jsx">
        {` 
<CssBaseline enableColorScheme />

// or

<ScopedCssBaseline enableColorScheme >
  {/* The rest of your application using color-scheme*/}
</ScopedCssBaseline>
`}
      </FuseHighlight>
      <Typography className="text-20 mt-20 mb-10 font-700" component="h3">
        Typography
      </Typography>
      <ul>
        <li>
          No base font-size is declared on the <code>{`<html>`}</code>, but 16px is assumed (the
          browser default). You can learn more about the implications of changing the{' '}
          <code>{`<html>`}</code> default font size in{' '}
          <a href="/material-ui/customization/typography/#typography-html-font-size">
            the theme documentation
          </a>{' '}
          page.
        </li>
        <li>
          Set the <code>theme.typography.body1</code> style on the <code>{`<body>`}</code> element.
        </li>
        <li>
          Set the font-weight to <code>theme.typography.fontWeightBold</code> for the{' '}
          <code>{`<b>`}</code> and <code>{`<strong>`}</code> elements.
        </li>
        <li>Custom font-smoothing is enabled for better display of the Roboto font.</li>
      </ul>
      <Typography className="text-32 mt-40 mb-10 font-700" component="h2">
        Customization
      </Typography>
      <Typography className="mb-40" component="div">
        Head to the{' '}
        <a href="/material-ui/customization/how-to-customize/#5-global-css-override">
          global customization
        </a>{' '}
        section of the documentation to change the output of these components.
      </Typography>
    </>
  );
}

export default CssBaselineDoc;
