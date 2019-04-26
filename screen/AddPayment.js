import React, { Component } from 'react';
import {Alert,Platform,
  StyleSheet,ImageBackground, 
  Text, 
  View,Image,TouchableOpacity,TextInput,ScrollView
} from 'react-native';
 
 
import {Ionicons}  from "@expo/vector-icons"
import SwitchToggle from 'react-native-switch-toggle';
import {LinearGradient} from  'expo';
import {widthPercentageToDP as wp, heightPercentageToDP as hp} from 'react-native-responsive-screen';

//https://expo.github.io/vector-icons/
 
export default class AddPayment extends Component {

    static navigationOptions = {
        header: null ,
    };
  
    tarjetas= this.props.navigation.getParam('datos');

  constructor(props) {
    super(props);
  
    this.state = {
        nombre:this.tarjetas.nombreCli,
        NumCard:this.tarjetas.NumCard,
        ValiDate:this.tarjetas.ValiDate,
        CVV:this.tarjetas.CVV
    
     }
}


  
  render() {

    

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
        marginTop:hp('2.5%'),
       marginHorizontal:wp('6%'),
    
   }}>Add credit card</Text>
      
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

           <ScrollView showsVerticalScrollIndicator={false}
            style={{flex:1,marginHorizontal:'4%'}}>
           
             <View style={{alignItems: 'center',justifyContent: 'center',
                        paddingTop:hp('4%'),paddingBottom: hp('1%'),}}>
                 <View style={{   flexDirection:'row', borderWidth: 1,borderColor: '#e2e7ee',  padding:hp('1%'),
                 borderRadius:hp('7.5%'),    width:wp('83%')}}>
     
                     <View style={{flex:2 ,alignItems:'center',justifyContent:'center'}}>
             
                     <Image source={require('../assets/iconos/carprofile.png')} 
                                       style={{width:wp('10%'),height:hp('5%')}}  />
                     </View>  
                     <View style={{flex:8, marginLeft:wp('1.5%'),}}>
                          <Text   style={{ 
                           color:'#787993',fontSize:hp('1.8%'), fontWeight:'300'
                         }}>Full Name</Text>
                           <TextInput
              
                                     underlineColorAndroid="transparent"
                                     placeholder="enter your name"
                                     placeholderTextColor="#e2e7ee"
                                      onChangeText={(nombre) => this.setState({nombre})}
                                      value={this.state.nombre}
                                      textAlignVertical='top'
                               />
          
                     </View>
                  </View>
                </View>

                <View style={{alignItems: 'center',  
             justifyContent: 'center',paddingVertical:hp('1%'),}}>
                 <View style={{   flexDirection:'row', borderWidth: 1,borderColor: '#e2e7ee',  padding:hp('1%'),
                 borderRadius:hp('7.5%'),    width:wp('83%')}}>
     
                     <View style={{flex:2 ,alignItems:'center',justifyContent:'center'}}>
             
                     <Image source={require('../assets/iconos/mastercard.png')} 
                                      style={{width:wp('10%'),height:hp('5%')}}  />
                     </View>  
                     <View style={{flex:8, marginLeft:wp('1.5%'),}}>
                          <Text   style={{ 
                           color:'#787993',fontSize:hp('1.8%'), fontWeight:'300'
                         }}>Credit car Number</Text>
                           <TextInput
              
                                     underlineColorAndroid="transparent"
                                     onChangeText={(NumCard) => this.setState({NumCard})}
                                      value={this.state.NumCard}
                                      textAlignVertical='top'
                                      keyboardType='numeric'
                               />
          
                     </View>
                  </View>
                </View>


            <View style={{ paddingVertical: '2%', flexDirection:"row"}}>
            <View style={{ flex:4,}}>
                <View style={{ borderWidth: 1,borderColor: '#e2e7ee',  padding:hp('1.5%'),
                           borderRadius:hp('7.5%'), }}>
     
                      
                     <View style={{paddingLeft:wp('5%')}}>
                          <Text   style={{ 
                           color:'#787993',fontSize:hp('1.8%'), fontWeight:'300'
                         }}>Valid Date</Text>
                           <TextInput
              
                                     underlineColorAndroid="transparent"
                                     onChangeText={(ValiDate) => this.setState({ValiDate})}
                                      value={this.state.ValiDate}
                                      keyboardType='numeric'
                                    
                               />
          
                     </View>
                  </View>
               </View>

                  <View style={{ flex:6,}}>
                        <View style={{paddingLeft:wp('5%'),borderWidth: 1,borderColor: '#e2e7ee',  padding:hp('1.5%'),
                           borderRadius:hp('7.5%'), width:wp('35%'),marginLeft:wp('5%')}}>
                          <Text   style={{ 
                           color:'#787993',fontSize:hp('1.8%'), fontWeight:'300'
                         }}>CVV</Text>
                           <TextInput
              
                                     underlineColorAndroid="transparent"
                                     onChangeText={(CVV) => this.setState({CVV})}
                                      value={this.state.CVV}
                                      keyboardType='numeric'
                                  
                               />
          
                     </View>
                  </View>
                 
           </View>

 
                <View style={{ 
                  paddingTop:'4%',paddingBottom:'10%'
                }}>
                  <View style={{flexDirection:'row'}}>
                          
                        <View style={{flex:1.5}}>
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

                         <Text style={{
                           flex:8.5,marginLeft:'3%',
                           color:'#25265e',fontSize:hp('2.1%'), fontWeight:'500'
                         }}>Default Payment Method</Text>
                  </View>
                </View>
        
               {/*---boton final-- */}
             

                             <View style={{alignItems:'center',marginTop:hp('10%')}}>
                     <TouchableOpacity 
                                 style={{width:wp('75%')}}
                                 onPress={() =>this.props.navigation.navigate("paymentMethod") }
                                   >  
                                <LinearGradient colors={['#6c30cc','#2d7cf7']}
                                  style={{ 
                                      borderRadius:wp('7%'),alignItems: 'center',
                                        padding:hp('2%')}}
                                         start={[0.1,0.1]}
                                          end={[0.6,0.6]}
                                           ><Text style={{
                                               color:'white',fontSize:hp('2.7%')
                                          }}>Save Changes</Text>
                               </LinearGradient>
                             </TouchableOpacity>
                             </View>



 

                             <View style={{  marginTop:hp('2.5%'),
                             alignItems:'center'  }}>   
                                  <Text style={{
                              color:'#fb2f52',fontSize:hp('2.3%') , fontWeight:'500'
                                  }}>Delete payment method</Text>
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