import Tooltip from '@mui/material/Tooltip';
import { useSelector } from 'react-redux';
import Chip from '@mui/material/Chip';
import { selectLabelById } from '../../store/labelsSlice';

function BoardCardLabel(props) {
  const { id } = props;

  const label = useSelector((state) => selectLabelById(state, id));

  if (!label) {
    return null;
  }

  return (
    <Tooltip title={label.title} key={id}>
      <Chip className="font-semibold text-12 mx-4 mb-6" label={label.title} size="small" />
    </Tooltip>
  );
}

export default BoardCardLabel;
