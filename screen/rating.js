import React, { Component } from 'react';
import {Alert,Platform,Dimensions,
  StyleSheet,ImageBackground,Keyboard,
  Text,KeyboardAvoidingView,TouchableWithoutFeedback,
  View,Image,TouchableOpacity,TextInput,ScrollView
} from 'react-native';
 

import {Ionicons}  from "@expo/vector-icons"
import {LinearGradient} from  'expo';
import {widthPercentageToDP as wp, heightPercentageToDP as hp} from 'react-native-responsive-screen';
import SwitchToggle from 'react-native-switch-toggle';

//https://expo.github.io/vector-icons/
 
export default class Rating extends Component {


    static navigationOptions = {
        header: null ,
    };

    
  constructor(props) {
    super(props);
  
    this.state = {

       text:'',
       //para toggle
       switchFace: false,
       switchTwite:false,
       switchLinke:false,
       estrella1: require('../assets/iconos/starYellow.png'),
       estrella2:  require('../assets/iconos/starYellow.png'),
       estrella3:  require('../assets/iconos/starYellow.png'),
       estrella4: require('../assets/iconos/starYellow.png'),
       estrella5:  require('../assets/iconos/starYellow.png'),
    }
}



  render() {
    let screenWidth=Dimensions.get('window').width;
    let screenHeight=Dimensions.get('window').height;
   
 

   if(screenHeight<=592){
    wifoto='25%';
  }else if(screenHeight<=678){
    wifoto='25%';
 }else if(screenHeight<=684){
  wifoto='23%';
 }else if(screenHeight<=775){
  wifoto='25%';
 }else{
  wifoto='29%';
 }
   
    return (
  <KeyboardAvoidingView behavior="padding" style={{flex:1}}>
  <TouchableWithoutFeedback onPress={Keyboard.dismiss} accessible={false}>
       <View style={{flex:3,backgroundColor:'#2d7cf7'}}>
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
     marginTop:hp('2.8%'),
    marginHorizontal:wp('6%'),
    
   }}>Rate the service</Text>
      
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

           <View  style={{marginHorizontal:wp('4%')}}>
                 <View style={{alignItems:'center',marginTop:hp('1.5%')}}>
                    <Image source={require('../assets/usuarios/influencer.png')} 
                             style={{ width:wp(wifoto),height:hp('13%'),borderRadius:wp('50%')}} />
                          <Text style={{marginTop:hp('1%'),
                              color:'#25265e' , fontSize:hp('3.2%') , fontWeight:'500'
                          }}>Gregory Smith</Text>
                              <View  style={styles.estrellasimagen}>
                              <TouchableOpacity 
                                  style={{}}

                                    onPress = { () => {
                                     
                                          this.setState({
                                            estrella1 : require('../assets/iconos/starYellow.png'),
                                            estrella2: require('../assets/iconos/startGrey.png'),
                                            estrella3: require('../assets/iconos/startGrey.png'),
                                            estrella4: require('../assets/iconos/startGrey.png'),
                                            estrella5: require('../assets/iconos/startGrey.png')
                                          })
                                     
                                  }}
                                    >
                                  <Image source={this.state.estrella1} 
                                       style={{ width:hp('4.1%'),height:hp('4%')}}
                                      />

                                </TouchableOpacity>
                                <TouchableOpacity 
                                  style={{}}

                                    onPress = { () => {
                                    
                                          this.setState({
                                            estrella1 : require('../assets/iconos/starYellow.png'),
                                            estrella2 : require('../assets/iconos/starYellow.png'),
                                            estrella3: require('../assets/iconos/startGrey.png'),
                                            estrella4: require('../assets/iconos/startGrey.png'),
                                            estrella5: require('../assets/iconos/startGrey.png')
                                          })
                                      
                                  }}
                                    >
                                  <Image source={this.state.estrella2} 
                                      style={{ width:hp('4.1%'),height:hp('4%'),marginLeft:hp('1.2%')}}
                                     />
                                    </TouchableOpacity>
                                    <TouchableOpacity 
                                  style={{}}

                                    onPress = { () => {
                                    
                                          this.setState({
                                            estrella1: require('../assets/iconos/starYellow.png'),
                                            estrella2: require('../assets/iconos/starYellow.png'),
                                            estrella3 : require('../assets/iconos/starYellow.png'),
                                            estrella4: require('../assets/iconos/startGrey.png'),
                                            estrella5: require('../assets/iconos/startGrey.png')
                                          })
                                      
                                  }}
                                    >
                                  <Image source={this.state.estrella3} 
                               
