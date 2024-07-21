import React from 'react';
import {styles} from './styles';
import {
  Animated,
  View,
  SafeAreaView,
  Text,
  FlatList,
  Pressable,
  TouchableOpacity,
  Image,
} from 'react-native';
import {Swipeable, BaseButton} from 'react-native-gesture-handler';
import AddIcon from '../assets/plus.png';

export const HomeScreenView = ({onPress, onDelete, onButton, todos}) => {
  const renderRightActions = (dragX, index, item) => {
    const trans = dragX.interpolate({
      inputRange: [0, 70],
      outputRange: [0, 65],
      extrapolate: 'clamp',
    });
    return (
      <Pressable onPress={() => onDelete(item)} style={styles.rightAction}>
        <Animated.View style={{transform: [{translateX: trans}]}}>
          <Text style={styles.actionText}>Delete</Text>
        </Animated.View>
      </Pressable>
    );
  };

  const renderItem = ({item, index}) => {
    // console.log(item.task)
    return (
      <Swipeable
        renderRightActions={dragX => renderRightActions(dragX, index, item)}
        leftThreshold={80}>
        <BaseButton onPress={() => onButton(item, index)}>
          <View style={styles.item}>
            <View style={styles.itemLeft}>
              <View style={styles.square} />
              <Text>{item.task}</Text>
            </View>
          </View>
        </BaseButton>
      </Swipeable>
    );
  };

  return (
    <SafeAreaView>
      <View>
        <FlatList
          data={todos}
          renderItem={renderItem}
          keyExtractor={item => item.id}
        />
      </View>
      <View style={styles.container}>
        <TouchableOpacity style={styles.onPress} onPress={onPress}>
          {/*<Text style={styles.textSize}>*/}
          <Image source={AddIcon} style={styles.icon} />
          {/*  {title}*/}
          {/*</Text>*/}
        </TouchableOpacity>
      </View>
    </SafeAreaView>
  );
};
