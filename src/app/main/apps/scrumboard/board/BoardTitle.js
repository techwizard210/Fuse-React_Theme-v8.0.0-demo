import { yupResolver } from '@hookform/resolvers/yup';
import { Controller, useForm } from 'react-hook-form';

import ClickAwayListener from '@mui/material/ClickAwayListener';
import IconButton from '@mui/material/IconButton';
import InputAdornment from '@mui/material/InputAdornment';
import TextField from '@mui/material/TextField';
import Typography from '@mui/material/Typography';
import { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import * as yup from 'yup';
import _ from '@lodash';
import FuseSvgIcon from '@fuse/core/FuseSvgIcon';
import { selectBoard, updateBoard } from '../store/boardSlice';

/**
 * Form Validation Schema
 */
const schema = yup.object().shape({
  title: yup.string().required('You must enter a title'),
});

function BoardTitle(props) {
  const dispatch = useDispatch();
  const board = useSelector(selectBoard);

  const [formOpen, setFormOpen] = useState(false);

  const { control, formState, handleSubmit, reset } = useForm({
    mode: 'onChange',
    defaultValues: {
      title: board.title,
    },
    resolver: yupResolver(schema),
  });

  const { isValid, dirtyFields, errors } = formState;

  useEffect(() => {
    if (!formOpen) {
      reset({
        title: board.title,
      });
    }
  }, [formOpen, reset, board.title]);

  function handleOpenForm(ev) {
    ev.stopPropagation();
    setFormOpen(true);
  }

  function handleCloseForm() {
    setFormOpen(false);
  }

  function onSubmit(data) {
    dispatch(updateBoard(data));
    handleCloseForm();
  }

  return (
    <div className="flex items-center min-w-0">
      {formOpen ? (
        <ClickAwayListener onClickAway={handleCloseForm}>
          <form className="flex w-full" onSubmit={handleSubmit(onSubmit)}>
            <Controller
              name="title"
              control={control}
              render={({ field }) => (
                <TextField
                  {...field}
                  variant="filled"
                  margin="none"
                  autoFocus
                  hiddenLabel
                  InputProps={{
                    endAdornment: (
                      <InputAdornment position="end">
                        <IconButton
                          type="submit"
                          disabled={_.isEmpty(dirtyFields) || !isValid}
                          size="large"
                        >
                          <FuseSvgIcon>heroicons-outline:check</FuseSvgIcon>
                        </IconButton>
                      </InputAdornment>
                    ),
                  }}
                />
              )}
            />
          </form>
        </ClickAwayListener>
      ) : (
        <div className="flex items-center justify-center space-x-12">
          <Typography
            className="text-14  sm:text-24 md:text-32 font-extrabold tracking-tight leading-none cursor-pointer"
            onClick={handleOpenForm}
            color="inherit"
          >
            {board.title}
          </Typography>
          {board?.settings.subscribed && <FuseSvgIcon>heroicons-outline:eye</FuseSvgIcon>}
        </div>
      )}
    </div>
  );
}

export default BoardTitle;
