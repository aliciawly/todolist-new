import {createSelector} from '@reduxjs/toolkit';
import {todoAdapter} from './reducer';

// export const getTodosValue = createSelector(
//   state => state.todos.value,
//   value => value,
// );

const {selectAll: selectAllTodo} = todoAdapter.getSelectors(state => state);

export const getAllTodo = createSelector(
  state => state.todos.list,
  list => selectAllTodo(list),
);
