import React, { Component } from 'react';
import {Alert,Platform,
  StyleSheet,KeyboardAvoidingView,Modal,Dimensions,
  Text,ImageBackground,TouchableWithoutFeedback,
  View,Image,TouchableOpacity,TextInput,Keyboard,BackHandler 
} from 'react-native';
 

import { ImagePicker ,Camera, Permissions} from 'expo';
import {Ionicons}  from "@expo/vector-icons"
import {LinearGradient} from  'expo';
import {widthPercentageToDP as wp, heightPercentageToDP as hp} from 'react-native-responsive-screen';

//https://expo.github.io/vector-icons/
 
export default class EditProfile extends Component {


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
      atras:true,
      //PARA VENTANA MODAL
      modalVisible: false,
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
      widFot='40%'
      LeftModal=screenWidth-wp('90%');
   }else if(screenHeight<=684){
     
      widFot='36%'
      LeftModal=screenWidth-wp('89%');
   }else{
    widFot='40%'
    LeftModal=screenWidth-wp('90%');
   }




   if(screenHeight<=592){
    widFot1='40%'
    widFot2='40%'
      LeftModal=screenWidth-wp('90%');
  }else if(screenHeight<=678){
    widFot1='40%'
    widFot2='40%'
      LeftModal=screenWidth-wp('90%');
 }else if(screenHeight<=684){
  widFot1='40%'
  widFot2='36%'
  LeftModal=screenWidth-wp('89%');
 }else if(screenHeight<=775){
  widFot1='40%'
  widFot2='40%'
    LeftModal=screenWidth-wp('90%');
 }else{
  widFot1='50%'
  widFot2='46.5%'
  LeftModal=screenWidth-wp('92.3%');
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
</View> :


<View style={{flex:1}}>
<TouchableWithoutFeedback onPress={Keyboard.dismiss} accessible={false}>
  <View style={{flex:3}}>
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
     }}>Edit profile</Text>
     
     </ImageBackground>
  </View>
  </TouchableWithoutFeedback>
  <View  style={{
      flex:7,
      backgroundColor:'#F9F9FC', }}>
 

<TouchableWithoutFeedback onPress={Keyboard.dismiss} accessible={false}>
  <View style={{
    flex:1,
    backgroundColor:'white',
     marginTop:hp('-7.5%'),
      marginHorizontal:wp('4%'),
      borderTopStartRadius:hp('3%'),
      borderTopEndRadius:hp('3%'),
  }}>


  <View style={{alignItems: 'center', justifyContent: 'center',marginTop:hp('3%')}}>

  <TouchableOpacity
                  onPress={()=>  this.toggleModal(true)
                     }>
              
            { !this.state.image1? 
               <View style={{
               flexDirection:'row'
               }}>
                 <Image source={require('../assets/usuarios/influencer.png')} 
                        style={{ width:wp(widFot1),height:hp('22.5%'),
                                  borderRadius:hp('6.5%')}}
                        />
                         <Image source={require('../assets/iconos/camara.png')} 
                        style={{ width:wp('12.5%'),height:hp('6.8%'),
                                  borderRadius:hp('4.5%'),marginTop:hp('13%'),marginLeft:wp('-13%')}}
                        />
            
                </View> :
                <View style={{
                  flexDirection:'row'
                  }}>
                    <Image source={{ uri: image1 }}
                           style={{ width:wp(widFot2),height:hp('22%'),
                                     borderRadius:hp('15%')}}
                           />
                            <Image source={require('../assets/iconos/camara.png')} 
                           style={{ width:wp('12.5%'),height:hp('6.8%'),
                                     borderRadius:hp('4.5%'),marginTop:hp('13%'),marginLeft:wp('-13%')}}
                           />
               
                   </View>
            }
            </TouchableOpacity>

              {/*     para las imageness   */}
   <View style={{alignItems: 'center', justifyContent: 'center'}}>
       <View style={{   flexDirection:'row', borderWidth:wp('0.2%'),borderColor: '#e2e7ee',  padding:hp('1%'),
        borderRadius:hp('7.5%'),
       width:wp('85%'),marginTop:hp('5%')}}>
     
       <View style={{flex:2 ,alignItems:'center'}}>
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
               onChangeText={(text) => this.setState({text})}
               value={this.state.text}
               textAlignVertical='top'
        />
          
          
       
     
      </View>
   </View>
 </View>


 <View style={{alignItems: 'center', justifyContent: 'center'}}>
       <View style={{   flexDirection:'row', borderWidth:wp('0.2%'),borderColor: '#e2e7ee',  padding:5,
        borderRadius:hp('7.5%'),
       width:wp('85%'),marginTop:hp('2.5%')}}>
     
       <View style={{flex:2,alignItems:'center'}}>
       <Ionicons name="md-phone-portrait" size={32} color="#e2e7ee" />
         </View>  
         <View style={{flex:8, marginLeft:wp('1.5%'),}}>
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
      <View style={{flex:1,  }}>
      <Image source={require('../assets/bandera/spain.jpg')} 
                        style={{ width:wp('10%'),height:hp('5%'),marginTop:hp('0.8%'),
                                  borderRadius:hp('4.5%'), marginLeft:wp('-5%')}}
                        />
      </View>
   </View>
 </View>
  

           <View style={{alignItems:'center',marginTop:hp('15%')}}>
                     <TouchableOpacity 
                                 style={{width:wp('75%')}}
                                 onPress={() =>this.props.navigation.navigate("") }
                                   >  
                                <LinearGradient colors={['#6c30cc','#2d7cf7']}
                                  style={{ 
                                      borderRadius:wp('7%'),alignItems: 'center',
                                        padding:hp('2%')}}
                                         start={[0.1,0.1]}
                                          end={[0.6,0.6]}
                                           ><Text style={{
                                               color:'white',fontSize:hp('2.7%')
                                          }}>Save Changes</Text>
                               </LinearGradient>
                             </TouchableOpacity>
                             </View>

 </View>

 </View>
 </TouchableWithoutFeedback>

   
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