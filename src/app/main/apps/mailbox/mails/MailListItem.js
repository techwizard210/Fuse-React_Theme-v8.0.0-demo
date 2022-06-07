import _ from '@lodash';
import { styled } from '@mui/material/styles';
import Avatar from '@mui/material/Avatar';
import Checkbox from '@mui/material/Checkbox';
import ListItem from '@mui/material/ListItem';
import Typography from '@mui/material/Typography';
import { useDispatch, useSelector } from 'react-redux';
import withRouter from '@fuse/core/withRouter';
import NavLinkAdapter from '@fuse/core/NavLinkAdapter';
import FuseSvgIcon from '@fuse/core/FuseSvgIcon';
import format from 'date-fns/format';
import { selectSelectedMailIds, toggleInSelectedMails } from '../store/mailsSlice';

const StyledListItem = styled(ListItem)(({ theme, unread, selected }) => ({
  background: theme.palette.background.default,
  borderBottom: `1px solid ${theme.palette.divider}`,

  ...(unread && {
    background: theme.palette.background.paper,
  }),

  '&.selected': {
    '&::after': {
      content: '""',
      position: 'absolute',
      top: 0,
      left: 0,
      display: 'block',
      height: '100%',
      width: 3,
      backgroundColor: theme.palette.primary.main,
    },
  },
}));

const MailListItem = (props) => {
  const dispatch = useDispatch();
  const selectedMailIds = useSelector(selectSelectedMailIds);
  const { mail } = props;
  const checked =
    selectedMailIds.length > 0 && selectedMailIds.find((id) => id === props.mail.id) !== undefined;

  return (
    <StyledListItem
      dense
      button
      component={NavLinkAdapter}
      to={props.mail.id}
      selected={checked}
      unread={props.mail.unread ? 1 : 0}
      className="items-start py-20 px-0 md:px-8 relative w-full"
      activeClassName="selected"
    >
      <Checkbox
        tabIndex={-1}
        disableRipple
        checked={checked}
        onChange={() => dispatch(toggleInSelectedMails(props.mail.id))}
        onClick={(ev) => ev.stopPropagation()}
        size="small"
      />

      <div className="flex flex-col flex-auto min-w-0">
        <div className="flex w-full space-x-6 items-center">
          <Avatar
            sx={{
              backgroundColor: (theme) => theme.palette.primary[500],
            }}
            alt={props.mail.from.name}
            src={props.mail.from?.avatar}
          >
            {props.mail.from.contact}
          </Avatar>
          <div className="flex flex-col w-full min-w-0">
            <div className="flex items-center w-full">
              <Typography className="mr-8 font-semibold truncate">
                {mail.from.contact.split('<')[0].trim()}
              </Typography>

              {mail.important && (
                <FuseSvgIcon className="mr-12 text-red-500 dark:text-red-600" size={16}>
                  heroicons-solid:exclamation-circle
                </FuseSvgIcon>
              )}

              <Typography
                className="ml-auto text-md text-right whitespace-nowrap"
                color="text.secondary"
              >
                {format(new Date(mail.date), 'LLL dd')}
              </Typography>
            </div>
            <div className="flex items-center w-full mt-4">
              <span className="leading-4 truncate">{mail.subject}</span>
              {((mail.attachments && mail.attachments.length > 0) || mail.starred) && (
                <div className="flex ml-auto pl-8">
                  <FuseSvgIcon className="" size={16}>
                    heroicons-solid:paper-clip
                  </FuseSvgIcon>

                  {mail.starred && (
                    <FuseSvgIcon
                      className="flex justify-center ml-4 text-orange-500 dark:text-orange-400"
                      size={16}
                    >
                      heroicons-solid:star
                    </FuseSvgIcon>
                  )}
                </div>
              )}
            </div>
          </div>
        </div>
        <Typography color="text.secondary" className="mt-8 leading-normal line-clamp-2">
          {_.truncate(props.mail.content.replace(/<(?:.|\n)*?>/gm, ''), { length: 180 })}
        </Typography>
      </div>
    </StyledListItem>
  );
};

export default withRouter(MailListItem);
