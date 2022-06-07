import _ from '@lodash';
import FuseUtils from '@fuse/utils';
import mockApi from '../mock-api.json';
import mock from '../mock';

const eventsDB = mockApi.components.examples.calendar_events.value;
const labelsDB = mockApi.components.examples.calendar_labels.value;

mock.onGet('/api/calendar/labels').reply((config) => {
  return [200, labelsDB];
});

mock.onPost('/api/calendar/labels').reply(({ data }) => {
  const newLabel = { id: FuseUtils.generateGUID(), ...JSON.parse(data) };
  labelsDB.push(newLabel);

  return [200, newLabel];
});

mock.onPut(/\/api\/calendar\/labels\/[^/]+/).reply(({ url, data }) => {
  const { id } = url.match(/\/api\/calendar\/labels\/(?<id>[^/]+)/).groups;

  _.assign(_.find(labelsDB, { id }), JSON.parse(data));

  return [200, _.find(labelsDB, { id })];
});

mock.onGet(/\/api\/calendar\/labels\/[^/]+/).reply((config) => {
  const { id } = config.url.match(/\/api\/calendar\/labels\/(?<id>[^/]+)/).groups;
  const response = _.find(labelsDB, { label: id });

  if (response) {
    return [200, response];
  }

  return [404, 'Requested label do not exist.'];
});

mock.onGet(/\/api\/calendar\/labels\/[^/]+/).reply((config) => {
  const { id } = config.url.match(/\/api\/calendar\/labels\/(?<id>[^/]+)/).groups;
  const response = _.find(labelsDB, { label: id });

  if (response) {
    return [200, response];
  }

  return [404, 'Requested label do not exist.'];
});

mock.onDelete(/\/api\/calendar\/labels\/[^/]+/).reply((config) => {
  const { id } = config.url.match(/\/api\/calendar\/labels\/(?<id>[^/]+)/).groups;

  _.remove(labelsDB, { id });
  _.remove(eventsDB, { extendedProps: { label: id } });

  return [200, id];
});

mock.onGet('/api/calendar/events').reply((config) => {
  return [200, eventsDB];
});

mock.onPost('/api/calendar/events').reply(({ data }) => {
  const newEvent = { id: FuseUtils.generateGUID(), ...JSON.parse(data) };
  eventsDB.push(newEvent);

  return [200, newEvent];
});

mock.onPut(/\/api\/calendar\/events\/[^/]+/).reply(({ url, data }) => {
  const { id } = url.match(/\/api\/calendar\/events\/(?<id>[^/]+)/).groups;

  _.assign(_.find(eventsDB, { id }), JSON.parse(data));

  return [200, _.find(eventsDB, { id })];
});

mock.onGet(/\/api\/calendar\/events\/[^/]+/).reply((config) => {
  const { id } = config.url.match(/\/api\/calendar\/events\/(?<id>[^/]+)/).groups;
  const response = _.find(eventsDB, { event: id });

  if (response) {
    return [200, response];
  }

  return [404, 'Requested event do not exist.'];
});

mock.onGet(/\/api\/calendar\/events\/[^/]+/).reply((config) => {
  const { id } = config.url.match(/\/api\/calendar\/events\/(?<id>[^/]+)/).groups;
  const response = _.find(eventsDB, { event: id });

  if (response) {
    return [200, response];
  }

  return [404, 'Requested event do not exist.'];
});

mock.onDelete(/\/api\/calendar\/events\/[^/]+/).reply((config) => {
  const { id } = config.url.match(/\/api\/calendar\/events\/(?<id>[^/]+)/).groups;

  _.remove(eventsDB, { id });

  return [200, id];
});
