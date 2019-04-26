import PropTypes from 'prop-types';
import React, {Component} from 'react';

import {NavigationActions} from 'react-navigation';
import {Alert,StyleSheet,ScrollView,ImageBackground,Image,
  Text,TouchableOpacity, View,Dimensions} from 'react-native';
import {widthPercentageToDP as wp, heightPercentageToDP as hp} from 'react-native-responsive-screen';

class SideMenu extends Component {
  navigateToScreen = (route) => () => {
    const navigateAction = NavigationActions.navigate({
      routeName: route
    });
    this.props.navigation.dispatch(navigateAction);
  }

 

 desSelec=<Text style={{  display:'none' }}> </Text>;

  state={
      sombra1:'none',
      index1:1,
       seleccionado1:this.desSelec,
       seleccionado2:this.desSelec,
       seleccionado3:this.desSelec,
       seleccionado4:this.desSelec,
       seleccionado5:this.desSelec,
     tami:hp('2%'),

  }


  
  render () {

    let screenWidth=Dimensions.get('window').width;
    let screenHeight=Dimensions.get('window').height;
   
    
    if(screenHeight<=592){
      tamNom='3%';
      wiHis='8%';
      heiHis='3.5%';
      wiRe='7.6%';
      heire='4.5%';
      heiSelec='6.9%';
      wiSelec='78%';
      wiFot='19%';
      wiseting='8%';
      heseting='4%';
      cirMenu='70%';
      wiNoti='8.2%';
      heiNoti='4.8%';
      wiInvi='8%';
      heiInvi='6%'
    }else if(screenHeight<=678){
      tamNom='3%';
      wiHis='8%';
      heiHis='3.5%';
      wiRe='7.6%';
      heire='4.5%';
      heiSelec='6.9%';
      wiSelec='78%';
      wiFot='21%';
      wiseting='8%';
      heseting='4%';
      cirMenu='70%';
      wiNoti='8.2%';
      heiNoti='4.2%';
      wiInvi='8%';
      heiInvi='5.4%'
   }else if(screenHeight<=684){
    tamNom='3%';
    wiHis='8%';
    heiHis='3.5%';
    wiRe='7.6%';
    heire='4.5%';
      heiSelec='6.9%';
      wiSelec='68%';
      wiFot='19%';
      wiseting='7%';
      heseting='4%';
      cirMenu='70%';
      wiNoti='7.5%';
      heiNoti='4.2%';
      wiInvi='7%'
      heiInvi='6%'
   }else if(screenHeight<=775){
    tamNom='3%';
    wiHis='8%';
    heiHis='3.5%';
    wiRe='7.6%';
    heire='4.5%';
    heiSelec='6.9%';
    wiSelec='68%';
    wiFot='21%';
    wiseting='8%';
    heseting='4%';
    cirMenu='67%';
    wiNoti='8.2%';
    heiNoti='4.2%';
    wiInvi='8%';
    heiInvi='5.4%'
   }else{
    tamNom='2.5%';
    wiHis='7.5%';
    heiHis='3%';
    wiRe='7.5%';
    heire='4%';
      heiSelec='6%';
      wiSelec='58.5%';
      wiFot='24%';
      wiseting='8%';
      heseting='3.5%';
      cirMenu='67%';
      wiNoti='8.2%';
      heiNoti='4.2%';
      wiInvi='8%'
      heiInvi='4.4%'

   }
 

   seleccionado=<Text style={{
    backgroundColor:'black',
    opacity:0.2,

    position:'absolute',
    height:hp(heiSelec),
   // width:wp('68%'),
   width:wp(wiSelec),
  }}> </Text>;
    return (
      <View style={{flex:1}}>


<ImageBackground source={require('../assets/mixto/expande3.png')}
     style={{flex:3 ,}}>
<Image 
source={require('../assets/mixto/circulosMenu.png')}
style={{position:'absolute',width:wp(cirMenu),height:hp('40%')}}
/>


   <View style={{
     marginTop:hp('8%'),marginHorizontal:wp('6%')
   }}>
                 <View style={{
                }}>
                  <Image source={require('../assets/usuarios/influencer.png')} 
                style={{ width:wp(wiFot),height:hp('11.3%'),   borderColor:'white',borderWidth:wp('0.5%'),
                borderRadius:hp('20%')}} />

               </View>
                          
                    <Text style={{marginTop:hp('1%'),marginBottom:hp('1%'),
                          color:'#fff' , fontSize: hp(tamNom) , fontWeight:'500'
                          }}>Hernán Martinez</Text>
                              <View  style={{
                                padding:hp('0.6%'),
                                flexDirection:'row',
                              }}>
                                  <Image source={require('../assets/iconos/staron.png')} 
                                   style={{ width:wp('3.5%') ,height:hp('2%') ,}}
                                  />
                               <Image source={require('../assets/iconos/staron.png')} 
                                 style={{ width:wp('3.5%') ,height:hp('2%') ,marginLeft:'1.5%'}}
                                 />
                              <Image source={require('../assets/iconos/staron.png')} 
                                style={{ width:wp('3.5%') ,height:hp('2%')  ,marginLeft:'1.5%'}}
                                  />
                             <Image source={require('../assets/iconos/staron.png')} 
                                style={{width:wp('3.5%') ,height:hp('2%')  ,marginLeft:'1.5%'}}
                               />
                             <Image source={require('../assets/iconos/staroff.png')} 
                               style={{ width:wp('3.5%') ,height:hp('1.9%'),marginTop:hp('0.1%'),marginLeft:'1.5%'}}
                               />
                              </View>

</View>
 
<View style={{flex:7,paddingTop:hp('1.5%')}}>
 
     <View>
           <View style={{flexDirection:'row',
              }}>
            <View style={{
               zIndex:1, flex:2,paddingVertical:hp('1.2%'),alignItems:'flex-end'
            }}>
             <Image source={require('../assets/iconos/menus/reques1.png')} 
                                style={{width:wp(wiRe) ,height:hp(heire)}}
                 />
            </View>
            <TouchableOpacity style={{
             flex:8,justifyContent:"center"
               }}
               onPress={()=>
                this.setState({
                 seleccionado1:seleccionado,
                 seleccionado2:this.desSelec,
                 seleccionado3:this.desSelec,
                 seleccionado4:this.desSelec,
                 seleccionado5:this.desSelec,
                })
            }
            onPressOut={this.navigateToScreen('requestWasher1')}>
            <Text style={{
                zIndex:1,color:'white',fontWeight:'500',marginLeft:wp('4%'),fontSize:this.state.tami}} 
               >
            Request Washer
             </Text>
             </TouchableOpacity>
          
            { this.state.seleccionado1  }
            </View>

            <View style={{flexDirection:'row',
              }} >
            <View style={{
               zIndex:this.state.index1, flex:2,paddingVertical:hp('1.2%'),alignItems:'flex-end'
            }}>
             <Image source={require('../assets/iconos/menus/history.png')} 
                                style={{width:wp(wiHis) ,height:hp(heiHis)}}
                 />
            </View>
            
            <TouchableOpacity style={{
             flex:8,justifyContent:"center"
               }}
              
               onPress={()=>
                   this.setState({
                    seleccionado2:seleccionado,
                    seleccionado1:this.desSelec,
                    seleccionado3:this.desSelec,
                    seleccionado4:this.desSelec,
                    seleccionado5:this.desSelec,
                   })
               }
               onPressOut={this.navigateToScreen('myhistory')}
              >
            <Text style={{
                zIndex:1,color:'white',fontWeight:'500',marginLeft:wp('4%'),fontSize:this.state.tami}} >
            History
             </Text>

         </TouchableOpacity>

            { this.state.seleccionado2 }
            </View>
            <View style={{flexDirection:'row',
              }} >
            <View style={{
               zIndex:this.state.index1, flex:2,paddingVertical:hp('1.2%'),alignItems:'flex-end'
            }}>
             <Image source={require('../assets/iconos/menus/notifica.png')} 
                                style={{width:wp(wiNoti) ,height:hp(heiNoti)}}
                 />
            </View>
            
            <TouchableOpacity style={{
             flex:8,justifyContent:"center"
               }}
              
               onPress={()=>
                   this.setState({
                    seleccionado3:seleccionado,
                    seleccionado1:this.desSelec,
                    seleccionado2:this.desSelec,
                    seleccionado4:this.desSelec,
                    seleccionado5:this.desSelec,
                   })
               }
               onPressOut={this.navigateToScreen('notifications')}
              >
            <Text style={{
                zIndex:1,color:'white',fontWeight:'500',marginLeft:wp('4.2%'),fontSize:this.state.tami}} >
             Notifications
             </Text>

         </TouchableOpacity>

            { this.state.seleccionado3 }
            </View>

            <View style={{flexDirection:'row'  }} >
            <View style={{
               zIndex:this.state.index1, flex:2,paddingVertical:hp('1.2%'),alignItems:'flex-end'
            }}>
             <Image source={require('../assets/iconos/menus/invitafri.png')} 
                                style={{width:wp(wiInvi) ,height:hp(heiInvi)}}
                 />
            </View>
            
            <TouchableOpacity style={{
             flex:8,justifyContent:"center"
               }}
              
               onPress={()=>
                   this.setState({
                    seleccionado4:seleccionado,
                    seleccionado1:this.desSelec,
                    seleccionado2:this.desSelec,
                    seleccionado3:this.desSelec,
                    seleccionado5:this.desSelec,
                   })
               }
               onPressOut={this.navigateToScreen('inviteFriends')}
              >
            <Text style={{
                zIndex:1,color:'white',fontWeight:'500',marginLeft:wp('4%'),fontSize:this.state.tami}} >
             Invite Friends
             </Text>

         </TouchableOpacity>

            { this.state.seleccionado4 }
            </View>

            <View style={{flexDirection:'row'  }} >
            <View style={{
               zIndex:this.state.index1, flex:2,paddingVertical:hp('1.2%'),alignItems:'flex-end'
            }}>
             <Image source={require('../assets/iconos/menus/setings.png')} 
                                style={{width:wp(wiseting) ,height:hp(heseting)}}
                 />
            </View>
            
            <TouchableOpacity style={{
             flex:8,justifyContent:"center"
               }}
              
               onPress={()=>
                   this.setState({
                    seleccionado5:seleccionado,
                    seleccionado1:this.desSelec,
                    seleccionado2:this.desSelec,
                    seleccionado3:this.desSelec,
                    seleccionado4:this.desSelec,
                   })
               }
               onPressOut={this.navigateToScreen('settings')}
              >
            <Text style={{
                zIndex:1,color:'white',fontWeight:'500',marginLeft:wp('4%'),fontSize:this.state.tami}} >
             Settings
             </Text>

         </TouchableOpacity>

            { this.state.seleccionado5 }
            </View>
          
       </View>   

       <View style={{marginTop:hp('12%'),marginHorizontal:wp('6%')}}>

         <Text style={{
          color:'#fff',fontSize:hp('2%'),fontWeight:'500'
         }} onPress={this.navigateToScreen('landingBecome')}
          >Become a Washer</Text>
           <Text style={{ marginTop:hp('2%'),
           color:'#fff',fontSize:hp('2%'),fontWeight:'500' 
          }}>Terms & Conditions</Text>
            <Text style={{marginTop:hp('2%'),
            color:'#fff',fontSize:hp('2%'),fontWeight:'500'
          }}>Privacy Policy</Text>
          <Text style={{marginTop:hp('2%'),
            color:'#fff',fontSize:hp('2%'),fontWeight:'500'
          }}>Support</Text>
       </View>
      </View>
      </ImageBackground>   
    
      </View>
    );
  }
}



SideMenu.propTypes = {
  navigation: PropTypes.object
};



export default SideMenu;