import { yupResolver } from '@hookform/resolvers/yup';
import { Controller, useForm } from 'react-hook-form';
import TextField from '@mui/material/TextField';
import Input from '@mui/material/Input';
import IconButton from '@mui/material/IconButton';
import InputAdornment from '@mui/material/InputAdornment';
import ListItem from '@mui/material/ListItem';
import clsx from 'clsx';
import { useDispatch } from 'react-redux';
import * as yup from 'yup';
import FuseSvgIcon from '@fuse/core/FuseSvgIcon';
import { useEffect } from 'react';
import { useDebounce } from '@fuse/hooks';
import _ from '@lodash';
import FormLabel from '@mui/material/FormLabel';
import { closeDialog, openDialog } from 'app/store/fuse/dialogSlice';
import DialogTitle from '@mui/material/DialogTitle';
import DialogContent from '@mui/material/DialogContent';
import DialogContentText from '@mui/material/DialogContentText';
import DialogActions from '@mui/material/DialogActions';
import Button from '@mui/material/Button';
import { removeLabel, updateLabel } from '../../store/labelsSlice';
import { getEvents } from '../../store/eventsSlice';

/**
 * Form Validation Schema
 */
const schema = yup.object().shape({
  title: yup.string().required('You must enter a label title'),
});

function NewLabelForm(props) {
  const { label, isLast } = props;
  const dispatch = useDispatch();

  const { control, formState, handleSubmit, reset, watch } = useForm({
    mode: 'onChange',
    defaultValues: label,
    resolver: yupResolver(schema),
  });

  const { isValid, dirtyFields, errors } = formState;
  const form = watch();

  useEffect(() => {
    reset(label);
  }, [label, reset]);

  const handleOnChange = useDebounce((_label, _form) => {
    if (!_label) {
      return;
    }
    if (form && !_.isEqual(_form, _label)) {
      dispatch(updateLabel(_form));
    }
  }, 300);

  useEffect(() => {
    handleOnChange(label, form);
  }, [handleOnChange, label, form]);

  function handleOnRemove() {
    dispatch(
      openDialog({
        children: (
          <>
            <DialogTitle id="alert-dialog-title">Are you sure?</DialogTitle>
            <DialogContent>
              <DialogContentText id="alert-dialog-description">
                All associated events will be removed.
              </DialogContentText>
            </DialogContent>
            <DialogActions>
              <Button onClick={() => dispatch(closeDialog())} color="primary">
                Disagree
              </Button>
              <Button
                onClick={() => {
                  dispatch(removeLabel(label.id)).then(() => {
                    dispatch(getEvents());
                  });
                  dispatch(closeDialog());
                }}
                color="primary"
                autoFocus
              >
                Agree
              </Button>
            </DialogActions>
          </>
        ),
      })
    );
  }

  return (
    <>
      <ListItem className="p-0 mb-16" dense>
        <Controller
          name="title"
          control={control}
          render={({ field }) => (
            <TextField
              {...field}
              className={clsx('flex flex-1')}
              error={!!errors.title}
              helperText={errors?.title?.message}
              placeholder="Create new label"
              variant="outlined"
              InputProps={{
                startAdornment: (
                  <InputAdornment position="start">
                    <Controller
                      name="color"
                      control={control}
                      render={({ field: { onChange: _onChange, value: _value } }) => (
                        <FormLabel
                          className="w-16 h-16 shrink-0 rounded-full"
                          sx={{ backgroundColor: _value }}
                        >
                          <Input
                            value={_value}
                            onChange={(ev) => {
                              _onChange(ev.target.value);
                            }}
                            type="color"
                            className="opacity-0"
                          />
                        </FormLabel>
                      )}
                    />
                  </InputAdornment>
                ),
                endAdornment: !isLast && (
                  <InputAdornment position="end">
                    <IconButton
                      onClick={handleOnRemove}
                      className="w-32 h-32 p-0"
                      aria-label="Delete"
                      size="large"
                    >
                      <FuseSvgIcon color="action" size={20}>
                        heroicons-outline:trash
                      </FuseSvgIcon>
                    </IconButton>
                  </InputAdornment>
                ),
              }}
            />
          )}
        />
      </ListItem>
    </>
  );
}

export default NewLabelForm;
