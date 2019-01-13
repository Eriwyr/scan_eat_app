/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 */

import React, {Component} from 'react';
import {Platform, StyleSheet,View,SafeAreaView,ImageBackground,ScrollView} from 'react-native';
import {Button,FormInput} from 'react-native-elements';
import colors from '../theme.js';
import { red } from 'ansi-colors';

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
      this.props.navigation.navigate("recipiesList")
    //  if (this.state.login == "Admin" && this.state.password == "Admin") {
    //    console.log("ok")
    //    this.props.navigation.navigate("Test")
    //    console.log("after")
    //  }
    //  else{
    //    console.log('no')
    //  }
    }
    
  render() {
    return (
      <View style={{flex:1, justifyContent: 'center'}} backgroundColor={colors.backgroundColor}>
        <ImageBackground
        style={{
          backgroundColor: '#ccc',
          flex: 1,
          position: 'absolute',
          width: '100%',
          height: '100%',
          justifyContent: 'center',
        }}
        resizeMode= 'cover'
        source={require('../data/authBackground.jpg')}
        >
          <View style={styles.form}>
            <FormInput containerStyle={styles.containerForm} inputStyle={styles.inputStyle} shake placeholder="Identifiant"  placeholderTextColor={colors.placeholderColor} name='login' onChangeText={(login)=> this.setState({login})}></FormInput> 
            <FormInput secureTextEntry={true} containerStyle={styles.containerForm} inputStyle={styles.inputStyle} shake placeholder="Mot de passe" placeholderTextColor={colors.placeholderColor} name='password' onChangeText={(password) => this.setState({password})}></FormInput>
          </View>
          
          <Button  buttonStyle={{backgroundColor: colors.buttonColor }} large raised icon={{name: 'sign-in', type: 'font-awesome'}} title="Connexion" style={styles.button} onPress={this.checkAuth}>
          </Button>
        </ImageBackground>
      </View>
    );
  }
  

  componentDidMount() {
  }
}

const styles = StyleSheet.create({


  containerForm: {
    borderBottomWidth:2,
    marginBottom:50,
    borderBottomColor:colors.secondaryColor,
  },
  inputStyle: {
     color:'white',
      fontSize:30,
      fontWeight:'bold',
      marginBottom:20
  },
  form: {
    margin:10,
    marginBottom:30,
  },
  
  button:{

  }
});
