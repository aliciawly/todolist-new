import {
  createAsyncThunk,
  createEntityAdapter,
  createSlice,
} from '@reduxjs/toolkit';
import uuid from 'react-native-uuid';

// Now you can use uuidv4() to generate UUIDs
const myUUID = uuid.v4();
console.log(myUUID);

const DemoTodoList = [
  {id: uuid.v4(), task: 'Demo Task 1'},
  {id: uuid.v4(), task: 'Demo Task 2'},
  {id: uuid.v4(), task: 'Demo Task 3'},
];

export const todoAdapter = createEntityAdapter({
  selectId: todo => todo.id,
});

export const addTodo = createAsyncThunk(
  'todo/addTodo',
  async () => {
  return null;
});

export const updateTodo = createAsyncThunk('todo/updateTodo', async () => {
  return null;
});

export const fetchDemo = createAsyncThunk('todo/fetchDemo', async () => {
  return DemoTodoList;
  // return null;
});

const todoSlice = createSlice({
  name: 'todos',
  initialState: {
    list: todoAdapter.getInitialState(),
  },
  reducers: {
    // addTodo: (state, {payload}) => {
    //   todoAdapter.addOne(state.list, payload);
    // },
    // updateTodo: (state, {payload}) => {
    //   const {id, task} = payload;
    //   todoAdapter.updateOne(state.list, {
    //     id,
    //     changes: {task},
    //   });
    // },
    deleteTodo: (state, {payload}) => {
      todoAdapter.removeOne(state.list, payload.id);
    },
  },
  extraReducers: builder => {
    builder.addCase(addTodo.fulfilled, (state, {payload, meta}) => {
      // console.log(meta)
      todoAdapter.addOne(state.list, meta.arg);
    });
    builder.addCase(updateTodo.fulfilled, (state, {payload, meta}) => {
      todoAdapter.updateOne(state.list, {
        id: meta.arg.id,
        changes: {...meta.arg},
      });
    });
    builder.addCase(fetchDemo.fulfilled, (state, {payload, meta}) => {
      todoAdapter.addMany(state.list, payload);
    });
  },
});

// const todoSlice = createSlice({
//   name: 'todos',
//   initialState: {value: []},
//   reducers: {
//     addTodo: (state, action) => {
//       state.value = [...state.value, action.payload];
//     },
//     updateTodos: (state, action) => {
//       const {task, index} = action.payload;
//       const newTodos = [...state.value];
//       newTodos[index] = task;
//       state.value = newTodos;
//     },
//     deleteTodo: (state, action) => {
//       state.value = state.value.filter(todo => todo !== action.payload);
//     },
//   },
// });

export const {deleteTodo} = todoSlice.actions;

export default todoSlice.reducer;
