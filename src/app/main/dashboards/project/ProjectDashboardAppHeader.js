import Avatar from '@mui/material/Avatar';
import Menu from '@mui/material/Menu';
import MenuItem from '@mui/material/MenuItem';
import Typography from '@mui/material/Typography';
import { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import _ from '@lodash';
import Button from '@mui/material/Button';
import FuseSvgIcon from '@fuse/core/FuseSvgIcon';
import { selectUser } from 'app/store/userSlice';
import { getProjects, selectProjects } from './store/projectsSlice';

function ProjectDashboardAppHeader(props) {
  const dispatch = useDispatch();
  const projects = useSelector(selectProjects);
  const user = useSelector(selectUser);

  const [selectedProject, setSelectedProject] = useState({
    id: 1,
    menuEl: null,
  });

  useEffect(() => {
    dispatch(getProjects());
  }, [dispatch]);

  function handleChangeProject(id) {
    setSelectedProject({
      id,
      menuEl: null,
    });
  }

  function handleOpenProjectMenu(event) {
    setSelectedProject({
      id: selectedProject.id,
      menuEl: event.currentTarget,
    });
  }

  function handleCloseProjectMenu() {
    setSelectedProject({
      id: selectedProject.id,
      menuEl: null,
    });
  }

  if (_.isEmpty(projects)) {
    return null;
  }

  return (
    <div className="flex flex-col w-full px-24 sm:px-32">
      <div className="flex flex-col sm:flex-row flex-auto sm:items-center min-w-0 my-32 sm:my-48">
        <div className="flex flex-auto items-center min-w-0">
          <Avatar className="flex-0 w-64 h-64" alt="user photo" src={user?.data?.photoURL}>
            {user?.data?.displayName[0]}
          </Avatar>
          <div className="flex flex-col min-w-0 mx-16">
            <Typography className="text-2xl md:text-5xl font-semibold tracking-tight leading-7 md:leading-snug truncate">
              {`Welcome back, ${user.data.displayName}!`}
            </Typography>

            <div className="flex items-center">
              <FuseSvgIcon size={20} color="action">
                heroicons-solid:bell
              </FuseSvgIcon>
              <Typography className="mx-6 leading-6 truncate" color="text.secondary">
                You have 2 new messages and 15 new tasks
              </Typography>
            </div>
          </div>
        </div>
        <div className="flex items-center mt-24 sm:mt-0 sm:mx-8 space-x-12">
          <Button
            className="whitespace-nowrap"
            variant="contained"
            color="primary"
            startIcon={<FuseSvgIcon size={20}>heroicons-solid:mail</FuseSvgIcon>}
          >
            Messages
          </Button>
          <Button
            className="whitespace-nowrap"
            variant="contained"
            color="secondary"
            startIcon={<FuseSvgIcon size={20}>heroicons-solid:cog</FuseSvgIcon>}
          >
            Settings
          </Button>
        </div>
      </div>
      <div className="flex items-center">
        <Button
          onClick={handleOpenProjectMenu}
          className="flex items-center border border-solid border-b-0 rounded-t-xl rounded-b-0 h-40 px-16 text-13 sm:text-16"
          variant="default"
          sx={{
            backgroundColor: (theme) => theme.palette.background.default,
            borderColor: (theme) => theme.palette.divider,
          }}
          endIcon={
            <FuseSvgIcon size={20} color="action">
              heroicons-solid:chevron-down
            </FuseSvgIcon>
          }
        >
          {_.find(projects, ['id', selectedProject.id]).name}
        </Button>
        <Menu
          id="project-menu"
          anchorEl={selectedProject.menuEl}
          open={Boolean(selectedProject.menuEl)}
          onClose={handleCloseProjectMenu}
        >
          {projects &&
            projects.map((project) => (
              <MenuItem
                key={project.id}
                onClick={(ev) => {
                  handleChangeProject(project.id);
                }}
              >
                {project.name}
              </MenuItem>
            ))}
        </Menu>
      </div>
    </div>
  );
}

export default ProjectDashboardAppHeader;
