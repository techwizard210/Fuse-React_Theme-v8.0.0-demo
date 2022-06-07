import Button from '@mui/material/Button';
import Menu from '@mui/material/Menu';
import MenuItem from '@mui/material/MenuItem';
import Paper from '@mui/material/Paper';
import Typography from '@mui/material/Typography';
import format from 'date-fns/format';
import fromUnixTime from 'date-fns/fromUnixTime';
import { useState } from 'react';
import FuseSvgIcon from '@fuse/core/FuseSvgIcon';

function CardAttachment(props) {
  const [anchorEl, setAnchorEl] = useState(null);

  function handleMenuOpen(event) {
    setAnchorEl(event.currentTarget);
  }

  function handleMenuClose() {
    setAnchorEl(null);
  }

  switch (props.item.type) {
    case 'image': {
      return (
        <div className="flex w-full sm:w-1/2 mb-16 px-16" key={props.item.id}>
          <div className="flex items-center justify-center min-w-128 w-128 h-128">
            <Paper className="overflow-hidden shadow">
              <img className="block max-h-full max-h-full" src={props.item.src} alt="attachment" />
            </Paper>
          </div>
          <div className="flex flex-auto flex-col justify-center items-start min-w-0 px-16">
            <div className="flex items-center w-full">
              <Typography className="text-16 font-semibold truncate shrink">
                {props.item.name}
              </Typography>
              {props.card.attachmentCoverId === props.item.id && (
                <FuseSvgIcon className="text-orange-300 mx-4" size={20}>
                  heroicons-outline:start
                </FuseSvgIcon>
              )}
            </div>
            <Typography className="truncate w-full mb-12" color="text.secondary">
              {format(fromUnixTime(props.item.time), 'Pp')}
            </Typography>
            <Button
              aria-owns={anchorEl ? 'actions-menu' : null}
              aria-haspopup="true"
              onClick={handleMenuOpen}
              variant="outlined"
              size="small"
              endIcon={<FuseSvgIcon size={16}>heroicons-outline:chevron-down</FuseSvgIcon>}
            >
              Actions
            </Button>
            <Menu
              id="actions-menu"
              anchorEl={anchorEl}
              open={Boolean(anchorEl)}
              onClose={handleMenuClose}
            >
              {props.card.attachmentCoverId !== props.item.id ? (
                <MenuItem
                  onClick={() => {
                    handleMenuClose();
                    props.makeCover(props.item.id);
                  }}
                >
                  Make Cover
                </MenuItem>
              ) : (
                <MenuItem
                  onClick={() => {
                    handleMenuClose();
                    props.removeCover();
                  }}
                >
                  Remove Cover
                </MenuItem>
              )}
              <MenuItem
                onClick={() => {
                  handleMenuClose();
                  props.removeAttachment(props.item.id);
                }}
              >
                Remove Attachment
              </MenuItem>
            </Menu>
          </div>
        </div>
      );
    }
    case 'link': {
      return (
        <div className="flex w-full sm:w-1/2 mb-16 px-16" key={props.item.id}>
          <Paper className="min-w-128 w-128 h-128 flex items-center justify-center rounded-4 overflow-hidden shadow">
            <Typography className="font-semibold">LINK</Typography>
          </Paper>
          <div className="flex flex-auto flex-col justify-center items-start min-w-0 px-16">
            <Typography className="text-16 font-semibold truncate w-full">
              {props.item.url}
            </Typography>
            <Typography className="truncate w-full mb-12" color="text.secondary">
              {props.item.time}
            </Typography>
            <Button
              aria-owns={anchorEl ? 'actions-menu' : null}
              aria-haspopup="true"
              onClick={handleMenuOpen}
              variant="outlined"
              size="small"
              endIcon={<FuseSvgIcon size={16}>heroicons-outline:chevron-down</FuseSvgIcon>}
            >
              Actions
            </Button>
            <Menu
              id="simple-menu"
              anchorEl={anchorEl}
              open={Boolean(anchorEl)}
              onClose={handleMenuClose}
            >
              <MenuItem
                onClick={() => {
                  handleMenuClose();
                  props.removeAttachment(props.item.id);
                }}
              >
                Remove Attachment
              </MenuItem>
            </Menu>
          </div>
        </div>
      );
    }
    default: {
      return null;
    }
  }
}

export default CardAttachment;
