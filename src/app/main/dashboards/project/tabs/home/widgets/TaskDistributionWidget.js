import Paper from '@mui/material/Paper';
import { lighten, useTheme } from '@mui/material/styles';
import Typography from '@mui/material/Typography';
import { memo, useEffect, useState } from 'react';
import ReactApexChart from 'react-apexcharts';
import { useSelector } from 'react-redux';
import Tabs from '@mui/material/Tabs';
import Box from '@mui/material/Box';
import Tab from '@mui/material/Tab';
import { selectWidgets } from '../../../store/widgetsSlice';

function TaskDistributionWidget(props) {
  const widgets = useSelector(selectWidgets);
  const { overview, series, labels, ranges } = widgets?.taskDistribution;
  const [tabValue, setTabValue] = useState(0);
  const currentRange = Object.keys(ranges)[tabValue];
  const [awaitRender, setAwaitRender] = useState(true);

  const theme = useTheme();

  const chartOptions = {
    chart: {
      fontFamily: 'inherit',
      foreColor: 'inherit',
      height: '100%',
      type: 'polarArea',
      toolbar: {
        show: false,
      },
      zoom: {
        enabled: false,
      },
    },
    labels,
    legend: {
      position: 'bottom',
    },
    plotOptions: {
      polarArea: {
        spokes: {
          connectorColors: theme.palette.divider,
        },
        rings: {
          strokeColor: theme.palette.divider,
        },
      },
    },
    states: {
      hover: {
        filter: {
          type: 'darken',
          value: 0.75,
        },
      },
    },
    stroke: {
      width: 2,
    },
    theme: {
      monochrome: {
        enabled: true,
        color: theme.palette.secondary.main,
        shadeIntensity: 0.75,
        shadeTo: 'dark',
      },
    },
    tooltip: {
      followCursor: true,
      theme: 'dark',
    },
    yaxis: {
      labels: {
        style: {
          colors: theme.palette.text.secondary,
        },
      },
    },
  };

  useEffect(() => {
    setAwaitRender(false);
  }, []);

  if (awaitRender) {
    return null;
  }
  return (
    <Paper className="flex flex-col flex-auto p-24 shadow rounded-2xl overflow-hidden h-full">
      <div className="flex flex-col sm:flex-row items-start justify-between">
        <Typography className="text-lg font-medium tracking-tight leading-6 truncate">
          Task Distribution
        </Typography>
        <div className="mt-3 sm:mt-0 sm:ml-2">
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
      <div className="flex flex-col flex-auto mt-6">
        <ReactApexChart
          className="flex-auto w-full"
          options={chartOptions}
          series={series[currentRange]}
          type={chartOptions.chart.type}
        />
      </div>
      <Box
        sx={{
          backgroundColor: (_theme) =>
            _theme.palette.mode === 'light'
              ? lighten(theme.palette.background.default, 0.4)
              : lighten(theme.palette.background.default, 0.02),
        }}
        className="grid grid-cols-2 border-t divide-x -m-24 mt-16"
      >
        <div className="flex flex-col items-center justify-center p-24 sm:p-32">
          <div className="text-5xl font-semibold leading-none tracking-tighter">
            {overview[currentRange].new}
          </div>
          <Typography className="mt-4 text-center text-secondary">New tasks</Typography>
        </div>
        <div className="flex flex-col items-center justify-center p-6 sm:p-8">
          <div className="text-5xl font-semibold leading-none tracking-tighter">
            {overview[currentRange].completed}
          </div>
          <Typography className="mt-4 text-center text-secondary">Completed tasks</Typography>
        </div>
      </Box>
    </Paper>
  );
}

export default memo(TaskDistributionWidget);
