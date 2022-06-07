import Dialog from '@mui/material/Dialog';
import { useDispatch, useSelector } from 'react-redux';
import Typography from '@mui/material/Typography';
import List from '@mui/material/List';
import { closeLabelsDialog, selectLabels, selectLabelsDialogOpen } from '../../store/labelsSlice';
import NewLabelForm from './NewLabelForm';
import LabelItemForm from './LabelItemForm';

function LabelsDialog(props) {
  const dispatch = useDispatch();
  const labelsDialogOpen = useSelector(selectLabelsDialogOpen);
  const labels = useSelector(selectLabels);

  return (
    <Dialog
      classes={{
        paper: 'w-full max-w-320 p-24 md:p-40 m-24',
      }}
      onClose={(ev) => dispatch(closeLabelsDialog())}
      open={labelsDialogOpen}
    >
      <Typography className="text-20 mb-24 font-semibold">Edit Labels</Typography>

      <List dense>
        <NewLabelForm />

        {labels.map((item) => (
          <LabelItemForm label={item} key={item.id} />
        ))}
      </List>
    </Dialog>
  );
}

export default LabelsDialog;
