import { Box } from '@mui/system';
import Typography from '@mui/material/Typography';
import { useDispatch } from 'react-redux';
import ItemIcon from './ItemIcon';
import { setSelectedItem } from './store/itemsSlice';

function FileItem(props) {
  const { item } = props;
  const dispatch = useDispatch();

  if (!item) {
    return null;
  }

  return (
    <Box
      sx={{ backgroundColor: 'background.paper' }}
      className="flex flex-col relative w-full sm:w-160 h-160 m-8 p-16 shadow rounded-16 cursor-pointer"
      onClick={() => dispatch(setSelectedItem(item.id))}
    >
      <div className="flex flex-auto w-full items-center justify-center">
        <ItemIcon className="" type={item.type} />
      </div>
      <div className="flex shrink flex-col justify-center text-center">
        <Typography className="truncate text-12 font-medium">{item.name}</Typography>
        {item.contents && (
          <Typography className="truncate text-12 font-medium" color="text.secondary">
            {item.contents}
          </Typography>
        )}
      </div>
    </Box>
  );
}

export default FileItem;
