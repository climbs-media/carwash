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
 
export default class Team extends Component {


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
                   onPress={() => this.props.navigation.toggleDrawer()} 
                 style={{flex:1 }} >
               <Image source={require('../assets/iconos/menuIcon.png')} 
                  style={{ marginTop:hp('5%')}}
                   />
        </TouchableOpacity>
    
    <Text style={{
       color:'white',
       fontSize: hp('2%'),
       marginHorizontal:wp('6%'),
    
   }}>PAGINA DE TEAM  EN PROCESO</Text>
   </ImageBackground>
  </View>
  </TouchableWithoutFeedback>
  <View  style={{
      flex:7,
      backgroundColor:'#F9F9FC',
      
  }}>


  <View style={{
      flex:2,
  backgroundColor:'white',
      marginTop:hp('-3.5%'),
      marginHorizontal:wp('4%'),
      borderRadius:hp('3%'),
  }}>
 <ScrollView showsVerticalScrollIndicator={false} style={{marginHorizontal:'4%'}}>


    <Text>Pagina de TEAM  en proceso</Text>
 {/*  ----------------------------------------------------------------------------  */}
      <View style={{alignItems:'center',marginTop:hp('8%')}}>
          

            <TouchableOpacity 
                                 style={{width:wp('75%')}}
                                // onPress={() =>this.props.navigation.navigate("carDetails1") }
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
         
           <TouchableOpacity style={{alignItems:'center'}}
             onPress={() => this.props.navigation.navigate("")}
            >  
                        <Text style={{
                               marginTop:hp('2%'),
                               color:'#4554e5',
                               fontSize:hp('2%'),
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