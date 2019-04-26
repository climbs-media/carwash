import React, { Component } from 'react';
import {Alert,Platform,
  StyleSheet,Dimensions,
  Text,ImageBackground,TouchableWithoutFeedback,Keyboard,
  View,Image,TouchableOpacity,TextInput,ScrollView
} from 'react-native';
 


import {widthPercentageToDP as wp, heightPercentageToDP as hp} from 'react-native-responsive-screen';

import {Ionicons}  from "@expo/vector-icons"
import {LinearGradient} from  'expo';

//https://expo.github.io/vector-icons/
 
export default class ProductoDetail extends Component {

usuario={
    nombrecoche:'MINI 3-door Hatch',
    fotosExterior:{
        uno:require('../assets/iconos/coche1.png'),
        dos:require('../assets/iconos/coche3.png'),
        tres:require('../assets/iconos/coche2.png'),

               },
    placacoche:'M453 034' ,
    fotosInterior:{
        uno:require('../assets/iconos/coche5.png'),
        dos:require('../assets/iconos/coche4.png'),
        tres:require('../assets/iconos/detailCars.png'),

               },  
                   

 };


    static navigationOptions = {
        header: null ,
    };

    
  constructor(props) {
    super(props);
  
    this.state = {

        text:this.usuario.placacoche,//almacenamos en el state que cambiara de valor
    }
}

  render() {

    producto = this.props.navigation.getParam('datos');
   // alert(producto.tipo)

   let screenWidth=Dimensions.get('window').width;
   let screenHeight=Dimensions.get('window').height;
  
      if(screenHeight<=592){
        fonDetail='2.2%'
        marTop='2.8%'
      }else if(screenHeight<=678){
        fonDetail='2.2%'
        marTop='2.8%'
      }else if(screenHeight<=684){
        fonDetail='2.2%'
        marTop='2.8%'
      }else if(screenHeight<=775){
        fonDetail='2.2%'
        marTop='2.8%'
       }else{
        fonDetail='1.8%'
        marTop='3.9%'
      }
    return (
    <View style={{flex:1}}><TouchableWithoutFeedback onPress={Keyboard.dismiss} accessible={false}>
    <View style={{flex:3,backgroundColor:'#2d7cf7'}}>
    <ImageBackground source={require('../assets/mixto/fondoReal.png')}
    style={{width: '100%', height: '100%'}} >
   <TouchableOpacity
                 onPress={() => this.props.navigation.pop()} 
                 style={{width:wp('15%'),marginTop:hp('8%'),marginHorizontal: wp('6%')}} >
                  <Image source={require('../assets/iconos/retrocedeArrow.png')} 
                  style={{ }}
                   />
    </TouchableOpacity>
    <TouchableOpacity
                 //onPress={() => this.props.navigation.pop()} 
                 style={{position:'absolute',
                      width:wp('10%'),top:hp('8%'),marginHorizontal: wp('6%'),right:wp('-4%')}} >
                  <Image source={require('../assets/iconos/subidaVideos.png')} 
                  style={{ }}
                   />
    </TouchableOpacity>

   <Text style={{
     color:'white',
     fontSize: hp('4%'),
     fontWeight:'bold',
      marginTop:hp('2.5%'),
     marginHorizontal:wp('6%'),
 
}}>Product detail</Text>
   
   </ImageBackground>
   </View>
 </TouchableWithoutFeedback>  
   <View  style={{
   flex:7,
   backgroundColor:'#F9F9FC',}}>

    
    <View style={{
 
 flex:1,
 backgroundColor:'white',
  marginTop:hp('-7.5%'),
   marginHorizontal:wp('4%'),
    borderRadius:hp('3%'),
        
       }}>

        <ScrollView showsVerticalScrollIndicator={false} style={{marginHorizontal:wp('4%')}}>
              <View style={{alignItems:'center',marginTop:hp('1.5%')}}>
               
                   <View style={{ 
                      width:wp('70%'),alignItems:'center'
                   }}>
                    <Text style={{
                      color:'#7b7b93', fontSize:hp('2%'), fontWeight:'500'
                    }}>For {producto.tipo} washes</Text>
                    <Text style={{
                      color:'#25265e', fontSize:hp('3.2%'), fontWeight:'500'
                    }}>{producto.nombre}</Text>
                   </View>

                   <View style={{marginTop:hp('4%'),
                      width:wp('70%'),alignItems:'center'
                   }}>
                    <Image source={producto.foto} 
                    style={{ width:hp('26%'),height:hp('24%')}}
                                      />
                   
                   </View>

              </View>

                    
              <View>
             <Text style={{marginTop:hp('1.5%'),
           color:'#25265e', fontSize:hp('2.5%'), fontWeight:'500',marginBottom:hp('2%')  
        }}>Product description</Text>
    
         <Text style={{
           color:'#25265e', fontSize:hp(fonDetail), fontWeight:'normal'  
         } }>{producto.describe}</Text>


      </View>

      <View style={{alignItems:'center',marginTop:hp(marTop)}}>
                         <TouchableOpacity 
                                 style={{width:wp('75%')}}
                                 onPress={() =>this.props.navigation.navigate("") }
                                   >  
                                <LinearGradient colors={['#6c30cc','#2d7cf7']}
                                  style={{ 
                                      borderRadius:hp('7.5%'),alignItems: 'center',
                                        padding:hp('2.5%')}}
                                         start={[0.1,0.1]}
                                          end={[0.6,0.6]}
                                           ><Text style={{
                                               color:'white',fontSize:hp('2.3%')
                                          }}>Request Product</Text>
                               </LinearGradient>
                             </TouchableOpacity>
                            
                            
                        
                            </View>
            
             
          </ScrollView> 
      
      </View>
    </View>
    </View>

    );
  }
}

 
const styles = StyleSheet.create({
    parrafos:{
        color:'#25265e',
        fontSize:hp('2.1%'),
        marginVertical:('0.4%')
    }
 
});