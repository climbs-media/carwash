import React, { Component } from 'react';
import {Alert,Platform,Modal,
  StyleSheet,TouchableWithoutFeedback,Keyboard,Dimensions,
  Text,KeyboardAvoidingView,ImageBackground,
  View,Image,TouchableOpacity,TextInput,ScrollView,BackHandler 
} from 'react-native';
 
import { ImagePicker ,Camera, Permissions} from 'expo';
import {Ionicons}  from "@expo/vector-icons"
import {LinearGradient} from  'expo';
import {widthPercentageToDP as wp, heightPercentageToDP as hp} from 'react-native-responsive-screen';

//https://expo.github.io/vector-icons/
 
export default class WasherProgress2 extends Component {


    static navigationOptions = {
        header: null ,
    };

    
  constructor(props) {
    super(props);
     // para el retroceso
     this.back_Button_Press = this.back_Button_Press.bind(this);
  
    this.state = {
        precio:25,
        time:50,

        image1:null,
        inicio:'flex',
        foto:'none',
        image2:null,
        inicio2:'flex',
        foto2:'none',
        image3:null,
        inicio3:'flex',
        foto3:'none',
        image4:null,
        inicio4:'flex',
        foto4:'none',
        image5:null,
        inicio5:'flex',
        foto5:'none',
        image6:null,
        inicio6:'flex',
        foto6:'none',
        
        isCapturing: false,
        hasCameraPermission: null,
        elemento:'',

        
         //PARA VENTANA MODAL
         modalVisible: false,

         atras:true, //posicion de la camara
        
    }
}

async componentWillMount() {
  const { status } = await Permissions.askAsync(Permissions.CAMERA);
  this.setState({ hasCameraPermission: status === 'granted' });
 
  BackHandler.addEventListener('hardwareBackPress', this.back_Button_Press);
}


componentWillUnmount() {
 
  BackHandler.removeEventListener('hardwareBackPress', this.back_Button_Press);
}


back_Button_Press = () => {
 
  if(this.state.isCapturing){
    this.setState({
      isCapturing: false,
    })
  } else{
    this.props.navigation.pop()
  }
 
  return true;
}

async accessCamera(dato)
{
 //alert(dato)
 
 //alert(photo.uri)

 if (this.state.isCapturing)
    {
         photo = await this.camera.takePictureAsync({ quality: 1, skipProcessing: true }).then((photo) => {

         switch (dato) {
          case 'uno': this.setState({ 
           image1: photo.uri,
           isCapturing: false, 
        
          
           });
          break;
        
          case 'dos': this.setState({ 
           image2: photo.uri,
           isCapturing: false, 
        
           });
          break;
          case 'tres': this.setState({ 
           image3: photo.uri,
           isCapturing: false, 
        
           });
          break;
          case 'cuatro': this.setState({ 
           image4: photo.uri,
           isCapturing: false, 
        
           });
          break;
          case 'cinco': this.setState({ 
           image5: photo.uri,
           isCapturing: false, 
           });
          break;
          case 'seis': this.setState({ 
           image6: photo.uri,
           isCapturing: false, 
           });
          break;
        }
        

      })
    }
    else
    {
          this.setState({ isCapturing: true});
    }
                  
}

//PARA VENTANA MODAL
toggleModal(visible) {
  this.setState({ modalVisible: visible });
}


