import Checkbox from '@mui/material/Checkbox';
import IconButton from '@mui/material/IconButton';
import ListItemIcon from '@mui/material/ListItemIcon';
import ListItemText from '@mui/material/ListItemText';
import MenuItem from '@mui/material/MenuItem';
import { useState } from 'react';
import { useSelector } from 'react-redux';
import FuseSvgIcon from '@fuse/core/FuseSvgIcon';
import ToolbarMenu from './ToolbarMenu';
import { selectLabels } from '../../../../store/labelsSlice';

function LabelsMenu(props) {
  const labels = useSelector(selectLabels);

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
        <FuseSvgIcon>heroicons-outline:tag</FuseSvgIcon>
      </IconButton>
      <ToolbarMenu state={anchorEl} onClose={handleMenuClose}>
        <div className="">
          {labels.map((label) => {
            return (
              <MenuItem
                className="px-8"
                key={label.id}
                onClick={(ev) => {
                  props.onToggleLabel(label.id);
                }}
              >
                <Checkbox checked={props.labels.includes(label.id)} />
                <ListItemText className="mx-8">{label.title}</ListItemText>
                <ListItemIcon className="min-w-24">
                  <FuseSvgIcon>heroicons-outline:tag</FuseSvgIcon>
                </ListItemIcon>
              </MenuItem>
            );
          })}
        </div>
      </ToolbarMenu>
    </div>
  );
}

export default LabelsMenu;
