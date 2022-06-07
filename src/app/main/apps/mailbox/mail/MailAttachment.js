import Typography from '@mui/material/Typography';
import { Box } from '@mui/system';

function MailAttachment(props) {
  const { attachment } = props;
  return (
    <div className="flex items-center m-12">
      {attachment.type.startsWith('image/') && (
        <img
          className="w-40 h-40 rounded-md overflow-hidden"
          src={`assets/images/apps/mailbox/${attachment.preview}`}
          alt="attachment"
        />
      )}

      {attachment.type.startsWith('application/') && (
        <Box
          sx={{ backgroundColor: 'background.default' }}
          className="flex items-center justify-center w-40 h-40 rounded-md overflow-hidden"
        >
          <Typography className="flex items-center justify-center text-sm font-semibold">
            {attachment.type.split('/')[1].trim().toUpperCase()}
          </Typography>
        </Box>
      )}

      <div className="mx-12">
        <Typography className="text-md font-medium truncate">{attachment.name}</Typography>
        <Typography className="text-sm font-medium truncate" color="text.secondary">
          {attachment.size / 1000} KB
        </Typography>
      </div>
    </div>
  );
}

export default MailAttachment;
