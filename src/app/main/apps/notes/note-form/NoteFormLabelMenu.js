import _ from '@lodash';
import ClickAwayListener from '@mui/material/ClickAwayListener';
import IconButton from '@mui/material/IconButton';
import List from '@mui/material/List';
import ListItem from '@mui/material/ListItem';
import ListItemText from '@mui/material/ListItemText';
import Popover from '@mui/material/Popover';
import { useState } from 'react';
import { useSelector } from 'react-redux';
import FuseSvgIcon from '@fuse/core/FuseSvgIcon';
import { selectLabels } from '../store/labelsSlice';

function NoteFormLabelMenu(props) {
  const labels = useSelector(selectLabels);

  const [anchorEl, setAnchorEl] = useState(null);

  function handleMenuClick(event) {
    event.stopPropagation();
    setAnchorEl(event.currentTarget);
  }

  function handleMenuClose() {
    setAnchorEl(null);
  }

  function handleToggleLabel(id) {
    props.onChange(_.xor(props.note.labels, [id]));
  }

  return (
    <div>
      <IconButton className="w-32 h-32 mx-4 p-0" onClick={handleMenuClick} size="large">
        <FuseSvgIcon size={20}>heroicons-outline:tag</FuseSvgIcon>
      </IconButton>
      <Popover
        hideBackdrop
        open={Boolean(anchorEl)}
        anchorEl={anchorEl}
        onClose={handleMenuClose}
        anchorOrigin={{
          vertical: 'bottom',
          horizontal: 'center',
        }}
        transformOrigin={{
          vertical: 'top',
          horizontal: 'center',
        }}
        className="pointer-events-none"
        classes={{
          paper: 'pointer-events-auto py-8 prevent-add-close',
        }}
      >
        <ClickAwayListener onClickAway={handleMenuClose}>
          <List className="p-0">
            {labels.map((label) => (
              <ListItem key={label.id} button dense onClick={() => handleToggleLabel(label.id)}>
                <FuseSvgIcon className="list-item-icon" size={20} color="action">
                  {props.note.labels.includes(label.id)
                    ? 'heroicons-outline:check-circle'
                    : 'heroicons-outline:minus-circle'}
                </FuseSvgIcon>
                <ListItemText className="truncate px-8" primary={label.title} disableTypography />
              </ListItem>
            ))}
          </List>
        </ClickAwayListener>
      </Popover>
    </div>
  );
}

export default NoteFormLabelMenu;
