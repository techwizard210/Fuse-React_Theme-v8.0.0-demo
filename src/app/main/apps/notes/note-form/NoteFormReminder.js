import { DateTimePicker } from '@mui/lab';
import TextField from '@mui/material/TextField';
import FuseSvgIcon from '@fuse/core/FuseSvgIcon';

function NoteFormReminder(props) {
  const reminder = new Date(props.reminder);
  return (
    <DateTimePicker
      clearable
      showTodayButton
      disablePast
      value={reminder}
      onChange={props.onChange}
      renderInput={(_props) => (
        <TextField
          sx={{
            '& .MuiInputAdornment-root': {
              minWidth: 40,
              minHeight: 40,
              m: 0,
            },
            '& .MuiOutlinedInput-notchedOutline': {
              display: 'none',
            },
            '& .MuiOutlinedInput-root': {
              padding: 0,
            },
            '& .MuiInputBase-input': {
              position: 'absolute',
              pointerEvents: 'none',
              visibility: 'hidden',
            },
          }}
          {..._props}
        />
      )}
      components={{
        OpenPickerIcon: () => <FuseSvgIcon size={20}>heroicons-outline:bell</FuseSvgIcon>,
      }}
    />
  );
}

export default NoteFormReminder;
