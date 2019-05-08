import React, { Component } from 'react';
import {Alert,Platform,
  StyleSheet,Modal,
  Text,Dimensions ,ImageBackground,
  View,Image,TouchableOpacity,TextInput,ScrollView,
} from 'react-native';

 
import {LinearGradient ,Constants, MapView } from  'expo';
import {widthPercentageToDP as wp, heightPercentageToDP as hp} from 'react-native-responsive-screen';
const {Marker} = MapView;
 
export default class Request3 extends Component {


    static navigationOptions = {
        header: null ,
    };

    
  constructor(props) {
    super(props);
  
    this.state = {
        precio:25,
        time:50,

        //PARA VENTANA MODAL
         modalVisible: false,

           //para mapa
         mapRegion: {
          latitude:40.4159034,
          longitude:-3.6977898,
          latitudeDelta: 0.0022,
          longitudeDelta: 0.0021,
        },
 
       }
    }

  
   //PARA VENTANA MODAL
toggleModal(visible) {
  this.setState({ modalVisible: visible });
}

  render() {
    let screenWidth=Dimensions.get('window').width;
    let screenHeight=Dimensions.get('window').height;
  
    
   
   
    if(screenHeight<=592){
      widfot='23%';
      widmodfo='25%';
        LeftModal=screenWidth-wp('90%');
    }else if(screenHeight<=678){
      widfot='23%';
      widmodfo='25%';
        LeftModal=screenWidth-wp('92%');
   }else if(screenHeight<=684){
    widfot='22.5%';
      widmodfo='25%';
    LeftModal=screenWidth-wp('89%');
   } else if(screenHeight<=775){
    widfot='23%';
      widmodfo='25%';
        LeftModal=screenWidth-wp('92%');
   }
   else{
    widfot='26%';
    widmodfo='32%';
    LeftModal=screenWidth-wp('97.5%');
   }

    return (


      <View style={{flex:1}}>

<Modal

      transparent = {true}
          animationType="fade"
              visible = {this.state.modalVisible}
              onRequestClose = {() => { console.log("Modal has been closed.") } }
              >
          
                  <View style = {styles.modal}>
             {/*
                <Text style = {styles.text}>Modal is open!</Text>
                 
                 <TouchableOpacity onPress = {() => {
                    this.toggleModal(!this.state.modalVisible)}}>
                    
                    <Text style = {styles.text}>Close Modal</Text>
                 </TouchableOpacity> */}
                 </View> 

           

                 <View style={{backgroundColor:'white',borderRadius:hp('3%'),
                          position:'absolute',top:hp('25%'),
                    left:LeftModal,paddingHorizontal:wp('10%'),  paddingVertical:hp('5%')}}> 

                    
                         <View style={{alignItems:'center',marginTop:hp('-8%')}}>
                         <Image  
                         source={require("../assets/usuarios/user.jpg")}
                         style={{height:hp('15%'),width:wp(widmodfo),borderRadius:hp('10%')}}
                             />

                  <Text style={{marginTop:hp('1.5%'),
                            color:"#25265e",  fontSize: hp('3%'), fontWeight:'500',
                          }} >Please, confirm payment!</Text>

                      <Text style={{ textAlign:'center',
                     color:"#25265e",  fontSize: hp('2.3%'), marginLeft:hp('0.6%'),
                     marginRight:hp('0.6%'), fontWeight: "normal",
                       marginVertical:hp('1.5%')}}>
                           This service will be charge {'\n'}
                          in your credit card </Text>

                          <TouchableOpacity 
                           style={{width:'120%',marginTop:'5%'}}
                           onPress={() =>{
                            this.toggleModal(!this.state.modalVisible);
                            this.props.navigation.navigate("request5") ;
                          }
                        
                        
                        }
                             >  
                          <LinearGradient colors={['#6c30cc','#2d7cf7']}
                            style={{ 
                                borderRadius:50,alignItems: 'center',
                                  padding:hp('2.5%')}}
                                   start={[0.1,0.1]}
                                    end={[0.6,0.6]}
                                     ><Text style={{
                                         color:'white',fontSize:hp('2.3%')
                                    }}>Confirm payment</Text>
                         </LinearGradient>
                       </TouchableOpacity>
                       <TouchableOpacity 
                           style={{marginTop:hp('2.5%')}}
                           onPress={() => {
                            this.toggleModal(!this.state.modalVisible);
                             this.props.navigation.navigate("") ;
                            //    this.cancelar(); 
                              
                              }}
                             > 
                        <Text style={{
                             color:'#4554e5',fontSize:hp('2.3%'),fontWeight:'500'
                        }}>Cancel request</Text>
                             </TouchableOpacity>

                </View>

 
                       </View>
            
           </Modal>


 
           <View style={{ flex:2.5}}>
          
           <ImageBackground source={require('../assets/mixto/fondoReal.png')}
             style={{width: '100%', height: '100%'}} >
                <TouchableOpacity
                 onPress={() => this.props.navigation.pop()} 
                 style={{width:wp('15%'),marginTop:hp('7%'),marginHorizontal: wp('6%')}} >
                 
                 <Image source={require('../assets/iconos/retrocedeArrow.png')} 
                  style={{ }}
                   />
          
             </TouchableOpacity>
                 <Text style={{marginTop:hp('6%'),marginHorizontal:wp('4%'),
                   color:'#fff' , fontSize:hp('4%'), fontWeight:'500'
                  }}>Washer nearby</Text>
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
                    title={'titulo'}
                    description={'describe'}
                    coordinate={{ latitude:40.4159034,
                                 longitude:-3.6977898,}}
                />
        </MapView>

                   <View style={{backgroundColor:'white',marginHorizontal:wp('2%'),flex:1,
                                 marginTop:hp('25%'), borderTopStartRadius:hp('4.5%'),  borderTopEndRadius:hp('4.5%'),
                                 alignItems:'center' }}>
                           <Image source={require('../assets/usuarios/influencer.png')} 
                             style={{ marginTop:hp('-2.5%'),borderRadius:hp('25%'),height:hp('13%') ,width:wp(widfot)}} />
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
                             

                             <View style={{alignItems:'center',marginTop:hp('5%')}}>
                                 <TouchableOpacity 
                                 style={{width:wp('75%')}}
                                onPress = { () => this.toggleModal(true)}
                                 >  
                                
                                <LinearGradient colors={['#6c30cc','#2d7cf7']}
                                  style={{ 
                                      borderRadius:wp('7%'),alignItems: 'center',
                                        padding:hp('2%')}}
                                         start={[0.1,0.1]}
                                          end={[0.5,0.5]}
                                           ><Text style={{
                                               color:'white',fontSize:hp('2.7%')
                                          }}>Confirm Washer</Text>
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
      padding:hp('0.4%'),
      flexDirection:'row',
      marginLeft:wp('5%')
     },
     texto:{
        color:'#787993',fontSize:hp('1.8%'),fontWeight:'500'
     },
     texto2:{
          
        color:'#25265e',fontSize:hp('3%') ,fontWeight:'500'
     },
     
        // ventana modal
modal: {
  flex: 1,
  alignItems: 'center',
  backgroundColor: '#010449',
 opacity:0.6
},
text: {
  color: '#3f2949',
  marginTop: hp('1.5%')
},

containerbuttonModal:{
backgroundColor: '#ff5a60',
width:'80%',
paddingVertical:hp('1.8%'),
borderRadius:hp('4.3%'),
textAlign:"center",
marginTop:hp('3%'),
 

},

});