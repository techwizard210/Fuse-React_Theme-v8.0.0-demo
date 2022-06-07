import { useSelector } from 'react-redux';
import { styled, ThemeProvider, useTheme } from '@mui/material/styles';
import ReactApexChart from 'react-apexcharts';
import { useState } from 'react';
import Tabs from '@mui/material/Tabs';
import Box from '@mui/material/Box';
import Tab from '@mui/material/Tab';
import { selectContrastMainTheme } from 'app/store/fuse/settingsSlice';
import Paper from '@mui/material/Paper';
import Typography from '@mui/material/Typography';
import { selectWidgets } from '../store/widgetsSlice';

const Root = styled(Paper)(({ theme }) => ({
  background: theme.palette.primary.main,
  color: theme.palette.primary.contrastText,
}));

function VisitorsOverviewWidget() {
  const theme = useTheme();
  const contrastTheme = useSelector(selectContrastMainTheme(theme.palette.primary.main));
  const widgets = useSelector(selectWidgets);
  const { series, ranges } = widgets?.visitors;
  const [tabValue, setTabValue] = useState(0);
  const currentRange = Object.keys(ranges)[tabValue];

  const chartOptions = {
    chart: {
      animations: {
        speed: 400,
        animateGradually: {
          enabled: false,
        },
      },
      fontFamily: 'inherit',
      foreColor: 'inherit',
      width: '100%',
      height: '100%',
      type: 'area',
      toolbar: {
        show: false,
      },
      zoom: {
        enabled: false,
      },
    },
    colors: [contrastTheme.palette.secondary.light],
    dataLabels: {
      enabled: false,
    },
    fill: {
      colors: [contrastTheme.palette.secondary.dark],
    },
    grid: {
      show: true,
      borderColor: contrastTheme.palette.divider,
      padding: {
        top: 10,
        bottom: -40,
        left: 0,
        right: 0,
      },
      position: 'back',
      xaxis: {
        lines: {
          show: true,
        },
      },
    },
    stroke: {
      width: 2,
    },
    tooltip: {
      followCursor: true,
      theme: 'dark',
      x: {
        format: 'MMM dd, yyyy',
      },
      y: {
        formatter: (value) => `${value}`,
      },
    },
    xaxis: {
      axisBorder: {
        show: false,
      },
      axisTicks: {
        show: false,
      },
      crosshairs: {
        stroke: {
          color: contrastTheme.palette.divider,
          dashArray: 0,
          width: 2,
        },
      },
      labels: {
        offsetY: -20,
        style: {
          colors: contrastTheme.palette.text.secondary,
        },
      },
      tickAmount: 20,
      tooltip: {
        enabled: false,
      },
      type: 'datetime',
    },
    yaxis: {
      axisTicks: {
        show: false,
      },
      axisBorder: {
        show: false,
      },
      min: (min) => min - 750,
      max: (max) => max + 250,
      tickAmount: 5,
      show: false,
    },
  };

  return (
    <ThemeProvider theme={contrastTheme}>
      <Root className="sm:col-span-2 lg:col-span-3 dark flex flex-col flex-auto shadow rounded-2xl overflow-hidden">
        <div className="flex items-center justify-between mt-40 ml-40 mr-24 sm:mr-40">
          <div className="flex flex-col">
            <Typography className="mr-16 text-2xl md:text-3xl font-semibold tracking-tight leading-7">
              Visitors Overview
            </Typography>
            <Typography className="font-medium" color="text.secondary">
              Number of unique visitors
            </Typography>
          </div>
          <div className="mt-12 sm:mt-0 sm:ml-8">
            <Tabs
              value={tabValue}
              onChange={(ev, value) => setTabValue(value)}
              indicatorColor="secondary"
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
              {Object.entries(ranges).map(([key, label]) => (
                <Tab
                  className="text-14 font-semibold min-h-40 min-w-64 mx-4 px-12"
                  disableRipple
                  key={key}
                  label={label}
                />
              ))}
            </Tabs>
          </div>
        </div>

        <div className="flex flex-col flex-auto h-320">
          <ReactApexChart
            options={chartOptions}
            series={series[currentRange]}
            type={chartOptions.chart.type}
            height={chartOptions.chart.height}
          />
        </div>
      </Root>
    </ThemeProvider>
  );
}

export default VisitorsOverviewWidget;
