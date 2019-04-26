import React , {Component}from 'react';
import { Alert,StyleSheet ,Text, View,Image,TouchableOpacity,
Dimensions,ImageBackground } from 'react-native';
import PropTypes from 'prop-types';

import { createStackNavigator, createAppContainer ,createBottomTabNavigator,
  DrawerItems,createDrawerNavigator,NavigationActions} from "react-navigation";

  import {widthPercentageToDP as wp, heightPercentageToDP as hp} from 'react-native-responsive-screen';


import AddTeam from './screen/addTeam'
import AddPayment from './screen/AddPayment'

import Blog from "./screen/blog"
import BlogArticle from "./screen/blogArticle"

import CarDetails1 from "./screen/carDetails1"
import CarDetails2 from "./screen/carDetails2"
import CarDetailsLocation  from "./screen/carDetailsLocation"

import ChatWithWasher from "./screen/chatWithWasher"
import ChatWithClient  from "./screen/chatWithClient"

import  EditProfile from "./screen/editProfile"
import EditarDetalleCoche from "./screen/editarDetalleCoche"
import EditCarLocation from  "./screen/editcarLocations"

import FormBecomeWasher from './screen/FormBecomeWasher'

import InviteFriends from "./screen/inviteFriends"

import Junior from './screen/junior'

import Login from  './screen/Login'

import Myhistory from "./screen/myHistory"
import MyhistoryResume from "./screen/myHistoryResume"

import MyWalletTransfer from './screen/myWalletTransfer'
import MyWallet from './screen/myWallet'

import Notifications from "./screen/notifications"

import LandingBecome from "./screen/landingBecome"

import Onboarding from  './screen/onboarding'
import PaymentMethod from './screen/paymentMethod'

import ProductoDetail from "./screen/productoDetail"

import Rating from "./screen/rating"

import ResetPasword from './screen/resetPassword'

import RequestWasher1 from './screen/requestWasher1'
import Request3 from "./screen/request3"
import Request5 from "./screen/request5"
import RequestMaterial  from "./screen/requestMaterial"



import Senior from './screen/senior'
import Sendtip from "./screen/sendtip"
import Settings from "./screen/settings"

import SignUp1 from './screen/SignUp1'
import SignUp2 from './screen/SignUp2'
import SignUp3 from './screen/SignUp3'

import SplashScreen from "./screen/splashScreen"

import WasherMain from './screen/washerMain'
import WasherRequestDetail from './screen/washerRequestDetail'
import WasherRequestAcepted from './screen/washerRequestAcepted'
import WasherProgres1 from './screen/washerProgress1'
import WasherProgress2 from './screen/washerProgress2'
import WasherProgress3 from './screen/washerProgress3'
import WasherProgress4 from './screen/washerProgress4'
import WasherProgress5 from './screen/washerProgress5'
import WasherProgress6 from './screen/washerProgress6'
import WasherProgress7 from './screen/washerProgress7'
import WasherHistoryDetail from './screen/washerHistoryDetail'
import WasherHistory from './screen/washerHistory'
import SearchMakeModel from "./screen/searchMakeModel"
import Team from "./screen/Team"

import Videos from "./screen/video"
import SideMenu from "./screen/sidemenu"
import SideMenu2 from "./screen/sidemenu2"



// para el primer bloque
const stackReq=createStackNavigator({
  requestWasher1:RequestWasher1 ,
})

const stackMyHis=createStackNavigator({
  myhistory:Myhistory,
})

const stackNotif=createStackNavigator({
  notifications:Notifications
})

const stackInvit=createStackNavigator({
  inviteFriends:InviteFriends
})

