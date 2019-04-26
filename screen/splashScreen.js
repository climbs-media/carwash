import React, { Component } from 'react';
import {Alert,Platform,
  StyleSheet,
  Text,ImageBackground,
  View,Image,TouchableOpacity,
} from 'react-native';
 

import {widthPercentageToDP as wp, heightPercentageToDP as hp} from 'react-native-responsive-screen';
 
export default class SplashScreen extends Component {


    static navigationOptions = {
        header: null ,
    };

    
  constructor(props) {
    super(props);
  
    this.state = {
       
    };
  
  }



  render() {
    return (
     
    <View style={{flex:1}}>
      
    <ImageBackground source={require('../assets/mixto/fondo2.png')}
     style={{flex:1,width: '100%', height: '100%',
           alignItems:'center',justifyContent: 'center',}}>
           <TouchableOpacity 
           style={{alignItems:'center'}}
        onPress={() => this.props.navigation.navigate("onBoarding")}
        > 
        <Text style={{
            color:'#fff',fontSize:hp('8%'),fontWeight:'500'
        }}>CarWash</Text>
        <Text style={{marginTop: '2%',
            color:'#fff',fontSize:hp('2.5%'),fontWeight:'500',letterSpacing:0.38
        }}>The App that cleans your car</Text>
        </TouchableOpacity>
      </ImageBackground>
       
       </View>
   
    );
  }
}

 
const styles = StyleSheet.create({
  
});