  render() {

    let { image1 } = this.state;
    let { image2 } = this.state;
    let { image3 } = this.state;
    let { image4 } = this.state;
    let { image5 } = this.state;
    let { image6 } = this.state;

   let screenWidth=Dimensions.get('window').width;
    let screenHeight=Dimensions.get('window').height;
   
  

 if(screenHeight<=592){
  padSeat='3.6%';
  heiBack='6.3%'
    LeftModal=screenWidth-wp('90%');
    fontTexto='2.7%'
}else if(screenHeight<=678){
  padSeat='3.6%';
  heiBack='6.3%'
    LeftModal=screenWidth-wp('90%');
    fontTexto='2.7%'
}else if(screenHeight<=684){
padSeat='4.6%';
heiBack='6.3%'
LeftModal=screenWidth-wp('89%');
fontTexto='2.7%'
}else if(screenHeight<=775){
  padSeat='3.6%';
  heiBack='6.3%'
    LeftModal=screenWidth-wp('90%');
    fontTexto='2.7%'
 }else{ //PANTALLA NOTE 9
padSeat='1.5%';
heiBack='5.5%'
LeftModal=screenWidth-wp('92.3%');
fontTexto='2.3%'
}


    return (
     
    <View  style={{flex:1}}>
    
    <Modal

transparent = {true}
    animationType="fade"
        visible = {this.state.modalVisible}
        onRequestClose = {() => { console.log("Modal has been closed.") } }
        >
    
            <View style = {styles.modal}>
            </View> 

     

           <View style={{backgroundColor:'white',borderRadius:hp('3%'),
                    position:'absolute',top:hp('30%'),
              left:LeftModal,paddingHorizontal:wp('26%'),  paddingVertical:hp('5%')}}> 

              
                   <View style={{alignItems:'center' }}>
                  
                <Text style={{ textAlign:'center',marginTop:hp('1.5%'),
               color:"#25265e",  fontSize: hp('2.3%'), marginLeft:hp('0.6%'),
               marginRight:hp('0.6%'), fontWeight: "normal",
                 marginVertical:hp('1.5%')}}>
                     Select Option </Text>
                    <TouchableOpacity 
                     style={{width:'200%',marginTop:'5%'}}
                     onPress={() =>{
                      this.toggleModal(!this.state.modalVisible);
                     // this.props.navigation.navigate("") ;
                       this.accessCamera();
                    }
                  
                  
                  }
                       >  
                    <LinearGradient colors={['#6c30cc','#2d7cf7']}
                      style={{ 
                          borderRadius:hp('2%'),alignItems: 'center',
                            padding:hp('2%')}}
                             start={[0.1,0.1]}
                              end={[0.6,0.6]}
                               ><Text style={{
                                   color:'white',fontSize:hp('2.3%')
                              }}>Camera</Text>
                   </LinearGradient>
                 </TouchableOpacity>

                    <TouchableOpacity 
                     style={{width:'200%',marginTop:'5%'}}
                     onPress={() =>{
                      this.toggleModal(!this.state.modalVisible);
                     // this.props.navigation.navigate("") ;

                     switch (this.state.elemento) {
                       case 'uno':this._pickImage()
                         break;
                         case 'dos':this._pickImage2()
                         break;
                         case 'tres':this._pickImage3()
                         break;
                         case 'cuatro':this._pickImage4()
                         break;
                         case 'cinco':this._pickImage5()
                         break;
                         case 'seis':this._pickImage6()
                         break;
                     }
                  
                    }
                  
                  }
                       >  
                    <LinearGradient colors={['#6c30cc','#2d7cf7']}
                      style={{ 
                          borderRadius:hp('2%'),alignItems: 'center',
                            padding:hp('2%')}}
                             start={[0.1,0.1]}
                              end={[0.6,0.6]}
                               ><Text style={{
                                   color:'white',fontSize:hp('2.3%')
                              }}>File</Text>
                   </LinearGradient>
                 </TouchableOpacity>
                 <TouchableOpacity 
                     style={{marginTop:hp('2.5%'),marginBottom:hp('1.5%')}}
                     onPress={() => {
                      this.toggleModal(!this.state.modalVisible);
                      // this.props.navigation.navigate("") ;
                      //    this.cancelar(); 
                        
                        }}
                       > 
                  <Text style={{
                       color:'#4554e5',fontSize:hp('2.3%'),fontWeight:'500'
                  }}>Cancel </Text>
                       </TouchableOpacity>

          </View>


                 </View>
      
     </Modal>
{ this.state.isCapturing?   
  <View style={{height:'100%',backgroundColor:'black'}}>
  {this.state.atras?
   <View  style={{flex:1,alignItems:'center',justifyContent:'center'}}>
   <Camera style={{ height: "65%", width: "100%" }} 
 ref={ref => { this.camera = ref}} type={Camera.Constants.Type.back}/>
    <TouchableOpacity style={{
    position:'absolute',top :hp('8%'),left:wp('47%')
 }} onPress={()=>this.setState({
   atras:false,
 })
        }>
  <Ionicons name="md-reverse-camera" size={25} color="#e2e7ee" />
 </TouchableOpacity>
   <TouchableOpacity style={{
    position:'absolute',bottom :hp('5%'),left:wp('45%')
 }} onPress={()=>this.accessCamera(this.state.elemento)
        }>
  <Ionicons name="md-camera" size={50} color="#e2e7ee" />
 </TouchableOpacity>

  </View> :
 <View style={{flex:1,alignItems:'center',justifyContent:'center'}}>
 <Camera style={{ height: "65%", width: "100%" }} 
 ref={ref => { this.camera = ref}} type={Camera.Constants.Type.front}/>
  <TouchableOpacity style={{
position:'absolute',top :hp('8%'),left:wp('47%')
}} onPress={()=>this.setState({
atras:true,
})
}>
<Ionicons name="md-reverse-camera" size={25} color="#e2e7ee" />
</TouchableOpacity>
   <TouchableOpacity style={{
    position:'absolute',bottom :hp('5%'),left:wp('45%')
 }} onPress={()=>this.accessCamera(this.state.elemento)
        }>
  <Ionicons name="md-camera" size={50} color="#e2e7ee" />
 </TouchableOpacity>

  </View>

 }
</View> :

<View style={{flex:1}}>
  <TouchableWithoutFeedback onPress={Keyboard.dismiss} accessible={false}>
      <View style={{flex:3}}>
      
      <ImageBackground source={require('../assets/mixto/fondoVerde.png')}
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
   marginTop:hp('4%'),
  marginHorizontal:wp('6%'),
    
   }}>Take photos of the car</Text>
      </ImageBackground>
    
      </View>
      </TouchableWithoutFeedback>
      <View  style={{
      flex:7,
      backgroundColor:'#F9F9FC', }}>

       
       <View style={{
          flex:1,
          backgroundColor:'white',
           marginTop:hp('-7.5%'),
            marginHorizontal:wp('4%'),
               borderTopStartRadius:hp('3%'),
            borderTopEndRadius:hp('3%'),
          }}>

         
           <ScrollView showsVerticalScrollIndicator={false} style={{marginHorizontal:'4%'}}>
              
           <View style={{ }}>
                    <Text style={{
                       color:'#25265e',fontSize:hp('2.3%'), fontWeight:'bold',
                        marginTop:hp('0.8%')
                        }}>Exterior photos</Text>
                     <Text style={{
                          color:'#787993',fontSize:hp('1.8%'), fontWeight:'500'
                         }}>You can upload image later</Text>
                  
                  <View style={{flexDirection:'row', marginTop:hp('1.5%')}}>
                  <TouchableOpacity
                                   onPress={()=>{//this._showAlert('uno'),
                                                    this.toggleModal(true),
                                                     this.setState({
                                                   elemento:'uno'
                                                   })         }}>
               { !this.state.image1? 
                <View style={{paddingVertical:hp('0.8%'),
                      borderColor:'#e2e7ee',borderWidth:hp('0.2%'),
                      paddingHorizontal:wp('5.5%'),borderRadius:hp('1.5%'),
                   alignItems:'center'
                 }}>
                 
        
              <Image source={require('../assets/iconos/frontCar.png')} 
               style={{width:wp('14%'),height:hp('6%'),marginTop:hp('1%') }} />
                <Text style={{
                    marginTop:hp('1%'),color:'#787993',fontSize:hp('1.8%'),marginBottom:hp('1%')
                  }}>Front</Text>
               </View> :
               <View style={{
                       borderRadius:hp('1.5%'),
                 }}>
               <Image source={{ uri: image1 }} style={{ 
               width:wp('26%'),height:hp('13.5%'),marginTop:hp('0.1%') ,borderRadius:hp('2%')}} />
             
               <Image source={require('../assets/iconos/camara.png')} 
                     style={{ position:'absolute',bottom:hp('1%'),right:hp('1%'),
                         width:wp('9.5%'),height:hp('5.5%'),borderRadius:hp('2.5%') }} />
                 </View>
               }
               </TouchableOpacity>
         
               <TouchableOpacity    onPress={()=>{this.toggleModal(true),
                                                     this.setState({
                                                   elemento:'dos'
                                                   })         }}>
                  { !this.state.image2? 
               <View style={{paddingVertical:hp('0.8%'),marginHorizontal:wp('3.5%'),
                      borderColor:'#e2e7ee',borderWidth:hp('0.2%'),
                      paddingHorizontal:wp('5.5%'),borderRadius:hp('1.5%'),
                   alignItems:'center'
                 }}>
   
            
                 <Image source={require('../assets/iconos/sideCar.png')} 
                      style={{ width:wp('14%'),height:hp('6%'),marginTop:hp('1%') }} />
   
                 <Text style={{
                   marginTop:hp('1%'),color:'#787993',fontSize:hp('1.8%'),marginBottom:hp('1%')
                 }}>Side</Text>
                </View> :
                  <View style={{marginHorizontal:wp('3.5%'), 
                       borderRadius:hp('1.5%'),
                 }}>
               <Image source={{ uri: image2 }} style={{
            width:wp('26%'),height:hp('13.5%'),marginTop:hp('0.1%') ,borderRadius:hp('2%')}} />
               
               <Image source={require('../assets/iconos/camara.png')} 
                     style={{ position:'absolute',bottom:hp('1%'),right:hp('1%'),
                         width:wp('9.5%'),height:hp('5.5%'),borderRadius:hp('2.5%') }} />
                 </View>
                  }
              </TouchableOpacity>
              <TouchableOpacity
                           onPress={()=>{this.toggleModal(true),
                                this.setState({
                               elemento:'tres'
                                    })         }}>
               { !this.state.image3? 
              <View style={{ paddingVertical:hp('0.8%'),
                      borderColor:'#e2e7ee',borderWidth:hp('0.2%'),
                      paddingHorizontal:wp('5.5%'),borderRadius:hp('1.5%'),
                   alignItems:'center'
                 }}>
   
                <Image source={require('../assets/iconos/backCar.png')} 
                      style={{ width:wp('14%'),height:hp(heiBack),marginTop:hp('1%') }} />
                       
                 <Text style={{
                  marginTop:hp('1%'),color:'#787993',fontSize:hp('1.8%'),marginBottom:hp('1%')
                 }}>Back</Text>
              </View>:
              <View style={{ borderRadius:hp('1.5%'),
                 }}>
               <Image source={{ uri:image3 }} style={{
            width:wp('26%'),height:hp('13.5%'),marginTop:hp('0.1%') ,borderRadius:hp('2%')}} />
               
               <Image source={require('../assets/iconos/camara.png')} 
                     style={{ position:'absolute',bottom:hp('1%'),right:hp('1%'),
                         width:wp('9.5%'),height:hp('5.5%'),borderRadius:hp('2.5%') }} />
                 </View>
               }
               </TouchableOpacity>
          </View> 


 
       {/*finaliza el row de las imagenes*/}

       <Text style={{
            color:'#25265e',fontSize:hp('2.3%'), fontWeight:'bold',
             marginTop:hp('2%')
        }}>Interior photos</Text>
      <Text style={{
            color:'#787993',fontSize:hp('1.8%'), fontWeight:'500'
        }}>You can upload image later</Text>

<View style={{flexDirection:'row', marginTop:hp('1.5%')}}>
<TouchableOpacity
                onPress={()=>{this.toggleModal(true),
                this.setState({
              elemento:'cuatro'
              })         }}>
{ !this.state.image4?   
<View style={{ paddingVertical:hp('0.8%'),
                      borderColor:'#e2e7ee',borderWidth:hp('0.2%'),
                      paddingHorizontal:wp('5.5%'),borderRadius:hp('1.5%'),
                   alignItems:'center'
                 }}>

                <Image source={require('../assets/iconos/monitorCar.png')} 
                  style={{ width:wp('14%'),height:hp('6%'),marginTop:hp('1%') }} />

             <Text style={{
               marginTop:hp('1%'),color:'#787993',fontSize:hp('1.8%'),marginBottom:hp('1%')
             }}>Monitors</Text>
          </View> :
          <View style={{borderRadius:hp('1.5%'),
                 }}>
               <Image source={{ uri:image4 }} style={{
            width:wp('26%'),height:hp('13.5%'),marginTop:hp('0.1%') ,borderRadius:hp('2%')}} />
               
               <Image source={require('../assets/iconos/camara.png')} 
                     style={{ position:'absolute',bottom:hp('1%'),right:hp('1%'),
                         width:wp('9.5%'),height:hp('5.5%'),borderRadius:hp('2.5%') }} />
                 </View>
}
</TouchableOpacity>
<TouchableOpacity
             onPress={()=>{this.toggleModal(true),
             this.setState({
           elemento:'cinco'
           })         }}>
         { !this.state.image5?    
          <View style={{ paddingVertical:hp('0.8%'),marginHorizontal:wp('3.5%'),
                      borderColor:'#e2e7ee',borderWidth:hp('0.2%'),
                      paddingHorizontal:wp(padSeat),borderRadius:hp('1.5%'),
                   alignItems:'center'
                 }}>
          
                <Image source={require('../assets/iconos/setaCoverCar.png')} 
                   style={{ width:wp('14%'),height:hp('6%'),marginTop:hp('1%') }} />

             <Text style={{
               marginTop:hp('1%'),color:'#787993',fontSize:hp('1.8%'),marginBottom:hp('1%')
             }}>Seat covers</Text>
          </View> :
          <View style={{borderRadius:hp('1.5%'),marginHorizontal:wp('3.5%'),
                 }}>
               <Image source={{ uri:image5 }} style={{
            width:wp('26%'),height:hp('13.5%'),marginTop:hp('0.1%') ,borderRadius:hp('2%')}} />
               
               <Image source={require('../assets/iconos/camara.png')} 
                     style={{ position:'absolute',bottom:hp('1%'),right:hp('1%'),
                         width:wp('9.5%'),height:hp('5.5%'),borderRadius:hp('2.5%') }} />
                 </View>
         }
  </TouchableOpacity>
  <TouchableOpacity
         onPress={()=>{this.toggleModal(true),
         this.setState({
       elemento:'seis'
       })         }}>
     { !this.state.image6? 
          <View style={{  paddingVertical:hp('1.5%'),
                      borderColor:'#e2e7ee',borderWidth:hp('0.2%'),
                      paddingHorizontal:wp('5.5%'),borderRadius:hp('1.5%'),
                   alignItems:'center'
                 }}>
             


                   <Image source={require('../assets/iconos/detailCars.png')} 
                       style={{ width:wp('14%'),height:hp('5.7%'),marginTop:hp('1%') }} />
  
                <Text style={{
                  marginTop:hp('1%'),color:'#787993',fontSize:hp('1.8%')
                }}>Details</Text>
             </View> :
             <View style={{borderRadius:hp('1.5%')
                 }}>
               <Image source={{ uri:image6 }} style={{
            width:wp('26%'),height:hp('13.5%'),marginTop:hp('0.1%') ,borderRadius:hp('2%')}} />
               
               <Image source={require('../assets/iconos/camara.png')} 
                     style={{ position:'absolute',bottom:hp('1%'),right:hp('1%'),
                         width:wp('9.5%'),height:hp('5.5%'),borderRadius:hp('2.5%') }} />
                 </View>
     }
  </TouchableOpacity>
       </View>
      </View>
  


    
   <View style={{marginTop:hp('2%') ,alignItems:'center'}}>

                 <Text style={{
                              color:'#787993' , fontSize:hp('1.8%') , fontWeight:'500'
                               }}>Services requested</Text>
                              <Text style={{marginTop:hp('0.5%'),marginBottom:hp('1%'),
                              color:'#25265e' , fontSize:hp('2%') , fontWeight:'500'
                               }}>Complete: Exterior and Interior Wash</Text>
                               <View  style={{
                                   flexDirection:'row'
                               }}>
                                    <View style={{
                                       
                                        paddingRight:wp('9%'),
                                        alignItems:"center"
                                    }}>
                                        <Text style={styles.texto}>Estimate Price</Text>
                                        <Text style={styles.texto2}>${this.state.precio}.00</Text>
                                    </View>
                                    <View  style={{
                                        borderLeftColor:"#787993", 
                                        borderLeftWidth: 0.5,  
                                        paddingLeft:wp('9%'),
                                        alignItems:"center"
                                    }}>
                                          <Text style={styles.texto}>Estimate Time</Text> 
                                          <Text style={styles.texto2}>{this.state.time} min</Text> 
                                    </View>

                               </View>

                   </View>







         <View style={{alignItems:'center',justifyContent:'center',marginTop:hp('3%')  }}>
              

            <TouchableOpacity 
                                 style={{width:wp('75%')}}
                                 onPress={() =>this.props.navigation.navigate("washerProgress5") }
                                   >  
                                <LinearGradient colors={['#6c30cc','#2d7cf7']}
                                  style={{ 
                                      borderRadius:wp('7%'),alignItems: 'center',
                                        padding:hp('2%')}}
                                         start={[0.1,0.1]}
                                          end={[0.6,0.6]}
                                           ><Text style={{
                                               color:'white',fontSize:hp(fontTexto)
                                          }}>I agreed with price and time</Text>
                               </LinearGradient>
                             </TouchableOpacity>


                             <TouchableOpacity 
           
           onPress={() => this.props.navigation.navigate("washerProgress4")}
           >  
           <Text style={{marginTop:hp('1.5%'),
          color:'#4554e5',fontSize:hp('2%'),fontWeight:'500'
           }}>
               Send new estimation
           </Text>
           </TouchableOpacity>
            </View>

          
             </ScrollView>
          
         </View>
         
      

  
      </View>

      </View>
       }
   </View>

 

    );
  }

  _pickImage = async () => {
    let result = await ImagePicker.launchImageLibraryAsync({
      allowsEditing: true,
      aspect: [4, 3],
    });

   
    if (!result.cancelled) {

      
        this.setState({ 
          image1: result.uri,
          inicio:'none',
          foto:'flex',
       
       });
 
     
    }
  };
  _pickImage2 = async () => {
    let result = await ImagePicker.launchImageLibraryAsync({
      allowsEditing: true,
      aspect: [4, 3],
    });

    console.log(result);
    if (!result.cancelled) {
 
        this.setState({ 
          image2: result.uri,
        inicio2:'none',
        foto2:'flex'
       });

     
     
    }
  };
  _pickImage3 = async () => {
    let result = await ImagePicker.launchImageLibraryAsync({
      allowsEditing: true,
      aspect: [4, 3],
    });
 
    if (!result.cancelled) {

     
        this.setState({ 
          image3: result.uri,
        inicio3:'none',
        foto3:'flex'
       });

 
     
    }
  };
  _pickImage4 = async () => {
    let result = await ImagePicker.launchImageLibraryAsync({
      allowsEditing: true,
      aspect: [4, 3],
    });

    console.log(result);
    if (!result.cancelled) {

     
        this.setState({ 
          image4: result.uri,
        inicio4:'none',
        foto4:'flex'
       });

    
     
    }
  };
  _pickImage5 = async () => {
    let result = await ImagePicker.launchImageLibraryAsync({
      allowsEditing: true,
      aspect: [4, 3],
    });

    console.log(result);
    if (!result.cancelled) {

   
        this.setState({ 
          image5: result.uri,
        inicio5:'none',
        foto5:'flex'
       });


     
    }
  };
  _pickImage6 = async () => {
    let result = await ImagePicker.launchImageLibraryAsync({
      allowsEditing: true,
      aspect: [4, 3],
    });

    console.log(result);
    if (!result.cancelled) {

     
        this.setState({ 
          image6: result.uri,
        inicio6:'none',
        foto6:'flex'
       });
 
     
    }
  }

 
}

 
const styles = StyleSheet.create({
    
    texto:{
        color:'#787993',fontSize:hp('1.8%') ,fontWeight:'500'
     },
     texto2:{
          
        color:'#25265e',fontSize:hp('2%') ,fontWeight:'500'
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