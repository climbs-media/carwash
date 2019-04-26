import PropTypes from 'prop-types';
import React, {Component} from 'react';

import {NavigationActions} from 'react-navigation';
import {Alert,StyleSheet,ScrollView,ImageBackground,Image,
  Text,TouchableOpacity, View,Dimensions} from 'react-native';
import {widthPercentageToDP as wp, heightPercentageToDP as hp} from 'react-native-responsive-screen';

class SideMenu2 extends Component {
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
       seleccionado6:this.desSelec,
       seleccionado7:this.desSelec,
       seleccionado8:this.desSelec,
       tami:hp('2%'),

  }


  
  render () {

    let screenWidth=Dimensions.get('window').width;
    let screenHeight=Dimensions.get('window').height;
    
    if(screenHeight<=593){
      tamNom='3%';
      heiSelec='6.9%';
      wiSelec='78%';
      wiFot='19%';

      heiReq='4.5%'
      wireq='7%'
      wihisto='7.6%';
      heyNoti='4.2%';
      heiWallet='3%';
      wiTeam='6.7%';
      wiMateri='6.2%';
      heiMateri='5%';
      wiVid='6.7%';
      heivid='3.5%'
      wiSetin='6.8%'
      cirMenu='70%'
    } else if(screenHeight<=678){
      tamNom='3%';
      heiSelec='6.9%';
      wiSelec='78%';
      wiFot='21%';
 
      heiReq='4.5%'
      wireq='7%'
      wihisto='7.6%';
      heyNoti='3.7%';
      heiWallet='3%';
      wiTeam='6.7%';
      wiMateri='6.5%';
      heiMateri='4.6%';
      wiVid='7%';
      heivid='3.5%'
      wiSetin='7%'
      cirMenu='70%'
   }else if(screenHeight<=684){
    tamNom='3%';
      heiSelec='6.9%';
      wiSelec='68%';
      wiFot='19%';


      heiReq='4.5%'
      wireq='7%'
      wihisto='7%';
      heyNoti='4%';
      heiWallet='3.5%';
      wiTeam='7%';
      wiMateri='6.5%';
      heiMateri='5.4%';
      wiVid='6.3%';
      heivid='3.5%'
      wiSetin='6.5%';
      cirMenu='70%'
   }else if(screenHeight<=775){
    tamNom='3%';
    heiSelec='6.9%';
    wiSelec='68.3%';
    wiFot='21%';

    heiReq='4.5%'
    wireq='7%'
    wihisto='7.6%';
    heyNoti='3.7%';
    heiWallet='3%';
    wiTeam='6.7%';
    wiMateri='6.5%';
    heiMateri='4.6%';
    wiVid='7%';
    heivid='3.5%'
    wiSetin='7%';
    cirMenu='67%'
    
   }else{
    tamNom='2.5%';
    heiSelec='6%';
      wiSelec='58.5%';
    wiFot='24%';

    heiReq='4.2%'
    wireq='7.2%'
    wihisto='7.6%';
    heyNoti='3.5%';
    heiWallet='2.8%';
    wiTeam='6.7%';
    wiMateri='6.5%';
    heiMateri='4.4%';
    wiVid='7%';
    heivid='3.1%'
    wiSetin='7%';
    cirMenu='67%'
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
     style={{flex:3}}>
<Image 
source={require('../assets/mixto/circulosMenu.png')}
style={{position:'absolute',width:wp(cirMenu),height:hp('40%')}}
/>
  
   <View style={{
     marginTop:hp('8%'),marginHorizontal:wp('6%')
   }}>
                 <View style={{
                }}>
                  <Image source={require('../assets/usuarios/user.jpg')} 
                style={{ width:wp(wiFot),height:hp('11.3%'),   borderColor:'white',borderWidth:wp('0.5%'),
                borderRadius:hp('20%')}} />

               </View>
                          
                    <Text style={{marginTop:hp('1%'),marginBottom:hp('1%'),
                          color:'#fff' ,fontSize: hp(tamNom), fontWeight:'500'
                          }}>German Lopez</Text>
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
             <Image source={require('../assets/iconos/menus/reques.png')} 
                                style={{width:wp(wireq) ,height:hp(heiReq)}}
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
                 seleccionado6:this.desSelec,
                 seleccionado7:this.desSelec,
                 seleccionado8:this.desSelec,
                })
            }
            onPressOut={this.navigateToScreen('washerMain')}>
            <Text style={{
                zIndex:1,color:'white',fontWeight:'500',marginLeft:wp('4%'),fontSize:this.state.tami}} 
               >
            Get Requests
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
                                style={{width:wp(wihisto) ,height:hp('3.2%')}}
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
                    seleccionado6:this.desSelec,
                    seleccionado7:this.desSelec,
                    seleccionado8:this.desSelec,
                   })
               }
               onPressOut={this.navigateToScreen('washerHistory')}
              >
            <Text style={{
                zIndex:1,color:'white',fontWeight:'500',marginLeft:wp('3.5%'),fontSize:this.state.tami}} >
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
                                style={{width:wp('7%') ,height:hp(heyNoti)}}
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
                    seleccionado6:this.desSelec,
                    seleccionado7:this.desSelec,
                    seleccionado8:this.desSelec,
                   })
               }
               onPressOut={this.navigateToScreen('notifications')}
              >
            <Text style={{
                zIndex:1,color:'white',fontWeight:'500',marginLeft:wp('4%'),fontSize:this.state.tami}} >
             Notifications
             </Text>

         </TouchableOpacity>

            { this.state.seleccionado3 }
            </View>

            <View style={{flexDirection:'row'  }} >
            <View style={{
               zIndex:this.state.index1, flex:2,paddingVertical:hp('1.2%'),alignItems:'flex-end'
            }}>
             <Image source={require('../assets/iconos/menus/wallet.png')} 
                                style={{width:wp('7%') ,height:hp(heiWallet)}}
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
                    seleccionado6:this.desSelec,
                    seleccionado7:this.desSelec,
                   seleccionado8:this.desSelec,
                   })
               }
               onPressOut={this.navigateToScreen('myWallet')}
              >
            <Text style={{
                zIndex:1,color:'white',fontWeight:'500',marginLeft:wp('4%'),fontSize:this.state.tami}} >
             My Wallet
             </Text>

         </TouchableOpacity>

            { this.state.seleccionado4 }
            </View>

            <View style={{flexDirection:'row'  }} >
            <View style={{
               zIndex:this.state.index1, flex:2,paddingVertical:hp('1.2%'),alignItems:'flex-end'
            }}>
             <Image source={require('../assets/iconos/menus/team.png')} 
                                style={{width:wp(wiTeam) ,height:hp('3.2%')}}
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
                    seleccionado6:this.desSelec,
                    seleccionado7:this.desSelec,
                   seleccionado8:this.desSelec,
                    })
               }
               onPressOut={this.navigateToScreen('team')}
              >
            <Text style={{
                zIndex:1,color:'white',fontWeight:'500',marginLeft:wp('4%'),fontSize:this.state.tami}} >
             My Team
             </Text>

         </TouchableOpacity>

            { this.state.seleccionado5 }
            </View>

            <View style={{flexDirection:'row'  }} >
            <View style={{
               zIndex:this.state.index1, flex:2,paddingVertical:hp('1.2%'),alignItems:'flex-end'
            }}>
             <Image source={require('../assets/iconos/menus/material.png')} 
                                style={{width: wp(wiMateri), height: hp(heiMateri)}}
                 />
            </View>
            
            <TouchableOpacity style={{
             flex:8,justifyContent:"center"
               }}
              
               onPress={()=>
                   this.setState({
                    seleccionado6:seleccionado,
                    seleccionado1:this.desSelec,
                    seleccionado2:this.desSelec,
                    seleccionado3:this.desSelec,
                    seleccionado4:this.desSelec,
                    seleccionado5:this.desSelec,
                    seleccionado7:this.desSelec,
                   seleccionado8:this.desSelec,
                    })
               }
               onPressOut={this.navigateToScreen('requestMaterial')}
              >
            <Text style={{
                zIndex:1,color:'white',fontWeight:'500',marginLeft:wp('4%'),fontSize:this.state.tami}} >
             Request Material
             </Text>

         </TouchableOpacity>

            { this.state.seleccionado6 }
            </View>

            <View style={{flexDirection:'row'  }} >
            <View style={{
               zIndex:this.state.index1, flex:2,paddingVertical:hp('1.2%'),alignItems:'flex-end'
            }}>
             <Image source={require('../assets/iconos/menus/videos.png')} 
                                style={{width: wp(wiVid), height: hp(heivid)}}
                 />
            </View>
            
            <TouchableOpacity style={{
             flex:8,justifyContent:"center"
               }}
              
               onPress={()=>
                   this.setState({
                    seleccionado7:seleccionado,
                    seleccionado1:this.desSelec,
                    seleccionado2:this.desSelec,
                    seleccionado3:this.desSelec,
                    seleccionado4:this.desSelec,
                    seleccionado5:this.desSelec,
                    seleccionado6:this.desSelec,
                   seleccionado8:this.desSelec,
                    })
               }
               onPressOut={this.navigateToScreen('blog')}
              >
             <Text style={{
                zIndex:1,color:'white',fontWeight:'500',marginLeft:wp('4%'),fontSize:this.state.tami}} >
             Tips for Washers
              </Text>

             </TouchableOpacity>

            { this.state.seleccionado7 }
            </View>






            <View style={{flexDirection:'row'  }} >
            <View style={{
               zIndex:this.state.index1, flex:2,paddingVertical:hp('1.2%'),alignItems:'flex-end'
            }}>
             <Image source={require('../assets/iconos/menus/setings.png')} 
                                style={{width:wp(wiSetin) ,height:hp('3.4%')}}
                 />
            </View>
            
            <TouchableOpacity style={{
             flex:8,justifyContent:"center"
               }}
              
               onPress={()=>
                   this.setState({
                    seleccionado8:seleccionado,
                    seleccionado1:this.desSelec,
                    seleccionado2:this.desSelec,
                    seleccionado3:this.desSelec,
                    seleccionado4:this.desSelec,
                    seleccionado5:this.desSelec,
                    seleccionado6:this.desSelec,
                    seleccionado7:this.desSelec,
                   })
               }
               onPressOut={this.navigateToScreen('settings')}
              >
            <Text style={{
                zIndex:1,color:'white',fontWeight:'500',marginLeft:wp('4%'),fontSize:this.state.tami}} >
             Settings
             </Text>

         </TouchableOpacity>

            { this.state.seleccionado8 }
            </View>
          
       </View>   

      </View>
      </ImageBackground>   
 
      </View>
    );
  }
}

SideMenu2.propTypes = {
  navigation: PropTypes.object
};



export default SideMenu2;