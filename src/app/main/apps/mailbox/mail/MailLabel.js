import Chip from '@mui/material/Chip';
import clsx from 'clsx';
import { useSelector } from 'react-redux';
import { selectLabelById } from '../store/labelsSlice';
import { labelColorDefs } from './labelColors';

function MailLabel(props) {
  const { labelId } = props;
  const label = useSelector((state) => selectLabelById(state, labelId));
  if (!label) {
    return null;
  }
  return (
    <Chip
      label={label.title}
      classes={{
        root: clsx('h-24 border-0', props.className, labelColorDefs[label.color].combined),
        label: 'px-12 py-4 text-12 font-medium leading-none',
      }}
    />
  );
}

export default MailLabel;
