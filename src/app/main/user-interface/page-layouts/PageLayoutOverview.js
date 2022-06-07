import Typography from '@mui/material/Typography';
import { darken, lighten, styled } from '@mui/material/styles';
import Tabs from '@mui/material/Tabs';
import Box from '@mui/material/Box';
import Tab from '@mui/material/Tab';
import { useState } from 'react';
import Paper from '@mui/material/Paper';
import _ from '@lodash';
import Button from '@mui/material/Button';
import { Link } from 'react-router-dom';
import FuseSvgIcon from '@fuse/core/FuseSvgIcon';
import GlobalStyles from '@mui/material/GlobalStyles';

const Root = styled('div')(({ theme }) => ({
  '& .FusePageSimple-header': {},

  '&.scroll-normalScroll': {
    '& .preview-wrapper': {
      overflow: 'auto',
    },

    '& .preview-component': {
      minHeight: 'auto',
    },
  },
  '&.scroll-pageScroll': {
    '& .preview-component': {
      minHeight: '0',
      overflow: 'auto',
      '& .FusePageSimple-root': {
        minHeight: 'auto',
      },
      '& .FusePageCarded-root': {
        minHeight: 'auto',
      },
    },
  },
  '&.scroll-contentScroll': {
    '& .preview-component': {
      minHeight: '0',
    },
  },
}));

function PageLayoutOverview(props) {
  const { data } = props;
  const {
    title,
    description,
    availableOptions,
    selectedOption: defaultSelectedOption,
    options,
  } = data;

  const [selectedOption, setSelectedOption] = useState(defaultSelectedOption);

  const SelectedComponent = options[selectedOption]?.component
    ? options[selectedOption]?.component
    : () => null;

  function handleTabChange(ev, val) {
    setSelectedOption(availableOptions[val].value);
  }

  return (
    <>
      <GlobalStyles
        styles={(theme) => ({
          '#fuse-main': {
            height: 'auto!important',
            overflow: 'auto!important',
          },
        })}
      />
      <Root className={`scroll-${selectedOption}`}>
        <div className="flex flex-col p-24 sm:py-32 sm:px-40">
          <Typography className="text-3xl md:text-4xl font-extrabold tracking-tight">
            {title}
          </Typography>
          <Typography className="text-lg md:text-xl" color="text.secondary">
            {description}
          </Typography>

          <div className="mt-24 md:mt-32">
            <Tabs
              value={availableOptions.indexOf(_.find(availableOptions, { value: selectedOption }))}
              onChange={handleTabChange}
              indicatorColor="primary"
              textColor="inherit"
              variant="scrollable"
              scrollButtons={false}
              className="-mx-4 min-h-40"
              classes={{ indicator: 'flex justify-center bg-transparent w-full h-full' }}
              TabIndicatorProps={{
                children: (
                  <Box
                    sx={{ bgcolor: 'text.disabled' }}
                    className="w-full h-full rounded-full opacity-20"
                  />
                ),
              }}
            >
              {availableOptions.map((option) => (
                <Tab
                  key={option.value}
                  className="text-14 font-semibold min-h-40 min-w-64 mx-4 px-12 "
                  disableRipple
                  label={option.title}
                />
              ))}
            </Tabs>
          </div>
        </div>
        <div className="px-24 sm:px-40 w-full">
          <Paper className="preview-wrapper z-20 relative h-3xl w-full rounded-2xl shadow-xl flex flex-auto min-h-full overflow-hidden border">
            <Box
              className="preview-navbar hidden md:block sticky top-0 flex-0 min-w-224 h-768 border-r z-20"
              sx={{
                backgroundColor: (theme) =>
                  theme.palette.mode === 'light'
                    ? lighten(theme.palette.background.default, 0.4)
                    : lighten(theme.palette.background.default, 0.02),
              }}
            >
              <div className="h-16" />

              <Box
                className="w-2/3 h-16 m-24 rounded"
                sx={{
                  backgroundColor: (theme) => darken(theme.palette.background.default, 0.1),
                }}
              />

              <Box
                className="w-3/4 h-16 m-24 rounded"
                sx={{
                  backgroundColor: (theme) => darken(theme.palette.background.default, 0.1),
                }}
              />
              <Box
                className="w-1/2 h-16 m-24 rounded"
                sx={{
                  backgroundColor: (theme) => darken(theme.palette.background.default, 0.1),
                }}
              />
              <Box
                className="w-2/3 h-16 m-24 rounded"
                sx={{
                  backgroundColor: (theme) => darken(theme.palette.background.default, 0.1),
                }}
              />
            </Box>

            <div className="flex flex-col flex-auto">
              <Box
                className="preview-header relative z-20 flex flex-shrink-0 items-center justify-end h-64 px-24 sm:px-40 border-b"
                sx={{
                  backgroundColor: (theme) =>
                    theme.palette.mode === 'light'
                      ? lighten(theme.palette.background.default, 0.4)
                      : lighten(theme.palette.background.default, 0.02),
                }}
              >
                <Box
                  className="w-24 h-24 rounded-full"
                  sx={{
                    backgroundColor: (theme) => darken(theme.palette.background.default, 0.1),
                  }}
                />
              </Box>

              <div className="preview-component relative flex flex-col flex-auto z-10">
                <SelectedComponent />
              </div>

              <Box
                className="preview-footer relative z-20 flex flex-shrink-0 items-center h-56 px-24 sm:px-40 border-t"
                sx={{
                  backgroundColor: (theme) =>
                    theme.palette.mode === 'light'
                      ? lighten(theme.palette.background.default, 0.4)
                      : lighten(theme.palette.background.default, 0.02),
                }}
              >
                <Box
                  className="w-128 h-16 rounded-full"
                  sx={{
                    backgroundColor: (theme) => darken(theme.palette.background.default, 0.1),
                  }}
                />
              </Box>
            </div>
          </Paper>

          <div className="flex items-center justify-between my-32">
            <div>
              <Typography>{options[selectedOption].description}</Typography>
              <Typography component="code" className="mt-4 text-md">
                /src/app/modules/admin{options[selectedOption].link}/
              </Typography>
            </div>
            {options[selectedOption]?.link && (
              <Button
                color="secondary"
                variant="contained"
                component={Link}
                to={options[selectedOption].link}
                startIcon={<FuseSvgIcon size={20}>heroicons-solid:external-link</FuseSvgIcon>}
              >
                View
              </Button>
            )}
          </div>
        </div>
      </Root>
    </>
  );
}

PageLayoutOverview.defaultProps = {
  data: {
    title: '',
    description: '',
    availableOptions: [],
    selectedOption: '',
    options: {},
  },
};

export default PageLayoutOverview;
