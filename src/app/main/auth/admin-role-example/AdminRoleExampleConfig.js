import AdminRoleExample from './AdminRoleExample';
import authRoles from '../../../auth/authRoles';

const AdminRoleExampleConfig = {
  settings: {
    layout: {
      config: {},
    },
  },
  auth: authRoles.admin, // ['admin']
  routes: [
    {
      path: 'auth/admin-role-example',
      element: <AdminRoleExample />,
    },
  ],
};

export default AdminRoleExampleConfig;
