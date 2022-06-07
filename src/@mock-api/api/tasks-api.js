import _ from '@lodash';
import FuseUtils from '@fuse/utils';
import mockApi from '../mock-api.json';
import mock from '../mock';

let tasksDB = mockApi.components.examples.tasks.value;
const tagsDB = mockApi.components.examples.tasks_tags.value;

mock.onGet('/api/tasks').reply((config) => {
  return [200, tasksDB];
});

mock.onPost('/api/tasks').reply(({ data }) => {
  const newtask = { id: FuseUtils.generateGUID(), ...JSON.parse(data) };

  tasksDB.push(newtask);

  return [200, newtask];
});

mock.onPost('/api/tasks/reorder').reply(({ data }) => {
  const { startIndex, endIndex } = JSON.parse(data);
  const ordered = _.merge([], tasksDB);

  const [removed] = ordered.splice(startIndex, 1);

  ordered.splice(endIndex, 0, removed);

  tasksDB = ordered;

  return [200, tasksDB];
});

mock.onGet(/\/api\/tasks\/(?!tags)[^/]+/).reply((config) => {
  const { id } = config.url.match(/\/api\/tasks\/(?<id>[^/]+)/).groups;
  const task = _.find(tasksDB, { id });

  if (task) {
    return [200, task];
  }

  return [404, 'Requested task do not exist.'];
});

mock.onPut(/\/api\/tasks\/[^/]+/).reply(({ url, data }) => {
  const { id } = url.match(/\/api\/tasks\/(?<id>[^/]+)/).groups;

  _.assign(_.find(tasksDB, { id }), JSON.parse(data));

  return [200, _.find(tasksDB, { id })];
});

mock.onDelete(/\/api\/tasks\/[^/]+/).reply((config) => {
  const { id } = config.url.match(/\/api\/tasks\/(?<id>[^/]+)/).groups;

  _.remove(tasksDB, { id });

  return [200, id];
});

mock.onGet('/api/tasks/tags').reply((config) => {
  return [200, tagsDB];
});
