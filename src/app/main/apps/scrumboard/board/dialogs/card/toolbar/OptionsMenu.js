import IconButton from '@mui/material/IconButton';
import MenuItem from '@mui/material/MenuItem';
import { useState } from 'react';
import FuseSvgIcon from '@fuse/core/FuseSvgIcon';
import ToolbarMenu from './ToolbarMenu';

function OptionsMenu(props) {
  const [anchorEl, setAnchorEl] = useState(null);

  function handleMenuOpen(event) {
    setAnchorEl(event.currentTarget);
  }

  function handleMenuClose() {
    setAnchorEl(null);
  }

  return (
    <div>
      <IconButton onClick={handleMenuOpen} size="large">
        <FuseSvgIcon>heroicons-outline:dots-horizontal</FuseSvgIcon>
      </IconButton>
      <ToolbarMenu state={anchorEl} onClose={handleMenuClose}>
        <MenuItem onClick={props.onRemoveCard}>Remove Card</MenuItem>
      </ToolbarMenu>
    </div>
  );
}

export default OptionsMenu;
