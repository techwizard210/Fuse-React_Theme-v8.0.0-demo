import FuseHighlight from '@fuse/core/FuseHighlight';
import Button from '@mui/material/Button';
import DialogActions from '@mui/material/DialogActions';
import DialogContent from '@mui/material/DialogContent';
import DialogContentText from '@mui/material/DialogContentText';
import DialogTitle from '@mui/material/DialogTitle';
import Typography from '@mui/material/Typography';
import { useDispatch } from 'react-redux';
import { closeDialog, openDialog } from 'app/store/fuse/dialogSlice';

function FuseDialogDoc(props) {
  const dispatch = useDispatch();

  return (
    <>
      <Typography variant="h4" className="mb-40 font-700">
        FuseDialog
      </Typography>

      <Typography className="mb-16" component="p">
        <code>FuseDialog</code> is a simple dialog trigger for easily showing dialog messages via
        redux action. It should be located in the theme layouts.
      </Typography>

      <Typography className="text-20 mt-20 mb-10 font-700" variant="h5">
        Usage
      </Typography>

      <Typography className="mb-16" component="p">
        You can show dialog anywhere with dispatching the action openDialog, it is using
        Material-UI's dialog so you can pass the props in the object:
      </Typography>

      <FuseHighlight component="pre" className="language-jsx">
        {`
                        <Button
                            onClick={()=> dispatch(openDialog({
                                children: (
                                    <React.Fragment>
                                        <DialogTitle id="alert-dialog-title">Use Google's location service?</DialogTitle>
                                        <DialogContent>
                                            <DialogContentText id="alert-dialog-description">
                                                Let Google help apps determine location. This means sending anonymous location data to
                                                Google, even when no apps are running.
                                            </DialogContentText>
                                        </DialogContent>
                                        <DialogActions>
                                            <Button onClick={()=> dispatch(closeDialog())} color="primary">
                                                Disagree
                                            </Button>
                                            <Button onClick={()=> dispatch(closeDialog())} color="primary" autoFocus>
                                                Agree
                                            </Button>
                                        </DialogActions>
                                    </React.Fragment>
                                     )
                                 }))}
                            variant="contained"
                            color="secondary"
                        >
                            Open Dialog
                        </Button>
                        `}
      </FuseHighlight>

      <Typography className="text-20 mt-20 mb-10 font-700" variant="h5">
        Example
      </Typography>

      <Button
        onClick={() =>
          dispatch(
            openDialog({
              children: (
                <>
                  <DialogTitle id="alert-dialog-title">Use Google's location service?</DialogTitle>
                  <DialogContent>
                    <DialogContentText id="alert-dialog-description">
                      Let Google help apps determine location. This means sending anonymous location
                      data to Google, even when no apps are running.
                    </DialogContentText>
                  </DialogContent>
                  <DialogActions>
                    <Button onClick={() => dispatch(closeDialog())} color="primary">
                      Disagree
                    </Button>
                    <Button onClick={() => dispatch(closeDialog())} color="primary" autoFocus>
                      Agree
                    </Button>
                  </DialogActions>
                </>
              ),
            })
          )
        }
        variant="contained"
        color="secondary"
      >
        Open Dialog
      </Button>
    </>
  );
}

export default FuseDialogDoc;
