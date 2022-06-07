import Button from '@mui/material/Button';
import NavLinkAdapter from '@fuse/core/NavLinkAdapter';
import FuseSvgIcon from '@fuse/core/FuseSvgIcon';
import BoardTitle from './BoardTitle';

function BoardHeader(props) {
  return (
    <div className="p-24 sm:p-32 w-full border-b-1 flex flex-col sm:flex-row items-center justify-between container">
      <div className="flex items-center mb-12 sm:mb-0">
        <BoardTitle />
      </div>

      <div className="flex items-center justify-end space-x-12">
        <Button
          className="whitespace-nowrap"
          component={NavLinkAdapter}
          to="/apps/scrumboard/boards/"
          startIcon={<FuseSvgIcon size={20}>heroicons-outline:view-boards</FuseSvgIcon>}
        >
          Boards
        </Button>

        <Button
          className="whitespace-nowrap"
          variant="contained"
          color="secondary"
          onClick={() => props.onSetSidebarOpen(true)}
          startIcon={<FuseSvgIcon size={20}>heroicons-outline:cog</FuseSvgIcon>}
        >
          Settings
        </Button>
      </div>
    </div>
  );
}

export default BoardHeader;
