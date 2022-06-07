import {
  TimelineConnector,
  TimelineContent,
  TimelineDot,
  TimelineItem,
  TimelineSeparator,
} from '@mui/lab';
import FuseSvgIcon from '@fuse/core/FuseSvgIcon';
import Avatar from '@mui/material/Avatar';
import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';
import format from 'date-fns/format';
import { Link } from 'react-router-dom';
import { lighten } from '@mui/material/styles';

function ActivityTimelineItem({ item, last }) {
  return (
    <TimelineItem>
      <TimelineSeparator>
        <TimelineDot
          color="primary"
          className="w-40 h-40 p-0  mt-0 flex items-center justify-center"
        >
          {item.image && <Avatar src={item.image} />}
          {!item.image && (
            <FuseSvgIcon>{item.icon ? item.icon : 'heroicons-solid:star'}</FuseSvgIcon>
          )}
        </TimelineDot>

        {!last && <TimelineConnector />}
      </TimelineSeparator>

      <TimelineContent className="flex flex-col items-start pt-0 pb-48">
        {item.description && <div dangerouslySetInnerHTML={{ __html: item.description }} />}

        <div className="flex flex-col sm:flex-row sm:items-center mt-8 sm:mt-4 sm:space-x-8 text-md leading-5">
          <Typography className="text-13" color="text.secondary">
            {format(new Date(item.date), 'MMM dd, h:mm a')}
          </Typography>
          {item.linkedContent && <div className="hidden sm:block">&bull;</div>}

          {item.useRouter && (
            <Link className="cursor-pointer" to={item.link}>
              {item.linkedContent}
            </Link>
          )}

          {!item.useRouter && (
            <a className="cursor-pointer" href={item.link} target="_blank" rel="noreferrer">
              {item.linkedContent}
            </a>
          )}
        </div>

        {item.extraContent && (
          <Box
            className="mt-16 py-16 px-20 rounded-lg border"
            sx={{
              backgroundColor: (theme) =>
                theme.palette.mode === 'light'
                  ? lighten(theme.palette.background.default, 0.4)
                  : lighten(theme.palette.background.default, 0.02),
            }}
          >
            <div dangerouslySetInnerHTML={{ __html: item.extraContent }} />
          </Box>
        )}
      </TimelineContent>
    </TimelineItem>
  );
}

export default ActivityTimelineItem;
