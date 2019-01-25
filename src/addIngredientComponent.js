import React, {Component} from 'react';
import {StyleSheet,View,TouchableHighlight,CameraRoll,ScrollView} from 'react-native';
import { Button,Card } from 'react-native-elements';
import ViewPhotos from './ViewPhotos';
import DynamicList from './dynamicIngredientList';

class addIngredientComponent extends Component{

    state = {
        showPhotoGallery: false,
        photoArray: []
      }

      getPhotosFromGallery() {
        CameraRoll.getPhotos({ first: 1000000 })
          .then(res => {
            let photoArray = res.edges;
            this.setState({ showPhotoGallery: true, photoArray: photoArray })
          })
      }

      render() {
        if (this.state.showPhotoGallery) {
          return (
            <ViewPhotos
              photoArray={this.state.photoArray} />
          )
        }
        return (
            <DynamicList></DynamicList>
            // <ScrollView contentContainerStyle={{flex:1}}>
            //     <TouchableHighlight>
            //         <Button onPress={() => this.getPhotosFromGallery()}> TEST</Button>
            //     </TouchableHighlight>
                
            //     <Card containerStyle={{flex:2}} title="Ingredients">
                    
            //     </Card>
            // </ScrollView>
        );
      }
    }
    
    const styles = StyleSheet.create({
      container: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center'
      }
    });

export default addIngredientComponent;
