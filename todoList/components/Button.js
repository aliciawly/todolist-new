import React from 'react';
import {TouchableOpacity, Text} from 'react-native';
export const Button = ({onPress, title, style}) => {
  return (
    <TouchableOpacity
      style={{
        borderRadius: 10,
        backgroundColor: 'grey',
        margin: 20,
        alignItems: 'center',
        padding: 10,
        ...style,
      }}
      onPress={onPress}>
      <Text>{title}</Text>
    </TouchableOpacity>
  );
};
