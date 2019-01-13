import React, {Component} from 'react';
import {Platform,SafeAreaView,FlatList,StyleSheet,StatusBar,Text} from 'react-native';
import {List, ListItem,Avatar,Button} from 'react-native-elements'
import colors from '../theme.js';
import recipie from './recipiesData';
import RecipiesListElement from './recipiesListElement.js';


const instructions = Platform.select({
  ios: 'Press Cmd+R to reload,\n' + 'Cmd+D or shake for dev menu',
  android:
    'Double tap R on your keyboard to reload,\n' +
    'Shake or press menu button for dev menu',
});

export default class recipiesList extends Component {

  constructor(props){
    super(props);
    this.navigateToCreateRecipie = this.navigateToCreateRecipie.bind(this);
  }
  static navigationOptions= ({navigation}) => ({
    title:"Recettes",
    headerRight: <Button 
                  icon={{name: 'plus-circle', type: 'font-awesome'}}
                  onPress={() => navigation.navigate("CreateRecipie")}
                  backgroundColor='transparent'
    />   
    });
  
  render(){
    return (
        
      <SafeAreaView style={{flex:1}} backgroundColor={colors.backgroundColor}>
        <List containerStyle={styles.listStyle}>
          <FlatList
            data={recipie}
            renderItem={({item}) => <RecipiesListElement recipie={item}/>}
            keyExtractor={(item) => item.name}
          />
        </List>
      </SafeAreaView>
    );
  }

  navigateToCreateRecipie(){
    console.log("ok");
    this.props.navigation.navigate("Auth");
  }

}

const styles = StyleSheet.create({


  listStyle:{
    borderTopWidth: 0,
    borderColor:colors.secondaryColor,
    borderBottomWidth:0

  },

  itemStyle: {
    borderBottomWidth:0,
    borderBottomColor:colors.secondaryColor,
    backgroundColor: colors.backgroundColor,
    paddingBottom:30
    
  }
});
