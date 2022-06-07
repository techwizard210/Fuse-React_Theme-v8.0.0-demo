import Chip from '@mui/material/Chip';
import clsx from 'clsx';
import { useSelector } from 'react-redux';
import { Link } from 'react-router-dom';
import { darken } from '@mui/material/styles';
import { selectLabelsEntities } from './store/labelsSlice';

function NoteLabel(props) {
  const labels = useSelector(selectLabelsEntities);

  if (!labels) {
    return null;
  }

  const label = labels[props.id];

  if (!label) {
    return null;
  }

  const linkProps = props.linkable
    ? {
        element: Link,
        onClick: (ev) => {
          ev.stopPropagation();
        },
        to: `/apps/notes/labels/${label.id}`,
      }
    : {};

  return (
    <Chip
      {...linkProps}
      label={label.title}
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
