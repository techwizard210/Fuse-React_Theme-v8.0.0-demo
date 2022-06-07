import FormControl from '@mui/material/FormControl';
import FormControlLabel from '@mui/material/FormControlLabel';
import FormLabel from '@mui/material/FormLabel';
import IconButton from '@mui/material/IconButton';
import Radio from '@mui/material/Radio';
import RadioGroup from '@mui/material/RadioGroup';
import TextField from '@mui/material/TextField';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
import { Controller, useForm } from 'react-hook-form';
import { useDispatch, useSelector } from 'react-redux';
import { useContext, useEffect } from 'react';
import { Box } from '@mui/system';
import Button from '@mui/material/Button';
import _ from '@lodash';
import FuseSvgIcon from '@fuse/core/FuseSvgIcon';
import InputAdornment from '@mui/material/InputAdornment';
import { lighten } from '@mui/material/styles';
import Statuses from '../../Statuses';
import ContactAvatar from '../../ContactAvatar';
import { selectUser, updateUserData } from '../../store/userSlice';
import { ChatAppContext } from '../../ChatApp';

function UserSidebar(props) {
  const { setUserSidebarOpen } = useContext(ChatAppContext);
  const dispatch = useDispatch();
  const user = useSelector(selectUser);
  const { control, handleSubmit, watch, reset, formState } = useForm({ defaultValues: user });
  const { isValid, dirtyFields, errors } = formState;

  const form = watch();
  useEffect(() => {
    reset(user);
  }, [reset, user]);

  function onSubmit(data) {
    dispatch(updateUserData(data));
  }

  if (_.isEmpty(form)) {
    return null;
  }

  return (
    <div className="flex flex-col flex-auto h-full">
      <Box
        sx={{
          backgroundColor: (theme) =>
            theme.palette.mode === 'light'
              ? lighten(theme.palette.background.default, 0.4)
              : lighten(theme.palette.background.default, 0.02),
        }}
      >
        <Toolbar className="flex items-center px-24 border-b-1">
          <IconButton onClick={() => setUserSidebarOpen(false)}>
            <FuseSvgIcon>heroicons-outline:arrow-narrow-left</FuseSvgIcon>
          </IconButton>
          <Typography className="px-8 font-semibold text-20">Profile</Typography>
        </Toolbar>
      </Box>

      <div className="flex flex-col justify-center items-center py-32">
        <ContactAvatar className="w-160 h-160 text-64" contact={user} />
      </div>

      <form onSubmit={handleSubmit(onSubmit)} className="px-24">
        <Controller
          control={control}
          name="name"
          render={({ field }) => (
            <TextField
              className="w-full"
              {...field}
              label="Name"
              placeholder="Name"
              id="name"
              error={!!errors.name}
              helperText={errors?.name?.message}
              variant="outlined"
              required
              fullWidth
              InputProps={{
                startAdornment: (
                  <InputAdornment position="start">
                    <FuseSvgIcon size={20}>heroicons-solid:user-circle</FuseSvgIcon>
                  </InputAdornment>
                ),
              }}
            />
          )}
        />

        <Controller
          control={control}
          name="email"
          render={({ field }) => (
            <TextField
              {...field}
              className="mt-16 w-full"
              label="Email"
              placeholder="Email"
              variant="outlined"
              fullWidth
              error={!!errors.email}
              helperText={errors?.email?.message}
              InputProps={{
                startAdornment: (
                  <InputAdornment position="start">
                    <FuseSvgIcon size={20}>heroicons-solid:mail</FuseSvgIcon>
                  </InputAdornment>
                ),
              }}
            />
          )}
        />

        <Controller
          name="about"
          control={control}
          render={({ field }) => (
            <TextField
              {...field}
              label="About"
              className="mt-16 w-full"
              margin="normal"
              multiline
              variant="outlined"
              InputProps={{
                startAdornment: (
                  <InputAdornment position="start">
                    <FuseSvgIcon size={20}>heroicons-solid:identification</FuseSvgIcon>
                  </InputAdornment>
                ),
              }}
            />
          )}
        />

        <FormControl component="fieldset" className="w-full mt-16">
          <FormLabel component="legend">Status</FormLabel>
          <Controller
            name="status"
            control={control}
            render={({ field }) => (
              <RadioGroup {...field} aria-label="Status" name="status">
                {Statuses.map((status) => (
                  <FormControlLabel
                    key={status.value}
                    value={status.value}
                    control={<Radio />}
                    label={
                      <div className="flex items-center">
                        <Box
                          className="w-8 h-8 rounded-full"
                          sx={{ backgroundColor: status.color }}
                        />
                        <span className="mx-8">{status.title}</span>
                      </div>
                    }
                  />
                ))}
              </RadioGroup>
            )}
          />
        </FormControl>
        <div className="flex items-center justify-end mt-32">
          <Button className="mx-8">Cancel</Button>
          <Button
            className="mx-8"
            variant="contained"
            color="secondary"
            disabled={_.isEmpty(dirtyFields) || !isValid}
            onClick={handleSubmit(onSubmit)}
          >
            Save
          </Button>
        </div>
      </form>
    </div>
  );
}

export default UserSidebar;
