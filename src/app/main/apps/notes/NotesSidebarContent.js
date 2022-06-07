import NavLinkAdapter from '@fuse/core/NavLinkAdapter';
import { styled } from '@mui/material/styles';
import List from '@mui/material/List';
import ListItem from '@mui/material/ListItem';
import ListItemText from '@mui/material/ListItemText';
import { motion } from 'framer-motion';
import { useDispatch, useSelector } from 'react-redux';
import FuseSvgIcon from '@fuse/core/FuseSvgIcon';
import { openLabelsDialog, selectLabels } from './store/labelsSlice';

const StyledListItem = styled(ListItem)(({ theme, active }) => ({
  color: 'inherit!important',
  textDecoration: 'none!important',
  height: 40,
  width: '100%',
  borderRadius: 20,
  paddingLeft: 16,
  paddingRight: 16,
  marginBottom: 8,
  fontWeight: 500,
  '&.active': {
    backgroundColor:
      theme.palette.mode === 'light'
        ? 'rgba(0, 0, 0, .05)!important'
        : 'rgba(255, 255, 255, .1)!important',
    pointerEvents: 'none',
    '& .list-item-icon': {
      color: theme.palette.secondary.main,
    },
  },
  '& .list-item-icon': {
    marginRight: 16,
  },
}));

function NotesSidebarContent(props) {
  const dispatch = useDispatch();
  const labels = useSelector(selectLabels);

  return (
    <div className="px-16 py-24">
      <div
        component={motion.div}
        initial={{ y: 20, opacity: 0 }}
        animate={{ y: 0, opacity: 1, transition: { delay: 0.2 } }}
      >
        <List className="">
          <StyledListItem
            button
            component={NavLinkAdapter}
            to="/apps/notes"
            end
            activeClassName="active"
          >
            <FuseSvgIcon className="list-item-icon" color="disabled">
              heroicons-outline:pencil-alt
            </FuseSvgIcon>
            <ListItemText className="truncate" primary="Notes" disableTypography />
          </StyledListItem>
          <StyledListItem
            button
            component={NavLinkAdapter}
            to="/apps/notes/reminders"
            end
            activeClassName="active"
          >
            <FuseSvgIcon className="list-item-icon" color="disabled">
              heroicons-outline:bell
            </FuseSvgIcon>
            <ListItemText className="truncate" primary="Reminders" disableTypography />
          </StyledListItem>

          <StyledListItem
            button
            component={NavLinkAdapter}
            to="/apps/notes/archive"
            activeClassName="active"
          >
            <FuseSvgIcon className="list-item-icon" color="disabled">
              heroicons-outline:archive
            </FuseSvgIcon>
            <ListItemText className="truncate" primary="Archive" disableTypography />
          </StyledListItem>

          {labels.map((label) => (
            <StyledListItem
              key={label.id}
              button
              component={NavLinkAdapter}
              to={`/apps/notes/labels/${label.id}`}
              end
              activeClassName="active"
            >
              <FuseSvgIcon className="list-item-icon" color="disabled">
                heroicons-outline:tag
              </FuseSvgIcon>
              <ListItemText className="truncate" primary={label.title} disableTypography />
            </StyledListItem>
          ))}
          <StyledListItem button onClick={(ev) => dispatch(openLabelsDialog())}>
            <FuseSvgIcon className="list-item-icon" color="disabled">
              heroicons-outline:pencil
            </FuseSvgIcon>
            <ListItemText className="truncate" primary="Edit Labels" disableTypography />
          </StyledListItem>
        </List>
      </div>
    </div>
  );
}

export default NotesSidebarContent;
