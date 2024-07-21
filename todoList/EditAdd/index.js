import React, { useEffect, useState } from "react";
import { EditAddTaskView } from "./component"
import { useRoute } from '@react-navigation/native';
import { useNavigation } from '@react-navigation/native';
import {
  Alert,
} from 'react-native'
import { useDispatch, useSelector } from "react-redux";
import { addManyTodo, addTodo, fetchDemo, updateTodo, upsertManyTodo } from "../Todo";
import uuid from 'react-native-uuid';

export const EditAddTaskScreen = ({navigation,route}) =>{
  const { index, editTaskItem, action } = route.params || {}
  const dispatch = useDispatch();

  const [task, setTask] = useState(editTaskItem || "")
  const isEdit = action === 'Edit'

  // const [count, setCount] = useState(0)

  // useEffect(() => {
  // console.log('edit screen use effect');
  //
  // return () => {
  //   console.log('edit screen leaving');
  // }
  // }, []);

  const handleSaveChanges = () => {
    if (task.trim() !== '') {
      // If editTaskItem is truthy, it means you are in edit mode, and you want to update an existing task.
      // If editTaskItem is falsy, you are in add mode, and you want to add a new task.
      isEdit ? dispatch(updateTodo({id: editTaskItem.id,  task})) : dispatch(addTodo({ task, id: uuid.v4() }))

      // navigate back to the home screen after adding a task
      return navigation.goBack()
    }

    Alert.alert('Please enter a task!', '', [
      { text: 'OK' },
    ])
  }

  const onChangeText = (text) => setTask(text)
  const text = `${isEdit ? 'Edit' : 'Add'} Task`

  const props ={
    handleSaveChanges,
    onChangeText,
    task,
    isEdit,
    text
  }

  return (<EditAddTaskView {...props}/>)

}
