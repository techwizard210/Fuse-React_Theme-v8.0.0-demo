import { lazy } from 'react';
import ContactView from './contact/ContactView';
import ContactForm from './contact/ContactForm';

const ContactsApp = lazy(() => import('./ContactsApp'));

const ContactsAppConfig = {
  settings: {
    layout: {
      config: {},
    },
  },
  routes: [
    {
      path: 'apps/contacts',
      element: <ContactsApp />,
      children: [
        {
          path: ':id',
          element: <ContactView />,
        },
        {
          path: ':id/edit',
          element: <ContactForm />,
        },
      ],
    },
  ],
};

export default ContactsAppConfig;
