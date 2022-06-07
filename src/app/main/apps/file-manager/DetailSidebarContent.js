import Typography from '@mui/material/Typography';
import { motion } from 'framer-motion';
import { useDispatch, useSelector } from 'react-redux';
import IconButton from '@mui/material/IconButton';
import FuseSvgIcon from '@fuse/core/FuseSvgIcon';
import { lighten } from '@mui/material/styles';
import { Box } from '@mui/system';
import Button from '@mui/material/Button';
import { selectItemById, setSelectedItem } from './store/itemsSlice';
import ItemIcon from './ItemIcon';

function DetailSidebarContent(props) {
  const dispatch = useDispatch();

  const item = useSelector((state) =>
    selectItemById(state, state.fileManagerApp.items.selectedItemId)
  );

  if (!item) {
    return null;
  }

  return (
    <motion.div
      initial={{ y: 50, opacity: 0.8 }}
      animate={{ y: 0, opacity: 1, transition: { delay: 0.3 } }}
      className="file-details p-24 sm:p-32"
    >
      <div className="flex items-center justify-end w-full">
        <IconButton className="" size="large" onClick={() => dispatch(setSelectedItem(null))}>
          <FuseSvgIcon>heroicons-outline:x</FuseSvgIcon>
        </IconButton>
      </div>

      <Box
        className=" w-full rounded-8 border preview h-128 sm:h-256 file-icon flex items-center justify-center my-32"
        sx={{
          backgroundColor: (theme) =>
            theme.palette.mode === 'light'
              ? lighten(theme.palette.background.default, 0.4)
              : lighten(theme.palette.background.default, 0.02),
        }}
      >
        <motion.div initial={{ scale: 0 }} animate={{ scale: 1, transition: { delay: 0.3 } }}>
          <ItemIcon className="" type={item.type} />
        </motion.div>
      </Box>

      <Typography className="text-18 font-medium">{item.name}</Typography>

      <div className="text-16 font-medium mt-32">Information</div>
      <div className="flex flex-col mt-16 border-t border-b divide-y font-medium">
        <div className="flex items-center justify-between py-12">
          <Typography color="text.secondary">Created By</Typography>
          <Typography>{item.createdBy}</Typography>
        </div>
        <div className="flex items-center justify-between py-12">
          <Typography color="text.secondary">Created At</Typography>
          <Typography>{item.createdAt}</Typography>
        </div>
        <div className="flex items-center justify-between py-12">
          <Typography color="text.secondary">Modified At</Typography>
          <Typography>{item.modifiedAt}</Typography>
        </div>
        <div className="flex items-center justify-between py-12">
          <Typography color="text.secondary">Size</Typography>
          <Typography>{item.size}</Typography>
        </div>
        {item.contents && (
          <div className="flex items-center justify-between py-12">
            <Typography color="text.secondary">Contents</Typography>
            <Typography>{item.contents}</Typography>
          </div>
        )}
      </div>

      {item.description && (
        <>
          <div className="text-16 font-medium mt-32 pb-16 border-b">Description</div>
          <Typography className="py-12">{item.description}</Typography>
        </>
      )}

      <div className="grid grid-cols-2 gap-16 w-full mt-32">
        <Button className="flex-auto" color="secondary" variant="contained">
          Download
        </Button>
        <Button className="flex-auto">Delete</Button>
      </div>
    </motion.div>
  );
}

export default DetailSidebarContent;
