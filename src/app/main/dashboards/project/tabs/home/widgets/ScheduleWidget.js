import IconButton from '@mui/material/IconButton';
import List from '@mui/material/List';
import ListItem from '@mui/material/ListItem';
import ListItemSecondaryAction from '@mui/material/ListItemSecondaryAction';
import ListItemText from '@mui/material/ListItemText';
import Paper from '@mui/material/Paper';
import Select from '@mui/material/Select';
import Typography from '@mui/material/Typography';
import { memo, useState } from 'react';
import MenuItem from '@mui/material/MenuItem';
import { useSelector } from 'react-redux';
import Tabs from '@mui/material/Tabs';
import Box from '@mui/material/Box';
import Tab from '@mui/material/Tab';
import FuseSvgIcon from '@fuse/core/FuseSvgIcon';
import { selectWidgets } from '../../../store/widgetsSlice';

function ScheduleWidget(props) {
  const widgets = useSelector(selectWidgets);
  const { series, ranges } = widgets?.schedule;
  const [tabValue, setTabValue] = useState(0);
  const currentRange = Object.keys(ranges)[tabValue];

  return (
    <Paper className="flex flex-col flex-auto p-24 shadow rounded-2xl overflow-hidden h-full">
      <div className="flex flex-col sm:flex-row items-start justify-between">
        <Typography className="text-lg font-medium tracking-tight leading-6 truncate">
          Schedule
        </Typography>
        <div className="mt-12 sm:mt-0 sm:ml-8">
          <Tabs
            value={tabValue}
            onChange={(ev, value) => setTabValue(value)}
            indicatorColor="secondary"
            textColor="inherit"
            variant="scrollable"
            scrollButtons={false}
            className="-mx-16 min-h-40"
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
      <List className="py-0 mt-8 divide-y">
        {series[currentRange].map((item, index) => (
          <ListItem key={index} className="px-0">
            <ListItemText
              classes={{ root: 'px-8', primary: 'font-medium' }}
              primary={item.title}
              secondary={
                <span className="flex flex-col sm:flex-row sm:items-center -ml-2 mt-8 sm:mt-4 space-y-4 sm:space-y-0 sm:space-x-12">
                  {item.time && (
                    <span className="flex items-center">
                      <FuseSvgIcon size={20} color="disabled">
                        heroicons-solid:clock
                      </FuseSvgIcon>
                      <Typography component="span" className="mx-6 text-md" color="text.secondary">
                        {item.time}
                      </Typography>
                    </span>
                  )}

                  {item.location && (
                    <span className="flex items-center">
                      <FuseSvgIcon size={20} color="disabled">
                        heroicons-solid:location-marker
                      </FuseSvgIcon>
                      <Typography component="span" className="mx-6 text-md" color="text.secondary">
                        {item.location}
                      </Typography>
                    </span>
                  )}
                </span>
              }
            />
            <ListItemSecondaryAction>
              <IconButton aria-label="more" size="large">
                <FuseSvgIcon>heroicons-solid:chevron-right</FuseSvgIcon>
              </IconButton>
            </ListItemSecondaryAction>
          </ListItem>
        ))}
      </List>

      {/*
  <div className="flex flex-col mt-2 divide-y">
    <ng-container *ngFor="let scheduleItem of data.schedule[scheduleDaySelector.value]; trackBy: trackByFn">
    <div className="flex flex-row items-center justify-between py-4 px-0.5">
      <div className="flex flex-col">
        <div className="font-medium">{{scheduleItem.title}}</div>
        <div className="flex flex-col sm:flex-row sm:items-center -ml-0.5 mt-2 sm:mt-1 space-y-1 sm:space-y-0 sm:space-x-3">
          <ng-container *ngIf="scheduleItem.time">
          <div className="flex items-center">
            <mat-icon
              className="icon-size-5 text-hint"
            [svgIcon]="'heroicons_solid:clock'"></mat-icon>
          <div className="ml-1.5 text-md text-secondary">{{scheduleItem.time}}</div>
        </div>
      </ng-container>
      <ng-container *ngIf="scheduleItem.location">
      <div className="flex items-center">
        <mat-icon
          className="icon-size-5 text-hint"
        [svgIcon]="'heroicons_solid:location-marker'"></mat-icon>
      <div className="ml-1.5 text-md text-secondary">{{scheduleItem.location}}</div>
    </div>
  </ng-container>
</div>
</div>
  <button mat-icon-button>
    <mat-icon [svgIcon]="'heroicons_solid:chevron-right'"></mat-icon>
</button>
</div>
</ng-container> */}
    </Paper>
  );

  return (
    <Paper className="w-full rounded-20 shadow">
      <div className="flex items-center justify-between p-20 h-64 ">
        <Typography className="text-16 font-medium">{props.widget.title}</Typography>

        <Select
          value={currentRange}
          onChange={handleChangeRange}
          inputProps={{
            name: 'currentRange',
          }}
          classes={{ select: 'py-8' }}
          variant="filled"
        >
          {Object.entries(props.widget.ranges).map(([key, n]) => {
            return (
              <MenuItem key={key} value={key}>
                {n}
              </MenuItem>
            );
          })}
        </Select>
      </div>
      <List className="py-0">
        {props.widget.schedule[currentRange].map((item) => (
          <ListItem key={item.id}>
            <ListItemText
              classes={{ root: 'px-8', primary: 'font-medium text-16' }}
              primary={item.title}
              secondary={item.time}
            />
            <ListItemSecondaryAction>
              <IconButton aria-label="more" size="large">
                <FuseSvgIcon>heroicons-outline:dots-vertical</FuseSvgIcon>
              </IconButton>
            </ListItemSecondaryAction>
          </ListItem>
        ))}
      </List>
    </Paper>
  );
}

export default memo(ScheduleWidget);
