import _ from '@lodash';

function LabelModel(data) {
  data = data || {};

  return _.defaults(data, {
    title: '',
    color: '#e75931',
  });
}

export default LabelModel;
