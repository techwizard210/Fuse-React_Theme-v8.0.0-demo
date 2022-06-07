import { Controller, useForm } from 'react-hook-form';

import { darken } from '@mui/material/styles';

import { yupResolver } from '@hookform/resolvers/yup';
import Button from '@mui/material/Button';
import Card from '@mui/material/Card';
import ClickAwayListener from '@mui/material/ClickAwayListener';
import IconButton from '@mui/material/IconButton';
import InputAdornment from '@mui/material/InputAdornment';
import TextField from '@mui/material/TextField';
import { useEffect, useState } from 'react';
import { useDispatch } from 'react-redux';
import * as yup from 'yup';
import _ from '@lodash';
import FuseSvgIcon from '@fuse/core/FuseSvgIcon';
import { newList } from '../../store/listsSlice';

const defaultValues = {
  title: '',
};

/**
 * Form Validation Schema
 */
const schema = yup.object().shape({
  title: yup.string().required('You must enter a title'),
});

function BoardAddList(props) {
  const dispatch = useDispatch();

  const [formOpen, setFormOpen] = useState(false);
  const { control, formState, handleSubmit, reset } = useForm({
    mode: 'onChange',
    defaultValues,
    resolver: yupResolver(schema),
  });

  const { isValid, dirtyFields, errors } = formState;

  useEffect(() => {
    if (!formOpen) {
      reset(defaultValues);
    }
  }, [formOpen, reset]);

  function handleOpenForm(ev) {
    ev.stopPropagation();
    setFormOpen(true);
  }

  function handleCloseForm() {
    setFormOpen(false);
  }

  function onSubmit(data) {
    dispatch(newList(data));
    handleCloseForm();
  }

  return (
    <div>
      <Card
        className="w-320 mx-8 sm:mx-12 rounded-xl shadow-0"
        square
        sx={{
          backgroundColor: (theme) =>
            darken(theme.palette.background.default, theme.palette.mode === 'light' ? 0.03 : 0.25),
        }}
      >
        {formOpen ? (
          <ClickAwayListener onClickAway={handleCloseForm}>
            <form className="p-12" onSubmit={handleSubmit(onSubmit)}>
              <Controller
                name="title"
                control={control}
                render={({ field }) => (
                  <TextField
                    {...field}
                    className="mb-16"
                    required
                    fullWidth
                    variant="filled"
                    label="List title"
                    autoFocus
                    InputProps={{
                      endAdornment: (
                        <InputAdornment position="end">
                          <IconButton onClick={handleCloseForm} size="large">
                            <FuseSvgIcon size={18}>heroicons-outline:x</FuseSvgIcon>
                          </IconButton>
                        </InputAdornment>
                      ),
                    }}
                  />
                )}
              />

              <div className="flex justify-between items-center">
                <Button
                  variant="contained"
                  color="secondary"
                  type="submit"
                  disabled={_.isEmpty(dirtyFields) || !isValid}
                  size="small"
                >
                  Add
                </Button>
              </div>
            </form>
          </ClickAwayListener>
        ) : (
          <Button
            onClick={handleOpenForm}
            classes={{
              root: 'font-medium w-full rounded-lg p-24 justify-start',
            }}
            startIcon={<FuseSvgIcon>heroicons-outline:plus-circle</FuseSvgIcon>}
            sx={{ color: 'text.secondary' }}
          >
            Add another list
          </Button>
        )}
      </Card>
    </div>
  );
}

export default BoardAddList;
