import Checkbox from '@mui/material/Checkbox';
import IconButton from '@mui/material/IconButton';
import ListItemIcon from '@mui/material/ListItemIcon';
import ListItemText from '@mui/material/ListItemText';
import MenuItem from '@mui/material/MenuItem';
import { useEffect, useState } from 'react';
import { useSelector } from 'react-redux';
import FuseSvgIcon from '@fuse/core/FuseSvgIcon';
import { Menu } from '@mui/material';
import _ from '@lodash';
import Tooltip from '@mui/material/Tooltip';
import { selectLabels } from '../store/labelsSlice';
import { labelColorDefs } from './labelColors';

function MailLabelsMenu(props) {
  const { className, onChange, labels } = props;
  const [selectedLabels, setSelectedLabels] = useState(labels);
  const labelsAll = useSelector(selectLabels);

  const [anchorEl, setAnchorEl] = useState(null);
  const open = Boolean(anchorEl);

  useEffect(() => {
    setSelectedLabels(labels);
  }, [labels]);

  function handleMenuOpen(event) {
    setAnchorEl(event.currentTarget);
  }

  function handleMenuClose() {
    setAnchorEl(null);
  }

  return (
    <div>
      <Tooltip title="Set labels">
        <IconButton onClick={handleMenuOpen} className={className}>
          <FuseSvgIcon>heroicons-outline:tag</FuseSvgIcon>
        </IconButton>
      </Tooltip>
      <Menu
        id="labels-menu"
        anchorEl={anchorEl}
        open={open}
        onClose={handleMenuClose}
        MenuListProps={{
          'aria-labelledby': 'labels',
        }}
      >
        <div className="">
          {labelsAll.map((label) => {
            return (
              <MenuItem
                className="px-8"
                key={label.id}
                onClick={(ev) => {
                  onChange(_.xor(selectedLabels, [label.id]));
                }}
              >
                <Checkbox checked={selectedLabels.includes(label.id)} />
                <ListItemText className="mx-8">{label.title}</ListItemText>
                <ListItemIcon className="min-w-24">
                  <FuseSvgIcon className={labelColorDefs[label.color].text}>
                    heroicons-outline:tag
                  </FuseSvgIcon>
                </ListItemIcon>
              </MenuItem>
            );
          })}
        </div>
      </Menu>
    </div>
  );
}

export default MailLabelsMenu;
