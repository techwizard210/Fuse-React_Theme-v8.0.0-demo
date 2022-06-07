import FusePageSimple from '@fuse/core/FusePageSimple';
import Button from '@mui/material/Button';
import Paper from '@mui/material/Paper';
import { styled } from '@mui/material/styles';
import Typography from '@mui/material/Typography';
import axios from 'axios';
import { useEffect, useMemo, useState } from 'react';
import FormControl from '@mui/material/FormControl';
import { Controller, useForm } from 'react-hook-form';
import FuseSvgIcon from '@fuse/core/FuseSvgIcon';
import TextField from '@mui/material/TextField';
import InputLabel from '@mui/material/InputLabel';
import Select from '@mui/material/Select';
import MenuItem from '@mui/material/MenuItem';
import FuseHighlight from '@fuse/core/FuseHighlight';

const Root = styled(FusePageSimple)(({ theme }) => ({
  '& .FusePageSimple-header': {
    backgroundColor: theme.palette.background.paper,
    borderBottomWidth: 1,
    borderStyle: 'solid',
    borderColor: theme.palette.divider,
  },
}));

function IconListPage(props) {
  const { pageTitle, referenceUrl, apiUrl, iconName } = props?.data;
  const [data, setData] = useState(null);
  const [selectedIcon, setSelectedIcon] = useState('');
  const [filteredData, setFilteredData] = useState(null);

  const methods = useForm({
    mode: 'onChange',
    defaultValues: { searchText: '', size: 24 },
  });

  const { watch, control } = methods;

  const form = watch();
  const searchText = watch('searchText');

  useEffect(() => {
    axios.get(apiUrl).then((res) => {
      setData(res.data);
      setSelectedIcon(res.data[0]);
    });
  }, [apiUrl]);

  useEffect(() => {
    setFilteredData(
      searchText.length > 0
        ? data.filter((item) => {
            if (item.includes(searchText)) {
              return true;
            }

            return false;
          })
        : data
    );
  }, [data, searchText]);

  return (
    <Root
      header={
        <div className="flex flex-col sm:flex-row flex-0 sm:items-center sm:justify-between p-24 sm:py-32 sm:px-40">
          <div className="flex-1 min-w-0">
            <div className="flex flex-wrap items-center font-medium">
              <div>
                <Typography className="whitespace-nowrap" color="secondary">
                  User Interface
                </Typography>
              </div>
            </div>
            <div className="mt-8">
              <Typography className="text-3xl md:text-4xl font-extrabold tracking-tight leading-7 sm:leading-10 truncate">
                {pageTitle}
              </Typography>
            </div>
          </div>
          <div>
            {referenceUrl && (
              <Button
                className="mt-12 sm:mt-0"
                variant="contained"
                color="secondary"
                component="a"
                href={referenceUrl}
                target="_blank"
                role="button"
                startIcon={<FuseSvgIcon>heroicons-solid:external-link</FuseSvgIcon>}
              >
                Official docs
              </Button>
            )}
          </div>
        </div>
      }
      content={
        <div className="flex-auto p-24 sm:p-40">
          <Typography className="text-20 font-700 mb-16">Usage</Typography>

          <FuseHighlight component="pre" className="language-jsx my-24">
            {`
              <FuseSvgIcon className="text-48" size={${form.size}} color="action">${iconName}:${selectedIcon}</FuseSvgIcon>
            `}
          </FuseHighlight>

          <Typography className="text-20 font-700 mt-32 mb-16">Icons</Typography>

          <div className="flex flex-col md:flex-row justify-center md:items-end my-24 xs:flex-col md:space-x-24">
            <div className="flex flex-1">
              <Controller
                name="searchText"
                control={control}
                render={({ field }) => (
                  <TextField
                    {...field}
                    id="searchText"
                    label="Search an icon"
                    placeholder="Search.."
                    className="flex-auto"
                    InputLabelProps={{
                      shrink: true,
                    }}
                    variant="outlined"
                    fullWidth
                  />
                )}
              />
            </div>

            <Controller
              name="size"
              control={control}
              render={({ field }) => (
                <FormControl sx={{ mt: 2, minWidth: 120 }}>
                  <InputLabel htmlFor="max-width">Size</InputLabel>
                  <Select autoFocus {...field} label="Size">
                    <MenuItem value={16}>16</MenuItem>
                    <MenuItem value={20}>20</MenuItem>
                    <MenuItem value={24}>24</MenuItem>
                    <MenuItem value={32}>32</MenuItem>
                    <MenuItem value={40}>40</MenuItem>
                    <MenuItem value={48}>48</MenuItem>
                    <MenuItem value={64}>64</MenuItem>
                  </Select>
                </FormControl>
              )}
            />
          </div>

          <div className="flex grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-6 gap-12 sm:gap-32 py-24">
            {useMemo(
              () =>
                filteredData &&
                (filteredData.length > 0 ? (
                  filteredData.map((icon) => (
                    <Paper
                      key={icon}
                      className="flex flex-col items-center justify-center p-16 border-2 min-h-120 rounded cursor-pointer"
                      elevation={0}
                      onClick={() => setSelectedIcon(icon)}
                      sx={{ borderColor: icon === selectedIcon && 'secondary.main' }}
                    >
                      <div className="flex items-center justify-center mb-12">
                        <FuseSvgIcon
                          className="text-48"
                          size={form.size}
                          color="action"
                        >{`${iconName}:${icon}`}</FuseSvgIcon>
                      </div>

                      <Typography
                        className="text-sm text-center break-all"
                        color="text.secondary"
                      >{`${iconName}:${icon}`}</Typography>
                    </Paper>
                  ))
                ) : (
                  <div className="col-span-6 flex flex-auto items-center justify-center w-full h-full p-32 md:p-128">
                    <Typography color="text.secondary" variant="h5">
                      No results!
                    </Typography>
                  </div>
                )),
              [selectedIcon, filteredData, form.size, iconName]
            )}
          </div>
        </div>
      }
    />
  );
}

export default IconListPage;
