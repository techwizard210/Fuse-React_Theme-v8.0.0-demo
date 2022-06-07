import FuseExample from '@fuse/core/FuseExample';
import FuseSvgIcon from '@fuse/core/FuseSvgIcon';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
/* eslint import/no-webpack-loader-syntax: off */
/* eslint import/extensions: off */
/* eslint no-unused-vars: off */
/* eslint-disable jsx-a11y/accessible-emoji */

function PaperDoc(props) {
  return (
    <>
      <div className="flex flex-1 grow-0 items-center justify-end">
        <Button
          className="normal-case"
          variant="contained"
          color="secondary"
          component="a"
          href="https://mui.com/components/paper"
          target="_blank"
          role="button"
          startIcon={<FuseSvgIcon>heroicons-outline:external-link</FuseSvgIcon>}
        >
          Reference
        </Button>
      </div>
      <Typography className="text-40 my-16 font-700" component="h1">
        Paper
      </Typography>
      <Typography className="description">
        In Material Design, the physical properties of paper are translated to the screen.{' '}
      </Typography>

      <Typography className="mb-40" component="div">
        The background of an application resembles the flat, opaque texture of a sheet of paper, and
        an application&#39;s behavior mimics paper&#39;s ability to be re-sized, shuffled, and bound
        together in multiple sheets.
      </Typography>
      <Typography className="text-32 mt-40 mb-10 font-700" component="h2">
        Basic paper
      </Typography>
      <Typography className="mb-40" component="div">
        <FuseExample
          name="SimplePaper.js"
          className="my-24"
          iframe={false}
          component={require('../components/paper/SimplePaper.js').default}
          raw={require('!raw-loader!../components/paper/SimplePaper.js')}
        />
      </Typography>
      <Typography className="text-32 mt-40 mb-10 font-700" component="h2">
        Variants
      </Typography>
      <Typography className="mb-40" component="div">
        If you need an outlined surface, use the <code>variant</code> prop.
      </Typography>
      <Typography className="mb-40" component="div">
        <FuseExample
          name="Variants.js"
          className="my-24"
          iframe={false}
          component={require('../components/paper/Variants.js').default}
          raw={require('!raw-loader!../components/paper/Variants.js')}
        />
      </Typography>
      <Typography className="text-32 mt-40 mb-10 font-700" component="h2">
        Elevation
      </Typography>
      <Typography className="mb-40" component="div">
        The elevation can be used to establish a hierarchy between other content. In practical
        terms, the elevation controls the size of the shadow applied to the surface. In dark mode,
        raising the elevation also makes the surface lighter.
      </Typography>
      <Typography className="mb-40" component="div">
        <FuseExample
          name="Elevation.js"
          className="my-24"
          iframe={false}
          component={require('../components/paper/Elevation.js').default}
          raw={require('!raw-loader!../components/paper/Elevation.js')}
        />
      </Typography>
      <Typography className="mb-40" component="div">
        The change of shade in dark mode is done by applying a semi-transparent gradient to the{' '}
        <code>background-image</code> property. This can lead to confusion when overriding the
        styles of <code>Paper</code>, as setting just the <code>background-color</code> property
        will not affect the elevation-related shading. To ignore the shading and set the background
        color that is not affected by elevation in dark mode, override the <code>background</code>{' '}
        property (or both <code>background-color</code> and <code>background-image</code>).
      </Typography>
    </>
  );
}

export default PaperDoc;
