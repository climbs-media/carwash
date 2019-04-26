import React, { Component } from 'react';
import {Alert,Platform,
  StyleSheet,ImageBackground, 
  Text,Dimensions,
  View,Image,TouchableOpacity,TextInput,ScrollView
} from 'react-native';
 

import {widthPercentageToDP as wp, heightPercentageToDP as hp} from 'react-native-responsive-screen';
import {Ionicons}  from "@expo/vector-icons"
import SwitchToggle from 'react-native-switch-toggle';


//https://expo.github.io/vector-icons/
 
export default class Settings extends Component {

    static navigationOptions = {
        header: null ,
    };
  

  constructor(props) {
    super(props);
  
    this.state = {
     switchNotifi:false,
     switchGeoloca:false,
     }
}


  
  render() {

  //  alert(this.state.switchNotifi)
  let screenWidth=Dimensions.get('window').width;
  let screenHeight=Dimensions.get('window').height;
 
  if(screenHeight<=678){
      wifoto='17%';
     
 }else{
       wifoto='15.5%';
 
 }

 if(screenHeight<=592){
     wifoto='17%';
     heiModel='3.2%'
     heiTip='2%'
   }else if(screenHeight<=678){
     wifoto='17%';
     heiModel='3.2%'
     heiTip='2%'
  }else if(screenHeight<=684){
     wifoto='15.5%';
     heiModel='3.2%'
     heiTip='2%'
  }else if(screenHeight<=775){
     wifoto='17%';
     heiModel='3.2%'
     heiTip='2%'
    }else{
     wifoto='20%';
     heiModel='2.5%'
     heiTip='1.9%'
  }
    
 

    return (


    <View style={{flex:1}}>
 
       <View style={{flex:3,backgroundColor:'#2d7cf7'}}>
       <ImageBackground source={require('../assets/mixto/fondoReal.png')}
       style={{width: '100%', height: '100%'}} >

<TouchableOpacity
                 onPress={() => this.props.navigation.toggleDrawer()} 
                 style={{width:wp('15%'),marginTop:hp('8%'),marginHorizontal: wp('6%'),}} >
        <Image source={require('../assets/iconos/menuIcon.png')} 
                  style={{ }}
                   />
       </TouchableOpacity>

      <Text style={{
       color:'white',
       fontSize: hp('4%'),
       fontWeight:'bold',
        marginTop:hp('3%'),
       marginHorizontal:wp('6%'),
    
   }}>Settings</Text>
      
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

           <View style={{marginHorizontal:'4%'}}>
           
             {/*  bloque  foto coche y marca*/}
             <TouchableOpacity
                  onPress={() => this.props.navigation.navigate("editarDetalleCoche")}
                  style={{flexDirection:'row',marginTop:hp('2%'),borderBottomColor: '#cbcbd6',
                  borderBottomWidth: 0.5,paddingBottom: hp('1.5%'),}}>
           
                <View style={{flex:2 ,alignItems:'center',justifyContent:'flex-end',}}>
                    <Image source={require('../assets/iconos/coche1.png')} 
                                       style={{ width:wp(wifoto),height:hp('9%'),borderRadius:hp('10%')
                                         }}  />
                </View>

                  <View style={{flex:7,marginLeft:wp('5%'),marginBottom:hp('1.5%')}}>
                      <Text style={{
                          color:'#25265e',fontSize:hp(heiModel), fontWeight:'bold',marginTop:hp('1.5%')
                          }}>MINI 3-door Hatch</Text>
                      <Text style={{
                           color:'grey',fontSize:hp(heiTip), fontWeight:'500'
                       }}>BD51 SMR</Text>
                  </View>

                  <View style={{flex:1,alignItems:'center',justifyContent: 'center'  }}>
                         <Image
                           source={require('../assets/iconos/ArrowGrey.png')}
                             style={{marginTop:hp('0.6%')}}
                          />
                  </View>
         </TouchableOpacity>

              {/* bloque notificacion y geolocation */}

              <View style={{ flexDirection:'row' ,marginTop:hp('2%')}}>
                   <View style={{flex:8.5}}>
                        <Text style={{
                        color:'#25265e', fontSize:hp('2.3%'), fontWeight:'500'
                         }}>Receive notifications</Text>
                        <Text style={{
                         color:'#787993', fontSize:hp('1.8%') ,fontWeight:'400'   
                        }}>Approved request ,messages,from{'\n'}
                         washer and promotions</Text>

                   </View>

                   <View style={{
                       flex:1.5,
                       alignItems:'flex-end'
                   }}>
                   
                    <SwitchToggle
                              
                              backgroundColorOn='#4ce5b1'
                              backgroundColorOff='#d7dde6'
                              containerStyle={{
                                   width: wp('11.5%'),
                                   height: hp('3.5%'),
                                   borderRadius: hp('3.75%'),
                                    padding: hp('1%'),
                                   marginTop:hp('1.5%')
                             }}
                              circleStyle={{
                                   width:wp('5%'),
                                   height: hp('2.5%'),
                                   borderRadius: hp('10%'),
                                   backgroundColor: 'yellow', // rgb(102,134,205)
                              }}
                              switchOn={this.state.switchNotifi}
                              onPress={()=>{
                                   this.setState({
                                        switchNotifi:!this.state.switchNotifi,
                                   });
                            
                               

                              }
                              
                              
                            } // funcion 
                              circleColorOff='white'
                              circleColorOn='white'
                              duration={500}
                            />
                     </View>
 
              </View>
              <View style={{ flexDirection:'row' ,marginTop:hp('2%')}}>
                   <View style={{flex:8.5}}>
                        <Text style={{
                         color:'#25265e', fontSize:hp('2.3%'), fontWeight:'500'
                        }}>Allow  geolocation</Text>
                        <Text style={{
                         color:'#787993', fontSize:hp('1.8%'), fontWeight:'400'    
                        }}>tracking the realtime location of your{'\n'}
                         car for request washer now</Text>

                   </View>

                   <View style={{
                       flex:1.5,
                       alignItems:'flex-end'
                   }}>
                   
                    <SwitchToggle
                              
                              backgroundColorOn='#4ce5b1'
                              backgroundColorOff='#d7dde6'
                              containerStyle={{
                                   width: wp('11.5%'),
                                   height: hp('3.5%'),
                                   borderRadius: hp('3.75%'),
                                    padding: hp('1%'),
                                   marginTop:hp('1.5%')
                             }}
                              circleStyle={{
                                   width:wp('5%'),
                                   height: hp('2.5%'),
                                   borderRadius: hp('10%'),
                                   backgroundColor: 'yellow', // rgb(102,134,205)
                              }}
                              switchOn={this.state.switchGeoloca}
                              onPress={()=>{
                                   this.setState({
                                        switchGeoloca:!this.state.switchGeoloca,
                                   });
                            
                               

                              }
                              
                              
                            } // funcion 
                              circleColorOff='white'
                              circleColorOn='white'
                              duration={500}
                            />
                     </View>
              </View>
                
                {/* bloque de iconos  y flecha*/}

                <TouchableOpacity
                  onPress={() => this.props.navigation.navigate("editCarLocation")}
                 style={{flexDirection:'row',marginTop:hp('1.5%'), paddingBottom:hp('1.8%'),
                    borderBottomColor:'#cbcbd6',borderBottomWidth:0.5}} >
                     <View style={{flex:1.5}}>
                          <Image source={require('../assets/iconos/carIcon.png')} 
                                       style={{ width:wp('10%'),height:hp('5%')
                                         }}  />
                     </View>
                     <View style={{ 
                          flex:8, justifyContent:'center'
                     }}>
                     <Text style={{
                           color:'#25265e', fontSize:hp('2.3%'), fontWeight:'400'   
                     }}>Edit Locations</Text>

                     </View>
                   
                     <View style={{flex:0.5,justifyContent:'center'}}>
                          <Image
                           source={require('../assets/iconos/ArrowGrey.png')}
                             style={{marginTop:hp('0.6%')}}
                          />
                     </View>
                
                </TouchableOpacity>


              
                    <TouchableOpacity
                  onPress={() => this.props.navigation.navigate("editProfile")}
                
                   
                     style={{flexDirection:'row',marginTop:hp('1.5%'), paddingBottom:hp('1.8%'),
                     borderBottomColor:'#cbcbd6',borderBottomWidth:0.5}} >
                  
                     <View style={{flex:1.5}}>
                          <Image source={require('../assets/iconos/carprofile.png')} 
                                       style={{ width:wp('10%'),height:hp('5%')

                                         }}  />
                     </View>
                     <View style={{ 
                          flex:8, justifyContent:'center'
                     }}>
                     <Text style={{
                        color:'#25265e', fontSize:hp('2.3%'), fontWeight:'400'  
                     }}>Edit Profile</Text>

                     </View>
                   
                     <View style={{flex:0.5,justifyContent:'center'}}>
                          <Image
                           source={require('../assets/iconos/ArrowGrey.png')}
                           style={{marginTop:hp('0.6%')}}
                          />
                     </View>
                  </TouchableOpacity>





                  <TouchableOpacity
                  onPress={() => this.props.navigation.navigate("paymentMethod")}
                  style={{flexDirection:'row',marginTop:hp('1.5%'), paddingBottom:hp('1.8%'),
                  borderBottomColor:'#cbcbd6',borderBottomWidth:0.5}} >

                     <View style={{flex:1.5}}>
                          <Image source={require('../assets/iconos/carpayment.png')} 
                                   
                           style={{ width:wp('10%'),height:hp('5%')

                                         }}  />
                     </View>
                     <View style={{ 
                          flex:8, justifyContent:'center'
                     }}>
                     <Text style={{
                         color:'#25265e', fontSize:hp('2.3%'), fontWeight:'400'   
                     }}>Payment methods</Text>

                     </View>
                   
                     <View style={{flex:0.5,justifyContent:'center'}}>
                          <Image
                           source={require('../assets/iconos/ArrowGrey.png')}
                            
                          style={{marginTop:hp('0.6%')}}
                          />
                     </View>
              
                </TouchableOpacity>

                 <View
                  style={{flexDirection:'row',marginTop:hp('1.5%'), paddingBottom:hp('1.8%'),
                  borderBottomColor:'#cbcbd6',borderBottomWidth:0.5}} >
                     <View style={{flex:1.5}}>
                          <Image source={require('../assets/iconos/carpassw.png')} 
                                      style={{ width:wp('8%'),height:hp('5%')
                                         }}  />
                     </View>
                     <View style={{ 
                          flex:8, justifyContent:'center'
                     }}>
                     <Text style={{
                        color:'#25265e', fontSize:hp('2.3%'), fontWeight:'400' 
                     }}>Change password</Text>

                     </View>
                   
                     <View style={{flex:0.5,justifyContent:'center'}}>
                          <Image
                           source={require('../assets/iconos/ArrowGrey.png')}
                           style={{marginTop:hp('0.6%')}}
                          />
                     </View>
                 </View>

                 <View 
                   style={{flexDirection:'row',marginTop:hp('1.5%'), paddingBottom:hp('1.8%'),
                    borderBottomColor:'#cbcbd6',borderBottomWidth:0.5}} >
                     <View style={{flex:1.5}}>
                          <Image source={require('../assets/iconos/carlengua.png')} 
                                       style={{ width:wp('10%'),height:hp('5%')
                                         }}  />
                     </View>
                     <View style={{ 
                          flex:8, justifyContent:'center'
                     }}>
                     <Text style={{
                          color:'#25265e', fontSize:hp('2.3%'), fontWeight:'400' 
                     }}>Language App</Text>

                     </View>
                   
                     <View style={{flex:0.5,justifyContent:'center'}}>
                          <Image
                           source={require('../assets/iconos/ArrowGrey.png')}
                           style={{marginTop:hp('0.6%')}}
                          />
                     </View>
                 </View>
                
             </View> 
         </View>
        {/* arriba cierre de view caja de contenido */}
      </View>

   </View>

    );
  }
}

const styles = StyleSheet.create({
   
    
});