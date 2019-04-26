import React, { Component } from 'react';
import {Alert,Platform,
  StyleSheet,
  Text,ImageBackground,TouchableWithoutFeedback,Keyboard,
  View,Image,TouchableOpacity,TextInput,ScrollView
} from 'react-native';
 



import {widthPercentageToDP as wp, heightPercentageToDP as hp} from 'react-native-responsive-screen';
import {Ionicons}  from "@expo/vector-icons"
import {LinearGradient} from  'expo';

//https://expo.github.io/vector-icons/
 
export default class CarDetails2 extends Component {


    static navigationOptions = {
        header: null ,
    };

    
  constructor(props) {
    super(props);
  
    this.state = {
    }
}

  render() {
    return (
    <View style={{flex:1}}>
     <TouchableWithoutFeedback onPress={Keyboard.dismiss} accessible={false}>

      <View style={{flex:3}}>
      <ImageBackground source={require('../assets/mixto/semifondo.png')}
    style={{width:'100%', height: '100%'}} >
    <TouchableOpacity
                 onPress={() => this.props.navigation.pop()} 
                 style={{width:wp('15%'),marginTop:hp('8%'),marginHorizontal: wp('6%')}} >
                 
                 <Ionicons name="md-arrow-round-back" size={32} color="white" />
          
    </TouchableOpacity>
    
      <Text style={{
       color:'white',
       fontSize: hp('4%'),
       fontWeight:'bold',
        marginTop:hp('2.5%'),
       marginHorizontal:wp('6%'),
      }}>Your car details</Text>
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
            borderRadius:hp('3%'),
          }}>

           <ScrollView showsVerticalScrollIndicator={false} style={{marginHorizontal:'4%'}}>
           
       
               <Text style={{
              color:'#25265e',fontSize:hp('3.2%'), fontWeight:'bold',marginTop:hp('1.5%')
               }}>MINI 3-door Hatch</Text>
               <Text style={{
                color:'#4554e5',fontSize:hp('2%'), fontWeight:'500'
               }}>Change</Text>
          
             
                  

              <View style={{   flexDirection:'row', borderWidth:hp('0.2%'),borderColor: '#e2e7ee',  padding:hp('1.5%'),
                   borderRadius:hp('7.5%'), width:wp('84%'),marginTop:hp('1.5%')}}>
      
                   <Ionicons name="md-car" size={32} color="#e2e7ee" />
                  <View  style={{marginLeft:wp('4%') }}>
                  <TextInput
              
                   underlineColorAndroid="transparent"
                   placeholder="Enter license plate number"
                    placeholderTextColor="#e2e7ee"
                  onChangeText={(text) => this.setState({text})}
                   value={this.state.text}
                
                     />
                     </View>
                 </View>
         
                   <Text style={{
                       color:'#25265e',fontSize:hp('2.3%'), fontWeight:'bold',
                        marginTop:hp('0.8%')
                        }}>Exterior photos</Text>
                     <Text style={{
                          color:'#787993',fontSize:hp('1.8%'), fontWeight:'500'
                         }}>You can upload image later</Text>
                  
                  <View style={{flexDirection:'row', marginTop:hp('1.5%')}}>
              
              <View style={{ 
                      borderColor:'#e2e7ee',borderWidth:hp('0.1%')
                    ,borderRadius:hp('1.5%'),
                   alignItems:'center'
                 }}>
   
                 <Image source={require('../assets/iconos/coche3.png')} 
                       style={{ width:wp('25%'),height:hp('13%'),borderRadius:hp('1.5%')}} />
   
                    <Image source={require('../assets/iconos/camara.png')} 
                       style={{ position:'absolute',bottom:hp('1%'),right:hp('1%'),
                           width:wp('9%'),height:hp('5%'),borderRadius:hp('3%')}} />
               </View>
               <View style={{
                   borderColor:'#e2e7ee',borderWidth:hp('0.1%'),
                  borderRadius:hp('1.5%'),
                  marginHorizontal:wp('4%'), alignItems:'center'
                }}>
            
