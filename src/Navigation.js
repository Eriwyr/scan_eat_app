import React, {Component} from 'react';
import {Button} from 'react-native-elements';
import { createStackNavigator, createAppContainer } from 'react-navigation'
import Auth from './auth';
import recipiesList from './recipiesList';
import colors from '../theme.js';


const AuthStackNavigator = createStackNavigator({
  Auth: { // Ici j'ai appelé la vue "Search" mais on peut mettre ce que l'on veut. C'est le nom qu'on utilisera pour appeler cette vue
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

  recipiesList: { // Ici j'ai appelé la vue "Search" mais on peut mettre ce que l'on veut. C'est le nom qu'on utilisera pour appeler cette vue
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
  }
})

const App = createAppContainer(AuthStackNavigator);

export default App;