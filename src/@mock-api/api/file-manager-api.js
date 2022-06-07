import _ from '@lodash';
import mockApi from '../mock-api.json';
import mock from '../mock';

const itemsApi = mockApi.components.examples.file_manager_items.value;

mock.onGet(/\/api\/file-manager\/[^]+/).reply(({ url, data }) => {
  let { folderId } = url.match(/\/api\/file-manager\/(?<folderId>[^/]+)/).groups;

  let items = _.cloneDeep(itemsApi);

  folderId = folderId === 'undefined' ? null : folderId;

  items = items.filter((item) => item.folderId === folderId);

  const pathItems = _.cloneDeep(itemsApi);
  const path = [];

  let currentFolder = null;

  if (folderId) {
    currentFolder = pathItems.find((item) => item.id === folderId);
    path.push(currentFolder);
  }

  while (currentFolder?.folderId) {
    // eslint-disable-next-line no-loop-func
    currentFolder = pathItems.find((item) => item.id === currentFolder.folderId);
    if (currentFolder) {
      path.unshift(currentFolder);
    }
  }

  return [
    200,
    {
      items,
      path,
    },
  ];
});
