import React from 'react';
import {StyleSheet,View} from 'react-native';

import {ListItem} from 'react-native-elements';
import colors from '../theme.js';
import { withNavigation } from 'react-navigation';

class RecipiesListElement extends React.Component{
    constructor(props){
        super(props);
        this.navigateToDescription = this.navigateToDescription.bind(this);

    }
    render(){
        const recipie = this.props.recipie
        return(
            <View>
                <ListItem containerStyle ={styles.itemStyle} rightIcon={{style: {color:colors.secondaryColor} }} onPress={this.navigateToDescription}
                    roundAvatar
                    title={recipie.name}
                    avatar={{uri:recipie.imageURL}}
                />
            </View>    
        )
    }

    navigateToDescription(){
        this.props.navigation.navigate("RecipieDescription",{recipie: this.props.recipie});
    }
}

const styles = StyleSheet.create({
    itemStyle: {
        borderBottomWidth:0,
        borderBottomColor:colors.secondaryColor,
        backgroundColor: colors.backgroundColor,
        paddingBottom:30
        
      }
})
export default withNavigation(RecipiesListElement);

