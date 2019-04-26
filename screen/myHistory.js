import React, { Component } from 'react';
import {Alert,Platform,
  StyleSheet,ImageBackground, 
  Text,Dimensions,
  View,Image,TouchableOpacity,TextInput,ScrollView
} from 'react-native';
 
import {widthPercentageToDP as wp, heightPercentageToDP as hp} from 'react-native-responsive-screen';
import {Ionicons}  from "@expo/vector-icons"
import {LinearGradient} from  'expo';

//https://expo.github.io/vector-icons/
 
export default class Myhistory extends Component {


    static navigationOptions = {
        header: null ,
    };

    usuarios=[
        {
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
       },
       {
        nombre:'Glenn Pearson',
        foto:require('../assets/usuarios/influencer.png'),
        fecha:'Monday, 11 Feb 2019 - 15:00',
        fotoCoche1:require('../assets/coches/user1/cocheuse1.png'),
        fotoCoche2:require('../assets/coches/user1/cocheuse2.png'),
        fotoCoche3:require('../assets/coches/user1/cocheuse3.png'),
        limpiador:'hernan martinez',
        fotolimpiador:require('../assets/usuarios/limpia_hernan.png'),
        estimatePreci:25,
        estimateTime:50,
        positivo:5
        }
        
    ]

  constructor(props) {
    super(props);
  
    this.state = {
       
    }
}

