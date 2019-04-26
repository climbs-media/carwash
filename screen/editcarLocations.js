import React, { Component } from 'react';
import {Alert,Platform,
  StyleSheet,TouchableWithoutFeedback,Keyboard,
  Text,Dimensions ,ImageBackground,
  View,Image,TouchableOpacity,TextInput,ScrollView,
} from 'react-native';
  
import {LinearGradient ,Constants, MapView } from  'expo';
import {widthPercentageToDP as wp, heightPercentageToDP as hp} from 'react-native-responsive-screen';
const {Marker} = MapView;
//https://expo.github.io/vector-icons/
 
export default class EditCarLocation extends Component {


    static navigationOptions = {
        header: null ,
    };

    
  constructor(props) {
    super(props);
  
    this.state = {
        precio:25,
        time:50,

        modalVisible: false,
        fondoPrincipal:'',

        //estrellas
        estrella1: require('../assets/iconos/startGrey.png'),
         estrella2: require('../assets/iconos/starYellow.png'),
        estrella3: require('../assets/iconos/startGrey.png'),

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
  

    return (

 
      <View style={{flex:1}}>
           <View style={{ flex:2.5}}>
           <TouchableWithoutFeedback onPress={Keyboard.dismiss} accessible={false}>
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
                    }}>Edit car location</Text>
              </ImageBackground>
              </TouchableWithoutFeedback>
           </View>
          
           <View style={{flex:7.5}}>
           <MapView
          style={{ alignSelf: 'stretch', height:hp('30%'),width:wp('100%'),position:'absolute'}}
          region={this.state.mapRegion}
          
          annotations={this.markers}
            >
          <Marker
                    key={1}
                    title={'titulo'}
                    description={'describe'}
                    coordinate={{ latitude:40.4159034,
                                 longitude:-3.6977898,}}
                />
        </MapView>


          <TouchableWithoutFeedback onPress={Keyboard.dismiss} accessible={false}>
               <View> 
                 
                     {/* BUSCADOR*/}
              <View style={{ marginHorizontal:wp('4%'),paddingVertical:hp('2%'),flexDirection:'row' }}>
                <View style={{flexDirection:'row',flex:5,backgroundColor:'#fff',paddingLeft:wp('3.5%'),
                      alignItems:'center',borderRadius:hp('3%')}}>
                      <View style={{ width:wp('10%'),height:hp('5%')}}>
                     <Image source={require('../assets/iconos/lupa.png')} 
                          style={{borderRadius:hp('1.5%'),marginTop:hp('0.7%'),
                              width:wp('6.5%'),height:hp('4%')}}
                      />
                      </View>
                    <TextInput
                        style={{
                    
                       height:hp('6.1%'),
                       width:wp('55%'),
                     
                       borderRadius:hp('1.5%'),
                    
                    } }
                    placeholder="Search......"
                    editable={true} // con false , no podremos escribir nada
                    borderBottomColor = '#e2e7ee'
                    borderBottomWidth ={1}
                    paddingHorizontal={5}
                    onChangeText={
                      (text3)=>{
                        this.setState(()=> {
      
                                          return {
                                            tytexto:text3,
                                          }
                               })
                      }
                      
      
                      }//fin de onchange
                   />
                    <View style={{ width:wp('10%'),height:hp('5%'),marginLeft:wp('12%')}}>
                     <Image source={require('../assets/iconos/closegris.png')} 
                          style={{borderRadius:hp('1.5%'),width:'70%',height:'90%'}}
                      />
                      </View>
              </View>
                 
            </View> 
                 
            </View>   
            </TouchableWithoutFeedback>     
                   <View style={{backgroundColor:'white',marginTop:hp('17%'),flex:1,
                                  borderTopStartRadius:hp('4.5%'),  borderTopEndRadius:hp('4.5%'),
                                  }}>
                          
                             <View style={{flexDirection:'row',paddingBottom:hp('3%'),
                             borderBottomColor:'#F8F4F4',borderBottomWidth:hp('1.5%'),paddingHorizontal:wp('4%'),
                              marginTop:hp('3%')}}>
                              <View style={{flex:9,justifyContent:'center'}}>
                              <Text style={{  color:'#4554e5' , fontSize:hp('2.3%') , fontWeight:'500'
                               }}>Use my current location</Text>
                                </View>
                                 <Image source={require('../assets/iconos/flech.png')} 
                                       style={{flex:1, width:wp('3.75%'),height:hp('3.75%')}} />
                            
                              </View>
      
                                  {/*  bloque popular location */}
      
                               <Text style={{color:'#25265e',
                                   marginLeft:wp('4%'),marginTop:hp('2%'),fontSize:hp('2.3%'),fontWeight:'500'
                               }}>Popular Locations</Text>
                               
                               <View style={{height:hp('15%')}}>
                               <ScrollView>
                                
                               <View style={{flexDirection:'row' ,marginHorizontal:wp('4%'), marginTop:hp('2%') ,
                                   borderBottomColor:'#F8F4F4',borderBottomWidth:hp('0.2%'),paddingBottom:'3%'
                                  }}>
                                   <View style={{flex:1.5}}>
                                   <Image source={require('../assets/iconos/ubicalitle.png')} 
                                  style={{ width:wp('5%'),height:hp('3.5%') }}
                                   />
                                   </View>
                                   <View style={{flex:7.5}}>
                                   <Text style={{
                                     color:'#25265e' , fontSize:hp('2%') , fontWeight:'300'
                                   }}>University of Washington</Text> 
                                   </View>
                                 
                                   <TouchableOpacity 
                                  style={{flex:1 ,marginTop:hp('-1.5%')}}

                                    onPress = { () => {
                                      if (this.state.estrella1 == require('../assets/iconos/starYellow.png'))
                                      {
                                          this.setState({
                                            estrella1 : require('../assets/iconos/startGrey.png')
                                          })
                                      }
                                      else{
                                          this.setState({
                                            estrella1 : require('../assets/iconos/starYellow.png')
                                          })
                                      }
                                  }}
                                    >
                                    <Image source={this.state.estrella1} 
                                  style={{width:wp('8%'),height:hp('4.5%') }}
                                   />
                                   </TouchableOpacity>
                                 
                                  </View>
                                 
                                  <View style={{flexDirection:'row' ,marginHorizontal:wp('4%'), marginTop:hp('2%') ,
                                   borderBottomColor:'#F8F4F4',borderBottomWidth:hp('0.2%'),paddingBottom:'3%'
                                  }}>
                                   <View style={{flex:1.5}}>
                                   <Image source={require('../assets/iconos/ubicalitle.png')} 
                                  style={{ width:wp('5%'),height:hp('3.5%') }}
                                   />
                             
                                   </View>
                                   <View style={{flex:7.5}}>
                                   <Text  style={{
                                     color:'#25265e' , fontSize:hp('2%') , fontWeight:'300'
                                   }}>Woodland Park</Text>
                                   </View>
                                   <TouchableOpacity 
                                  style={{flex:1,marginTop:hp('-1.5%')}}

                                    onPress = { () => {
                                      if (this.state.estrella2 == require('../assets/iconos/starYellow.png'))
                                      {
                                          this.setState({
                                            estrella2 : require('../assets/iconos/startGrey.png')
                                          })
                                      }
                                      else{
                                          this.setState({
                                            estrella2 : require('../assets/iconos/starYellow.png')
                                          })
                                      }
                                  }}
                                    >
                                    <Image source={this.state.estrella2} 
                                  style={{ width:wp('8%'),height:hp('4.5%') }}
                                   />
                                  </TouchableOpacity>
                                </View>
      
                                <View style={{flexDirection:'row',paddingBottom:hp('3%'),
                             borderBottomColor:'#FCFAFA',borderBottomWidth:hp('1.5%'),paddingHorizontal:wp('4%'),
                              marginTop:hp('3%')}}>
                                   <View style={{flex:1.5}}>
                                   <Image source={require('../assets/iconos/ubicalitle.png')} 
                                  style={{ width:wp('5%'),height:hp('3.5%') }}
                                   />
                                   </View>
                                   <View style={{flex:7.5}}>
                                   <Text style={{
                                     color:'#25265e' , fontSize:hp('2%') , fontWeight:'300'
                                   }}>University of Washington</Text> 
                                   </View>
                                 
                                   <TouchableOpacity 
                                  style={{flex:1 ,marginTop:hp('-1.5%')}}

                                    onPress = { () => {
                                      if (this.state.estrella1 == require('../assets/iconos/starYellow.png'))
                                      {
                                          this.setState({
                                            estrella1 : require('../assets/iconos/startGrey.png')
                                          })
                                      }
                                      else{
                                          this.setState({
                                            estrella1 : require('../assets/iconos/starYellow.png')
                                          })
                                      }
                                  }}
                                    >
                                    <Image source={this.state.estrella1} 
                                  style={{width:wp('8%'),height:hp('4.5%') }}
                                   />
                                   </TouchableOpacity>
                                 
                                  </View>
                                </ScrollView>
                              </View> 
              
            
                               {/*---boton final-- */}
                             
                         <View style={{alignItems:'center',marginBottom:hp('3%')}}>
                          <TouchableOpacity 
                                 style={{width:wp('75%'),marginTop:hp('5%')}}
                                 onPress={() =>Alert.alert('changes ok')}
                                   >  
                                <LinearGradient colors={['#6c30cc','#2d7cf7']}
                                  style={{ 
                                      borderRadius:wp('7%'),alignItems: 'center',
                                        padding:hp('2%')}}
                                         start={[0.1,0.1]}
                                          end={[0.6,0.6]}
                                           ><Text style={{
                                               color:'white',fontSize:hp('2.7%')
                                          }}>Save changes</Text>
                               </LinearGradient>
                             </TouchableOpacity>
                             </View>


                             
                   </View>
               
           </View>
      </View>

    
    );
  }
}

 
const styles = StyleSheet.create({
   
    

});