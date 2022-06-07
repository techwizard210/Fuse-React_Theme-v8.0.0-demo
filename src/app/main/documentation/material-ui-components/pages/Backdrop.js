import FuseExample from '@fuse/core/FuseExample';
import FuseSvgIcon from '@fuse/core/FuseSvgIcon';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
/* eslint import/no-webpack-loader-syntax: off */
/* eslint import/extensions: off */
/* eslint no-unused-vars: off */
/* eslint-disable jsx-a11y/accessible-emoji */

function BackdropDoc(props) {
  return (
    <>
      <div className="flex flex-1 grow-0 items-center justify-end">
        <Button
          className="normal-case"
          variant="contained"
          color="secondary"
          component="a"
          href="https://mui.com/components/backdrop"
          target="_blank"
          role="button"
          startIcon={<FuseSvgIcon>heroicons-outline:external-link</FuseSvgIcon>}
        >
          Reference
        </Button>
      </div>
      <Typography className="text-40 my-16 font-700" component="h1">
        Backdrop
      </Typography>
      <Typography className="description">
        The backdrop component is used to provide emphasis on a particular element or parts of it.
      </Typography>

      <Typography className="mb-40" component="div">
        The backdrop signals to the user of a state change within the application and can be used
        for creating loaders, dialogs, and more. In its simplest form, the backdrop component will
        add a dimmed layer over your application.
      </Typography>
      <Typography className="text-32 mt-40 mb-10 font-700" component="h2">
        Example
      </Typography>
      <Typography className="mb-40" component="div">
        <FuseExample
          name="SimpleBackdrop.js"
          className="my-24"
          iframe={false}
          component={require('../components/backdrop/SimpleBackdrop.js').default}
          raw={require('!raw-loader!../components/backdrop/SimpleBackdrop.js')}
        />
      </Typography>
    </>
  );
}

export default BackdropDoc;
