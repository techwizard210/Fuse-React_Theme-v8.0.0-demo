import Typography from '@mui/material/Typography';
import Button from '@mui/material/Button';
import FuseSvgIcon from '@fuse/core/FuseSvgIcon';
import { useContext } from 'react';
import { ChatAppContext } from './ChatApp';

const ChatFirstScreen = () => {
  const { setMainSidebarOpen } = useContext(ChatAppContext);

  return (
    <div className="flex flex-col flex-1 items-center justify-center w-full p-24">
      <FuseSvgIcon className="icon-size-128 mb-16" color="disabled">
        heroicons-outline:chat
      </FuseSvgIcon>
      <Typography
        className="hidden md:flex text-20 font-semibold tracking-tight text-secondary"
        color="text.secondary"
      >
        Select a conversation or start a new chat
      </Typography>
      <Button
        variant="contained"
        color="secondary"
        className="flex md:hidden"
        onClick={() => setMainSidebarOpen(true)}
      >
        Select a conversation or start a new chat
      </Button>
    </div>
  );
};

export default ChatFirstScreen;
