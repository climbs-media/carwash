import React, { Component } from 'react';
import {Alert,Platform,
  StyleSheet,Dimensions,
  Text,ImageBackground,
  View,Image,TouchableOpacity,TextInput,ScrollView
} from 'react-native';
 

import {Ionicons}  from "@expo/vector-icons"
import {LinearGradient} from  'expo';
import {widthPercentageToDP as wp, heightPercentageToDP as hp} from 'react-native-responsive-screen';

//https://expo.github.io/vector-icons/
 
export default class Sendtip extends Component {


    static navigationOptions = {
        header: null ,
    };

    
  constructor(props) {
    super(props);
  
    this.state = {

      uno:'white',
      tres:'#ffe800',
      cinco:'white',
      letra1:'#25265e',
      letra3:'#8b7404',
      letra5:'#25265e',
    }
}


elegiste(num){
 //letra:'#25265e' 
 //letra3:'#8b7404' 
  if(num=='1'){
    this.setState({
      uno:'#ffe800',
      letra1:'#8b7404',
      tres:'white',
      letra3:'#25265e',
      cinco:'white',
      letra5:'#25265e',
    })

  }else  if(num=='3'){
    this.setState({
      uno:'white',
      letra1:'#25265e',
      tres:'#ffe800',
      letra3:'#8b7404',
      cinco:'white',
      letra5:'#25265e',
    })
 
  }else  if(num=='5'){
    this.setState({
      uno:'white',
      letra1:'#25265e',
      tres:'white',
      letra3:'#25265e',
      cinco:'#ffe800',
      letra5:'#8b7404',
    })
  }
  

  
}