                                   style={{ width:hp('4.1%'),height:hp('4%'),marginLeft:hp('1.2%')}}
                                      />

                                 </TouchableOpacity>

                                 <TouchableOpacity 
                                  style={{}}

                                    onPress = { () => {
                                     
                                          this.setState({
                                           
                                            estrella1: require('../assets/iconos/starYellow.png'),
                                            estrella2: require('../assets/iconos/starYellow.png'),
                                             estrella3: require('../assets/iconos/starYellow.png'),
                                            estrella4 : require('../assets/iconos/starYellow.png'),
                                            estrella5: require('../assets/iconos/startGrey.png')
                                          })
                                      
                                  }}
                                    >
                                  <Image source={this.state.estrella4} 
                                
                                  style={{ width:hp('4.1%'),height:hp('4%'),marginLeft:hp('1.2%')}}
                                   />
                                </TouchableOpacity>

                                <TouchableOpacity 
                                  style={{ }}

                                    onPress = { () => {
                                      if (this.state.estrella5 == require('../assets/iconos/starYellow.png'))
                                      {
                                          this.setState({
                                            estrella5 : require('../assets/iconos/startGrey.png')
                                          })
                                      }
                                      else{
                                          this.setState({
                                            estrella1: require('../assets/iconos/starYellow.png'),
                                            estrella2: require('../assets/iconos/starYellow.png'),
                                             estrella3: require('../assets/iconos/starYellow.png'),
                                             estrella4: require('../assets/iconos/starYellow.png'),
                                            estrella5 : require('../assets/iconos/starYellow.png'),
                                            
                                          })
                                      }
                                  }}
                                    >
                                  <Image source={this.state.estrella5} 
                              
                                  style={{ width:hp('4.1%'),height:hp('4%'),marginLeft:hp('1.2%')}}
                                   />
                                   </TouchableOpacity>
                              </View>
                       </View>
                          
               
                     <View style={styles.textAreaContainer}>
     
                       <TextInput
                                underlineColorAndroid="transparent"
                                  placeholder="Additional comments"
                                placeholderTextColor="grey"
                                numberOfLines={2}
                                multiline={true}
                                onChangeText={(text) => this.setState({text})}
                                  value={this.state.text}
                                  textAlignVertical='top'
                              />
                           </View>
                  
                        {/*  SECCION DE REDES SOCIALES */}

                         <View style={{flexDirection:'row',marginTop:hp('2%')}}>
                              <Image source={require('../assets/Redessociales/face.png')} 
                                  style={{ flex:1,width:wp('8%'),height:hp('5%')}}
                                   />
                                <View style={{flex:7.5, justifyContent:'center',
                                                paddingLeft: '4%',}}>
                                   <Text style={{color:'#25265e', fontSize:hp('2.1%'),fontWeight:'500'}}>
                                  Share on Facebook</Text>

                                   </View>
                               <View style={{flex:1.5}}>
                               <SwitchToggle
                              backgroundColorOn='#4ce5b1'
                              backgroundColorOff='#d7dde6'
                              containerStyle={{
                                width: wp('11.5%'),
                                height: hp('3.5%'),
                                borderRadius: hp('3.75%'),
                                 padding: hp('1%'),
                                marginTop:hp('1.5%')
                             }}
                              circleStyle={{
                                width:wp('5%'),
                                height: hp('2.5%'),
                                borderRadius: hp('10%'),
                                backgroundColor: 'yellow', // rgb(102,134,205)
                              }}
                              switchOn={this.state.switchFace}
                              onPress={()=>
                                this.setState({
                                   switchFace:!this.state.switchFace,
                              })
                            } // funcion 
                              circleColorOff='white'
                              circleColorOn='white'
                              duration={500}
                            />

 


                               </View>
                         </View>

                         <View style={{flexDirection:'row',marginTop:hp('2%')}}>
                              <Image source={require('../assets/Redessociales/twite.png')} 
                                  style={{ flex:1,width:wp('8%'),height:hp('5%')}}
                                   />
                                   <View style={{flex:7.5, justifyContent:'center',
                                                paddingLeft:wp('4%')}}>
                                  <Text style={{color:'#25265e', fontSize:hp('2.1%'),fontWeight:'500'}}>
                                  Share on Twitter</Text>