const stackSetting=createStackNavigator({
  settings:Settings,
})

 
const drawMenu= createDrawerNavigator(
  {
    requestWasher1:{
           screen:stackReq , 
     
          
        navigationOptions: ({ navigation }) => ({
        drawerLabel:'Request Washer',
        drawerIcon: () => (
          <Image
            source={require('./assets/iconos/menus/reques1.png')}
            style={{width: wp('8%'), height: hp('4.5%'),marginLeft:wp('6%')}}
          />
        )
        }),
    },
    myhistory:{
       screen:stackMyHis,
       
      navigationOptions: ({ navigation }) => ({
        drawerLabel:'History',
        drawerIcon: () => (
          <Image
            source={require('./assets/iconos/menus/history.png')}
            style={{width: wp('8%'), height: hp('3.5%'),marginLeft:wp('6%')}}
          />
        )
        }),
    
    },
    notifications:{ screen: stackNotif,
      navigationOptions: ({ navigation }) => ({
        drawerLabel:'Notifications',
        drawerIcon: () => (
          <Image
            source={require('./assets/iconos/menus/notifica.png')}
            style={{width: wp('8%'), height: hp('4.5%'),marginLeft:wp('6%')}}
          />
        )
        }),
    },
    inviteFriends:{
      screen:    stackInvit,
    
      navigationOptions: ({ navigation }) => ({
        drawerLabel:'Invite Friends',
        drawerIcon: () => (
          <Image
            source={require('./assets/iconos/menus/invitafri.png')}
            style={{width: wp('6%'), height: hp('5%'),marginLeft:wp('6%')}}
          />
        )
        }),},
     settings:{
      screen:   stackSetting,
      navigationOptions: ({ navigation }) => ({
        drawerLabel:'Settings',
        drawerIcon: () => (
          <Image
            source={require('./assets/iconos/menus/setings.png')}
            style={{width: wp('8%'), height: hp('4%'),marginLeft:wp('6%') }}
          />
        )
      

        })},
       
        
     },{
    initialRouteName: 'requestWasher1',
   // drawerBackgroundColor:'#544DEB',
    contentComponent:SideMenu,
    contentOptions: {
    inactiveTintColor:'white',
     },
    
  },

  
  );

 

// para el segundo bloque

const stackWash=createStackNavigator({
  washerMain:WasherMain,
})
const stacHisto2=createStackNavigator({
  washerHistory:WasherHistory
})
const stacknotifica2=createStackNavigator({
  notifications:Notifications
})

const stackWallet=createStackNavigator({
  myWallet:MyWallet,
})
const stackTeam=createStackNavigator({
  team:Junior,
})
const stackMaterial=createStackNavigator({
  requestMaterial:RequestMaterial,
})

const stackBlog=createStackNavigator({
  blog:Blog,
})






const drawMenu2 = createDrawerNavigator(
  {
    washerMain:{
           screen:stackWash, 
     
          
        navigationOptions: ({ navigation }) => ({
        drawerLabel:'Get Requests',
        drawerIcon: () => (
          <Image
            source={require('./assets/iconos/menus/reques.png')}
            style={{width: wp('8%'), height: hp('4.5%'),marginLeft:wp('6%')}}
          />
        )
        }),
    },
    washerHistory:{
       screen:stacHisto2,
          
      navigationOptions: ({ navigation }) => ({
        drawerLabel:'History',
        drawerIcon: () => (
          <Image
            source={require('./assets/iconos/menus/history.png')}
            style={{width: wp('8%'), height: hp('3.5%'),marginLeft:wp('6%')}}
          />
        )
        }),
    
    },
    notifications:{ screen: stacknotifica2,
      navigationOptions: ({ navigation }) => ({
        drawerLabel:'Notifications',
        drawerIcon: () => (
          <Image
            source={require('./assets/iconos/menus/notifica.png')}
            style={{width: wp('8%'), height: hp('4.5%'),marginLeft:wp('6%')}}
          />
        )
        }),
    },
    myWallet:{
      screen:    stackWallet,
    
      navigationOptions: ({ navigation }) => ({
        drawerLabel:'My Wallet',
        drawerIcon: () => (
          <Image
            source={require('./assets/iconos/menus/wallet.png')}
            style={{width: wp('6%'), height: hp('3%'),marginLeft:wp('6%')}}
          />
        )
        }),
      },
      team:{
         screen :stackTeam,
        navigationOptions: ({ navigation }) => ({
          drawerLabel:'My Team',
          drawerIcon: () => (
            <Image
              source={require('./assets/iconos/menus/team.png')}
              style={{width: wp('8%'), height: hp('3.5%'),marginLeft:wp('6%')}}
            />
          )
          }),
        },
        requestMaterial:{
          screen:    stackMaterial,
        
          navigationOptions: ({ navigation }) => ({
            drawerLabel:'Request Material',
            drawerIcon: () => (
              <Image
                source={require('./assets/iconos/menus/material.png')}
                style={{width: wp('7%'), height: hp('4.8%'),marginLeft:wp('6%')}}
              />
            )
            }),
          },
          blog:{
            screen: stackBlog,
          
            navigationOptions: ({ navigation }) => ({
              drawerLabel:'Tips for Washers',
              drawerIcon: () => (
                <Image
                  source={require('./assets/iconos/menus/videos.png')}
                  style={{width: wp('7%'), height: hp('3.5%'),marginLeft:wp('6%')}}
                />
              )
              }),
            },
     settings:{
      screen:   stackSetting,
      navigationOptions: ({ navigation }) => ({
        drawerLabel:'Settings',
        drawerIcon: () => (
          <Image
            source={require('./assets/iconos/menus/setings.png')}
            style={{width: wp('8%'), height: hp('4%'),marginLeft:wp('6%') }}
          />
        )
        })},
   
  },{
    initialRouteName: 'washerMain',
    drawerBackgroundColor:'#544DEB',
    contentComponent:SideMenu2,
    contentOptions: {
    inactiveTintColor:'white',
     },
  },

  
  );




