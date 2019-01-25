import { createStackNavigator, createAppContainer } from 'react-navigation'
import Auth from './auth';
import recipiesList from './recipiesList';
import RecipieDescription from './recipieDescription';
import colors from '../theme.js';
import CreateRecipie from './createRecipie';

const AuthStackNavigator = createStackNavigator({
  Auth: {
    screen: Auth,
    navigationOptions: {
        header:null,
    }
  },

  recipiesList: {
    screen: recipiesList,
    navigationOptions: {
      headerStyle: {
        backgroundColor: colors.backgroundColor,
        height: 56,
        elevation: null
      },
      
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
  },

  CreateRecipie: {
    screen: CreateRecipie,
    navigationOptions: {
      title: 'Nouvelle recette',
      headerStyle: {
        backgroundColor: colors.backgroundColor,
        height: 56,
        elevation: null
      }
    }
  },
  
});

const App = createAppContainer(AuthStackNavigator);

export default App;