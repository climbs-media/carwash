import React, { Component } from 'react';
import {Alert,Platform,
  StyleSheet,ImageBackground, Modal,Dimensions,
  Text,KeyboardAvoidingView,TouchableWithoutFeedback,Keyboard,
  View,Image,TouchableOpacity,TextInput,ScrollView,BackHandler 
} from 'react-native';
 
import { ImagePicker ,Camera, Permissions} from 'expo';
import {Ionicons}  from "@expo/vector-icons"
import {LinearGradient} from  'expo';
import {widthPercentageToDP as wp, heightPercentageToDP as hp} from 'react-native-responsive-screen';

//https://expo.github.io/vector-icons/
 
export default class FormBecomeWasher extends Component {

    static navigationOptions = {
        header: null ,
    };
  

  constructor(props) {
    super(props);
  
    // para el retroceso
    this.back_Button_Press = this.back_Button_Press.bind(this);

    this.state = {
      isCapturing: false,
      hasCameraPermission: null,

      image1:null,
      //PARA VENTANA MODAL
      modalVisible: false,
 
      atras:true,//posiciond e la camara
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

async accessCamera()
{
  
 if (this.state.isCapturing)
    {
         photo = await this.camera.takePictureAsync();

         this.setState({ 
           image1: photo.uri,
           isCapturing: false, 
        
          
           });
       
     
        
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

    let screenWidth=Dimensions.get('window').width;
    let screenHeight=Dimensions.get('window').height;
   
    //alert(screenHeight)
    if(screenHeight<=678){
      wiFot='30%';
      wiFot2='27%';
      LeftModal=screenWidth-wp('90%');
   }else if(screenHeight<=684){
     
     wiFot='26%';
     wiFot2='23.7%';
      LeftModal=screenWidth-wp('89%');
   }else if(screenHeight<=775){
    wiFot='30%';
      wiFot2='27%';
      LeftModal=screenWidth-wp('90%');
   }else{
    wiFot='30%';
    wiFot2='29%';
    LeftModal=screenWidth-wp('92%');
   }


    return (


   
  <KeyboardAvoidingView behavior="padding" style={{flex:1}}>
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
                     this._pickImage()
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
   <View style={{height:'100%'}}>
   {this.state.atras?
   <View  style={{}}>
  <Camera style={{ height: "100%", width: "100%" }} 
  ref={ref => { this.camera = ref}} type={Camera.Constants.Type.back}/>
     <TouchableOpacity style={{
     position:'absolute',top :hp('5%'),left:wp('45%')
  }} onPress={()=>this.setState({
    atras:false,
  })
         }>
   <Ionicons name="md-reverse-camera" size={25} color="#e2e7ee" />
  </TouchableOpacity>
    <TouchableOpacity style={{
     position:'absolute',bottom :hp('5%'),left:wp('45%')
  }} onPress={()=>this.accessCamera()
         }>
   <Ionicons name="md-camera" size={50} color="#e2e7ee" />
  </TouchableOpacity>
 
   </View> :
   <View style={{flex:1}}>
      <Camera style={{ height: "100%", width: "100%" }} 
  ref={ref => { this.camera = ref}} type={Camera.Constants.Type.front}/>
    <TouchableOpacity style={{
     position:'absolute',top :hp('5%'),left:wp('45%')
  }} onPress={()=>this.setState({
    atras:true,
  })
         }>
   <Ionicons name="md-reverse-camera" size={25} color="#e2e7ee" />
  </TouchableOpacity>
    <TouchableOpacity style={{
     position:'absolute',bottom :hp('5%'),left:wp('45%')
  }} onPress={()=>this.accessCamera()
         }>
   <Ionicons name="md-camera" size={50} color="#e2e7ee" />
  </TouchableOpacity>
 
   </View>
 
  }
 </View>  :
<View style={{flex:1}}>
 <TouchableWithoutFeedback onPress={Keyboard.dismiss} accessible={false}>

       <View style={{flex:3,backgroundColor:'#2d7cf7'}}>
       <ImageBackground source={require('../assets/mixto/fondoReal.png')}
    style={{width: '100%', height: '100%'}} >
    <TouchableOpacity
                 onPress={() => this.props.navigation.pop()} 
                 style={{width:wp('15%'),marginTop:hp('8%'),marginHorizontal: wp('6%'),}} >
                 
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
   }}>Become a Washer</Text>
      
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

           <ScrollView showsVerticalScrollIndicator={false}
            style={{flex:1,marginHorizontal:wp('4%')}}>
           


           <View style={{alignItems: 'center',paddingTop:hp('2%'),}}>
           <TouchableOpacity
                  onPress={()=>  this.toggleModal(true)
                     }>
              
            { !this.state.image1? 
               <View style={{
               flexDirection:'row'
               }}>
                 <Image source={require('../assets/usuarios/influencer.png')} 
                        style={{ width:wp(wiFot),height:hp('15%'),
                                  borderRadius:hp('6.5%')}}
                        />
                         <Image source={require('../assets/iconos/camara.png')} 
                        style={{ width:wp('8.5%'),height:hp('4.8%'),
                                  borderRadius:hp('4.5%'),marginTop:hp('9%'),marginLeft:wp('-11%')}}
                        />
            
                    </View> :
                <View style={{
                  flexDirection:'row'
                  }}>
                    <Image source={{ uri: image1 }}
                           style={{ width:wp(wiFot2),height:hp('14%'),
                                     borderRadius:hp('7%')}}
                           />
                            <Image source={require('../assets/iconos/camara.png')} 
                           style={{ width:wp('8.5%'),height:hp('4.8%'),
                           borderRadius:hp('4.5%'),marginTop:hp('9%'),marginLeft:wp('-10%')}}
                           />
               
                   </View>
            }
            </TouchableOpacity>
       
            </View>    

          <View style={{paddingTop:hp('2%')}}>
            
              <View style={{   flexDirection:'row', borderWidth:hp('0.2%'),borderColor: '#e2e7ee', padding:hp('0.8%'),
                 borderRadius:hp('7.5%'),    width:'100%'}}>
     
                     <View style={{flex:2 ,alignItems:'center',justifyContent:'center'}}>
             
                     <Ionicons name="md-contact" size={32} color="#e2e7ee" />
                     </View>  
                     <View style={{flex:8, marginLeft:wp('1.5%'),}}>
                          <Text   style={{ 
                           color:'#787993',fontSize:hp('1.8%'), fontWeight:'300'
                         }}>Full Name</Text>
                           <TextInput
              
                                     underlineColorAndroid="transparent"
                                     placeholder="enter your name"
                                     placeholderTextColor="#e2e7ee"
                                      onChangeText={(nombre) => this.setState({nombre})}
                                      value={this.state.nombre}
                                      textAlignVertical='top'
                               />
          
                     </View>
                  </View>
             </View>
   


             <View style={{paddingTop:hp('2%')}}>
            
            <View style={{   flexDirection:'row', borderWidth:hp('0.2%'),borderColor: '#e2e7ee', padding:hp('0.8%'),
               borderRadius:hp('7.5%'),    width:'100%'}}>
     
                      <View style={{flex:2,alignItems:'center'}}>
                      <Ionicons name="md-phone-portrait" size={32} color="#e2e7ee" />
                        </View>  
                        <View style={{flex:7, marginLeft:wp('1.5%')}}>
                       <Text   style={{ 
                          color:'#787993',fontSize:hp('1.8%'), fontWeight:'300'
                      }}>Phone number</Text>
                          <TextInput
                             maxLength={9}
                             keyboardType='numeric'
                             underlineColorAndroid="transparent"
                             placeholder="enter your number"
                             placeholderTextColor="#e2e7ee"
                              onChangeText={(text2) => this.setState({text2})}
                              value={this.state.text2}
                              textAlignVertical='top'
                       />
                     </View>
                     <View style={{flex:1}}>
                     <Image source={require('../assets/bandera/spain.jpg')} 
                        style={{ width:wp('10%'),height:hp('5%'),marginTop:hp('0.8%'),
                                  borderRadius:hp('4.5%'), marginLeft:wp('-5%')}}
                        />
                        </View>
                     </View>
                  </View>



                  <View style={{paddingTop:hp('2%')}}>
            
            <View style={{   flexDirection:'row', borderWidth:hp('0.2%'),borderColor: '#e2e7ee', padding:hp('0.8%'),
               borderRadius:hp('7.5%'),    width:'100%'}}>
     
                           <View style={{flex:2,alignItems:'center'}}>
                           <Ionicons name="md-unlock" size={32} color="#e2e7ee" />
                             </View>  
                             <View style={{flex:8, marginLeft:wp('1.5%'),paddingTop:'3%'}}>
                            
                               <TextInput
                                     secureTextEntry={true}
                                  underlineColorAndroid="transparent"
                                  placeholder="Choose a Password"
                                  placeholderTextColor="#e2e7ee"
                                   onChangeText={(text2) => this.setState({text2})}
                                   value={this.state.text2}
                                   textAlignVertical='top'
                            />
                          </View>
                       </View>

                   </View>



                   <View style={{paddingTop:hp('2%')}}>  
                <View style={{   flexDirection:'row', borderWidth:hp('0.2%'),borderColor: '#e2e7ee', padding:hp('0.8%'),
               borderRadius:hp('7.5%'),    width:'100%'}}>
     
                           <View style={{flex:2,alignItems:'center'}}>
                           <Ionicons name="md-unlock" size={32} color="#e2e7ee" />
                             </View>  
                             <View style={{flex:8, marginLeft:wp('1.5%'),paddingTop:'3%'}}>
                            
                               <TextInput
                                     secureTextEntry={true}
                                  underlineColorAndroid="transparent"
                                  placeholder="Repeat Password"
                                  placeholderTextColor="#e2e7ee"
                                   onChangeText={(text2) => this.setState({text2})}
                                   value={this.state.text2}
                                   textAlignVertical='top'
                            />
                          </View>
                       </View>

                   </View>

                   <View style={{paddingTop:hp('2%')}}>
                       <View style={{alignItems:"center"}}>
                           <Text style={{
                          color:'#312f3c' , fontSize:hp('1.8%'), fontWeight:'500'
                           }}>By clicking start, you agree to our</Text>
                           <Text style={{
                           color:'#4554e5' , fontSize:hp('1.8%'), fontWeight:'500'
                           }}>Terms and Conditions</Text>
                       </View>
                   </View>


                  <View style={{alignItems:'center',marginTop:hp('2%')}}>
                     <TouchableOpacity 
                                 style={{width:wp('75%')}}
                                 onPress={() => this.props.navigation.navigate("washerMain")}
                                   >  
                                <LinearGradient colors={['#6c30cc','#2d7cf7']}
                                  style={{ 
                                      borderRadius:wp('7%'),alignItems: 'center',
                                        padding:hp('2%')}}
                                         start={[0.1,0.1]}
                                          end={[0.6,0.6]}
                                           ><Text style={{
                                               color:'white',fontSize:hp('2.7%')
                                          }}>Continue</Text>
                               </LinearGradient>
                             </TouchableOpacity>
                             </View>

 

           </ScrollView> 
         </View>
        {/* arriba cierre de view caja de contenido */}
      </View>
</View>
}
</KeyboardAvoidingView>


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
       
       
       });
 
     
    }
  };
}

const styles = StyleSheet.create({
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