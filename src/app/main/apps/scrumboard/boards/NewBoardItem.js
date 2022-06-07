import FuseSvgIcon from '@fuse/core/FuseSvgIcon';
import { Box } from '@mui/system';
import { useDispatch } from 'react-redux';
import { newBoard } from '../store/boardsSlice';

function NewBoardItem(props) {
  const dispatch = useDispatch();

  return (
    <Box
      sx={{
        borderColor: 'divider',
      }}
      className="flex flex-col items-center justify-center w-full h-full rounded-lg cursor-pointer border-2 border-gray-300 border-dashed hover:bg-hover transition-colors duration-150 ease-in-out"
      onClick={() => dispatch(newBoard())}
      onKeyDown={() => dispatch(newBoard())}
      role="button"
      tabIndex={0}
    >
      <FuseSvgIcon size={48} color="disabled">
        heroicons-outline:plus
      </FuseSvgIcon>
    </Box>
  );
}

export default NewBoardItem;
