import React, { Component } from 'react';
import {Alert,Platform,
  StyleSheet,Text,Dimensions ,ImageBackground,
  View,Image,TouchableOpacity,TextInput,ScrollView,
} from 'react-native';

 
import {LinearGradient ,Constants, MapView } from  'expo';
import {widthPercentageToDP as wp, heightPercentageToDP as hp} from 'react-native-responsive-screen';
const {Marker} = MapView;
 
export default class WasherRequestDetail extends Component {


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
  
    let screenHeight=Dimensions.get('window').height;
   
    if(screenHeight<=678){
        wifoto='25%';
       
   }else{
         wifoto='23%';
   
   }


   if(screenHeight<=592){
    wifoto='25%';
  }else if(screenHeight<=678){
    wifoto='25%';
 }else if(screenHeight<=684){
  wifoto='23%';
 }else if(screenHeight<=775){
  wifoto='25%';
 }else{
  wifoto='27%';
 }

   

    return (


      <View style={[{flex:1},this.state.fondoPrincipal]}>
           <View style={{ flex:2.5}}>
          
           <ImageBackground source={require('../assets/mixto/fondoReal.png')}
             style={{width: '100%', height: '100%'}} >
                <TouchableOpacity
                 onPress={() => this.props.navigation.pop()} 
                 style={{width:wp('15%'),marginTop:hp('8%'),marginHorizontal: wp('6%'),}} >
                 
                 <Image source={require('../assets/iconos/retrocedeArrow.png')} 
                  style={{ }}
                   />
          
    </TouchableOpacity>
                 <Text style={{  color:'white',
       fontSize: hp('4%'),
           fontWeight:'bold',
              marginTop:hp('4%'),
             marginHorizontal:wp('6%'),
                  }}>Request detail</Text>
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
                
                          <View style={{backgroundColor:'white',marginHorizontal:wp('2%'),
                                 marginTop:hp('25%'), borderTopStartRadius:hp('4.5%'),  borderTopEndRadius:hp('4.5%'),
                                 alignItems:'center' }}>
                           <Image source={require('../assets/usuarios/influencer.png')} 
                             style={{ marginTop:hp('-2.5%'),borderRadius:hp('25%'),height:hp('13%') ,width:wp(wifoto)}} />
                          <Text style={{marginTop:hp('1%'),marginBottom:hp('1%'),
                              color:'#25265e' , fontSize:hp('3%') , fontWeight:'500'
                          }}>Gregory Smith</Text>
                              <View  style={styles.estrellasimagen}>
                                                            <Image source={require('../assets/iconos/starYellow.png')} 
                                                              style={{ width:wp('3%'),height:hp('1.8%')}}
                                                             />
                                                          <Image source={require('../assets/iconos/starYellow.png')} 
                                                             style={{ width:wp('3%'),height:hp('1.8%'),marginLeft:wp('0.4%')}}
                                                            />
                                                         <Image source={require('../assets/iconos/starYellow.png')} 
                                                          style={{ width:wp('3%'),height:hp('1.8%'),marginLeft:wp('0.4%')}}
                                                             />
                                                        <Image source={require('../assets/iconos/starYellow.png')} 
                                                          style={{ width:wp('3%'),height:hp('1.8%'),marginLeft:wp('0.4%')}}
                                                          />
                                                        <Image source={require('../assets/iconos/startGrey.png')} 
                                                         style={{ width:wp('3%'),height:hp('1.8%'),marginLeft:wp('0.4%')}}
                                                          />
                                              </View>
                                              <View style={{alignItems:'center',marginTop:hp('1%')}}>
                           
                                          <Text style={{
                                           color:'#787993' , fontSize:hp('2.3%') , fontWeight:'500'
                                             }}>Services requested</Text>
                                             <Text style={{ marginBottom:hp('0.7%'),
                                                 color:'#25265e' , fontSize:hp('2%')  , fontWeight:'500'
                                              }}>Complete: Exterior and Interior Wash</Text>

                                                </View>
                                                <View  style={{
                                   flexDirection:'row'
                               }}>
                                    <View style={{
                                       flex:1,
                                        marginLeft: hp('6%'),
                                        alignItems:"center"
                                    }}>
                                        <Text style={styles.texto}>Estimate Price</Text>
                                        <Text style={styles.texto2}>${this.state.precio}.00</Text>
                                    </View>
                                    <View  style={{
                                        flex:1,
                                        borderLeftColor:'#787993', 
                                        borderLeftWidth: wp('0.2%'),  
                                        marginRight: hp('6%'),
                                        alignItems:"center"
                                    }}>
                                          <Text style={styles.texto}>Estimate Time</Text> 
                                          <Text style={styles.texto2}>{this.state.time} min</Text> 
                                    </View>

                               </View>
                               {/*---boton final-- */}
                             

                             <View style={{alignItems:'center',marginTop:hp('5%'),marginBottom:hp('2.9%')}}>
                                 <TouchableOpacity 
                                 style={{width:wp('75%')}}
                                 onPress={() =>
                                  this.props.navigation.navigate("washerRequestAcepted")} 
                                   >  
                              
                                
                                <LinearGradient colors={['#6c30cc','#2d7cf7']}
                                  style={{ 
                                      borderRadius:wp('7%'),alignItems: 'center',
                                        padding:hp('2%')}}
                                         start={[0.1,0.1]}
                                          end={[0.5,0.5]}
                                           ><Text style={{
                                               color:'white',fontSize:hp('2.7%')
                                          }}>Acept request</Text>
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
    estrellasimagen:{

        padding:hp('0.6%'),
        flexDirection:'row',
      
     },
     texto:{
        color:'#787993',fontSize:hp('1.8%') ,fontWeight:'500'
     },
     texto2:{
          
        color:'#25265e',fontSize:hp('3%') ,fontWeight:'500'
     },
     

});