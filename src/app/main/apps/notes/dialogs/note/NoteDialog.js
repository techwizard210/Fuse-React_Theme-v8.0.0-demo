import { useDebounce } from '@fuse/hooks';
import Dialog from '@mui/material/Dialog';
import Slide from '@mui/material/Slide';
import { forwardRef } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useParams } from 'react-router-dom';
import {
  closeNoteDialog,
  getNotes,
  removeNote,
  selectDialogNote,
  updateNote,
} from '../../store/notesSlice';
import NoteForm from '../../note-form/NoteForm';

const Transition = forwardRef(function Transition(props, ref) {
  return <Slide direction="up" ref={ref} {...props} />;
});

function NoteDialog(props) {
  const dispatch = useDispatch();
  const routeParams = useParams();
  const note = useSelector(selectDialogNote);

  const handleOnChange = useDebounce((_note) => {
    dispatch(updateNote(_note)).then(() => {
      dispatch(getNotes(routeParams));
    });
  }, 600);

  function handleOnRemove() {
    dispatch(removeNote(note?.id));
  }

  if (!note) {
    return null;
  }

  return (
    <Dialog
      classes={{
        paper: 'w-full m-24',
      }}
      TransitionComponent={Transition}
      onClose={(ev) => dispatch(closeNoteDialog())}
      open={Boolean(note?.id)}
    >
      <NoteForm
        note={note}
        onChange={handleOnChange}
        onClose={(ev) => dispatch(closeNoteDialog())}
        onRemove={handleOnRemove}
      />
    </Dialog>
  );
}

export default NoteDialog;
