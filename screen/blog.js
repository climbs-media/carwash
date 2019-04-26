import React, { Component } from 'react';
import {Alert,Platform,ScrollView,
  StyleSheet,ImageBackground,Dimensions,
  Text,TouchableWithoutFeedback,Keyboard,
  View,Image,TouchableOpacity,TextInput
} from 'react-native';
 
import {LinearGradient} from  'expo';
import {Ionicons}  from "@expo/vector-icons"
import {widthPercentageToDP as wp, heightPercentageToDP as hp} from 'react-native-responsive-screen';
//https://expo.github.io/vector-icons/
 
export default class  Blog extends Component {


    static navigationOptions = {
        header: null ,
    };

    vehiculos=[
        {
            describe:'How wash a car in the same location',
            foto:require('../assets/iconos/coche1.png'),
             tipo:'Tips for Washers',
             video:require('../assets/video/lavado.mp4'),
             contenido:`Adopt well selected materials and make use of chemical technology, which creates glossy finish that other wax in shampoo cannot. Blended modified silicone resin and oil combination produce beautiful gloss even only do car wash.This goes well with "Kiwami Extreme Gloss Wax" series.`
             
          },
        {
        describe:'10 Ways to get more clients',
        foto:require('../assets/coches/user1/cocheuse1.png'),
         tipo:'Tips for Washers',
         video:require('../assets/video/bonjovi.mp4'),
         contenido:`Adopt well selected materials and make use of chemical technology, which creates glossy finish that other wax in shampoo cannot. Blended modified silicone resin and oil combination produce beautiful gloss even only do car wash.This goes well with "Kiwami Extreme Gloss Wax" series.`
         
      },
      {
        describe:'Premium  Microfiber',
        foto:require('../assets/coches/user1/cocheuse2.png'),
         tipo:'Materials',
         video:require('../assets/video/lavado.mp4'),
         contenido:`Adopt well selected materials and make use of chemical technology, which creates glossy finish that other wax in shampoo cannot. Blended modified silicone resin and oil combination produce beautiful gloss even only do car wash.This goes well with "Kiwami Extreme Gloss Wax" series.`
      },
      {
        describe:'10 Ways to get more clients',
        foto:require('../assets/coches/user1/cocheuse3.png'),
         tipo:'Tips for Washers',
         video:require('../assets/video/lavado.mp4'),
         contenido:`Adopt well selected materials and make use of chemical technology, which creates glossy finish that other wax in shampoo cannot. Blended modified silicone resin and oil combination produce beautiful gloss even only do car wash.This goes well with "Kiwami Extreme Gloss Wax" series.`
      }
    ]

  constructor(props) {
    super(props);
  
    this.state = {
    
        nombre:'Gregory',
        numService:6,
    }
}


  
 

