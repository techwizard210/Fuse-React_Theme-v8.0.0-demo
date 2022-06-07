import i18next from 'i18next';
import { lazy } from 'react';
import { Navigate } from 'react-router-dom';
import ar from './i18n/ar';
import en from './i18n/en';
import tr from './i18n/tr';
import SelectMailMessage from './SelectMailMessage';
import MailDetails from './mail/MailDetails';

const MailboxApp = lazy(() => import('./MailboxApp'));

i18next.addResourceBundle('en', 'mailboxApp', en);
i18next.addResourceBundle('tr', 'mailboxApp', tr);
i18next.addResourceBundle('ar', 'mailboxApp', ar);

const MailboxAppConfig = {
  settings: {
    layout: {},
  },
  routes: [
    {
      path: '/apps/mailbox',
      children: [
        {
          path: '',
          element: <Navigate to="/apps/mailbox/inbox" />,
        },
        {
          path: ':folderHandle',
          element: <MailboxApp />,
          children: [
            { path: '', element: <SelectMailMessage /> },
            { path: ':mailId', element: <MailDetails /> },
          ],
        },
        {
          path: 'label/:labelHandle',
          element: <MailboxApp />,
          children: [
            { path: '', element: <SelectMailMessage /> },
            { path: ':mailId', element: <MailDetails /> },
          ],
        },
        {
          path: 'filter/:filterHandle',
          element: <MailboxApp />,
          children: [
            { path: '', element: <SelectMailMessage /> },
            { path: ':mailId', element: <MailDetails /> },
          ],
        },
      ],
    },
  ],
};

export default MailboxAppConfig;
