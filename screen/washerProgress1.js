import React, { Component } from 'react';
import {Alert,Platform,
  StyleSheet,
  Text,Dimensions ,ImageBackground,
  View,Image,TouchableOpacity,TextInput,ScrollView,
} from 'react-native';

import {widthPercentageToDP as wp, heightPercentageToDP as hp} from 'react-native-responsive-screen';
import {LinearGradient ,Constants, MapView } from  'expo';
const {Marker} = MapView;
 
export default class WasherProgres1 extends Component {

 
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
    let screenHeight=Dimensions.get('window').height;
    widthScre='';
    // alert(screenHeight);
   //alert(screenHeight*0.12);

   if(screenHeight<=592){
    widthScre='23%';
    widthDos='15%';
   widMens='15.5%',
   heiMens='8.2%'
   widTef='13%';
   heiTef='7.8%';
   fonttext='2.7%'
  
  }else if(screenHeight<=678){
     widthScre='25.5%';
     widthDos='17%';
     widMens='15.5%',
     heiMens='7.5%'
     widTef='13%';
     heiTef='7%';
     fonttext='2.7%'
   }else if(screenHeight<=684){
    widthScre='23.5%';
    widthDos='15%';
    widMens='15.5%';
    heiMens='8.5%';
     widTef='13%';
    heiTef='8%';
    fonttext='2.7%'
   }else if(screenHeight<=775){
    widthScre='25.5%';
     widthDos='17%';
     widMens='15.5%',
     heiMens='7.5%'
     widTef='13%';
     heiTef='7%';
     fonttext='2.7%'
   }else{
    widthScre='27%';
     widthDos='19%';
     widMens='16%',
     heiMens='6.5%'
     widTef='14.5%';
     heiTef='7%';
     fonttext='2.3%'
   }
 
