import FuseUtils from '@fuse/utils';
import _ from '@lodash';

function NoteListItemModel(data) {
  data = data || {};

  return _.defaults(data, {
    id: FuseUtils.generateGUID(),
    content: '',
    completed: false,
  });
}

export default NoteListItemModel;
