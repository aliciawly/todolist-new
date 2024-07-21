import React, {createContext, useContext, useState} from 'react';

const TodoContext = createContext();

const TodoProvider = ({children}) => {
  const [todos, setTodos] = useState([]);

  // add todo
  const addTodo = newTodo => setTodos([...todos, newTodo]);

  // update to do
  const updateTodos = (editedTask, index) => {
    // console.log(editedTask);
    const newTodos = [...todos];
    newTodos[index] = editedTask;
    setTodos(newTodos);
  };

  // delete to do
  const deleteTodo = item => setTodos(todos.filter(todo => todo !== item));

  return (
    <TodoContext.Provider value={{todos, addTodo, updateTodos, deleteTodo}}>
      {children}
    </TodoContext.Provider>
  );
};

const useTodo = () => useContext(TodoContext);

export {TodoProvider, useTodo};
