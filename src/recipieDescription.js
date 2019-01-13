import React, {Component} from 'react';
import {SafeAreaView,Image,ScrollView} from 'react-native';
import {Card} from 'react-native-elements';

export default class RecipieDescription extends Component{

    render(){
        const { navigation } = this.props;
        const recipie = navigation.getParam('recipie');
        console.log(recipie.imageURL);
        return(
            <ScrollView contentContainerStyle={{flex:1}}>
                    
                <Image style={{flex:1, height: undefined, width: undefined, backgroundColor: "red"}} source={{uri: recipie.imageURL}} resizeMode="cover"> 
                </Image>
                <Card containerStyle={{flex:2}} title="Ingredients">

                </Card>
                   
                    
            </ScrollView>
        )
    }

}