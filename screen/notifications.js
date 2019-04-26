import React, { Component } from 'react';
import {Alert,Platform,
  StyleSheet,ImageBackground, 
  Text,Dimensions,
  View,Image,TouchableOpacity,TextInput,ScrollView
} from 'react-native';
 

import CompoNotifications from "./componentes/compoNotifica"
import {Ionicons}  from "@expo/vector-icons"
import {widthPercentageToDP as wp, heightPercentageToDP as hp} from 'react-native-responsive-screen';
import {LinearGradient} from  'expo';

//https://expo.github.io/vector-icons/
 
export default class Notifications extends Component {


    static navigationOptions = {
        header: null ,
    };
    usuarios=[
        { 
        foto:require('../assets/usuarios/arturo.png'),
        mensajePrincipal:'Your washer is ready',
        mensaje:'Your request is successfully!',
        time:'4h ago'
        },
       {
        foto:require('../assets/usuarios/influencer.png'),
        mensajePrincipal:'Request cancelled',
        mensaje:'Service with Keith Webb is rejected',
        time:'12:30'
        },
        {
           foto:require('../assets/usuarios/limpia_hernan.png'),
            mensajePrincipal:'Your friend is already!',
            mensaje:'Frederick Wood is registrered and you  win 3 points',
            time:'09:20'
            }
    ]

    
  constructor(props) {
    super(props);
  
    this.state = {
       
    }
}

  render() {
    
   
    return (
    <View style={{flex:1}}>
 
       <View style={{flex:3,backgroundColor:'#2d7cf7'}}>
       <ImageBackground source={require('../assets/mixto/fondoReal.png')}
       style={{width: '100%', height: '100%'}} >

          <TouchableOpacity
                 onPress={() => this.props.navigation.toggleDrawer()} 
                 style={{width:wp('15%'),marginTop:hp('8%'),marginHorizontal: wp('6%')}} >
            <Image source={require('../assets/iconos/menuIcon.png')} 
                  style={{ }}
                   />
       </TouchableOpacity>

      <Text style={{
     color:'white',
     fontSize: hp('4%'),
     fontWeight:'bold',
      marginTop:hp('2.5%'),
     marginHorizontal:wp('6%'),
    
   }}>Notifications</Text>
      
      </ImageBackground>
      </View>
   
      <View  style={{
           flex:7,
           backgroundColor:'#F9F9FC', }}>

       
             <View style={{
            flex:1,
            backgroundColor:'white',
             marginTop:hp('-7.5%'),
              marginHorizontal:wp('4%'),
              borderTopStartRadius:hp('3%'),
              borderTopEndRadius:hp('3%'),
           
          }}>

           <ScrollView showsVerticalScrollIndicator={false} style={{marginHorizontal:wp('4%')}}>
           
      
                <View style={{alignItems:'center',marginTop:hp('2%')}}>
                <Text style={{
                   color:'#787993' , fontSize :hp('2%') , fontWeight:'400' 
                 }}>Today, Monday 4 feb 2019</Text>

           
                
                <CompoNotifications  
                foto={this.usuarios[0].foto}
                mensajPrinci={this.usuarios[0].mensajePrincipal}
                time={this.usuarios[0].time}
                mensaj={this.usuarios[0].mensaje}
                  />
            </View>

            <View style={{alignItems:'center',marginTop:hp('2%')}}>
                <Text style={{
               color:'#787993' , fontSize :hp('2%') , fontWeight:'400' 
                 }}>Friday, 1 feb 2019</Text>

           
                
                <CompoNotifications  
                foto={this.usuarios[1].foto}
                mensajPrinci={this.usuarios[1].mensajePrincipal}
                time={this.usuarios[1].time}
                mensaj={this.usuarios[1].mensaje}
                  />

                <CompoNotifications  
                foto={this.usuarios[2].foto}
                mensajPrinci={this.usuarios[2].mensajePrincipal}
                time={this.usuarios[2].time}
                mensaj={this.usuarios[2].mensaje}
                  />
            </View>


             </ScrollView> 
         </View>
        {/* arriba cierre de view caja de contenido */}
      </View>

   </View>

    );
  }
}

const styles = StyleSheet.create({
   
    
});