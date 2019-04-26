import React, { Component } from 'react';
import {Alert,Platform,
  StyleSheet,ImageBackground, 
  Text,Dimensions,
  View,Image,TouchableOpacity,TextInput,ScrollView
} from 'react-native';
 
import {widthPercentageToDP as wp, heightPercentageToDP as hp} from 'react-native-responsive-screen';
import {Ionicons}  from "@expo/vector-icons"
import {LinearGradient} from  'expo';

//https://expo.github.io/vector-icons/
 
export default class CompoNotifications extends Component {


  constructor(props) {
    super(props);
  
    this.state = {
       
    }
}

  render() {
    let screenWidth=Dimensions.get('window').width;
    let screenHeight=Dimensions.get('window').height;
   
    
   
   if(screenHeight<=592){
    widfoto='15%';
       heifoto='8%'
  }else if(screenHeight<=678){
    widfoto='15%';
    heifoto='8%'
 }else if(screenHeight<=684){
  widfoto='12.5%';
  heifoto='8%'
 }else if(screenHeight<=775){
  widfoto='15%';
    heifoto='8%'
 }else{
  widfoto='17%';
  heifoto='8%'
 }
   
   
    return (
  

            <View style={{flexDirection:'row',marginTop:hp('2%')}}>

                                      <View  style={{ flex:2}}>
                                      <Image source={this.props.foto}  
                                       style={{   width:wp(widfoto),height:hp(heifoto),borderRadius:hp('10%')
                                         }}  />
                                       </View>
                                       <View style={{flex:8,marginLeft:wp('1.5%')}}>
                                             <View style={{flexDirection:'row',
                                             justifyContent: 'center',}}>
                                               <Text style={{
                                                flex:8,
                                                color:'#25265e' , fontSize :hp('2%') , fontWeight:'500' 
                                               }}>{this.props.mensajPrinci}</Text>
                                               <Text style={{
                                                flex:2,
                                                color:'#787993' , fontSize :hp('1.8%') , fontWeight:'300'
                                               }}>{this.props.time}</Text>
                                             </View>
                                             <Text style={{ 
                                               color:'#25265e' , fontSize :hp('2%') , fontWeight:'300'
                                              }}>{this.props.mensaj}</Text>
                                         </View>
               </View>

  

    );
  }
}

const styles = StyleSheet.create({
   
    
});