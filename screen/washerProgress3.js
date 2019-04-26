import React, { Component } from 'react';
import {Alert,Platform,
  StyleSheet,TouchableWithoutFeedback,Keyboard,
  Text,KeyboardAvoidingView,ImageBackground,
  View,Image,TouchableOpacity,TextInput,ScrollView
} from 'react-native';
 

import {Ionicons}  from "@expo/vector-icons"
import {LinearGradient} from  'expo';
import {widthPercentageToDP as wp, heightPercentageToDP as hp} from 'react-native-responsive-screen';

//https://expo.github.io/vector-icons/
 
export default class WasherProgress3 extends Component {


    static navigationOptions = {
        header: null ,
    };

    
  constructor(props) {
    super(props);
  
    this.state = {
        precio:25,
        time:50,
    }
}

  render() {
    return (
     
    <View  style={{flex:1}}>
       <TouchableWithoutFeedback onPress={Keyboard.dismiss} accessible={false}>
      <View style={{flex:3}}>
      
      <ImageBackground source={require('../assets/mixto/fondoVerde.png')}
    style={{width: '100%', height: '100%'}} >
    <TouchableOpacity
                 onPress={() => this.props.navigation.pop()} 
                 style={{width:wp('15%'),marginTop:hp('8%'),marginHorizontal: wp('6%')}} >
                 
                 <Image source={require('../assets/iconos/retrocedeArrow.png')} 
                  style={{ }}
                   />
          
    </TouchableOpacity>
    
      <Text style={{
      color:'white',
      fontSize: hp('4%'),
      fontWeight:'bold',
       marginTop:hp('4%'),
      marginHorizontal:wp('6%'),
   }}>Take photos of the car</Text>
      </ImageBackground>
    
      </View>
      </TouchableWithoutFeedback>
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

         
           <ScrollView showsVerticalScrollIndicator={false} style={{marginHorizontal:'4%'}}>
            
                     <Text style={{
                       color:'#25265e',fontSize:hp('2.5%'), fontWeight:'bold',
                        marginTop:'8%'
                        }}>Exterior photos</Text>
                     <Text style={{
                          color:'#787993',fontSize:hp('1.8%'), fontWeight:'500'
                         }}>You can upload image later</Text>
                  
         <View style={{flexDirection:'row', marginTop:hp('1.5%')}}>
              
           <View style={{ 
                   borderColor:'#e2e7ee',borderWidth:0.5
                 ,borderRadius:10,
                alignItems:'center'
              }}>

              <Image source={require('../assets/iconos/coche3.png')} 
                    style={{ width:wp('25%'),height:hp('13%'),borderRadius:10 }} />

                 <Image source={require('../assets/iconos/camara.png')} 
                    style={{ position:'absolute',bottom:hp('1%'),right:hp('1%'),
                        width:wp('9%'),height:hp('5%'),borderRadius:20 }} />
            </View>
            <View style={{
                borderColor:'#e2e7ee',borderWidth:0.5,
               borderRadius:10,
               marginHorizontal:'5%', alignItems:'center'
             }}>
         
              <Image source={require('../assets/iconos/coche1.png')} 
                      style={{ width:wp('25%'),height:hp('13%'),borderRadius:10 }} />
             
             <Image source={require('../assets/iconos/camara.png')} 
                    style={{ position:'absolute',bottom:hp('1%'),right:hp('1%'),
                        width:wp('9%'),height:hp('5%'),borderRadius:20 }} />
           </View>

           <View style={{
                  borderColor:'#e2e7ee',borderWidth:0.5,
                 borderRadius:10,
                  alignItems:'center'
             }}>
             <Image source={require('../assets/iconos/coche2.png')} 
                      style={{ width:wp('25%'),height:hp('13%'),borderRadius:10 }} />
               <Image source={require('../assets/iconos/camara.png')} 
                    style={{ position:'absolute',bottom:hp('1%'),right:hp('1%'),
                        width:wp('9%'),height:hp('5%'),borderRadius:20 }} />
           </View>
  
       </View> 
       {/*finaliza el row de las imagenes*/}

       <Text style={{
            color:'#25265e',fontSize:17, fontWeight:'bold',
             marginTop:'5%'
        }}>Interior photos</Text>
      <Text style={{
            color:'#787993',fontSize:13, fontWeight:'500'
        }}>You can upload image later</Text>

          <View style={{flexDirection:'row', marginTop: 10}}>
           
          <View style={{ 
                   borderColor:'#e2e7ee',borderWidth:0.5
                 ,borderRadius:10,
                alignItems:'center'
              }}>

              <Image source={require('../assets/iconos/coche4.png')} 
                    style={{ width:wp('25%'),height:hp('13%'),borderRadius:10 }} />
                 <Image source={require('../assets/iconos/camara.png')} 
                    style={{ position:'absolute',bottom:hp('1%'),right:hp('1%'),
                        width:wp('9%'),height:hp('5%'),borderRadius:20 }} />
                
            </View>
            <View style={{
                borderColor:'#e2e7ee',borderWidth:0.5,
               borderRadius:10,
               marginHorizontal:'5%', alignItems:'center'
             }}>
         
              <Image source={require('../assets/iconos/coche5.png')} 
                      style={{ width:wp('25%'),height:hp('13%'),borderRadius:10 }} />
                     <Image source={require('../assets/iconos/camara.png')} 
                    style={{ position:'absolute',bottom:hp('1%'),right:hp('1%'),
                        width:wp('9%'),height:hp('5%'),borderRadius:20 }} />
             
           </View>


            <View style={{ paddingVertical:hp('0.8%'),
                   borderColor:'#e2e7ee',borderWidth:0.5,
                   paddingHorizontal:wp('2.5%'),borderRadius:10,
                alignItems:'center'
              }}>

            
                  <Image source={require('../assets/iconos/detailCars.png')} 
                    style={{ width:wp('20%'),height:hp('7.5%') }} />
 
               <Text style={{
                 marginTop:hp('1%'),color:'#787993',fontSize:hp('1.8%')
               }}>Details</Text>
            </View>
 
        </View>
             <View style={{marginTop:hp('2%') ,alignItems:'center'}}>

                 <Text style={{
                              color:'#787993' , fontSize:hp('1.8%') , fontWeight:'500'
                               }}>Services requested</Text>
                              <Text style={{marginTop:'1%',marginBottom:'2%',
                              color:'#25265e' , fontSize:hp('2%') , fontWeight:'500'
                               }}>Complete: Exterior and Interior Wash</Text>
                               <View  style={{
                                   flexDirection:'row'
                               }}>
                                    <View style={{
                                       
                                        paddingRight: '10%',
                                        alignItems:"center"
                                    }}>
                                        <Text style={styles.texto}>Estimate Price</Text>
                                        <Text style={styles.texto2}>${this.state.precio}.00</Text>
                                    </View>
                                    <View  style={{
                                        borderLeftColor:787993, 
                                        borderLeftWidth: 0.5,  
                                        paddingLeft: '10%',
                                        alignItems:"center"
                                    }}>
                                          <Text style={styles.texto}>Estimate Time</Text> 
                                          <Text style={styles.texto2}>{this.state.time} min</Text> 
                                    </View>

                               </View>

                   </View>




         <View style={{alignItems:'center',justifyContent:'center',marginTop:hp('2.5%')  }}>
               <TouchableOpacity 
            style={{width:'90%'}}
            onPress={() => this.props.navigation.navigate("washerProgress5")}
            >  
             <LinearGradient colors={['#6c30cc','#2d7cf7']}
                        style={{ 
                              borderRadius:50,alignItems: 'center',
                            padding:'5.5%'}}
                         start={[0.1,0.1]}
                         end={[0.5,0.5]}
                         ><Text style={{
                           color:'white',fontSize:hp('2.3%')
                         }}>I agreed with price and time</Text>
            </LinearGradient>
            </TouchableOpacity>

            <TouchableOpacity 
           
            onPress={() => this.props.navigation.navigate("washerProgress4")}
            >  
            <Text style={{marginTop:hp('1.2%'),
           color:'#4554e5',fontSize:hp('2%'),fontWeight:'500'
            }}>
                Send new estimation
            </Text>
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
    
    texto:{
        color:'#787993',fontSize:hp('1.8%') ,fontWeight:'500'
     },
     texto2:{
          
        color:'#25265e',fontSize:hp('2%') ,fontWeight:'500'
     },
 
});