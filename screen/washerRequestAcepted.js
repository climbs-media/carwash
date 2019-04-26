import React, { Component } from 'react';
import {Alert,Platform,
  StyleSheet,
  Text,Dimensions ,ImageBackground,
  View,Image,TouchableOpacity,TextInput,ScrollView,
} from 'react-native';
import {widthPercentageToDP as wp, heightPercentageToDP as hp} from 'react-native-responsive-screen';
import {LinearGradient ,Constants, MapView } from  'expo';
const {Marker} = MapView;
//https://expo.github.io/vector-icons/
 
export default class WasherRequestAcepted extends Component {


    static navigationOptions = {
        header: null ,
    };

    
  constructor(props) {
    super(props);
  
    this.state = {
        precio:25,
        time:50,

      //para mapa
      mapRegion: {
        latitude:40.4159034,
        longitude:-3.6977898,
        latitudeDelta: 0.0022,
        longitudeDelta: 0.0021,
      },

 
       }
    }

 

  render() {
    let screenWidth=Dimensions.get('window').width;

    return (


      <View style={[{flex:1},this.state.fondoPrincipal]}>
           <View style={{ flex:2.5}}>
          
           <ImageBackground source={require('../assets/mixto/fondoVerde.png')}
             style={{width: '100%', height: '100%'}} >
                <TouchableOpacity
                 onPress={() => this.props.navigation.pop()} 
                 style={{  width:wp('15%'),marginTop:hp('8%'),marginHorizontal: wp('6%')}} >
                 
                 <Image source={require('../assets/iconos/retrocedeArrow.png')} 
                  style={{ }}
                   />
          
             </TouchableOpacity>
                 <Text style={{ color:'white',
       fontSize: hp('4%'),
           fontWeight:'bold',
              marginTop:hp('4%'),
             marginHorizontal:wp('6%'), }}>Start the job!</Text>
                  </ImageBackground>
            
           </View>

           <View style={{flex:7.5}}>
           <MapView
          style={{ alignSelf: 'stretch', height:hp('30%'),width:wp('100%'),position:'absolute'}}
          region={this.state.mapRegion}
          
          annotations={this.markers}
            >
          <Marker
                    key={1}
                    title={'climbsmedia'}
                    description={'empresa'}
                    coordinate={{ latitude:40.4159034,
                                 longitude:-3.6977898,}}
                />
        </MapView>
                
               <View style={{position:'absolute',top:hp('2%'),right:wp('3%')}}>
                      <Image source={require('../assets/iconos/ubica.png')} 
                                    style={{borderRadius:hp('10%'), }}
                                    />
                    </View>

                    <View style={{position:'absolute',top:hp('10%'),right:wp('3%')}}>
                      <Image source={require('../assets/iconos/flechaUbica.png')} 
                                   style={{borderRadius:hp('10%'),}}
                                    />
                    </View>
                
                
                
                     <View style={{backgroundColor:'white',
                                 marginTop:hp('25%'), borderTopStartRadius:hp('4.5%'),  borderTopEndRadius:hp('4.5%'),
                                 alignItems:'center',paddingBottom: hp('3%'), }}>

                           <View style={{backgroundColor:'#d7d7df',height:hp('1.5%'),width:wp('20%'),
                                      borderRadius:hp('2%'),marginTop:hp('2%')}}>
                           </View>

                           <Text style={{marginTop:hp('2%'),
                              color:'#25265e' , fontSize:hp('2.6%'), fontWeight:'500'
                          }}>Go to car location and make</Text>
                           
                          <Text style={{marginTop:hp('1%'),
                              color:'#25265e' , fontSize:hp('2.6%'), fontWeight:'500'
                          }}>Check In to start</Text>
                              <View  style={{flexDirection:'row',marginTop:hp('1%')}}>
                                 <View style={{flex:2.5 , alignItems:'flex-end'}}>
                                    <Image source={require('../assets/iconos/ubicalitle.png')} 
                                    style={{ marginRight:wp('6%'),marginTop:hp('0.5%'),
                                              height:hp('2.4%')}}
                                    />
                                 </View>
                                 <View style={{flex:7.5}}>
                                   <Text style={{
                                   color:'#787993' , fontSize:hp('2.4%'), fontWeight:'300'
                                   }}>University of Washington</Text>
                                 </View>
                              
                              </View>


                            <View style={{flexDirection:'row', marginTop:hp('2.1%') }}>
           
                               <View style={{ borderRadius:hp('1.5%'),
                                  marginLeft:wp('6%') }}>

                                  <Image source={require('../assets/coches/user1/cocheuse3.png')} 
                                          style={{height:hp('14%'),width:hp('15%'),borderRadius:hp('1.5%')}}
                                             />
                                 
                                </View>
                                <View style={{  borderRadius:hp('1.5%'),
                                       marginHorizontal:wp('2%')
                                   }}>

                                  <Image source={require('../assets/coches/user1/cocheuse2.png')} 
                                        style={{height:hp('14%'),width:hp('15%'),borderRadius:hp('1.5%')}}
                                             />
                                   
                               </View>
                    
                               <View style={{ 
                                     borderRadius:hp('1.5%') ,marginRight:wp('6%')
                                   }}>

                                  <Image source={require('../assets/coches/user1/cocheuse2.png')} 
                                       style={{height:hp('14%'),width:hp('15%'),borderRadius:hp('1.5%') }}
                                             />
                                  
                               </View>
                        </View>                     

                               {/*---boton final-- */}
                             
                             <TouchableOpacity 
                                 style={{width:wp('75%'),marginTop:hp('5%'),marginBottom:hp('5%')}}
                                 onPress={() =>this.props.navigation.navigate("washerProgres1") }
                                   >  
                                <LinearGradient colors={['#6c30cc','#2d7cf7']}
                                  style={{ 
                                      borderRadius:wp('7%'),alignItems: 'center',
                                        padding:hp('2%')}}
                                         start={[0.1,0.1]}
                                          end={[0.6,0.6]}
                                           ><Text style={{
                                               color:'white',fontSize:hp('2.7%')
                                          }}>Check In</Text>
                               </LinearGradient>
                             </TouchableOpacity>
                                  
                   </View>
 
           </View>
           
      </View>
    );
  }
}

 
const styles = StyleSheet.create({
   
    

});