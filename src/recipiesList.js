import React, {Component} from 'react';
import {Platform,View,FlatList,StyleSheet,StatusBar,Text} from 'react-native';
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
 
    <View style={styles.container}>
        <FlatList style={styles.list}
          contentContainerStyle={styles.listContainer}
          data={recipie}
          horizontal={false}
          numColumns={2}
          keyExtractor= {(item) => {
            return item.name;
          }}
          renderItem={({item}) => <RecipiesListElement recipie={item}/>}
        />
    </View>
    );
  }

  navigateToCreateRecipie(){
    console.log("ok");
    this.props.navigation.navigate("Auth");
  }

}

const styles = StyleSheet.create({

  container:{
    flex:1,
  },
  list: {
    //paddingHorizontal: 5,
    backgroundColor:colors.backgroundColor,
  },
  listContainer:{
    alignItems:'center'
  },
  /******** card **************/
  card:{
    marginHorizontal:2,
    marginVertical:2,
    flexBasis: '48%',
  },
  cardHeader: {
    paddingVertical: 17,
    paddingHorizontal: 16,
    borderTopLeftRadius: 1,
    borderTopRightRadius: 1,
    flexDirection: 'row',
    alignItems:"center", 
    justifyContent:"center"
  },
  cardContent: {
    paddingVertical: 12.5,
    paddingHorizontal: 16,
  },
  cardFooter:{
    flexDirection: 'row',
    justifyContent: 'space-between',
    paddingTop: 12.5,
    paddingBottom: 25,
    paddingHorizontal: 16,
    borderBottomLeftRadius: 1,
    borderBottomRightRadius: 1,
  },
  cardImage:{
    height: 70,
    width: 70,
    alignSelf:'center'
  },
  title:{
    fontSize:16,
    flex:1,
    color:"#FFFFFF",
    fontWeight:'bold'
  },
  subTitle:{
    fontSize:12,
    flex:1,
    color:"#FFFFFF",
  },
  icon:{
    height: 20,
    width: 20, 
  }
});
