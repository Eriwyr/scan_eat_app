import { withNavigation } from 'react-navigation';
import React, {Component} from 'react';
import {
  Text,
  View,
  StyleSheet
} from 'react-native';
import Camera from 'react-native-camera';
import AddIngredientComponent from './addIngredientComponent';

class CreateRecipie extends Component {

    tmpBarcode=0;

    constructor(props) {
        super(props);
        this.state = {
            barcode: ''
        }
    }

    onBarCodeRead = (e) => {
        this.setState({barcode: e.data});
        
        if(this.tmpBarcode != this.state.barcode){
            alert('bite');
            this.tmpBarcode = this.state.barcode;
        }
            
        
    }
    render () {
        return (
            <View  style={styles.container}>
                <AddIngredientComponent/>
                
                {/* <Camera
                    style={styles.preview}
                    onBarCodeRead={this.onBarCodeRead}
                    ref={cam => this.camera = cam}
                    aspect={Camera.constants.Aspect.fill}
                    >
                        <Text style={{
                            backgroundColor: 'white',
                            marginBottom:30,
                        }}>{this.state.barcode}</Text>
                    </Camera> */}
            </View>
        )
    }

}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    flexDirection: 'row',
  },
  preview: {
    flex: 1,
    justifyContent: 'flex-end',
    alignItems: 'center'
  }
});
export default withNavigation(CreateRecipie);
