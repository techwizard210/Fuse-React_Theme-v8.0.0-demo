import FuseHighlight from '@fuse/core/FuseHighlight';
import Typography from '@mui/material/Typography';
import FusePageCarded from '@fuse/core/FusePageCarded';

function GuestRoleExample() {
  return (
    <FusePageCarded
      header={
        <div className="p-24 flex items-center">
          <Typography className="text-3xl md:text-4xl font-extrabold tracking-tight leading-7 sm:leading-10 truncate">
            Guest: Auth role example page
          </Typography>
        </div>
      }
      content={
        <div className="p-24">
          <Typography className="mb-24">
            You can see this page because you have not logged in. Otherwise you should be redirected
            to root page.
          </Typography>

          <Typography className="mb-24">This is the page's config file:</Typography>

          <FuseHighlight component="pre" className="language-js">
            {`
            import {authRoles} from 'auth';
            import GuestRoleExample from './StaffRoleExample';

            export const GuestRoleExampleConfig = {
                settings: {
                    layout: {
                        config: {}
                    }
                },
                auth    : authRoles.onlyGuest,//['guest']
                routes  : [
                    {
                        path     : '/auth/guest-role-example',
                        element: <GuestRoleExample/>
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
                        'title': 'Nav item only for Guest',
                        'type' : 'item',
                        'auth' : authRoles.onlyGuest,//['guest']
                        'url'  : '/auth/guest-role-example',
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

export default GuestRoleExample;
