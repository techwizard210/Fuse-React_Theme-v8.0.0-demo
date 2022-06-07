import FuseExample from '@fuse/core/FuseExample';
import FuseHighlight from '@fuse/core/FuseHighlight';
import FuseSvgIcon from '@fuse/core/FuseSvgIcon';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
/* eslint import/no-webpack-loader-syntax: off */
/* eslint import/extensions: off */
/* eslint no-unused-vars: off */
/* eslint-disable jsx-a11y/accessible-emoji */

function TextareaAutosizeDoc(props) {
  return (
    <>
      <div className="flex flex-1 grow-0 items-center justify-end">
        <Button
          className="normal-case"
          variant="contained"
          color="secondary"
          component="a"
          href="https://mui.com/components/textarea-autosize"
          target="_blank"
          role="button"
          startIcon={<FuseSvgIcon>heroicons-outline:external-link</FuseSvgIcon>}
        >
          Reference
        </Button>
      </div>
      <Typography className="text-40 my-16 font-700" component="h1">
        Textarea Autosize
      </Typography>
      <Typography className="description">
        A textarea component for React which grows with content.
      </Typography>

      <ul>
        <li>
          📦 <a href="/size-snapshot">1.5 kB gzipped</a>
        </li>
      </ul>
      <Typography className="mb-40" component="div">
        The <code>TextareaAutosize</code> component automatically adjust the textarea height on
        keyboard and window resize events.
      </Typography>
      <Typography className="text-32 mt-40 mb-10 font-700" component="h2">
        Empty
      </Typography>
      <Typography className="mb-40" component="div">
        <FuseExample
          name="EmptyTextarea.js"
          className="my-24"
          iframe={false}
          component={require('../components/textarea-autosize/EmptyTextarea.js').default}
          raw={require('!raw-loader!../components/textarea-autosize/EmptyTextarea.js')}
        />
      </Typography>
      <Typography className="text-32 mt-40 mb-10 font-700" component="h2">
        Minimum height
      </Typography>
      <Typography className="mb-40" component="div">
        <FuseExample
          name="MinHeightTextarea.js"
          className="my-24"
          iframe={false}
          component={require('../components/textarea-autosize/MinHeightTextarea.js').default}
          raw={require('!raw-loader!../components/textarea-autosize/MinHeightTextarea.js')}
        />
      </Typography>
      <Typography className="text-32 mt-40 mb-10 font-700" component="h2">
        Maximum height
      </Typography>
      <Typography className="mb-40" component="div">
        <FuseExample
          name="MaxHeightTextarea.js"
          className="my-24"
          iframe={false}
          component={require('../components/textarea-autosize/MaxHeightTextarea.js').default}
          raw={require('!raw-loader!../components/textarea-autosize/MaxHeightTextarea.js')}
        />
      </Typography>
      <Typography className="text-32 mt-40 mb-10 font-700" component="h2">
        Base
      </Typography>
      <Typography className="mb-40" component="div">
        The <a href="/base/react-textarea-autosize/">TextareaAutosize</a> component is defined in
        the @mui/base package. It is reexported from @mui/material for convenience. In your
        application you may import it from either package.
      </Typography>

      <FuseHighlight component="pre" className="language-js">
        {` 
import TextareaAutosize from '@mui/base/TextareaAutosize';
`}
      </FuseHighlight>
    </>
  );
}

export default TextareaAutosizeDoc;
