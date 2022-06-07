import _ from '@lodash';

const ContactModel = (data) =>
  _.defaults(data || {}, {
    avatar: null,
    background: null,
    name: '',
    emails: [{ email: '', label: '' }],
    phoneNumbers: [{ country: 'us', phoneNumber: '', label: '' }],
    title: '',
    company: '',
    birthday: null,
    address: '',
    notes: '',
    tags: [],
  });

export default ContactModel;
