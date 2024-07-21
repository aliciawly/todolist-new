import React from 'react';
import {styles} from './styles';
import {View, Text, TextInput, TouchableOpacity} from 'react-native';

export const EditAddTaskView = ({
  handleSaveChanges,
  onChangeText,
  task,
  text,
}) => {
  return (
    <View>
      <TextInput
        style={styles.input}
        onChangeText={onChangeText}
        value={task}
        placeholder="Enter task"
        keyboardType="default"
        autoCorrect={true}
      />
      <TouchableOpacity style={styles.onPress} onPress={handleSaveChanges}>
        <Text>{text}</Text>
      </TouchableOpacity>
    </View>
  );
};
