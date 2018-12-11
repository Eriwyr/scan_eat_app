import { createStackNavigator, createAppContainer } from 'react-navigation'
import Auth from './auth';
import Test from './Test';

const AuthStackNavigator = createStackNavigator({
  Auth: { // Ici j'ai appelé la vue "Search" mais on peut mettre ce que l'on veut. C'est le nom qu'on utilisera pour appeler cette vue
    screen: Auth,
    navigationOptions: {
      title: 'Authentification'
    }
  },

  Test: { // Ici j'ai appelé la vue "Search" mais on peut mettre ce que l'on veut. C'est le nom qu'on utilisera pour appeler cette vue
    screen: Test,
    navigationOptions: {
      title: 'Test'
    }
  }
})

const App = createAppContainer(AuthStackNavigator);

export default App;