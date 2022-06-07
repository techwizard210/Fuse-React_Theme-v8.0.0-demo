import StaffRoleExample from './StaffRoleExample';
import authRoles from '../../../auth/authRoles';

const StaffRoleExampleConfig = {
  settings: {
    layout: {
      config: {},
    },
  },
  auth: authRoles.staff, // ['admin','staff']
  routes: [
    {
      path: 'auth/staff-role-example',
      element: <StaffRoleExample />,
    },
  ],
};

export default StaffRoleExampleConfig;
