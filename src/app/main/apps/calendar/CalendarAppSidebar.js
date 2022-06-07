import { motion } from 'framer-motion';
import { Checkbox, IconButton } from '@mui/material';
import FuseSvgIcon from '@fuse/core/FuseSvgIcon';
import { useDispatch, useSelector } from 'react-redux';
import Typography from '@mui/material/Typography';
import { Box } from '@mui/system';
import {
  openLabelsDialog,
  selectLabels,
  selectSelectedLabels,
  toggleSelectedLabels,
} from './store/labelsSlice';

function CalendarAppSidebar() {
  const labels = useSelector(selectLabels);
  const selectedLabels = useSelector(selectSelectedLabels);
  const dispatch = useDispatch();

  return (
    <div className="flex flex-col flex-auto min-h-full p-32">
      <motion.span
        initial={{ x: -20 }}
        animate={{ x: 0, transition: { delay: 0.2 } }}
        delay={300}
        className="pb-24 text-4xl font-extrabold tracking-tight"
      >
        Calendar
      </motion.span>

      <div className="group flex items-center justify-between mb-12">
        <Typography className="text-15 font-600 leading-none" color="secondary.main">
          LABELS
        </Typography>

        <IconButton onClick={(ev) => dispatch(openLabelsDialog())} size="small">
          <FuseSvgIcon color="secondary" size={20}>
            heroicons-solid:pencil-alt
          </FuseSvgIcon>
        </IconButton>
      </div>

      {labels.map((label) => (
        <div key={label.id} className="group flex items-center mt-8 space-x-8 h-24 w-full">
          <Checkbox
            color="default"
            className="p-0"
            checked={selectedLabels.includes(label.id)}
            onChange={() => {
              dispatch(toggleSelectedLabels(label.id));
            }}
          />

          <Box className="w-12 h-12 shrink-0 rounded-full" sx={{ backgroundColor: label.color }} />

          <Typography className="flex flex-1 leading-none">{label.title}</Typography>
        </div>
      ))}
    </div>
  );
}

export default CalendarAppSidebar;