  render() {
    
    let screenWidth=Dimensions.get('window').width;
    let screenHeight=Dimensions.get('window').height;

   
    if(screenHeight<=592){
      widthScre='23%';
      widthMone='3%';
    }else if(screenHeight<=678){
      widthScre='25%';
      widthMone='3.5%';
   }else if(screenHeight<=684){
    widthScre='25%';
    widthMone='3.5%';
   }
   else if(screenHeight<=775){
    widthScre='25%';
    widthMone='3.5%';
   }else{
    widthScre='29%';
    widthMone='3.5%';
   }





    return (
    <View style={{flex:1}}>

      <View style={{flex:3,backgroundColor:'#2d7cf7'}}>
      <ImageBackground source={require('../assets/mixto/fondoReal.png')}
             style={{width: '100%', height: '100%'}} >
                 <TouchableOpacity
                 onPress={() => this.props.navigation.pop()} 
                 style={{width:wp('15%'),marginTop:hp('8%'),marginHorizontal: wp('6%'),}} >
                 
                 <Image source={require('../assets/iconos/retrocedeArrow.png')} 
                  style={{ }}
                   />
          
             </TouchableOpacity>
      <Text style={{
      color:'white',
      fontSize: hp('4%'),
      fontWeight:'bold',
       marginTop:hp('3.5%'),
      marginHorizontal:wp('6%'),
    
   }}>Thank you!</Text>
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

           <View style={{marginHorizontal:wp('4%')}}>
                 <View style={{alignItems:'center'}}>
                 <Image source={require('../assets/usuarios/influencer.png')} 
                        style={{ width:wp(widthScre),height:hp('14%'),
                                  borderRadius:hp('6.5%'),marginTop:hp('2%')}}
                        />
                          <Text style={{marginTop:'2%',
                              color:'#25265e' , fontSize:hp('3.2%') , fontWeight:'500'
                          }}>Gregory Smith</Text>
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

                            <Text style={{marginTop:hp('1%'),
                                  color:'#787993' , fontSize:hp('1.8%') , fontWeight:'500'
                            }}>Services requested</Text>
                             <Text style={{
                                  color:'#25265e' , fontSize:hp('2%') , fontWeight:'bold'
                            }}>Complete: Exterior and Interior Wash</Text>

                        {/* grupo de 3 bloques */}
                          <View style={{
                              flexDirection:'row',marginTop:hp('2%')
                          }}>
                                <View style={{
                                    alignItems:'center',paddingRight:wp('7%'),
                                }}>
                                 <Text style={styles.texto1}>Dirty</Text>
                                 <Text style={styles.texto2}>Medium</Text>

                                </View>
                                <View style={{ alignItems:'center',paddingHorizontal:wp('7%'),
                                     borderLeftColor:'#787993',borderLeftWidth:0.5,
                                     borderRightColor:'#787993',borderRightWidth:0.5,
                                }}>
                                   <Text style={styles.texto1}>Price</Text>
                                   <Text style={styles.texto2}>$85.00</Text>
                                    
                                </View>
                                <View  style={{
                                    alignItems:'center',paddingLeft:wp('7%'),
                                }}>
                                     <Text style={styles.texto1}>Time</Text>
                                     <Text style={styles.texto2}>50 min</Text>
                                    
                                </View>
                           </View>

                           <Text style={{marginTop:hp('1.5%'),
                               color:'#25265e' , fontSize:hp('2.4%') , fontWeight:'500'
                           }}>Add tip</Text>
                           <Text style={{
                               color:'#25265e' , fontSize:hp('2.3%') , fontWeight:'300'
                           }}>100% of tips go to Washers</Text>

                           {/* bloque de los 3 circulos */}
   
                           <View style={{
                               flexDirection:'row',marginTop:hp('1.8%')
                           }}>
                                 <TouchableOpacity 
                                 style={{
                                  borderWidth:hp('0.05%'),
                                  borderColor:'#787993', 
                                  alignItems:'center',
                                 paddingVertical: hp('1.5%'),
                                 paddingHorizontal:wp(widthMone),
                                 borderRadius:hp('10%'),
                                 backgroundColor:this.state.uno,
                                marginHorizontal:wp('5%')}}
                                 onPress={() =>this.elegiste('1') }
                                   > 
                                     <Text style={{
                                    color:this.state.letra1 , fontSize:hp('3%'), fontWeight:'500'
                                     }}>$1</Text>
                               </TouchableOpacity>

                                <TouchableOpacity 
                                 style={{ 
                                  borderWidth:hp('0.05%'),
                                  borderColor:'#787993',
                                  alignItems:'center',
                                 paddingVertical: hp('1.5%'),
                                 paddingHorizontal:wp(widthMone),
                                 borderRadius:hp('10%'),
                                 backgroundColor:this.state.tres,
                                marginHorizontal:wp('5%')}}
                                 onPress={() =>this.elegiste('3') }
                                   > 

                                     <Text style={{
                                   color:this.state.letra3, fontSize:hp('3%'), fontWeight:'500'
                                     }}>$3</Text>
                                </TouchableOpacity>

                                <TouchableOpacity 
                                 style={{ 
                                   borderWidth:hp('0.05%'),
                                   borderColor:'#787993',
                                  alignItems:'center',
                                 paddingVertical: hp('1.5%'),
                                 paddingHorizontal:wp(widthMone),
                                 borderRadius:hp('10%'),
                                 backgroundColor:this.state.cinco,
                                marginHorizontal:wp('5%')}}
                                 onPress={() =>this.elegiste('5') }
                                   > 
                                  <Text  style={{
                                      color:this.state.letra5, fontSize:hp('3%'), fontWeight:'500'
                                  }}>$5</Text>
                                 </TouchableOpacity>

                           </View>

                         {/* ----- bloque de mastercard*/}

                         <View style={{
                             flexDirection:'row',alignItems:'center',marginTop:hp('2.5%')
                         }}>
                         
                            <Image source={require('../assets/iconos/mastercard.png')} 
                                        style={{ width:wp('10%'),height:hp('5%'),}}
                                      />
                             <Text style={{
                                flex:3,marginLeft:'3%', color:'#25265e' , fontSize:hp('2.1%'), fontWeight:'500'
                            }}>
                            MasterCard
                            </Text>
                            <Text style={{
                                flex:5,marginLeft:'3%', color:'#25265e' , fontSize:hp('2.1%'), fontWeight:'500'
                            }}>
                           **** **** **** 5967
                            </Text>

                         </View>

                            <TouchableOpacity 
                                 style={{width:wp('75%'),marginTop:hp('1%')}}
                                 onPress={() =>this.props.navigation.navigate("rating") }
                                   >  
                                <LinearGradient colors={['#6c30cc','#2d7cf7']}
                                  style={{ 
                                      borderRadius:wp('7%'),alignItems: 'center',
                                        padding:hp('2%')}}
                                         start={[0.1,0.1]}
                                          end={[0.6,0.6]}
                                           ><Text style={{
                                               color:'white',fontSize:hp('2.7%')
                                          }}>Send tip to washer</Text>
                               </LinearGradient>
                             </TouchableOpacity>

                             <TouchableOpacity 
                                 style={{marginTop:hp('1.3%')}}
                                 onPress={() => this.props.navigation.navigate("sendtip")}
                                   > 
                              <Text style={{
                                   color:'#4554e5',fontSize:hp('2.3%'),fontWeight:'500',fontWeight:'500'
                              }}>Maybe next time</Text>
                            </TouchableOpacity>






                  {/*  view final contenedor de todo */}
                  </View>
                
             </View> 
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
      texto1:{
          color:'#787993',
          fontSize:13,
          fontWeight:'300'

      },
      texto2:{
        color:'#25265e',
        fontSize:13,
        fontWeight:'500'
      }
 
});