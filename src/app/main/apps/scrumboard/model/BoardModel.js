import _ from '@lodash';

function BoardModel(data) {
  data = data || {};

  return _.defaults(data, {
    title: 'Untitled Board',
    description: '',
    icon: 'heroicons-outline:template',
    lastActivity: new Date(),
    members: [],
    settings: {
      subscribed: true,
      cardCoverImages: true,
    },
    lists: [],
  });
}

export default BoardModel;
