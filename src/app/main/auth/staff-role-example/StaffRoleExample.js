import FuseHighlight from '@fuse/core/FuseHighlight';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import FuseSvgIcon from '@fuse/core/FuseSvgIcon';
import { NavLink } from 'react-router-dom';
import FusePageCarded from '@fuse/core/FusePageCarded';

function StaffRoleExample(props) {
  return (
    <FusePageCarded
      header={
        <div className="flex flex-1 items-center justify-between p-24">
          <Typography className="text-3xl md:text-4xl font-extrabold tracking-tight leading-7 sm:leading-10 truncate">
            Staff: Auth role example page
          </Typography>
          <Button
            component={NavLink}
            variant="contained"
            color="secondary"
            to="/sign-out"
            startIcon={<FuseSvgIcon>heroicons-outline:logout</FuseSvgIcon>}
          >
            Sign out
          </Button>
        </div>
      }
      content={
        <div className="p-24">
          <Typography className="mb-24">
            You can see this page because you have logged in and have permission. Otherwise you
            should be redirected to login page.
          </Typography>

          <Typography className="mb-24">This is the page's config file:</Typography>

          <FuseHighlight component="pre" className="language-js">
            {`
              import {authRoles} from 'auth';
              import StaffRoleExample from './StaffRoleExample';

              export const StaffRoleExampleConfig = {
                  settings: {
                      layout: {
                          config: {}
                      }
                  },
                  auth    : authRoles.staff,//['admin',staff']
                  routes  : [
                      {
                          path     : '/auth/staff-role-example',
                          element:StaffRoleExample
                      }
                  ]
              };
              `}
          </FuseHighlight>

          <Typography className="my-24">
            You can also hide the navigation item/collapse/group with user roles by giving auth
            property.
          </Typography>

          <FuseHighlight component="pre" className="language-json">
            {`
              export const fuseNavigationConfig = [
                 {
                      'id'   : 'only-staff-navigation-item',
                      'title': 'Nav item only for Staff',
                      'type' : 'item',
                      'auth' : authRoles.staff,//['admin','staff']
                      'url'  : '/auth/staff-role-example',
                      'icon' : 'verified_user'
                  }
              ];
          `}
          </FuseHighlight>
        </div>
      }
    />
  );
}

export default StaffRoleExample;
