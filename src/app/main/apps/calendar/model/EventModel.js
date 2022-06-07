import _ from '@lodash';
import formatISO from 'date-fns/formatISO';

const EventModel = (data) =>
  _.defaults(data || {}, {
    title: '',
    allDay: true,
    start: formatISO(new Date()),
    end: formatISO(new Date()),
    extendedProps: { desc: '', label: '' },
  });

export default EventModel;
