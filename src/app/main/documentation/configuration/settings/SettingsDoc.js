import FuseHighlight from '@fuse/core/FuseHighlight';
import Typography from '@mui/material/Typography';

/* eslint import/no-webpack-loader-syntax: off */
/* eslint import/extensions: off */

function SettingsDoc() {
  return (
    <>
      <Typography variant="h4" className="mb-40 font-700">
        Default Settings
      </Typography>

      <Typography className="mb-16" component="p">
        You can set the default layout, theme settings of your app at
        <code>app/configs/settingsConfig.js</code>
      </Typography>

      <FuseHighlight component="pre" className="language-jsx">
        {require('!raw-loader!app/configs/settingsConfig.js')}
      </FuseHighlight>
    </>
  );
}

export default SettingsDoc;
