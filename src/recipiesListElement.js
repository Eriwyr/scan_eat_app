import React from 'react';
import {StyleSheet,View,TouchableOpacity,Image,Text,ImageBackground} from 'react-native';
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
            
                <TouchableOpacity style={[styles.card]} onPress={this.navigateToDescription}>
                <ImageBackground style={{ flex:1}} source={{uri:recipie.imageURL}}>

                    <View style={styles.cardHeader}>
                    <Text style={styles.title}>{recipie.name}</Text>
                    </View>
                    <Image></Image>
                    <View style={styles.cardFooter}>
                    </View>

            
                    </ImageBackground>
                </TouchableOpacity>
            
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
        
      },
      container:{
        flex:1,
        marginTop:20,
      },
      list: {
        //paddingHorizontal: 5,
        backgroundColor:"#E6E6E6",
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
        fontSize:18,
        flex:1,
        color:"#FFFFFF",
        fontWeight:"bold",
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
})
export default withNavigation(RecipiesListElement);

