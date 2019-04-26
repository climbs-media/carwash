import React, { Component } from 'react';
import {Alert,Platform,
  StyleSheet,KeyboardAvoidingView,
  Text,ImageBackground,TouchableWithoutFeedback,
  View,Image,TouchableOpacity,TextInput,Keyboard
} from 'react-native';
 
import {Ionicons}  from "@expo/vector-icons"
import {LinearGradient} from  'expo';
import {widthPercentageToDP as wp, heightPercentageToDP as hp} from 'react-native-responsive-screen';

//https://expo.github.io/vector-icons/
 
export default class SignUp2 extends Component {


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
  <View style={{flex:3}}>
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
   }}>Create your profile</Text>
     
     </ImageBackground>
  </View>
  </TouchableWithoutFeedback>
  <View  style={{
      flex:7,
      backgroundColor:'#F9F9FC',
  }}>

<TouchableWithoutFeedback onPress={Keyboard.dismiss} accessible={false}>
  <View style={{
   flex:1,
   backgroundColor:'white',
    marginTop:hp('-7.5%'),
     marginHorizontal:wp('4%'),
         borderTopStartRadius:hp('3%'),
           borderTopEndRadius:hp('3%'),
  }}>


  <View style={{alignItems: 'center', justifyContent: 'center',marginTop:hp('3%')}}>

               <View style={{
               flexDirection:'row'
               }}>
                 <Image source={require('../assets/usuarios/influencer.png')} 
                        style={{ width:wp('40%'),height:hp('22.5%'),
                                  borderRadius:hp('6.5%')}}
                        />
                         <Image source={require('../assets/iconos/camara.png')} 
                        style={{ width:wp('12.5%'),height:hp('6.8%'),
                                  borderRadius:hp('4.5%'),marginTop:hp('13%'),marginLeft:wp('-13%')}}
                        />
            
                </View>
              {/*     para las imageness   */}
   <View style={{alignItems: 'center', justifyContent: 'center'}}>
       <View style={{   flexDirection:'row', borderWidth:wp('0.2%'),borderColor: '#e2e7ee',  padding:5,
        borderRadius:hp('7.5%'),
       width:wp('85%'),marginTop:hp('5%')}}>
     
       <View style={{flex:2 ,alignItems:'center'}}>
       <Ionicons name="md-contact" size={32} color="#e2e7ee" />
         </View>  
         <View style={{flex:8, marginLeft:wp('1.5%'),}}>
        <Text   style={{ 
           color:'#787993',fontSize:hp('1.8%'), fontWeight:'300'
       }}>Full Name</Text>
       <TextInput
              
              underlineColorAndroid="transparent"
              placeholder="enter your name"
              placeholderTextColor="#e2e7ee"
               onChangeText={(text) => this.setState({text})}
               value={this.state.text}
               textAlignVertical='top'
        />
          
          
       
     
      </View>
   </View>
 </View>


 <View style={{alignItems: 'center', justifyContent: 'center'}}>
       <View style={{   flexDirection:'row', borderWidth:wp('0.2%'),borderColor: '#e2e7ee',  padding:5,
        borderRadius:hp('7.5%'),
       width:wp('85%'),marginTop:hp('2.5%')}}>
     
       <View style={{flex:2,alignItems:'center'}}>
       <Ionicons name="md-phone-portrait" size={32} color="#e2e7ee" />
         </View>  
         <View style={{flex:8, marginLeft:wp('1.5%'),}}>
        <Text   style={{ 
           color:'#787993',fontSize:hp('1.8%'), fontWeight:'300'
       }}>Phone number</Text>
           <TextInput
              maxLength={9}
              keyboardType='numeric'
              underlineColorAndroid="transparent"
              placeholder="enter your number"
              placeholderTextColor="#e2e7ee"
               onChangeText={(text2) => this.setState({text2})}
               value={this.state.text2}
               textAlignVertical='top'
        />
      </View>
      <View style={{flex:1,  }}>
      <Image source={require('../assets/bandera/spain.jpg')} 
                        style={{ width:wp('10%'),height:hp('5%'),marginTop:hp('0.8%'),
                                  borderRadius:hp('4.5%'), marginLeft:wp('-5%')}}
                        />
      </View>
   </View>
 </View>
  

           <View style={{alignItems:'center',marginTop:hp('15%')}}>
                     <TouchableOpacity 
                                 style={{width:wp('75%')}}
                                 onPress={() =>this.props.navigation.navigate("signUp3") }
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
 </View>

 </View>
 </TouchableWithoutFeedback>

 {/*  ----------------------------------------------------------------------------  */}

        
  </View>

</KeyboardAvoidingView>
   

   

  
    );
  }
}

 
const styles = StyleSheet.create({
  
 
});