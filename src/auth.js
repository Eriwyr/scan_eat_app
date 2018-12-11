/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 */

import React, {Component} from 'react';
import {Platform, StyleSheet,View} from 'react-native';
import {Button,FormInput} from 'react-native-elements';
import Navigation from './Navigation';

const instructions = Platform.select({
  ios: 'Press Cmd+R to reload,\n' + 'Cmd+D or shake for dev menu',
  android:
    'Double tap R on your keyboard to reload,\n' +
    'Shake or press menu button for dev menu',
});

export default class Auth extends Component{

    constructor(props) {
        super(props)

        this.checkAuth = this.checkAuth.bind(this)

        this.state = {
            login: '',
            password: ''
        }
    }

    
    checkAuth(e) {
     if (this.state.login == "Admin" && this.state.password == "Admin") {
       console.log("ok")
       this.props.navigation.navigate("Test")
       console.log("after")
     }
     else{
       console.log('no')
     }
    }
    
  render() {
    return (
      <View>
        <FormInput placeholder="Identifiant" name='login' onChangeText={(login)=> this.setState({login})}></FormInput> 
        <FormInput placeholder="Mot de passe" name='password' onChangeText={(password) => this.setState({password})}></FormInput>
        <Button large raised icon={{name: 'sign-in', type: 'font-awesome'}} title="Connexion" style={styles.button} onPress={this.checkAuth}>
        </Button>
      </View>
    );
  }

  componentDidMount() {
  }
}

const styles = StyleSheet.create({


  welcome: {
    fontSize: 20,
    textAlign: 'center',
    margin: 10,
  },
  instructions: {
    textAlign: 'center',
    color: '#333333',
    marginBottom: 5,
  },
  header: {
      textAlign:"center",

  },
  logContainer: {
    margin:10,
  },
  
  button:{
      marginTop:10,
  }
});
