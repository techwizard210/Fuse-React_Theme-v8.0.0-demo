import { useSelector } from 'react-redux';
import Typography from '@mui/material/Typography';
import { Box } from '@mui/system';
import { lighten } from '@mui/material/styles';
import { selectFiles, selectFolders } from './store/itemsSlice';
import FolderItem from './FolderItem';
import FileItem from './FileItem';

function FileManagerList() {
  const folders = useSelector(selectFolders);
  const files = useSelector(selectFiles);

  return (
    <div className="p-32">
      {folders.length > 0 && (
        <Box
          className="p-16 w-full rounded-16 mb-24 border"
          sx={{
            backgroundColor: (theme) =>
              theme.palette.mode === 'light'
                ? lighten(theme.palette.background.default, 0.4)
                : lighten(theme.palette.background.default, 0.02),
          }}
        >
          <Typography className="font-medium">Folders</Typography>

          <div className="flex flex-wrap -m-8 mt-8">
            {folders.map((item) => (
              <FolderItem key={item.id} item={item} />
            ))}
          </div>
        </Box>
      )}

      {files.length > 0 && (
        <Box
          className="p-16 w-full rounded-16 mb-24 border"
          sx={{
            backgroundColor: (theme) =>
              theme.palette.mode === 'light'
                ? lighten(theme.palette.background.default, 0.4)
                : lighten(theme.palette.background.default, 0.02),
          }}
        >
          <Typography className="font-medium">Files</Typography>

          <div className="flex flex-wrap -m-8 mt-8">
            {files.map((item) => (
              <FileItem key={item.id} item={item} />
            ))}
          </div>
        </Box>
      )}
    </div>
  );
}

export default FileManagerList;
