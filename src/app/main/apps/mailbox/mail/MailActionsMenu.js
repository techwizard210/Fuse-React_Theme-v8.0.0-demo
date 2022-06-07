import * as React from 'react';
import Menu from '@mui/material/Menu';
import MenuItem from '@mui/material/MenuItem';
import IconButton from '@mui/material/IconButton';
import ListItemIcon from '@mui/material/ListItemIcon';
import ListItemText from '@mui/material/ListItemText';
import { useDispatch, useSelector } from 'react-redux';
import FuseSvgIcon from '@fuse/core/FuseSvgIcon';
import { useNavigate } from 'react-router-dom';
import { selectMail } from '../store/mailSlice';
import { selectSpamFolderId, selectTrashFolderId } from '../store/foldersSlice';
import { setActionToMails } from '../store/mailsSlice';

function MailActionsMenu(props) {
  const { className } = props;
  const dispatch = useDispatch();
  const [anchorEl, setAnchorEl] = React.useState(null);
  const open = Boolean(anchorEl);
  const mail = useSelector(selectMail);
  const spamFolderId = useSelector(selectSpamFolderId);
  const trashFolderId = useSelector(selectTrashFolderId);
  const navigate = useNavigate();
  const handleClick = (event) => {
    setAnchorEl(event.currentTarget);
  };

  const handleClose = () => {
    setAnchorEl(null);
  };

  return (
    <div className={className}>
      <IconButton
        id="basic-button"
        aria-controls="basic-menu"
        aria-haspopup="true"
        aria-expanded={open ? 'true' : undefined}
        onClick={handleClick}
      >
        <FuseSvgIcon>heroicons-outline:dots-vertical</FuseSvgIcon>
      </IconButton>
      <Menu
        id="basic-menu"
        anchorEl={anchorEl}
        open={open}
        onClose={handleClose}
        MenuListProps={{
          'aria-labelledby': 'basic-button',
        }}
      >
        <MenuItem
          onClick={() => {
            dispatch(setActionToMails({ type: 'unread', value: true, ids: [mail.id] }));
            handleClose();
          }}
        >
          <ListItemIcon className="min-w-40">
            <FuseSvgIcon>heroicons-outline:mail</FuseSvgIcon>
          </ListItemIcon>
          <ListItemText primary="Mark as unread" />
        </MenuItem>

        <MenuItem
          onClick={() => {
            dispatch(setActionToMails({ type: 'folder', value: spamFolderId, ids: [mail.id] }));
            handleClose();
          }}
        >
          <ListItemIcon className="min-w-40">
            <FuseSvgIcon>heroicons-outline:exclamation</FuseSvgIcon>
          </ListItemIcon>
          <ListItemText primary="Spam" />
        </MenuItem>

        <MenuItem
          onClick={() => {
            dispatch(
              setActionToMails({ type: 'folder', value: trashFolderId, ids: [mail.id] })
            ).then(() => {
              navigate(-1);
            });
            handleClose();
          }}
        >
          <ListItemIcon className="min-w-40">
            <FuseSvgIcon>heroicons-outline:trash</FuseSvgIcon>
          </ListItemIcon>
          <ListItemText primary="Delete" />
        </MenuItem>
      </Menu>
    </div>
  );
}

export default MailActionsMenu;
