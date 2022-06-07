import _ from '@lodash';

const SectionModel = (data) =>
  _.defaults(data || {}, {
    type: 'section',
    title: '',
    notes: '',
    completed: false,
    dueDate: null,
    priority: 0,
    tags: [],
    assignedTo: null,
    subTasks: [],
    order: 0,
  });

export default SectionModel;
