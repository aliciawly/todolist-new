import React from 'react';
import {NavigationContainer} from '@react-navigation/native';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
// import {TodoProvider} from './todoList/todoContext';
import {GestureHandlerRootView} from 'react-native-gesture-handler';
import {HomeScreen, EditAddTaskScreen,test} from './todoList';
import {Provider} from 'react-redux';
import {store} from './todoList/Todo/store';

// initialise stack
const Stack = createNativeStackNavigator();

export default function App() {
  return (
    <Provider store={store}>
      <NavigationContainer>
        <GestureHandlerRootView style={{flex: 1}}>
          {/*<TodoProvider>*/}
          <Stack.Navigator>
            <Stack.Screen name="To-Do List" component={HomeScreen} />
            {/*<Stack.Screen name="To-Do List" component={test} />*/}
            <Stack.Screen name="EditAddTask" component={EditAddTaskScreen} />
            {/* <Stack.Screen name="test" component={test} /> */}
          </Stack.Navigator>
          {/*</TodoProvider>*/}
        </GestureHandlerRootView>
      </NavigationContainer>
     </Provider>
  );
}
