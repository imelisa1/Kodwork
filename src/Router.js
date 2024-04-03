import React from "react";
import { NavigationContainer } from "@react-navigation/native";
import { createStackNavigator } from "@react-navigation/stack";
import Works from "./Pages/Works";
import Detail from "./Pages/Details/Details";
import Favorite from "./Pages/Favorites/Favorites";
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { Provider } from "react-redux";
import { createStore } from "@reduxjs/toolkit";
import reducers from "./Context/reducers";
import store from "./Context/store";

const Stack = createStackNavigator();
const Tab = createBottomTabNavigator();

const StackNavigator = () => {
  return(
    <Stack.Navigator>
        <Stack.Screen name="Works" component={Works} options={{
          headerTitleAlign: 'center',
          headerTintColor: "#D04848",
          headerTitleStyle: { fontSize: 25} 
        }}/>
        <Stack.Screen name="Details" component={Detail} options={{
           headerTitleAlign: 'center',
           headerTintColor: "#D04848",
           headerTitleStyle: { fontSize: 25} 
        }}/>
      </Stack.Navigator>
  )
}

const Router = () => {
  return(
    <Provider store={createStore(reducers,store)}>
      <NavigationContainer>
        <Tab.Navigator>
          <Tab.Screen name="Home" component={StackNavigator} options={{headerShown: false}}/>
          <Tab.Screen name="Favorites" component={Favorite}/>
        </Tab.Navigator>
      </NavigationContainer>
   </Provider>
 
  )
}

export default Router;