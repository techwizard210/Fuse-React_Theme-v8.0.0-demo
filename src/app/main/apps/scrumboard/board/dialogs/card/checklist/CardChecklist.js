import { Controller, useForm } from 'react-hook-form';
import _ from '@lodash';
import IconButton from '@mui/material/IconButton';
import LinearProgress from '@mui/material/LinearProgress';
import List from '@mui/material/List';
import ListItemIcon from '@mui/material/ListItemIcon';
import ListItemText from '@mui/material/ListItemText';
import Menu from '@mui/material/Menu';
import MenuItem from '@mui/material/MenuItem';
import Typography from '@mui/material/Typography';
import { useEffect, useRef, useState } from 'react';
import FuseSvgIcon from '@fuse/core/FuseSvgIcon';
import CardAddChecklistItem from './CardAddChecklistItem';
import CardChecklistItem from './CardChecklistItem';
import CardChecklistName from './CardChecklistName';

function CardChecklist(props) {
  const { onCheckListChange, checklist, index } = props;
  const [anchorEl, setAnchorEl] = useState(null);
  const checkListNameRef = useRef();
  const { watch, control } = useForm({ mode: 'onChange', defaultValues: checklist });
  const form = watch();

  useEffect(() => {
    if (!_.isEqual(form, checklist)) {
      onCheckListChange(form, index);
    }
  }, [form, index, onCheckListChange, checklist]);

  function handleOpenNameForm(ev) {
    handleMenuClose();
    checkListNameRef.current.openForm(ev);
  }

  function handleMenuOpen(event) {
    setAnchorEl(event.currentTarget);
  }

  function handleMenuClose() {
    setAnchorEl(null);
  }

  function checkItemsChecked() {
    return _.sum(form.checkItems.map((x) => (x.checked ? 1 : 0)));
  }

  if (!form) {
    return null;
  }
  return (
    <div className="mb-24">
      <div className="flex items-center justify-between mt-16 mb-12">
        <div className="flex items-center">
          <FuseSvgIcon size={20}>heroicons-outline:check-circle</FuseSvgIcon>
          <Controller
            name="name"
            control={control}
            defaultValue=""
            render={({ field: { onChange, value } }) => (
              <CardChecklistName
                name={value}
                onNameChange={(val) => onChange(val)}
                ref={checkListNameRef}
              />
            )}
          />
        </div>
        <div className="">
          <IconButton
            aria-owns={anchorEl ? 'actions-menu' : null}
            aria-haspopup="true"
            onClick={handleMenuOpen}
            variant="outlined"
            size="small"
          >
            <FuseSvgIcon size={20}>heroicons-outline:dots-vertical</FuseSvgIcon>
          </IconButton>
          <Menu
            id="actions-menu"
            anchorEl={anchorEl}
            open={Boolean(anchorEl)}
            onClose={handleMenuClose}
          >
            <MenuItem onClick={props.onRemoveCheckList}>
              <ListItemIcon className="min-w-40">
                <FuseSvgIcon>heroicons-outline:trash</FuseSvgIcon>
              </ListItemIcon>
              <ListItemText primary="Remove Checklist" />
            </MenuItem>
            <MenuItem onClick={handleOpenNameForm}>
              <ListItemIcon className="min-w-40">
                <FuseSvgIcon>heroicons-outline:pencil</FuseSvgIcon>
              </ListItemIcon>
              <ListItemText primary="Rename Checklist" />
            </MenuItem>
          </Menu>
        </div>
      </div>

      <div className="">
        <div className="flex items-center -mx-6">
          <Typography className="flex font-semibold mx-6">
            {`${checkItemsChecked()} / ${form.checkItems.length}`}
          </Typography>
          <LinearProgress
            className="flex flex-1 mx-6"
            variant="determinate"
            color="secondary"
            value={(100 * checkItemsChecked()) / form.checkItems.length}
          />
        </div>
        <Controller
          name="checkItems"
          control={control}
          defaultValue={[]}
          render={({ field: { onChange, value } }) => (
            <List className="">
              {value.map((checkItem, _index) => (
                <CardChecklistItem
                  item={checkItem}
                  key={checkItem.id}
                  index={_index}
                  onListItemChange={(item, itemIndex) => {
                    onChange(_.setIn(value, `[${itemIndex}]`, item));
                  }}
                  onListItemRemove={() => {
                    onChange(_.reject(value, { id: checkItem.id }));
                  }}
                />
              ))}
              <CardAddChecklistItem onListItemAdd={(item) => onChange([...value, item])} />
            </List>
          )}
        />
      </div>
    </div>
  );
}

export default CardChecklist;
