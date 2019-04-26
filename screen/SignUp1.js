import React, { Component } from 'react';
import {Alert,Platform,
  StyleSheet,TouchableWithoutFeedback,Keyboard,
  Text,KeyboardAvoidingView,ScrollView,
  View,Image,TouchableOpacity,TextInput,ImageBackground ,
} from 'react-native';
 
import {Ionicons}  from "@expo/vector-icons"
import {LinearGradient} from  'expo';
import {widthPercentageToDP as wp, heightPercentageToDP as hp} from 'react-native-responsive-screen';

//https://expo.github.io/vector-icons/
 
export default class SignUp1 extends Component {


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


  <KeyboardAvoidingView behavior="padding" style={{flex:1}}>

 <TouchableWithoutFeedback onPress={Keyboard.dismiss} accessible={false}>
  <View style={{flex:3.5}}>
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
       marginTop:hp('2%'),
       marginHorizontal: wp('6%'),
    
   }}>Welcome to</Text>
     <Text style={{
       color:'white',
       fontSize: hp('4%'),
       fontWeight:'bold',
       marginHorizontal: wp('6%'),
    
   }}>CarWash</Text>
    <Text style={{
       color:'white',
       fontSize: hp('2%'),
       marginHorizontal:wp('6%'),
       marginTop:hp('0.2%'),
      opacity:0.5,
      fontWeight:'500'

   }}>Sign up or Log In with your email</Text>
   </ImageBackground>
  </View>
  </TouchableWithoutFeedback>
  <View  style={{
      flex:6.5,
      backgroundColor:'#F9F9FC',
  }}>


  <View style={{
      flex:1,
  backgroundColor:'white',
      marginTop:hp('-6%'),
      marginHorizontal:wp('4%'),
      borderTopStartRadius:hp('3%'),
      borderTopEndRadius:hp('3%'),
  }}>
 <ScrollView showsVerticalScrollIndicator={false} style={{marginHorizontal:'4%'}}>

  <View style={{alignItems: 'center', justifyContent: 'center'}}>
       <View style={{   flexDirection:'row', borderWidth: hp('0.2%'),borderColor: '#e2e7ee',paddingTop:'1%',
        borderRadius:hp('7.5%%'),
       width:wp('85%'),marginTop:hp('3.5%')}}>
     
       <View style={{flex:2 ,alignItems:'center'}}>
       <Ionicons name="md-mail" size={32} color="#e2e7ee" style={{
          marginTop:hp('0.8%')}}/>
         </View>  
         <View style={{flex:8, marginLeft:wp('4%')}}>
        <Text   style={{ 
           color:'#787993',fontSize:13, fontWeight:'300'
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

 <View style={{alignItems: 'center'}}>
       <View style={{   flexDirection:'row', borderWidth: hp('0.2%'),borderColor: '#e2e7ee',paddingTop:'1%',
        borderRadius:hp('7.5%'),height:hp('8%'),
       width:wp('85%'),marginTop:hp('3.5%')}}>
       <View style={{flex:2,alignItems:'center'}}>
       <Ionicons name="md-unlock" size={32} color="#e2e7ee" />
         </View>  
         <View style={{flex:8, marginLeft:wp('4%'),justifyContent:'center'}}>
    
           <TextInput
                 secureTextEntry={true}
              underlineColorAndroid="transparent"
              placeholder="Choose a Password"
              placeholderTextColor="#e2e7ee"
               onChangeText={(text2) => this.setState({text2})}
               value={this.state.text2}
               textAlignVertical='top'
        />
      </View>
   </View>
 </View>



 <View style={{alignItems: 'center'}}>
       <View style={{   flexDirection:'row', borderWidth: hp('0.2%'),borderColor: '#e2e7ee',paddingTop:'1%',
        borderRadius:hp('7.5%'),height:hp('8%'),
       width:wp('85%'),marginTop:hp('3.5%')}}>
     
       <View style={{flex:2,alignItems:'center'}}>
       <Ionicons name="md-unlock" size={32} color="#e2e7ee" />
         </View>  
         <View style={{flex:8, marginLeft:wp('4%'),justifyContent:'center'}}>
      
           <TextInput
                 secureTextEntry={true}
              underlineColorAndroid="transparent"
              placeholder="Repeat password"
              placeholderTextColor="#e2e7ee"
               onChangeText={(text3) => this.setState({text3})}
               value={this.state.text3}
               textAlignVertical='top'
        />
      </View>
   </View>
   <Text style={{ marginTop:hp('3%'), color: '#787993' 
   ,fontSize:hp('1.8%')}}>By clicking continue, you agree to our </Text> 
   <Text  style={{  color: '#4554e5' 
   ,fontSize:hp('1.8%'),fontWeight:'500'}}>Terms and Conditions </Text>

 </View>

 {/*  ----------------------------------------------------------------------------  */}
      <View style={{alignItems:'center',marginTop:hp('8%')}}>
          

            <TouchableOpacity 
                                 style={{width:wp('75%')}}
                                 onPress={() =>this.props.navigation.navigate("signUp2") }
                                   >  
                                <LinearGradient colors={['#6c30cc','#2d7cf7']}
                                  style={{ 
                                      borderRadius:wp('7%'),alignItems: 'center',
                                        padding:hp('2%')}}
                                         start={[0.1,0.1]}
                                          end={[0.6,0.6]}
                                           ><Text style={{
                                               color:'white',fontSize:hp('2.7%')
                                          }}>Continue</Text>
                               </LinearGradient>
                             </TouchableOpacity>




         </View>
         
           <TouchableOpacity style={{alignItems:'center'}}
             onPress={() => this.props.navigation.navigate("login")}
            >  
                        <Text style={{
                               marginTop:hp('2%'),
                               color:'#4554e5',
                               fontSize:hp('2.3%'),
                               fontWeight:'500'
                      }}>Alredy have an account? Log In</Text>

                </TouchableOpacity>

        </ScrollView>
  </View>

  </View>
  
</KeyboardAvoidingView>

    );
  }
}

 
const styles = StyleSheet.create({
  
 
});