import React, { Component } from 'react';
import {Alert,Platform,
  StyleSheet,ImageBackground,Dimensions,
  Text,
  View,Image,TouchableOpacity,TextInput,ScrollView
} from 'react-native';
 

import Slideshow from 'react-native-image-slider-show';
import {widthPercentageToDP as wp, heightPercentageToDP as hp} from 'react-native-responsive-screen';

//https://expo.github.io/vector-icons/
 
export default class WasherHistoryDetail extends Component {


    static navigationOptions = {
        header: null ,
    };

    
  constructor(props) {
    super(props);
  
    this.state = {

 
    }
}

  render() {
   
    let screenWidth=Dimensions.get('window').width;
    let screenHeight=Dimensions.get('window').height;
     if(this.props.navigation.getParam('datos')){
       //USUARIOS EN BD , viende desde myhistory
         usuario = this.props.navigation.getParam('datos');
     }
     else{

      //SERIA EL USUARIO   ACTUAL , viene desde rating
        usuario=  {
        nombre:'George Smith',
        foto:require('../assets/usuarios/arturo.png'),
        fecha:'Monday, 23 Jan 2019 - 13:20',
        fotoCoche1:require('../assets/coches/user1/cocheuse1.png'),
        fotoCoche2:require('../assets/coches/user1/cocheuse2.png'),
        fotoCoche3:require('../assets/coches/user1/cocheuse3.png'),
        limpiador:'hernan martinez',
        fotolimpiador:require('../assets/usuarios/limpia_hernan.png'),
        estimatePreci:25,
        estimateTime:50,
        positivo:5 //estrellitas
       }
     }
  
     if(screenHeight<=592){
      wilimp='15%'
      wiluser='15%'
      slides=170
    }else if(screenHeight<=678){
      wilimp='15%'
      wiluser='15%'
      slides=170
   }else if(screenHeight<=684){
    wilimp='15%'
    wiluser='15%'
    slides=170
   }else if(screenHeight<=775){
    wilimp='15%'
      wiluser='15%'
      slides=170
   }else{
    wilimp='17%'
      wiluser='17%'
      slides=230
   }
     
    return (
  <View style={{flex:1}}>
       <View style={{flex:3,backgroundColor:'#2d7cf7'}}>
       <ImageBackground source={require('../assets/mixto/fondoReal.png')}
       style={{width: '100%', height: '100%'}} >

          <TouchableOpacity
                  onPress={() =>this.props.navigation.navigate("washerHistory") }
                 style={{width:wp('15%'),marginTop:hp('8%'),marginHorizontal: wp('6%')}} >
                <Image source={require('../assets/iconos/retrocedeArrow.png')} 
                  style={{ }}
                   />
            </TouchableOpacity>

      <Text style={{
      color:'white',
      fontSize: hp('4%'),
      fontWeight:'bold',
       marginTop:hp('2.5%'),
      marginHorizontal:wp('6%'),
    
   }}>Wash Service</Text>
      
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
                   color:'#787993',fontSize:hp('1.8%') , fontWeight:'400'
                 }}>{usuario.fecha}</Text>
                 <Text style={{
                   color:'#25265e',fontSize:hp('1.8%') , fontWeight:'500'
                 }}>Complete Wash : Exterior and Interior</Text>

                     <View style={{marginTop:hp('2%'),flexDirection:'row',
                                  paddingHorizontal:wp('10%')
                                  }}>
                                     <View style={{flex:5,alignItems:'center'   }}>
                                         <Text style={{
                                      color:'#787993',fontSize:hp('1.8%') , fontWeight:'400'
                                         }}>Estimate Prici</Text>
                                         <Text style={{
                                          color:'#25265e',fontSize:hp('3%') , fontWeight:'500'   
                                            }}>${usuario.estimatePreci}.00</Text>
                                     </View>
                                     <View style={{ flex:5,alignItems:'center',
                                             borderLeftColor: 'grey',borderLeftWidth: hp('0.1%'),   }} >
                                         <Text style={{
                                           color:'#787993',fontSize:hp('1.8%') , fontWeight:'400'   
                                            }}>Estimate Time</Text>
                                         <Text style={{
                                          color:'#25265e',fontSize:hp('3%') , fontWeight:'500'   
                                            }}>{usuario.estimateTime} min</Text>
                                     </View>

                                  </View>
                         </View>

                         <View style={{marginTop:hp('2%'),marginHorizontal:wp('2%'),
                               width:'100%', height:hp('20%'),
                                }}>
                                      <Slideshow 
                                      scrollEnabled={false}
                               height={slides}
                 containerStyle={{
                      borderRadius:hp('10%')
                 }}
               dataSource={[
                    { url:usuario.fotoCoche1},
                   { url:usuario.fotoCoche2},
                     { url:usuario.fotoCoche3}
                 ]}/>
                         </View>
                       