    return (
  

      <View style={[{flex:1},this.state.fondoPrincipal]}>
           <View style={{ flex:3}}>
           <ImageBackground source={require('../assets/mixto/fondoVerde.png')}
         style={{width: '100%', height: '100%'}} >
          
          <View style={{flexDirection:'row',marginTop:hp('6%'),
          marginHorizontal:wp('7%')}}>
          
              <View style={{
                flex:5
              }}>
               <View style={{
            
               }}>
                  <Image source={require('../assets/usuarios/carla.png')} 
                style={{  borderColor:'white',borderWidth:wp('1%'),
                     height:hp('13.5%'),width:wp(widthScre) ,borderRadius:hp('20%')}} />

               </View>
               
                    <Text style={{marginTop:hp('1%'),marginBottom:hp('1%'),
                          color:'#fff' , fontSize: hp('3%') , fontWeight:'500'
                      }}>Karina Smith</Text>
                          <View  style={styles.estrellasimagen}>
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
               
          
          <View style={{flex:5,flexDirection:'row',paddingTop:hp('1%')}}>
               <View style={{
                flex:2.5,alignItems:'flex-end',
               }}>
                <Image source={require('../assets/iconos/tfnoVerd.png')} 
                                 style={{ width:wp(widTef) ,height:hp(heiTef)}}
                               />
               
               </View>
               <TouchableOpacity 
                                 style={{  flex:2.5,alignItems:'flex-end',
                                  width:wp('20%') ,height:hp('10%')}}
                                 onPress={() =>this.props.navigation.navigate("chatWithClient") }
                                   > 
                <Image source={require('../assets/iconos/msgeVerd.png')} 
                               style={{ width:wp(widMens) ,height:hp(heiMens)}}
                               />
               
               </TouchableOpacity>
            </View>


          </View>

        
        </ImageBackground>
          </View>

           <View style={{flex:7}}>
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
                
                    <View style={{position:'absolute',top:'4%',right:'3%'}}>
                      <Image source={require('../assets/iconos/ubica.png')} 
                                    style={{borderRadius:100, }}
                                    />
                    </View>

                    <View style={{position:'absolute',top:'15%',right:'3%'}}>
                      <Image source={require('../assets/iconos/flechaUbica.png')} 
                                   style={{borderRadius:100}}
                                    />
                    </View>
                
                
                
                       <View style={{
                          marginTop:hp('7%'),
                       position:'absolute',
                        left:wp('27%')
                       }}>
                        <Image source={require('../assets/usuarios/limpia_hernan.png')} 
                       style={{  height:hp('9%'),width:wp(widthDos),   borderColor:'white',borderWidth:wp('0.5%'),
                        borderRadius:hp('20%')}} />

                        </View>
    



                     <View style={{backgroundColor:'white',
                                 marginTop:hp('20%'), borderTopStartRadius:30,  borderTopEndRadius:30,
                               
                               }}>
         
                      <View style={{alignItems:'center',marginTop:hp('2%')}}>
                           <View style={{backgroundColor:'#d7d7df',height:hp('1%'),width:wp('20%'),
                                      borderRadius:10,}}>
                           </View>
                           <Text style={{marginTop:hp('1%') ,
                              color:'#787993' , fontSize:hp('2.3%') , fontWeight:'500'
                               }}>Services requested</Text>
                              <Text style={{ marginBottom:'1.5%',
                              color:'#25265e' , fontSize:hp('2%')  , fontWeight:'500'
                               }}>Complete: Exterior and Interior Wash</Text>

                      </View>

                      <View  style={{
                                   flexDirection:'row',
                                   marginBottom:hp('2%'),
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
                                        borderLeftWidth: 0.5,  
                                        marginRight: hp('6%'),
                                        alignItems:"center"
                                    }}>
                                          <Text style={styles.texto}>Estimate Time</Text> 
                                          <Text style={styles.texto2}>{this.state.time} min</Text> 
                                    </View>

                               </View>
                     
                        {/*linea de tiempo vertical */}

               <View style={{height:hp('20%')}}>
                   <ScrollView>
                    <View style={{flexDirection:'row',marginTop:hp('2.5%'),
                                paddingTop:hp('2%')}}>
                         <View style={{flex:1.5,alignItems:'center' }}>
                           <View style={styles.circuloElegido}>
                          </View>
                          <Text style={styles.baraLineaElegida}>|</Text>
                        </View>
                        <View style={{flex:8.5 ,flexDirection:'row',}}>
                          
                           <Image source={require('../assets/iconos/washProgres1.png')} 
                               style={{flex:0.8, height:hp('4%'),width:wp('5%'),marginTop:hp('-1.5')}}
                                />

                          
                            <Text style={styles.textoElegido}>Washer is arrived to your car</Text>
                         
                        </View>
                    </View>
                    <View style={{flexDirection:'row'}}>
                         <View style={{flex:1.5,alignItems:'center' }}>
                           <View style={styles.circuloElegido}>
                          </View>
                          <Text style={styles.baraLineaElegida}>|</Text>
                        </View>
                        <View style={{flex:8.5 ,flexDirection:'row',}}>
                          
                           <Image source={require('../assets/iconos/washProgres2.png')} 
                               style={{ flex:0.8,height:hp('4%'),width:wp('5%'),marginTop:hp('-1.5')}}
                                />

                          
                            <Text style={styles.textoElegido}>Take photos of your car</Text>
                         
                        </View>
                    </View>
                    <View style={{flexDirection:'row'}}>
                         <View style={{flex:1.5,alignItems:'center' }}>
                           <View style={styles.circuloElegido}>
                          </View>
                          <Text style={styles.baraLineaBlanco}>|</Text>
                        </View>
                        <View style={{flex:8.5 ,flexDirection:'row',}}>
                          
                           <Image source={require('../assets/iconos/cleaexte.png')} 
                               style={{ flex:0.8,height:hp('4%'),width:wp('5%'),marginTop:hp('-1.5')}}
                                />

                          
                            <Text style={styles.textoElegido}>Clean the exterior of your car</Text>
                         
                        </View>
                    </View>
                    <View style={{flexDirection:'row'}}>
                         <View style={{flex:1.5,alignItems:'center' }}>
                           <View style={styles.circuloBlanco}>
                          </View>
                          <Text style={styles.baraLineaBlanco}>|</Text>
                        </View>
                        <View style={{flex:8.5 ,flexDirection:'row',}}>
                          
                           <Image source={require('../assets/iconos/washProgres3.png')} 
                               style={{flex:0.8, height:hp('4%'),width:wp('5%'),marginTop:hp('-1.5')}}
                                />

                          
                            <Text style={styles.textoBlanco}>Clean the interior of your car</Text>
                         
                        </View>
                    </View>
                    <View style={{flexDirection:'row'}}>
                         <View style={{flex:1.5,alignItems:'center' }}>
                           <View style={styles.circuloBlanco}>
                          </View>
                        </View>
                        <View style={{flex:8.5 ,flexDirection:'row',}}>
                          
                           <Image source={require('../assets/iconos/takefoto.png')} 
                               style={{flex:0.8, height:hp('4%'),width:wp('5%'),marginTop:hp('-1.5')}}
                                />

                          
                            <Text style={styles.textoBlanco}>Take pictures of your car</Text>
                         
                        </View>
                    </View>
                    </ScrollView>
                  </View>

 
                            {/*---boton final-- */}
                           <View style={{alignItems:'center',marginTop:hp('2.1%'),marginBottom:hp('5%')}}>
                        
                           <TouchableOpacity 
                                 style={{width:wp('75%')}}
                                 onPress={() =>this.props.navigation.navigate("washerProgress2") }
                                   >  
                                <LinearGradient colors={['#6c30cc','#2d7cf7']}
                                  style={{ 
                                      borderRadius:wp('7%'),alignItems: 'center',
                                        padding:hp('2%')}}
                                         start={[0.1,0.1]}
                                          end={[0.6,0.6]}
                                           ><Text style={{
                                               color:'white',fontSize:hp(fonttext)
                                          }}>Take photos of the vehicle</Text>
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

    padding:'2%',
    flexDirection:'row',
   
  
 },
 texto:{
    color:'#787993',fontSize:hp('1.8%') ,fontWeight:'500'
 },
 texto2:{
      
    color:'#25265e',fontSize:hp('2.2%') ,fontWeight:'500'
 },
   
  circuloElegido:{
    backgroundColor:'#6c30cc',
    borderRadius:10,
    padding:hp('0.8%'),
    marginBottom:hp('0.2%')
    },
    
     baraLineaElegida:{
      backgroundColor:'#6c30cc',
      fontSize:hp('2%'),
       height:hp('4%'),
       color:'#6c30cc'
     },
    
     textoElegido:{flex:9.2,
      color:'#25265e',fontSize:hp('2%') ,fontWeight:'500',marginLeft:wp('5%'),marginTop:hp('-1%')
     },
     circuloBlanco:{
      backgroundColor:'#d7d7df',
      borderRadius:10,
      padding:hp('0.8%'),
      marginBottom:hp('0.2%'),
    },
    
       baraLineaBlanco:{
        backgroundColor:'#d7d7df',
        fontSize:hp('2%'),
         height:hp('4%'),
         color:'#d7d7df'
       },
    
       textoBlanco:{
        flex:9.2,
        color:'#d7d7df',fontSize:hp('2%') ,fontWeight:'500',marginLeft:wp('5%'),marginTop:hp('-1%')
       },
    
});