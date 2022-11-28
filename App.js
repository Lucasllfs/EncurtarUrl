import React, { Component } from 'react'
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';

import Home from './src/pages/Home'
import Result from './src/pages/Result';

const Stack = createNativeStackNavigator();

export default class App extends Component {

  render() {

    return (
      <NavigationContainer>
        <Stack.Navigator  initialRouteName="Home">

          <Stack.Screen name="Home" component={Home}
            options={{
              title: 'Url🤏',
              headerStyle: {
                backgroundColor: '#181818',
              },
              headerTintColor: '#fff',
              headerTitleStyle: {
                fontWeight: '900',
                fontSize: 30
              }
            }}
          />

          <Stack.Screen name="Result" component={Result}
            options={{
              title: '',
              headerStyle: {
                backgroundColor: '#181818',
              },
              headerTintColor: '#fff',
              headerTitleStyle: {
                fontWeight: 'bold',
              }
            }}
          />

        </Stack.Navigator>
      </NavigationContainer>
      
    )
  }
}