const MyStack =createStackNavigator(
  {
  
  addTeam:AddTeam,
  addPayment:AddPayment,
  blog:Blog,
  blogArticle:BlogArticle,
  carDetails1:CarDetails1,
 // carDetails2:CarDetails2,
  carDetailsLocation:CarDetailsLocation,
  chatWithWasher:ChatWithWasher,
  chatWithClient:ChatWithClient,
  editProfile:EditProfile,
  editarDetalleCoche:EditarDetalleCoche,
  editCarLocation:EditCarLocation,
  formBecomeWasher:FormBecomeWasher,
  inviteFriends:InviteFriends,
  junior:Junior,
  login:Login,
  myhistory:Myhistory,
  myhistoryResume:MyhistoryResume,
  myWalletTransfer:MyWalletTransfer,
  myWallet:MyWallet,
  notifications:Notifications,
  landingBecome:LandingBecome,
  onBoarding:Onboarding ,
  paymentMethod:PaymentMethod,
  productoDetail:ProductoDetail,
  rating:Rating,
  resetPasword:ResetPasword,
  requestWasher1:{  screen : drawMenu,
    navigationOptions:{
      header: null,
    } },

  request3:Request3,
  request5:Request5,
  requestMaterial:RequestMaterial,
  signUp1:SignUp1, //  me quedare aqui con responsive
  signUp2:SignUp2,
  signUp3:SignUp3,
  searchMakeModel:SearchMakeModel,
  senior:Senior,
  sendtip:Sendtip,
  settings:Settings,
  splashScreen:SplashScreen,
  team:Team,
  washerMain:{  screen : drawMenu2,
    navigationOptions:{
      header: null,
    } },
  washerRequestDetail:WasherRequestDetail,
  washerRequestAcepted:WasherRequestAcepted,
  washerProgres1:WasherProgres1,
  washerProgress2:WasherProgress2,
  washerProgress3:WasherProgress3,
  washerProgress4:WasherProgress4,
  washerProgress5:WasherProgress5,
  washerProgress6:WasherProgress6,
  washerProgress7:WasherProgress7,
  washerHistoryDetail:WasherHistoryDetail,
  washerHistory:WasherHistory,
  video:Videos,
  },
  {
 // carDetails2:CarDetails2,
  initialRouteName: 'video',
    }
 
    
)










//const AppContainer = createAppContainer(DrawerNavigator);
const AppContainer = createAppContainer(MyStack);

export default class App extends React.Component {
  render() {
    return <AppContainer />;
  }
}
