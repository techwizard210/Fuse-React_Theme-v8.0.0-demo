import Chip from '@mui/material/Chip';
import clsx from 'clsx';
import format from 'date-fns/format';
import { darken } from '@mui/material/styles';
import FuseSvgIcon from '@fuse/core/FuseSvgIcon';

function NoteLabel(props) {
  if (!props.date) {
    return null;
  }

  return (
    <Chip
      icon={<FuseSvgIcon size={16}>heroicons-outline:clock</FuseSvgIcon>}
      label={format(new Date(props.date), 'MMM dd yy, h:mm')}
      classes={{
        root: clsx('h-24 border-0', props.className),
        label: 'px-12 py-4 text-12 font-medium leading-none',
        deleteIcon: 'w-16',
        ...props.classes,
      }}
      sx={{
        color: 'text.secondary',
        backgroundColor: (theme) => darken(theme.palette.background.default, 0.03),
      }}
      variant="outlined"
      onDelete={props.onDelete}
    />
  );
}

export default NoteLabel;
