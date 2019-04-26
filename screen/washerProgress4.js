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
 
export default class WasherProgress4 extends Component {


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
     
   <KeyboardAvoidingView behavior="padding" style={{flex:1}}>
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
   }}>Send new estimation</Text>
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
                        marginTop:'2.5%'
                        }}>How much is this service?</Text>
                     <Text style={{
                          color:'#787993',fontSize:hp('1.8%'), fontWeight:'500'
                         }}>Price offer is $30.00</Text>
          
          <View style={{alignItems: 'center',}}>
           <View style={{   flexDirection:'row', borderWidth: hp('0.2%'),borderColor: '#e2e7ee',  padding:hp('1%'),
             borderRadius:hp('7%'),
             width:wp('85%'),marginTop:hp('1.5%')}}>
     
             <View style={{ alignItems:'center',paddingHorizontal:wp('21%')  }}>
       
       
              <TextInput
               keyboardType='numeric'
              underlineColorAndroid="transparent"
              placeholder="$ 00.00"
              placeholderTextColor="#e2e7ee"
              style={{ fontSize:hp('5%')}}
               onChangeText={(text) => this.setState({text})}
               value={this.state.text}
               textAlignVertical='top'
              />
          
          
       
     
                 </View>
            </View>
         </View>
          
          
          
          

         <Text style={{
                       color:'#25265e',fontSize:hp('2.5%'), fontWeight:'bold',
                        marginTop:hp('1.5%')
                        }}>How much is this service?</Text>
                     <Text style={{
                          color:'#787993',fontSize:hp('1.8%'), fontWeight:'500'
                         }}>Time estimation is 50 min</Text>
          
          <View style={{alignItems: 'center',}}>
           <View style={{   flexDirection:'row', borderWidth: hp('0.2%'),borderColor: '#e2e7ee',  padding:hp('1%'),
             borderRadius:hp('7%'),
             width:wp('85%'),marginTop:hp('1.5%')}}>
     
             <View style={{ alignItems:'center',paddingHorizontal:wp('26%')  }}>
       
       
              <TextInput
               keyboardType='numeric'
              underlineColorAndroid="transparent"
              placeholder="00:00"
              placeholderTextColor="#e2e7ee"
              style={{ fontSize:hp('5%')}}
               onChangeText={(text2) => this.setState({text2})}
               value={this.state.text2}
               textAlignVertical='top'
              />
          
          
       
     
                 </View>
            </View>
         </View>
          
          
         <Text style={{
                       color:'#25265e',fontSize:hp('2.5%'), fontWeight:'bold',
                        marginTop:hp('1.5%')
                        }}>Additional comments</Text>
                     <Text style={{
                          color:'#787993',fontSize:hp('1.8%'), fontWeight:'500'
                         }}>Why you send an estimation?</Text>


           <View style={{
               borderColor: '#f6f6f6',
               borderWidth: wp('0.4%'),
               padding: Platform.OS === 'ios' ? hp('6%'): hp('1%'),
               borderRadius:hp('1.5%'),
               marginTop:hp('1.5%'),
           }}>
     
                    <TextInput
          
                    underlineColorAndroid="transparent"
                     placeholder="Additional comments..."
                   placeholderTextColor="#787993"
                  numberOfLines={6}
                   multiline={true}
                   onChangeText={(text3) => this.setState({text3})}
                     value={this.state.text3}
                     textAlignVertical='top'
                            />
              </View>



              <View style={{alignItems:'center',justifyContent:'center',marginTop:hp('2%')  }}>
             
            <TouchableOpacity 
                                 style={{width:wp('75%')}}
                                 onPress={() =>this.props.navigation.navigate("") }//me llevaria al chat
                                   >  
                                <LinearGradient colors={['#6c30cc','#2d7cf7']}
                                  style={{ 
                                      borderRadius:wp('7%'),alignItems: 'center',
                                        padding:hp('2%')}}
                                         start={[0.1,0.1]}
                                          end={[0.6,0.6]}
                                           ><Text style={{
                                               color:'white',fontSize:hp('2.7%')
                                          }}>Send job review</Text>
                               </LinearGradient>
                             </TouchableOpacity>


            <Text style={{marginTop:'3%',
           color:'#4554e5',fontSize:hp('2%'),fontWeight:'500'
            }}>Cancel and accept first estimation </Text>
            </View>
          
          
          
             </ScrollView>
          
         </View>
         
      


      </View>

</KeyboardAvoidingView>

 

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