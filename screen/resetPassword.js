import React, { Component } from 'react';
import {Alert,Platform,
  StyleSheet,ImageBackground,
  Text,TouchableWithoutFeedback,Keyboard,
  View,Image,TouchableOpacity,TextInput
} from 'react-native';
import {widthPercentageToDP as wp, heightPercentageToDP as hp} from 'react-native-responsive-screen';
import {Ionicons}  from "@expo/vector-icons"
import {LinearGradient} from  'expo';

//https://expo.github.io/vector-icons/
 
export default class ResetPasword extends Component {


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

      <TouchableWithoutFeedback onPress={Keyboard.dismiss} accessible={false}>
    <View style={{flex:1}}>

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
   <Text style={{
     color:'white',
     fontSize: hp('4%'),
     fontWeight:'bold',
      marginTop:hp('2.5%'),
     marginHorizontal:wp('6%'),
    
   }}>Reset your password</Text>
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

      <View style={{marginTop:hp('4.5%'),alignItems:'center',justifyContent:'center'}}>
      <Text style={{  color:'#25265e' , fontSize:hp('2.2%')
      }}>Enter your email and we’ll send a link to</Text>
      <Text style={{
       color:'#25265e' , fontSize:hp('2.2%')
      }}>reset your password</Text>
      </View>


       <View style={{   flexDirection:'row', borderWidth: hp('0.2%'),borderColor: '#e2e7ee',  paddingTop:hp('1%'),
        borderRadius:hp('7.5%'), width:wp('85%'),marginTop:hp('5.5%')}}>
     
       <View style={{flex:2 ,alignItems:'center'}}>
       <Ionicons name="md-mail" size={32} color="#e2e7ee" />
         </View>  
         <View style={{flex:8, marginLeft:hp('1.5%'),}}>
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

 <View style={{alignItems:'center',justifyContent:'center',marginTop:hp('5%')}}>
 
             <TouchableOpacity 
                                 style={{width:wp('75%')}}
                                 onPress={() =>this.props.navigation.navigate("login") }
                                   >  
                                <LinearGradient colors={['#6c30cc','#2d7cf7']}
                                  style={{ 
                                      borderRadius:wp('7%'),alignItems: 'center',
                                        padding:hp('2%')}}
                                         start={[0.1,0.1]}
                                         end={[0.6,0.6]}
                                           ><Text style={{
                                               color:'white',fontSize:hp('2.7%')
                                          }}>Reset password</Text>
                               </LinearGradient>
                             </TouchableOpacity>



            <TouchableOpacity 
             onPress={() => this.props.navigation.navigate("signUp1")}
            >  
                        <Text style={{
                               marginTop:hp('5%'),
                               color:'#4554e5',
                               fontSize:hp('2.3%'),
                               fontWeight:'500'
                      }}>Don’t have an account? Sign up</Text>

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