  render() {
    let screenWidth=Dimensions.get('window').width;
    let screenHeight=Dimensions.get('window').height;
   
  

   if(screenHeight<=592){
    wifoto='15%';
  }else if(screenHeight<=678){
    wifoto='15%';
 }else if(screenHeight<=684){
  wifoto='14%';
 }else if(screenHeight<=775){
  wifoto='15%';
 }else{
  wifoto='17%';
 }
   
   
    return (
    <View style={{flex:1}}>
 
       <View style={{flex:3,backgroundColor:'#2d7cf7'}}>
       <ImageBackground source={require('../assets/mixto/fondoReal.png')}
       style={{width: '100%', height: '100%'}} >

          <TouchableOpacity
                 onPress={() => this.props.navigation.toggleDrawer()} 
                 style={{ width:wp('15%'),marginTop:hp('8%'),marginHorizontal: wp('6%')}} >
             <Image source={require('../assets/iconos/menuIcon.png')} 
                  style={{ }}
                   />
       </TouchableOpacity>

      <Text style={{
       color:'white',
       fontSize: hp('4%'),
       fontWeight:'bold',
        marginTop:hp('4%'),
       marginHorizontal:wp('6%'),
    
   }}>History</Text>
      
      </ImageBackground>
      </View>
   
     <View  style={{flex:7,paddingHorizontal:wp('4%')}}>

           <ScrollView showsVerticalScrollIndicator={false} 
           style={{ flex:1, marginTop:hp('-7.5%'),}}>
           
                {
                     this.usuarios.map((item,i)=> {

                       
                       return (
                        
                        <View key={i} style={{marginTop:hp('2%')}} >
 

                        <View  style={{
                          
                          shadowColor: 'rgba(0, 0, 0, 0.1)',
                         shadowOpacity: 0.8,
                         shadowRadius: 15 ,
                         shadowOffset : { width: 5, height: 60},
                        
                          borderTopRightRadius: hp('3%'),
                         borderTopLeftRadius: hp('3%'),
                         paddingHorizontal:wp('46%'),
                         paddingVertical:hp('10%'),
                         top:hp('0.2%'),
                        position:'absolute',
                      elevation:4,
                        }}  >
                        <Text>{' '}</Text>
                         </View>

                             <View   style={{
                               
                               elevation:4,
                                  backgroundColor:'white',
                                   shadowColor: '#fff',
                                   shadowOpacity: 0.1,
                                  borderTopRightRadius: hp('3%'),
                                 borderTopLeftRadius: hp('3%'),
                                padding:wp('2.5%'),
                                marginTop:hp('1%'),
                                marginHorizontal:wp('0.7%'),
                                 
           
                                }}>


                                  {/* bloque  foto nombre y fecha  */}  
                                  <TouchableOpacity 
                                    onPress={() => this.props.navigation.navigate("myhistoryResume",{datos:item})}
                                       >  
                                      <View style={{flexDirection:'row'}}>
                                      
                                      <View  style={{ flex:2}}>
                                      <Image source={item.foto} 
                                       style={{  width:wp(wifoto),height:hp('8%'),borderRadius:hp('10%')
                                         }}  />
                                      </View>
                                       
                                        <View  style={{
                                            flex:8,justifyContent:'center',paddingLeft:'3%'
                                        }}>
                                          <Text style={{
                                             color:'#25265e',fontSize:hp('2.3%') ,fontWeight:'500' ,
                                          }}>{item.nombre}</Text>
                                          <Text style={{
                                              color:'#787993',fontSize:hp('1.8%')  ,fontWeight:'300' , 
                                            }}>{item.fecha}</Text>
                                       </View>
                                     </View>
                                     </TouchableOpacity>
                                     {/* bloque  datos y foto coche */}
                                     <View style={{flexDirection:'row'}}>
                                         <View style={{flex:6}}>
                                              <Text style={{
                                                color:'#25265e',fontSize:hp('2.3%')  ,fontWeight:'500' ,
                                               }}>Complete Wash :</Text>
                                              <Text style={{
                                                color:'#25265e',fontSize:hp('2.3%') ,fontWeight:'500' ,
                                               }}>Exterior and Interior</Text>
                                               
                                               <View style={{flexDirection:'row'}}>
                                                 
                                                 <View>
                                                 <Text style={{
                                                    color:'#787993',fontSize:hp('1.8%') ,fontWeight:'300' ,   
                                                  }}>Your rate</Text> 
                                                   <Text style={{
                                                    color:'#787993',fontSize:hp('1.8%') ,fontWeight:'300' ,     
                                                }}>Washer rate</Text>    
                                                </View> 
                                                <View>
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
                                         <View style={{flex:4,}}>
                                         <Image source={item.fotoCoche1} 
                                           style={{ width:wp('34%'),height:hp('16%'),
                                                   borderRadius:hp('1.5%')}}  />
                                          <Text style={{
                                              paddingHorizontal:hp('1.2%'),
                                              backgroundColor:'#2d7cf7',
                                              color:'#fff',
                                              position:'absolute',
                                              right:wp('2%'),
                                              bottom:hp('1%'),
                                              borderRadius:hp('1.5%'),
                                          }}>
                                           + {item.positivo}
                                          </Text>
                                         </View>
                                        
                                     </View>
                                    {/* bloeque estimate preci y time */}
                                  <View style={{marginTop:hp('3%'),flexDirection:'row',
                                  paddingHorizontal:wp('10%')
                                  }}>
                                     <View style={{flex:5,alignItems:'center'   }}>
                                         <Text style={{
                                            color:'#787993',fontSize:hp('1.8%') ,fontWeight:'300' ,
                                         }}>Estimate Prici</Text>
                                         <Text style={{
                                            color:'#25265e',fontSize:hp('3%') ,fontWeight:'500' ,  
                                            }}>${item.estimatePreci}.00</Text>
                                     </View>
                                     <View style={{ flex:5,alignItems:'center',
                                             borderLeftColor: 'grey',borderLeftWidth: hp('0.1%'),   }} >
                                         <Text style={{
                                             color:'#787993',fontSize:hp('1.8%')  ,fontWeight:'300' ,
                                            }}>Estimate Time</Text>
                                         <Text style={{
                                              color:'#25265e',fontSize:hp('3%') ,fontWeight:'500' ,  
                                            }}>{item.estimateTime} min</Text>
                                     </View>

                                  </View>
                            </View>
                          </View>
                            )
                          }
                       )
                }



             </ScrollView> 
       
        {/* arriba cierre de view caja de contenido */}
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