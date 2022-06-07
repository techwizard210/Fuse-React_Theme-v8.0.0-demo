import Dialog from '@mui/material/Dialog';
import { useDispatch, useSelector } from 'react-redux';
import { closeCardDialog, selectCardDialogOpen } from '../../../store/cardSlice';
import BoardCardForm from './BoardCardForm';

function BoardCardDialog(props) {
  const dispatch = useDispatch();
  const cardDialogOpen = useSelector(selectCardDialogOpen);

  return (
    <Dialog
      classes={{
        paper: 'max-w-lg w-full m-8 sm:m-24',
      }}
      onClose={(ev) => dispatch(closeCardDialog())}
      open={cardDialogOpen}
    >
      <BoardCardForm />
    </Dialog>
  );
}

export default BoardCardDialog;
