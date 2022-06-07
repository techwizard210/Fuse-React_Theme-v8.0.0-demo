import FuseExample from '@fuse/core/FuseExample';
import FuseSvgIcon from '@fuse/core/FuseSvgIcon';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
/* eslint import/no-webpack-loader-syntax: off */
/* eslint import/extensions: off */
/* eslint no-unused-vars: off */
/* eslint-disable jsx-a11y/accessible-emoji */

function TransferListDoc(props) {
  return (
    <>
      <div className="flex flex-1 grow-0 items-center justify-end">
        <Button
          className="normal-case"
          variant="contained"
          color="secondary"
          component="a"
          href="https://mui.com/components/transfer-list"
          target="_blank"
          role="button"
          startIcon={<FuseSvgIcon>heroicons-outline:external-link</FuseSvgIcon>}
        >
          Reference
        </Button>
      </div>
      <Typography className="text-40 my-16 font-700" component="h1">
        Transfer list
      </Typography>
      <Typography className="description">
        A transfer list (or "shuttle") enables the user to move one or more list items between
        lists.
      </Typography>

      <Typography className="text-32 mt-40 mb-10 font-700" component="h2">
        Basic transfer list
      </Typography>
      <Typography className="mb-40" component="div">
        For completeness, this example includes buttons for &quot;move all&quot;, but not every
        transfer list needs these.
      </Typography>
      <Typography className="mb-40" component="div">
        <FuseExample
          name="TransferList.js"
          className="my-24"
          iframe={false}
          component={require('../components/transfer-list/TransferList.js').default}
          raw={require('!raw-loader!../components/transfer-list/TransferList.js')}
        />
      </Typography>
      <Typography className="text-32 mt-40 mb-10 font-700" component="h2">
        Enhanced transfer list
      </Typography>
      <Typography className="mb-40" component="div">
        This example exchanges the &quot;move all&quot; buttons for a &quot;select all / select
        none&quot; checkbox, and adds a counter.
      </Typography>
      <Typography className="mb-40" component="div">
        <FuseExample
          name="SelectAllTransferList.js"
          className="my-24"
          iframe={false}
          component={require('../components/transfer-list/SelectAllTransferList.js').default}
          raw={require('!raw-loader!../components/transfer-list/SelectAllTransferList.js')}
        />
      </Typography>
      <Typography className="text-32 mt-40 mb-10 font-700" component="h2">
        Limitations
      </Typography>
      <Typography className="mb-40" component="div">
        The component comes with a couple of limitations:
      </Typography>
      <ul>
        <li>
          It only works on desktop. If you have a limited amount of options to select, prefer the{' '}
          <a href="/material-ui/react-autocomplete/#multiple-values">Autocomplete</a> component. If
          mobile support is important for you, have a look at{' '}
          <a href="https://github.com/mui/material-ui/issues/27579">#27579</a>.
        </li>
        <li>
          There are no high-level components exported from npm. The demos are based on composition.
          If this is important for you, have a look at{' '}
          <a href="https://github.com/mui/material-ui/issues/27579">#27579</a>.
        </li>
      </ul>
    </>
  );
}

export default TransferListDoc;
