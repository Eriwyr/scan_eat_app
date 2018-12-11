import React, {Component} from 'react';
import {Platform,SafeAreaView,FlatList,StyleSheet,StatusBar,Text} from 'react-native';
import { List, ListItem,Avatar,Button} from 'react-native-elements'
import colors from '../theme.js';
import recipie from './recipiesData'


const instructions = Platform.select({
  ios: 'Press Cmd+R to reload,\n' + 'Cmd+D or shake for dev menu',
  android:
    'Double tap R on your keyboard to reload,\n' +
    'Shake or press menu button for dev menu',
});

// const list = [
//   {
//     name: 'Amy Farha',
//     subtitle: 'Vice President'
//   },
//   {
//     name: 'Chris Jackson',
//     avatar_url: 'https://s3.amazonaws.com/uifaces/faces/twitter/adhamdannaway/128.jpg',
//     subtitle: 'Vice Chairman'
//   },
// ]
// export default class recipiesList extends Component {


// renderRow ({ item }) {
//   return (
//     <ListItem
//       avatar={<Avatar
//                 rounded
//                 source={item.avatar_url && {uri: item.avatar_url}}
//                 title={item.name[0]}
//               />}
//       title={item.name}
//       subtitle={item.subtitle}
//     />
//   )
// }

// render () {
//   return (
//     <List>
//       <FlatList
//         data={list}
//         renderItem={this.renderRow}
//         keyExtractor={item => item.name}
//       />
//     </List>
//   )
// }
// }

export default class recipiesList extends Component {
  
  renderRow ({ item }) {
    return (
      <ListItem containerStyle ={styles.itemStyle} rightIcon={{style: {color:colors.secondaryColor} }}

        roundAvatar
        title={item.name}
        avatar={{uri:item.imageURL}}
      />
    )
  }
  
  render() {
    return (
        
      <SafeAreaView style={{flex:1}} backgroundColor={colors.backgroundColor}>
        <List containerStyle={styles.listStyle}>
          <FlatList
            data={recipie}
            renderItem={this.renderRow}
            keyExtractor={(item) => item.name}
          />
        </List>
      </SafeAreaView>
    );
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
