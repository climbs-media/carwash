import React, { Component } from 'react';
import { Platform,
  StyleSheet,ImageBackground,Dimensions,
  Text, Image,
  View, TouchableOpacity, ScrollView
} from 'react-native';
 
 
import {Ionicons}  from "@expo/vector-icons"
import {LinearGradient} from  'expo';
import {widthPercentageToDP as wp, heightPercentageToDP as hp} from 'react-native-responsive-screen';

//https://expo.github.io/vector-icons/
 
export default class AddTeam extends Component {


    static navigationOptions = {
        header: null ,
    };
   
    
  constructor(props) {
    super(props);
  
    this.state = {
       
    }
}

  render() {


    let screenWidth=Dimensions.get('window').width;
 let screenHeight=Dimensions.get('window').height;

    if(screenHeight<=592){
      fontUno='4.5%'
      fontDos='3%'
      cupon='3.2%'
      wiMot='70%'
    }else if(screenHeight<=678){
      fontUno='4.5%'
      fontDos='3%'
      cupon='3.2%'
      wiMot='70%'
    }else if(screenHeight<=684){
      fontUno='4.5%'
      fontDos='3%'
      cupon='3.2%'
      wiMot='70%'
    }else if(screenHeight<=775){
      fontUno='4.5%'
      fontDos='3%'
      cupon='3.2%'
      wiMot='70%'
     }else{
      fontUno='3.5%'
      fontDos='2.8%'
      cupon='2.6%'
      wiMot='72%'
    }
     
   
    return (
    <View style={{flex:1}}>
 
       <View style={{flex:6.5,backgroundColor:'#2d7cf7'}}>
      <ImageBackground source={require('../assets/mixto/semifondo.png')}
       style={{width: '100%', height: '100%'}} >

          <TouchableOpacity
                 onPress={() => this.props.navigation.pop()}
                 style={{width:wp('19%'),marginTop:hp('6%'),marginHorizontal: hp('2.3%'),}} >
                  <Image source={require('../assets/iconos/retrocedeArrow.png')} 
                  style={{ }}
                   />
           </TouchableOpacity> 



               <View style={{marginHorizontal:wp('4%'),
                   marginTop:hp('4%'),width:wp('50%') 
                    }}>
                   <Text style={{
                    color:'#fff' , fontSize :hp(fontUno), fontWeight:'500' 
                   }}>Create your{'\n'}Wash Empire</Text>
             </View>

             <View style={{marginHorizontal:wp('4%'),
                   marginTop:hp('4%'),width:wp('45%') 
                    }}>
                   <Text style={{
                    color:'#fff' , fontSize :hp(fontDos), fontWeight:'500' 
                   }}>Recruit your own{'\n'}Team Wash</Text>
             </View>

             <View style={{marginHorizontal:wp('4%'),
                   marginTop:hp('4%'),width:wp('50%') 
                    }}>
                   <Text style={{opacity:0.5,

                    color:'#fff' , fontSize :hp('2%'), fontWeight:'500' 
                   }}>Get commissions for{'\n'}your team's work</Text>
             </View>
             <Image source={require('../assets/mixto/moteroMoto.png')} 
                  style={{ position:'absolute', width:wp(wiMot),height:hp('55%'),
                           bottom:hp('-5%'),right:wp('-18%')
                }}
                   />
           
      </ImageBackground>
      </View>
   
      <View  style={{
           flex:3.5,
           backgroundColor:'#F9F9FC', }}>

       
             <View style={{
             flex:1,
             backgroundColor:'white',
             marginTop:hp('-11%'),
             marginHorizontal:wp('4%'),
            borderRadius:20,
           
          }}>

           <ScrollView showsVerticalScrollIndicator={false} style={{marginHorizontal:'4%'}}>
           
              <View style={{
                  alignItems:'center'
              }}>
                 <Text style={{marginTop:hp('2%'),
                   color:'#25265e' , fontSize :hp('3.2%'), fontWeight:'500'  
                 }} >Invite Friends</Text>
                 <Text style={{
                   color:'#25265e' , fontSize :hp('3.2%'), fontWeight:'500'  
                 }}>Get 3 Coupons each</Text>

                 <Text style={{marginTop:hp('2%'),color:'#25265e' , fontSize :hp('2%'), fontWeight:'500' 
                 }}>When your friend sign up with your referral</Text>
                  <Text style={{
                   color:'#25265e' , fontSize :hp('2%'), fontWeight:'500' 
                  }}>link, you'll both get 3.0 coupons</Text>
                 
                 <View style={{marginVertical:hp('3.5%') ,
                 marginHorizontal:wp('5%') }}>
                  <Text style={{ textAlign: 'center',
                  color:'#4554e5' , fontSize :hp(cupon), fontWeight:'400' 
                        }}>http://www.carwash.com/DWNXPtpV99xuTg</Text>

                 </View>
                 
             
                   <TouchableOpacity 
                                 style={{width:wp('75%'),marginTop:hp('1.5%')}}
                                 onPress={() =>this.props.navigation.navigate("") }
                                   >  
                                <LinearGradient colors={['#6c30cc','#2d7cf7']}
                                  style={{ 
                                      borderRadius:wp('7%'),alignItems: 'center',
                                        padding:hp('2%')}}
                                         start={[0.1,0.1]}
                                          end={[0.5,0.5]}
                                           ><Text style={{
                                               color:'white',fontSize:hp('2.7%')
                                          }}>Share Registration Link</Text>
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