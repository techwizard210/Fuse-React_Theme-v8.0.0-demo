import './api/dashboards/analytics-api';
import './api/dashboards/project-api';
import './api/dashboards/crypto-api';
import './api/dashboards/finance-api';
import './api/ui/icons-api';
import './api/countries-api';
import './api/contacts-api';
import './api/chat-api';
import './api/tasks-api';
import './api/academy-api';
import './api/ecommerce-api';
import './api/file-manager-api';
import './api/help-center-api';
import './api/notes-api';
import './api/scrumboard-api';
import './api/mailbox-api';
import './api/calendar-api';
import './api/profile-api';
import './api/auth-api';
import './api/notifications-api';
import history from '@history';
import mock from './mock';

mock.onAny().passThrough();

if (module?.hot?.status() === 'apply') {
  const { pathname } = history.location;
  history.push('/loading');
  history.push({ pathname });
}
