import _ from '@lodash';

function CardModel(data) {
  data = data || {};

  return _.defaults(data, {
    name: '',
    boardId: '',
    listId: '',
    title: '',
    description: '',
    labels: [],
    dueDate: '',
    attachmentCoverId: '',
    memberIds: [],
    attachments: [],
    subscribed: true,
    checklists: [],
    activities: [],
  });
}
export default CardModel;
