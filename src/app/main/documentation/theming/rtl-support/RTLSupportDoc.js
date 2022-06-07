import FuseHighlight from '@fuse/core/FuseHighlight';
import Typography from '@mui/material/Typography';
import { Link } from 'react-router-dom';

/* eslint import/no-webpack-loader-syntax: off */
/* eslint import/extensions: off */

function RTLSupportDoc() {
  return (
    <>
      <Typography variant="h4" className="mb-40 font-700">
        RTL Support
      </Typography>

      <Typography className="mb-16" component="p">
        Fuse React supports Right-to-left languages such as Arabic, Persian or Hebrew, etc.
      </Typography>

      <Typography className="text-20 mt-20 mb-10 font-700" variant="h5">
        Development
      </Typography>

      <Typography className="mb-16" component="p">
        We used{' '}
        <a
          href="https://tailwindcss.com/docs/hover-focus-and-other-states#rtl-support"
          target="_blank"
          rel="noopener noreferrer"
        >
          TailwindCss's rtl and ltr modifiers
        </a>{' '}
        and the{' '}
        <a href="https://github.com/alitaheri/jss-rtl" target="_blank" rel="noopener noreferrer">
          <code>jss-rtl</code>
        </a>{' '}
        plugin to support RTL feature of the Fuse React.
      </Typography>

      <Typography className="mb-16" component="p">
        <a href="https://github.com/alitaheri/jss-rtl" target="_blank" rel="noopener noreferrer">
          <code>jss-rtl</code>
        </a>{' '}
        enables right-to-left support by flipping every rule of the jss styles on the x-axis. You
        can write the application left-to-right and then turn it into right-to-left using this
        plugin. Or you can start right-to-left and turn it into left-to-right.
      </Typography>

      <Typography className="mb-16" component="p">
        <a
          href="https://tailwindcss.com/docs/hover-focus-and-other-states#rtl-support"
          target="_blank"
          rel="noopener noreferrer"
        >
          <code>TailwindCss's rtl and ltr modifiers</code>
        </a>{' '}
        are a custom direction variant to your tailwind project, letting you have custom CSS rules
        for LTR and RTL layouts. For example:
      </Typography>

      <FuseHighlight component="pre" className="language-jsx mb-24">
        {`
            <div class="text-green text-2xl ltr:pl-4 rtl:pr-4">
                Hello, world.
            </div>
        `}
      </FuseHighlight>

      <Typography className="text-20 mt-20 mb-10 font-700" variant="h5">
        Configuration
      </Typography>

      <Typography className="mb-16" component="p">
        The theme's language direction depends on the theme language. So There is no need to define
        direction value. Checkout{' '}
        <Link className="link mx-8" to="/documentation/mock-api">
          Multi Language configuration
        </Link>
      </Typography>
    </>
  );
}

export default RTLSupportDoc;
