import Avatar from '@mui/material/Avatar';
import Checkbox from '@mui/material/Checkbox';
import IconButton from '@mui/material/IconButton';
import ListItemText from '@mui/material/ListItemText';
import MenuItem from '@mui/material/MenuItem';
import { useState } from 'react';
import { useSelector } from 'react-redux';
import FuseSvgIcon from '@fuse/core/FuseSvgIcon';
import ToolbarMenu from './ToolbarMenu';
import { selectMembers } from '../../../../store/membersSlice';

function MembersMenu(props) {
  const [anchorEl, setAnchorEl] = useState(null);
  const members = useSelector(selectMembers);

  function handleMenuOpen(event) {
    setAnchorEl(event.currentTarget);
  }

  function handleMenuClose() {
    setAnchorEl(null);
  }

  return (
    <div>
      <IconButton onClick={handleMenuOpen} size="large">
        <FuseSvgIcon>heroicons-outline:user-circle</FuseSvgIcon>
      </IconButton>
      <ToolbarMenu state={anchorEl} onClose={handleMenuClose}>
        <div className="">
          {members.map((member) => {
            return (
              <MenuItem
                className="px-8"
                key={member.id}
                onClick={(ev) => {
                  props.onToggleMember(member.id);
                }}
              >
                <Checkbox checked={props.memberIds.includes(member.id)} />
                <Avatar className="w-32 h-32" src={member.avatar} />
                <ListItemText className="mx-8">{member.name}</ListItemText>
              </MenuItem>
            );
          })}
        </div>
      </ToolbarMenu>
    </div>
  );
}

export default MembersMenu;
