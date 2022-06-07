import * as React from 'react';
import { forwardRef } from 'react';
import Menu from '@mui/material/Menu';
import MenuItem from '@mui/material/MenuItem';
import ListItemIcon from '@mui/material/ListItemIcon';
import ListItemText from '@mui/material/ListItemText';
import FuseSvgIcon from '@fuse/core/FuseSvgIcon';
import Button from '@mui/material/Button';
import _ from '@lodash';
import clsx from 'clsx';

const priorityList = [
  {
    value: 0,
    title: 'Low',
    icon: 'heroicons-solid:arrow-narrow-down',
    textColor: 'rgb(76 175 80)',
    bgColor: 'rgba(76,175,80,0.3)',
  },
  {
    value: 1,
    title: 'Normal',
    icon: 'heroicons-solid:minus',
    textColor: 'rgb(80,80,80)',
    bgColor: 'rgba(80,80,80, 0.3)',
  },
  {
    value: 2,
    title: 'High',
    icon: 'heroicons-solid:arrow-narrow-up',
    textColor: 'rgb(244 67 54)',
    bgColor: 'rgba(244,67,54,0.3)',
  },
];

const TaskPrioritySelector = forwardRef((props, ref) => {
  const { value, onChange, className } = props;

  const [anchorEl, setAnchorEl] = React.useState(null);
  const open = Boolean(anchorEl);

  const selectedOption = _.find(priorityList, { value });

  const handleClick = (event) => {
    setAnchorEl(event.currentTarget);
  };

  const handleSelect = (val, event) => {
    onChange(val);
    handleClose();
  };

  const handleClose = () => {
    setAnchorEl(null);
  };

  return (
    <>
      <Button
        ref={ref}
        id="priority-button"
        aria-controls="priority-menu"
        aria-haspopup="true"
        aria-expanded={open ? 'true' : undefined}
        onClick={handleClick}
        className={clsx('min-w-96 px-12', className)}
        sx={{ color: selectedOption.textColor, backgroundColor: selectedOption.bgColor }}
      >
        <FuseSvgIcon className="mx-4" size={16}>
          {selectedOption.icon}
        </FuseSvgIcon>
        <span>{selectedOption.title}</span>
      </Button>
      <Menu
        id="priority-menu"
        anchorEl={anchorEl}
        open={open}
        onClose={handleClose}
        MenuListProps={{
          'aria-labelledby': 'priority-button',
        }}
      >
        {priorityList.map((item) => (
          <MenuItem onClick={(ev) => handleSelect(item.value, ev)} key={item.value}>
            <ListItemText primary={item.title} />
            <ListItemIcon className="min-w-40 justify-end" sx={{ color: item.textColor }}>
              <FuseSvgIcon size={16}>{item.icon}</FuseSvgIcon>
            </ListItemIcon>
          </MenuItem>
        ))}
      </Menu>
    </>
  );
});

TaskPrioritySelector.defaultProps = {
  value: 0,
};

export default TaskPrioritySelector;
