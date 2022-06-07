import FuseHighlight from '@fuse/core/FuseHighlight';
import Typography from '@mui/material/Typography';

/* eslint import/no-webpack-loader-syntax: off */
/* eslint import/extensions: off */

function ThemeShemesDoc() {
  return (
    <>
      <Typography variant="h4" className="mb-40 font-700">
        Theme Schemes
      </Typography>

      <Typography className="mb-16" component="p">
        The Fuse React uses material-ui's theming by default. You can create theme color schemes
        with defining theme configuration objects.
      </Typography>

      <Typography className="text-20 mt-20 mb-10 font-700" variant="h5">
        Configuration
      </Typography>

      <Typography className="mb-16" component="p">
        For the configuration options checkout{' '}
        <a href="https://mui.com/customization/theming" target="_blank" rel="noopener noreferrer">
          Material UI's theme configuration options.
        </a>
      </Typography>
      <Typography className="mb-16" component="p">
        Theme configurations are located at <code>app/configs/themesConfig.js</code> file.
      </Typography>

      <FuseHighlight component="pre" className="language-jsx">
        {require('!raw-loader!app/configs/themesConfig.js')}
      </FuseHighlight>
    </>
  );
}

export default ThemeShemesDoc;
