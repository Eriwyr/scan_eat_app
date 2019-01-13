import React, {Component} from 'react';
import {Text,View,CameraRoll} from 'react-native';
import { Button } from 'react-native-elements';

class addIngredientComponent extends Component{

    render(){
        return(
            <View>
                <Button onPress={()=> CameraRoll.getPhotos('first')}></Button>
            </View>

        );
    }
}

export default addIngredientComponent;