  render() {
     
    let screenHeight=Dimensions.get('window').height;
 

    if(screenHeight<=592){
      horizontal='2%';
      horizontal2='2%';
      wiFot='27%'
    }else if(screenHeight<=678){
      horizontal='2%';
     horizontal2='2%';
     wiFot='27%'
   }else if(screenHeight<=684){
    horizontal='3%';
    horizontal2='3.7%';
    wiFot='25%'
   }else if(screenHeight<=775){
    horizontal='2%';
    horizontal2='2%';
    wiFot='27%'
   }else{
    horizontal='2%';
    horizontal2='2%';
    wiFot='25%'
   }
  

    return (
 
    <View style={{flex:1}}>

  <View style={{flex:2.7,backgroundColor:'#2d7cf7'}}>
  <ImageBackground source={require('../assets/mixto/fondoReal.png')}
       style={{width: '100%', height: '100%'}} >

          <TouchableOpacity
                 onPress={() => this.props.navigation.toggleDrawer()} 
                 style={{ width:wp('15%'),marginTop:hp('8%'),marginHorizontal: wp('6%')}} >
             <Image source={require('../assets/iconos/menuIcon.png')} 
                  style={{ }}
                   />
       </TouchableOpacity>

   <Text style={{
     color:'white',
     fontSize: hp('4%'),
     fontWeight:'bold',
      marginTop:hp('4%'),
     marginHorizontal:wp('6%'),
    
   }}>Tips for washers</Text>

      
   </ImageBackground>
  </View>
  <View  style={{
      flex:7.3,
      backgroundColor:'#F9F9FC',
  }}>


  <View style={{
    
  backgroundColor:'white',
  flex:1,
      marginTop:hp('-5%'),
      marginHorizontal:wp('4%'),
      
      borderTopRightRadius:hp('3%'),
      borderTopLeftRadius:hp('3%'),
  }}>

<View style={{
 flex:3.8,
}}>

<View style={{marginTop:hp('2%'),marginHorizontal:wp('2%'),
                               width:wp('100%'), height:hp('20%'),
                                }}>
           <Image source={this.vehiculos[0].foto} 
                          style={{// width:screenWidth,
                        width:wp('88%'),
                        height:hp('28%'),
                       borderRadius:hp('3%') }}  />

          
        <TouchableOpacity
        style={{// width:screenWidth,
             position:'absolute',
             top:hp('2%'),
             right:wp('15%'),
              borderRadius:hp('10%'),
             }} 

         onPress={() =>this.props.navigation.navigate("blogArticle",{datos:this.vehiculos[0]})}
        >
           <Image source={require('../assets/iconos/play.png')} 
                      style={{// width:screenWidth,
                        width:wp('10%'),
                        height:hp('5%'),
                       borderRadius:hp('10%'),
                       
                         }}  />
         </TouchableOpacity>
  
 </View>

</View>
<View style={{
 flex:3.7, 
}}>
 <View style={{flexDirection:'row',marginHorizontal:wp('4%'),marginTop:hp('1.5%') }}>
       <View style={{
         flex:7.6,  
       }}>
      <Text style={styles.washes}>Tips & Recommendations</Text>
       </View>
       <View  style={{
         flex:2.4,flexDirection:'row'
       }}> 
        <Text style={styles.show}>Show All </Text>
        <Text style={styles.flecha}> > </Text>
       </View>
   </View>


   <ScrollView horizontal showsHorizontalScrollIndicator={false} style={{
             zIndex: 1,
             marginTop:hp('1%')}} >
      

      {
   this.vehiculos.map((item,i)=> {

  
    return (
        <TouchableOpacity key={i} 
        onPress={() => this.props.navigation.navigate("blogArticle",{datos:item})}
           >  
        <View  style={{flex:1,paddingVertical:hp('1%'),width:wp('53%'),height:hp('27%'),marginHorizontal:wp('1.8%'),
          backgroundColor:'#F9F9FC',borderRadius:hp('3%')
        }}>
        
        
        <View style={{alignItems:"center",flex:6}}>
        <Image source={item.foto} 
              style={{ width:hp(wiFot),height:hp('13%'),
                 borderTopLeftRadius:hp('4%'),borderTopRightRadius:hp('4%')}}
                                      />

<TouchableOpacity
        style={{// width:screenWidth,
             position:'absolute',
              bottom:hp('2%'),
              left:wp('5%'),
              borderRadius:hp('10%'),
             }} 
             onPress={() => this.props.navigation.navigate("blogArticle",{datos:item})}
        >



           <Image source={require('../assets/iconos/play.png')} 
                      style={{// width:screenWidth,
                        width:wp('10%'),
                        height:hp('5%'),
                       borderRadius:hp('10%'),
                        
                         }}  />
         </TouchableOpacity>
        </View>
        <View style={{marginTop:hp('2%'),
          marginHorizontal:wp(horizontal),flex:3,
        }}>
        <Text style={{
            color:'#25265e',fontSize:hp('2.5%') ,fontWeight:'500',
        }}>
            {item.describe}
        </Text>
        </View>
        <View style={{flex:1,  marginHorizontal:wp(horizontal2)}}>
        <Text style={{
            color:'#7b7b93',fontSize:hp('1.8%') ,fontWeight:'500' 
        }}>
            {item.tipo}
        </Text>
    
        </View>


        </View>
        
      </TouchableOpacity>
        )
       
 
    }
   )
}

</ScrollView>


</View>

<View style={{
 flex:1.5 
}}>
<View style={{alignItems:'center',marginTop:hp('3%'),marginBottom:hp('2%')}}>
                            <TouchableOpacity 
                                 style={{width:'90%' }}
                            
                                    onPress={() => this.props.navigation.navigate("")}
                                 
                                   >  
                                <LinearGradient colors={['#6c30cc','#2d7cf7']}
                                  style={{ 
                                      borderRadius:50,alignItems: 'center',
                                        padding:'4%'}}
                                         start={[0.1,0.1]}
                                          end={[0.5,0.5]}
                                           ><Text style={{
                                               color:'white',fontSize:hp('2.5%'),
                                          }}>Ask question</Text>
                               </LinearGradient>
                             </TouchableOpacity>
                             </View>


</View>

  
  

 

  </View>

</View>

</View>
 
    );
  }
}

 
const styles = StyleSheet.create({
    washes:{
     color :'#7b7b93', fontSize:hp('2%'), fontWeight:'500'
    } ,
    
    show:{
        color :'#4554e5', fontSize:hp('2%'), fontWeight:'500'
    },
    
    flecha:{
        color :'#4554e5', fontSize:hp('3.5%'), fontWeight:'500',
        marginTop: hp('-1.2%'),
   },
 
});