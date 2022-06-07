import { Outlet } from 'react-router-dom';
import withReducer from 'app/store/withReducer';
import reducer from './store';

function HelpCenterApp() {
  return <Outlet />;
}

export default withReducer('helpCenterApp', reducer)(HelpCenterApp);
