import * as React from 'react';
import Menu from '@mui/material/Menu';
import IconButton from '@mui/material/IconButton';
import FuseSvgIcon from '@fuse/core/FuseSvgIcon';
import Typography from '@mui/material/Typography';
import format from 'date-fns/format';
import { useSelector } from 'react-redux';
import { selectMail } from '../store/mailSlice';

function MailInfo(props) {
  const { className } = props;
  const mail = useSelector(selectMail);
  const [anchorEl, setAnchorEl] = React.useState(null);
  const open = Boolean(anchorEl);

  const handleClick = (event) => {
    setAnchorEl(event.currentTarget);
  };

  const handleClose = () => {
    setAnchorEl(null);
  };

  return (
    <div className={className}>
      <IconButton
        className="w-20 h-20 min-h-20 ml-4"
        id="info-button"
        aria-controls="info-menu"
        aria-haspopup="true"
        aria-expanded={open ? 'true' : undefined}
        onClick={handleClick}
      >
        <FuseSvgIcon size={20}>heroicons-solid:chevron-down</FuseSvgIcon>
      </IconButton>
      <Menu
        id="info-menu"
        anchorEl={anchorEl}
        open={open}
        onClose={handleClose}
        MenuListProps={{
          'aria-labelledby': 'info-button',
        }}
        classes={{ list: 'p-16' }}
      >
        <div className="flex">
          <Typography className="text-13 min-w-56 font-medium text-right">from:</Typography>
          <Typography className="text-13 pl-8 whitespace-pre-wrap">{mail.from.contact}</Typography>
        </div>

        <div className="flex">
          <Typography className="text-13 min-w-56 font-medium text-right">to:</Typography>
          <Typography className="text-13 pl-8 whitespace-pre-wrap">{mail.to}</Typography>
        </div>

        {mail.cc && (
          <div className="flex">
            <Typography className="text-13 min-w-56 font-medium text-right">cc:</Typography>
            <Typography className="text-13 pl-8 whitespace-pre-wrap">
              {mail.cc.join(',\n')}
            </Typography>
          </div>
        )}

        {mail.bcc && (
          <div className="flex">
            <Typography className="text-13 min-w-56 font-medium text-right">bcc:</Typography>
            <Typography className="text-13 pl-8 whitespace-pre-wrap">
              {mail.bcc.join(',\n')}
            </Typography>
          </div>
        )}

        <div className="flex">
          <Typography className="text-13 min-w-56 font-medium text-right">date:</Typography>
          <Typography className="text-13 pl-8 whitespace-pre-wrap">
            {format(new Date(mail.date), 'EEEE, MMMM d, y - hh:mm a')}
          </Typography>
        </div>
        <div className="flex">
          <Typography className="text-13 min-w-56 font-medium text-right">subject:</Typography>
          <Typography className="text-13 pl-8 whitespace-pre-wrap">{mail.subject}</Typography>
        </div>
      </Menu>
    </div>
  );
}

export default MailInfo;
