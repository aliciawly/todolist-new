import React, {useEffect} from 'react';
import {HomeScreenView} from './component';
import {useDispatch, useSelector} from 'react-redux';
import {deleteTodo, fetchDemo, getAllTodo} from '../Todo';

export const HomeScreen = ({navigation}) => {
  const dispatch = useDispatch();
  const todos = useSelector(getAllTodo);

  const onPress = () => navigation.navigate('EditAddTask', {action: 'Add'});

  useEffect(() => {
    // console.log('use effect home screen ');

    dispatch(fetchDemo());

    // return console.log('leaving use effect ');
  }, []);

  const onDelete = ({id}) => {
    // at position index , remove one item
    dispatch(deleteTodo({id}));
  };

  const onButton = (item, index) =>
    navigation.navigate('EditAddTask', {
      editTaskItem: item,
      index,
      action: 'Edit',
    });

  // async () => navigation.navigate('EditAddTask', { editTaskItem: item, index, action: 'Edit' })

  const props = {
    onPress,
    onDelete,
    onButton,
    todos,
  };
  return <HomeScreenView {...props} />;
};