                         {/* seccion de comentarios cliente */}
                         <View style={{flexDirection:'row',marginTop:hp('9%')}}>
                                      <View  style={{ flex:2}}>
                                      <Image source={usuario.foto} 
                                       style={{  width:wp(wiluser),height:hp('8%'),borderRadius:hp('10%')
                                         }}  />
                                      </View>
                                        <View  style={{
                                            flex:8,justifyContent:'center',paddingLeft:wp('3%')
                                        }}>
                                          <Text style={{
                                         color:'#25265e',fontSize:hp('2.3%') , fontWeight:'500'    
                                          }}>{usuario.nombre}</Text>
                                           <View style={{flexDirection:'row'}}>
                                           <Text style={{
                                          color:'#787993',fontSize:hp('1.8%') , fontWeight:'400'     
                                            }}>Your rate</Text> 
                                             <View  style={styles.estrellasimagen}>
                                                            <Image source={require('../assets/iconos/starYellow.png')} 
                                                              style={{ width:wp('3%'),height:hp('1.8%')}}
                                                             />
                                                          <Image source={require('../assets/iconos/starYellow.png')} 
                                                             style={{ width:wp('3%'),height:hp('1.8%'),marginLeft:wp('0.4%')}}
                                                            />
                                                         <Image source={require('../assets/iconos/starYellow.png')} 
                                                          style={{ width:wp('3%'),height:hp('1.8%'),marginLeft:wp('0.4%')}}
                                                             />
                                                        <Image source={require('../assets/iconos/starYellow.png')} 
                                                          style={{ width:wp('3%'),height:hp('1.8%'),marginLeft:wp('0.4%')}}
                                                          />
                                                        <Image source={require('../assets/iconos/startGrey.png')} 
                                                         style={{ width:wp('3%'),height:hp('1.8%'),marginLeft:wp('0.4%')}}
                                                          />
                                              </View>
                                           </View>
                                       </View>
                                     </View>
                                     <Text style={{
                                       color:'#25265e',fontSize:hp('2%') , fontWeight:'400'  
                                     }}>
                                         Lorem ipsum dolor sit amet, consectetur adipiscing elit. 
                                     </Text>


                                        {/* seccion de comentarios limpiador*/}
                                  <View style={{flexDirection:'row',marginTop:hp('2.5%')}}>
                                     <View  style={{ flex:2}}>
                                      <Image source={usuario.fotolimpiador} 
                                       style={{  width:wp(wilimp),height:hp('8%'),borderRadius:hp('10%')
                                         }}  />
                                      </View>
                                        <View  style={{
                                            flex:8,justifyContent:'center',paddingLeft:wp('3%')
                                        }}>
                                          <Text style={{
                                          color:'#25265e',fontSize:hp('2.3%') , fontWeight:'500'  
                                          }}>{usuario.limpiador}</Text>
                                           <View style={{flexDirection:'row'}}>
                                           <Text style={{
                                             color:'#787993',fontSize:hp('1.8%') , fontWeight:'400'
                                            }}>Washer rate</Text> 
                                            <View  style={styles.estrellasimagen}>
                                                            <Image source={require('../assets/iconos/starYellow.png')} 
                                                              style={{ width:wp('3%'),height:hp('1.8%')}}
                                                             />
                                                          <Image source={require('../assets/iconos/starYellow.png')} 
                                                              style={{ width:wp('3%'),height:hp('1.8%'),marginLeft:wp('0.4%')}}
                                                            />
                                                         <Image source={require('../assets/iconos/startGrey.png')} 
                                                           style={{ width:wp('3%'),height:hp('1.8%'),marginLeft:wp('0.4%')}}
                                                             />
                                                        <Image source={require('../assets/iconos/startGrey.png')} 
                                                           style={{ width:wp('3%'),height:hp('1.8%'),marginLeft:wp('0.4%')}}
                                                          />
                                                        <Image source={require('../assets/iconos/startGrey.png')} 
                                                          style={{ width:wp('3%'),height:hp('1.8%'),marginLeft:wp('0.4%')}}
                                                          />
                                                     </View>
                                              </View>
                                       </View>
                                     </View>
                                    
                                     <Text style={{
                                       color:'#25265e',fontSize:hp('2%') , fontWeight:'400'  
                                     }}>
                                         Lorem ipsum dolor sit amet, consectetur adipiscing elit. 
                                     </Text>



            </ScrollView> 
         </View>
         
      


      </View>

</View>

    );
  }
}

 
const styles = StyleSheet.create({
    estrellasimagen:{
      padding:hp('0.4%'),
      flexDirection:'row',
      marginLeft:wp('5%')
      },
    
 
});