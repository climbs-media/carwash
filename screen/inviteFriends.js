import React, { Component } from 'react';
import {Alert,Platform,
  StyleSheet,ImageBackground, 
  Text, 
  View,Image,TouchableOpacity,TextInput,ScrollView
} from 'react-native';
 

import {widthPercentageToDP as wp, heightPercentageToDP as hp} from 'react-native-responsive-screen';
import {Ionicons}  from "@expo/vector-icons"
import {LinearGradient} from  'expo';

//https://expo.github.io/vector-icons/
 
export default class InviteFriends extends Component {


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
 
       <View style={{flex:6.5,backgroundColor:'#2d7cf7'}}>
      <ImageBackground source={require('../assets/mixto/semifondo.png')}
       style={{width: '100%', height: '100%'}} >

          <TouchableOpacity
                onPress={() => this.props.navigation.toggleDrawer()} 
                 style={{width:wp('15%'),marginTop:hp('8%'),marginHorizontal: wp('6%')}} >
             <Image source={require('../assets/iconos/menuIcon.png')} 
                  style={{ }}
                   />
           </TouchableOpacity> 


       <View style={{alignItems:'center'}}>
       <Image source={require('../assets/mixto/cajaSorpresa.png')} 
                  style={{ position:'absolute', width:wp('40%'),height:hp('30%'),
                           }}
                   />

       </View>
                
               <View style={{
                   marginTop:hp('32%'),
                   alignItems:'center',  }}>
                   <Text style={{
                    color:'#fff' , fontSize :hp('1.8%') , fontWeight:'400' 
                   }}>Total Points</Text>
                   <Text style={{
                   color:'#fff' , fontSize :hp('6%') , fontWeight:'500'  
                    }}>16.949</Text>
         </View>

      </ImageBackground>
      </View>
   
      <View  style={{
           flex:3.5,
           backgroundColor:'#F9F9FC', }}>

       
             <View style={{
          flex:1,
          backgroundColor:'white',
           marginTop:hp('-7.5%'),
            marginHorizontal:wp('4%'),
            borderTopStartRadius:hp('3%'),
           borderTopEndRadius:hp('3%'),
   }}>

           <ScrollView showsVerticalScrollIndicator={false} style={{marginHorizontal:wp('4%')}}>
           
              <View style={{
                  alignItems:'center'
              }}>
                 <Text style={{marginTop:hp('1%'),
                   color:'#25265e' , fontSize :hp('3.2%'), fontWeight:'500'  
                 }} >Invite Friends</Text>
                 <Text style={{
                   color:'#25265e' , fontSize :hp('3.2%'), fontWeight:'500'  
                 }}>Get 3 Coupons each</Text>

                 <Text style={{marginTop:hp('1%'),color:'#25265e' , fontSize :hp('2%'), fontWeight:'500' 
                 }}>When your friend sign up with your referral</Text>
                  <Text style={{
                   color:'#25265e' , fontSize :hp('2%'), fontWeight:'500' 
                  }}>link, you'll both get 3.0 coupons</Text>
                 
                 <View style={{marginVertical:hp('2%') ,
                 marginHorizontal:wp('5%') }}>
                  <Text style={{ textAlign: 'center',
                  color:'#4554e5' , fontSize :hp('3%'), fontWeight:'400' 
                        }}>http://www.carwash.com/DWNXPtpV99xuTg</Text>

                 </View>
           </View>
               
              <View style={{alignItems:'center',marginTop:hp('4%')}}>
                     <TouchableOpacity 
                                 style={{width:wp('75%')}}
                                 onPress={() =>this.props.navigation.navigate("") }
                                   >  
                                <LinearGradient colors={['#6c30cc','#2d7cf7']}
                                  style={{ 
                                      borderRadius:wp('7%'),alignItems: 'center',
                                        padding:hp('2%')}}
                                         start={[0.1,0.1]}
                                          end={[0.6,0.6]}
                                           ><Text style={{
                                               color:'white',fontSize:hp('2.7%')
                                          }}>Share Promotion Link</Text>
                               </LinearGradient>
                             </TouchableOpacity>
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