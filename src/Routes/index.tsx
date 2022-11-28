import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { NavigationContainer } from '@react-navigation/native';
import React from 'react';
import Icon from 'react-native-vector-icons/FontAwesome';

import Favorites from '../screens/Favorites';
import Home from '../screens/Home';
import Repos from '../screens/Repos';

export default function Routes() {
const {Navigator,Screen} = createBottomTabNavigator();

  return (
    <>
    <NavigationContainer >
      <Navigator
        screenOptions={ 
          ({ route }) => ({
          tabBarIcon: ({ color }) => {
            if (route.name === 'Home' || route.name === 'User' ) {
              return <Icon  name="search" size={24} color={color} />
            }
            if(route.name === 'Favorites'){
              return <Icon  name="heart" size={24} color={color} />
            }
          },
          tabBarActiveTintColor: '#000000 ',
          tabBarInactiveTintColor: '#d2d2d2',
          headerShown:false,
          tabBarLabel:()=>{
            return false
          }
          })}
        >
        <Screen 
         name="Home" component={Home} />

        <Screen 
         name="Favorites" component={Favorites} />

        <Screen 
         name="Repo"
          options={{
            tabBarButton: (props) => null, //like this
          }}
         component={Repos} />

      </Navigator>
    </NavigationContainer>
    </>
  );
}

