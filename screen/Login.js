import React, { Component } from 'react';
import {Alert,Platform,
  StyleSheet,
  Text,ImageBackground,KeyboardAvoidingView,
  View,Image,TouchableOpacity,TextInput,
  TouchableWithoutFeedback,Keyboard
} from 'react-native';
 
import {widthPercentageToDP as wp, heightPercentageToDP as hp} from 'react-native-responsive-screen';
import {Ionicons}  from "@expo/vector-icons"
import {LinearGradient} from  'expo';

//https://expo.github.io/vector-icons/



  /*<TouchableWithoutFeedback  onPress={()=>Keyboard.dismiss}>
    {children}
  </TouchableWithoutFeedback>
*/  
 
export default class Login extends Component {


    static navigationOptions = {
        header: null ,
    };

    
  constructor(props) {
    super(props);
  
    this.state = {
      pass:'',
      text:'',
    }
}

  



  render() {
    return (

<TouchableWithoutFeedback onPress={Keyboard.dismiss} accessible={false}>
 <View style={{flex:1}}>


  <View style={{flex:3}}>
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
   }}>Log In</Text>
   </ImageBackground>
  </View>
  
  <View  style={{
      flex:7,
      backgroundColor:'#F9F9FC',
      
  }}>



  <View style={{
 flex:1,
 backgroundColor:'white',
  marginTop:hp('-7.5%'),
   marginHorizontal:wp('4%'),
    borderTopStartRadius:hp('3%'),
    borderTopEndRadius:hp('3%'),
  }}>


  <View style={{alignItems: 'center', justifyContent: 'center'}}>
         

       <View style={{   flexDirection:'row', borderWidth: hp('0.2%'),borderColor: '#e2e7ee', 
        padding:hp('0.75%'), borderRadius:hp('7.5%'), width:wp('85%'),marginTop:hp('5%')}}>
     
       <View style={{flex:2 ,alignItems:'center'}}>
       <Ionicons name="md-mail" size={32} color="#e2e7ee" />
        </View>  
         <View style={{flex:8, marginLeft:wp('1.5%'),}}>
        <Text   style={{ 
           color:'#787993',fontSize:hp('1.8%'), fontWeight:'300'
       }}>Email Address</Text>
       
       <TextInput
              
              underlineColorAndroid="transparent"
              placeholder="enter your email"
              placeholderTextColor="#e2e7ee"
               onChangeText={(text) => this.setState({text})}
               value={this.state.text}
               textAlignVertical='top'
        />
          
     
       
     
      </View>
   </View>
  
 </View>


 <View style={{alignItems: 'center', justifyContent: 'center'}}>
 <View style={{   flexDirection:'row', borderWidth: hp('0.2%'),borderColor: '#e2e7ee', 
        paddingVertical:hp('1.5%'), borderRadius:hp('7.5%'), width:wp('85%'),marginTop:hp('3%')}}>
     
       <View style={{flex:2,alignItems:'center'}}>
       <Ionicons name="md-unlock" size={32} color="#e2e7ee" />
         </View>  
         <View style={{flex:8, marginLeft:hp('1.5%'),paddingTop:hp('1.2%')}}>
        
           <TextInput
              
              underlineColorAndroid="transparent"
              placeholder="Password"
              placeholderTextColor="#e2e7ee"
               onChangeText={(pass) => this.setState({pass})}
               value={this.state.pass}
               textAlignVertical='top'
               secureTextEntry={true}
        />
      </View>
   </View>
 </View>

   <View style={{alignItems:'center',marginTop:hp('30%')}}>
                     <TouchableOpacity 
                                 style={{width:wp('75%')}}
                                 onPress={() =>this.props.navigation.navigate("requestWasher1") }
                                   >  
                                <LinearGradient colors={['#6c30cc','#2d7cf7']}
                                  style={{ 
                                      borderRadius:wp('7%'),alignItems: 'center',
                                        padding:hp('2%')}}
                                         start={[0.1,0.1]}
                                          end={[0.6,0.6]}
                                           ><Text style={{
                                               color:'white',fontSize:hp('2.7%')
                                          }}>Log In</Text>
                               </LinearGradient>
                             </TouchableOpacity>

                             <TouchableOpacity 
                             onPress={() => this.props.navigation.navigate("resetPasword")}
                                 >  
                             <Text style={{
                               marginTop:hp('5%'),
                               color:'#4554e5',
                               fontSize:hp('2.3%'),
                               fontWeight:'500'
                      }}>Forgot your password? </Text>

                      </TouchableOpacity>
                   </View>





  </View> 
 
  </View>
 
    </View>
 </TouchableWithoutFeedback>
    );
  }
}

 
const styles = StyleSheet.create({
  
 
});

