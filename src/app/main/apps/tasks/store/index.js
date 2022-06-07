import { combineReducers } from '@reduxjs/toolkit';
import tags from './tagsSlice';
import tasks from './tasksSlice';
import task from './taskSlice';

const reducer = combineReducers({
  tags,
  tasks,
  task,
});

export default reducer;