                                   </View>
                              
                                   <View style={{flex:1.5}}>
                               <SwitchToggle
                              backgroundColorOn='#4ce5b1'
                              backgroundColorOff='#d7dde6'
                              containerStyle={{
                                width: wp('11.5%'),
                                height: hp('3.5%'),
                                borderRadius: hp('3.75%'),
                                 padding: hp('1%'),
                                marginTop:hp('1.5%')
                             }}
                              circleStyle={{
                                width:wp('5%'),
                                height: hp('2.5%'),
                                borderRadius: hp('10%'),
                                backgroundColor: 'yellow', 
                              }}
                              switchOn={this.state.switchTwite}
                              onPress={()=>
                                this.setState({
                                   switchTwite:!this.state.switchTwite,
                              })
                            } // funcion 
                              circleColorOff='white'
                              circleColorOn='white'
                              duration={500}
                            />

                            </View>  
                         </View>

                         <View style={{flexDirection:'row',marginTop:hp('2%')}}>
                               <Image source={require('../assets/Redessociales/linke.png')} 
                                  style={{ flex:1,width:wp('8%'),height:hp('5%')}}
                                   />
                                <View style={{flex:7.5, justifyContent:'center',
                                                paddingLeft:wp('4%')}}>
                                  <Text style={{color:'#25265e', fontSize:hp('2.1%'),fontWeight:'500'}}>
                                  Share on Linkedin</Text>

                                   </View>
                                   <View style={{flex:1.5}}>
                               <SwitchToggle
                              backgroundColorOn='#4ce5b1'
                              backgroundColorOff='#d7dde6'
                              containerStyle={{
                                width: wp('11.5%'),
                                height: hp('3.5%'),
                                borderRadius: hp('3.75%'),
                                 padding: hp('1%'),
                                marginTop:hp('1.5%')
                             }}
                              circleStyle={{
                                width:wp('5%'),
                                height: hp('2.5%'),
                                borderRadius: hp('10%'),
                                backgroundColor: 'yellow', 
                              }}
                              switchOn={this.state.switchLinke}
                              onPress={()=>
                                this.setState({
                                   switchLinke:!this.state.switchLinke,
                              })
                            } // funcion 
                              circleColorOff='white'
                              circleColorOn='white'
                              duration={500}
                            />

 


                               </View>
                         </View>


 
                       <View style={{alignItems:'center',marginBottom:hp('3.5%'),marginTop:hp('2%')}}>
                         
                          <TouchableOpacity 
                                 style={{width:wp('75%')}}
                                 onPress={() =>this.props.navigation.navigate("myhistoryResume") }
                                   >  
                                <LinearGradient colors={['#6c30cc','#2d7cf7']}
                                  style={{ 
                                      borderRadius:wp('7%'),alignItems: 'center',
                                        padding:hp('2%')}}
                                         start={[0.1,0.1]}
                                          end={[0.5,0.5]}
                                           ><Text style={{
                                               color:'white',fontSize:hp('2.7%')
                                          }}>Send Review</Text>
                               </LinearGradient>
                             </TouchableOpacity>
                            
                             <TouchableOpacity 
                                 style={{marginTop:hp('1.5%')}}
                                 onPress={() => this.props.navigation.navigate("")}
                                   > 
                              <Text style={{
                                   color:'#4554e5',fontSize:hp('2.3%'),fontWeight:'500'
                              }}>Maybe next time</Text>
                            </TouchableOpacity>
                        
                            </View>

                       
                  {/*  view final contenedor de todo */}
               
                
             </View> 
         </View>
         
      


      </View>

</KeyboardAvoidingView>

    );
  }
}

 
const styles = StyleSheet.create({
    estrellasimagen:{
        padding:hp('0.6%'),
        flexDirection:'row',
      },
      texto1:{
          color:'#787993',
          fontSize:hp('1.8%'),
          fontWeight:'300'

      },
      texto2:{
        color:'#25265e',
        fontSize:hp('1.8%'),
        fontWeight:'500'
      },
      textAreaContainer: {
        borderColor: '#f6f6f6',
        borderWidth: wp('0.4%'),
        padding: Platform.OS === 'ios' ? hp('6%'): hp('4%'),
        borderRadius:hp('1.5%'),
        marginTop:hp('1.5%'),
    
      },
 
});