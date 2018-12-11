/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format

 */

import React, {Component} from 'react';
import {Platform, StyleSheet} from 'react-native';
import Navigation from './Navigation'
import colors from '../theme.js';
console.disableYellowBox = true;

const instructions = Platform.select({
  ios: 'Press Cmd+R to reload,\n' + 'Cmd+D or shake for dev menu',
  android:
    'Double tap R on your keyboard to reload,\n' +
    'Shake or press menu button for dev menu',
});

export default class App extends Component {
  
  constructor(props) {
    super(props);
    this.state = {
      currentTheme: colors.getTheme()
    };
  }
  
  changeTheme = () => {
    if(colors.getTheme() === 'redTheme') {
      colors.setTheme('blueTheme');
    } else {
      colors.setTheme('redColor');
    }
    this.setState({currentTheme: colors.getTheme()});
  };
  
  render() {
    return (
        <Navigation/>
    );
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
});

