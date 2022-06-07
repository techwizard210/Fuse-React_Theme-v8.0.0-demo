import TextField from '@mui/material/TextField';
import InputAdornment from '@mui/material/InputAdornment';
import FuseSvgIcon from '@fuse/core/FuseSvgIcon';
import { Controller, useForm } from 'react-hook-form';
import { yupResolver } from '@hookform/resolvers/yup/dist/yup';
import * as yup from 'yup';
import IconButton from '@mui/material/IconButton';
import { useSelector } from 'react-redux';
import { useEffect } from 'react';
import { selectCountries } from '../../store/countriesSlice';
import CountryCodeSelector from './CountryCodeSelector';

const schema = yup.object().shape({
  country: yup.string(),
  phoneNumber: yup.string(),
  label: yup.string(),
});

const defaultValues = {
  country: '',
  phoneNumber: '',
  label: '',
};

function PhoneNumberInput(props) {
  const { value, hideRemove } = props;
  const countries = useSelector(selectCountries);

  const { control, formState, handleSubmit, reset } = useForm({
    mode: 'onChange',
    defaultValues,
    resolver: yupResolver(schema),
  });

  const { isValid, dirtyFields, errors } = formState;

  useEffect(() => {
    reset(value);
  }, [reset, value]);

  function onSubmit(data) {
    props.onChange(data);
  }

  return (
    <form className="flex space-x-16 mb-16" onChange={handleSubmit(onSubmit)}>
      <Controller
        control={control}
        name="phoneNumber"
        render={({ field }) => (
          <TextField
            {...field}
            label="Phone Number"
            placeholder="Phone Number"
            variant="outlined"
            fullWidth
            error={!!errors.phoneNumber}
            helperText={errors?.phoneNumber?.message}
            InputProps={{
              startAdornment: (
                <Controller
                  control={control}
                  name="country"
                  render={({ field: _field }) => (
                    <InputAdornment position="start">
                      <CountryCodeSelector {..._field} />
                    </InputAdornment>
                  )}
                />
              ),
            }}
          />
        )}
      />
      <Controller
        control={control}
        name="label"
        render={({ field }) => (
          <TextField
            {...field}
            className=""
            label="Label"
            placeholder="Label"
            variant="outlined"
            fullWidth
            error={!!errors.label}
            helperText={errors?.label?.message}
            InputProps={{
              startAdornment: (
                <InputAdornment position="start">
                  <FuseSvgIcon size={20}>heroicons-solid:tag</FuseSvgIcon>
                </InputAdornment>
              ),
            }}
          />
        )}
      />
      {!hideRemove && (
        <IconButton
          onClick={(ev) => {
            ev.stopPropagation();
            props.onRemove();
          }}
        >
          <FuseSvgIcon size={20}>heroicons-solid:trash</FuseSvgIcon>
        </IconButton>
      )}
    </form>
  );
}

PhoneNumberInput.defaultProps = {
  hideRemove: false,
};

export default PhoneNumberInput;
