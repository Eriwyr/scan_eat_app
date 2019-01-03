import React, {Component} from 'react';
import {Button} from 'react-native-elements';
import { createStackNavigator, createAppContainer } from 'react-navigation'
import Auth from './auth';
import recipiesList from './recipiesList';
import RecipieDescription from './recipieDescription';
import colors from '../theme.js';


const AuthStackNavigator = createStackNavigator({
  Auth: {
    screen: Auth,
    navigationOptions: {
      title: 'Scan Eat',
      headerStyle: {
        backgroundColor: colors.backgroundColor,
        height: 56,
        elevation: null
      }
    }
  },

  recipiesList: { // 
    screen: recipiesList,
    navigationOptions: {
      title: 'Recettes',
      headerStyle: {
        backgroundColor: colors.backgroundColor,
        height: 56,
        elevation: null
      },
      headerRight: (
        <Button
        icon={{name: 'plus-circle', type: 'font-awesome'}}
          onPress={() => alert('This is a button!')}
          backgroundColor='transparent'
        />
      ),
      
    }
  },

  RecipieDescription: {
    screen: RecipieDescription,
    navigationOptions: {
      title: 'Description',
      headerStyle: {
        backgroundColor: colors.backgroundColor,
        height: 56,
        elevation: null
      }
    }
  }
})

const App = createAppContainer(AuthStackNavigator);

export default App;