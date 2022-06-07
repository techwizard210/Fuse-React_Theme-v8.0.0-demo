import _ from '@lodash';

function LabelModel(data) {
  data = data || {};

  return _.defaults(data, {
    title: '',
  });
}

export default LabelModel;