                 <Image source={require('../assets/iconos/coche1.png')} 
                         style={{ width:wp('25%'),height:hp('13%'),borderRadius:hp('1.5%') }} />
                
                <Image source={require('../assets/iconos/camara.png')} 
                       style={{ position:'absolute',bottom:hp('1%'),right:hp('1%'),
                           width:wp('9%'),height:hp('5%'),borderRadius:hp('3%')}} />
              </View>
   
              <View style={{
                     borderColor:'#e2e7ee',borderWidth:hp('0.1%'),
                    borderRadius:hp('1.5%'),
                     alignItems:'center'
                }}>
                <Image source={require('../assets/iconos/coche2.png')} 
                         style={{ width:wp('25%'),height:hp('13%'),borderRadius:hp('1.5%')}} />
                  <Image source={require('../assets/iconos/camara.png')} 
                       style={{ position:'absolute',bottom:hp('1%'),right:hp('1%'),
                           width:wp('9%'),height:hp('5%'),borderRadius:hp('3%') }} />
              </View>
     
          </View> 
       {/*finaliza el row de las imagenes*/}

       <Text style={{
            color:'#25265e',fontSize:hp('2.3%'), fontWeight:'bold',
             marginTop:hp('3%')
        }}>Interior photos</Text>
      <Text style={{
            color:'#787993',fontSize:hp('1.8%'), fontWeight:'500'
        }}>You can upload image later</Text>

<View style={{flexDirection:'row', marginTop:hp('1.5%')}}>
           
           <View style={{ 
                    borderColor:'#e2e7ee',borderWidth:hp('0.1%')
                  ,borderRadius:hp('1.5%'),
                 alignItems:'center'
               }}>
 
               <Image source={require('../assets/iconos/coche4.png')} 
                     style={{ width:wp('25%'),height:hp('13%'),borderRadius:hp('1.5%') }} />
                  <Image source={require('../assets/iconos/camara.png')} 
                     style={{ position:'absolute',bottom:hp('1%'),right:hp('1%'),
                         width:wp('9%'),height:hp('5%'),borderRadius:hp('3%') }} />
                 
             </View>
             <View style={{
                 borderColor:'#e2e7ee',borderWidth:hp('0.1%'),
                borderRadius:hp('1.5%'),
                marginHorizontal:wp('4%'), alignItems:'center'
              }}>
          
               <Image source={require('../assets/iconos/coche5.png')} 
                       style={{ width:wp('25%'),height:hp('13%'),borderRadius:hp('1.5%') }} />
                      <Image source={require('../assets/iconos/camara.png')} 
                     style={{ position:'absolute',bottom:hp('1%'),right:hp('1%'),
                         width:wp('9%'),height:hp('5%'),borderRadius:hp('3%')}} />
              
            </View>
 
 
             <View style={{ paddingVertical:hp('0.8%'),
                    borderColor:'#e2e7ee',borderWidth:hp('0.1%'),
                    paddingHorizontal:wp('2.5%'),borderRadius:hp('1.5%'),
                 alignItems:'center'
               }}>
 
             
                   <Image source={require('../assets/iconos/detailCars.png')} 
                     style={{ width:wp('20%'),height:hp('7.5%') }} />
  
                <Text style={{
                  marginTop:hp('1%'),color:'#787993',fontSize:hp('1.8%')
                }}>Details</Text>
             </View>
  
         </View>
        

         <View style={{alignItems:'center'}}>
                     <TouchableOpacity 
                                 style={{width:wp('75%'),marginTop:hp('4%')}}
                                 onPress={() =>this.props.navigation.navigate("carDetailsLocation") }
                                   >  
                                <LinearGradient colors={['#6c30cc','#2d7cf7']}
                                  style={{ 
                                      borderRadius:wp('7%'),alignItems: 'center',
                                        padding:hp('2%')}}
                                         start={[0.1,0.1]}
                                          end={[0.5,0.5]}
                                           ><Text style={{
                                               color:'white',fontSize:hp('2.7%')
                                          }}>Continue</Text>
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
        fontSize:16,
        marginVertical:2
    }
 
});