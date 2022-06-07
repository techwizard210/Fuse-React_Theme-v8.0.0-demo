import List from '@mui/material/List';
import NoteFormAddListItem from './NoteFormAddListItem';
import NoteFormListItem from './NoteFormListItem';

function NoteFormList(props) {
  function handleListItemChange(item) {
    props.onCheckListChange(props.tasks.map((_item) => (_item.id === item.id ? item : _item)));
  }

  function handleListItemRemove(id) {
    props.onCheckListChange(props.tasks.filter((_item) => _item.id !== id));
  }

  function handleListItemAdd(item) {
    props.onCheckListChange([...props.tasks, item]);
  }

  if (!props.tasks) {
    return null;
  }

  return (
    <div className={props.className}>
      <List dense>
        {props.tasks.map((item) => (
          <NoteFormListItem
            item={item}
            key={item.id}
            onListItemChange={handleListItemChange}
            onListItemRemove={handleListItemRemove}
          />
        ))}
        <NoteFormAddListItem onListItemAdd={handleListItemAdd} />
      </List>
    </div>
  );
}

export default NoteFormList;
