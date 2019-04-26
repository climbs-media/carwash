import React, { Component } from 'react';
import {Alert,Platform,Modal,
  StyleSheet,ScrollView,Dimensions,
  Text,ImageBackground,KeyboardAvoidingView,
  View,Image,TouchableOpacity,TextInput,
  TouchableWithoutFeedback,Keyboard
} from 'react-native';
 
import {widthPercentageToDP as wp, heightPercentageToDP as hp} from 'react-native-responsive-screen';
import {Ionicons}  from "@expo/vector-icons"
import {LinearGradient} from  'expo';

//https://expo.github.io/vector-icons/






 
export default class ChatWithWasher extends Component {

  static navigationOptions = {
    header: null ,
};


constructor(props) {

  lista=[];
super(props);

this.state = {
  fle1:3,
  fle2:7,
  fecha:'Today at 5:03 PM',
  hora:'5:33 PM',
  
  heiChat:'65%',
  heitext:'12%',

  PreOrder:'flex',
  mensaje2:'Hello, are you nearby?',
   text2:'',
   //PARA VENTANA MODAL
   modalVisible: false,

   arrey:[]
   }
}

   //PARA VENTANA MODAL
   toggleModal(visible) {
    this.setState({ modalVisible: visible });
  }
  
componentWillMount () {
  this.keyboardDidShowListener = Keyboard.addListener('keyboardDidShow', this._keyboardDidShow);
  this.keyboardDidHideListener = Keyboard.addListener('keyboardDidHide', this._keyboardDidHide);
}

componentWillUnmount () {
  this.keyboardDidShowListener.remove();
  this.keyboardDidHideListener.remove();
}

_keyboardDidShow=()=>{
  this.setState({
    heiChat:'23%' ,
    heitext:'12%',
  })
}

_keyboardDidHide=()=>{
  
  this.setState({
    heiChat:'65%' ,
    heitext:'12%',
  })
 
}

 eleccion(selec){

  switch (selec) {
    case 'uno':     
                 lista.push(elemento1);
                 this.setState({
                   arrey:lista
                 })
                 break;
    case 'dos':     
                 lista.push(elemento2);
                 this.setState({
                   arrey:lista,
                   text2:''
                 })
                 break;
      case 'tres':     
                 lista.push(elemento3);
                 this.setState({
                   arrey:lista
                 })
                 break;
       case 'cuatro':     
                 lista.push(elemento4);
                 this.setState({
                   arrey:lista
                 })
                 break;
       case 'cinco':     
                 lista.push(elemento5);
                 this.setState({
                   arrey:lista
                 })
                 break;
  
    
  }
 }



  render() {


    elemento1=<View  style={{marginTop:hp('2%'),
    display:this.state.PreOrder,flexDirection:'row',
    
    }}>
     <View style={{
    flex:8.5,borderWidth:1,borderColor:'#00ffffff',borderRadius:hp('5%')
    }}>
    <View style={{padding:hp('1.5%'),
               borderBottomColor:'#00ffffff',borderBottomWidth:1}}>
      <Text style={{marginLeft:wp('2%'),
        color:'#25265e', fontSize:hp('1.8%') , fontWeight:'500'
    }}>
    Pre-Order confirmation 
    </Text>  
    </View>
    
    <View style={{flexDirection:'row'}}>
         <View style={{
        flex:3,padding:hp('2%')
         }}>
         <Image source={require('../assets/iconos/coche1.png')} 
          style={{ width:wp('20%'),height:hp('10%'),
           borderRadius:hp('1%')}}
          />
    
         </View>
         <View style={{
         flex:7,padding:hp('2%')
         }}>
         <Text style={{
           color:'#787993', fontSize:hp('1.8%') , fontWeight:'500'
         }}>Service</Text>
         <Text style={{
             color:'#25265e', fontSize:hp('2.3%') , fontWeight:'500'  
         }}>Complete: Exterior{'\n'}and Interior Wash
         </Text>
    
         </View>
    </View>
    
    
    <View style={{paddingHorizontal:hp('2%'),borderBottomColor:'#00ffffff',
    borderBottomWidth:1}}>
    <Text style={{
    color:'#787993', fontSize:hp('1.8%') , fontWeight:'500'  
    }}>Estimated time</Text>
    <Text style={{
     color:'#25265e', fontSize:hp('3%') , fontWeight:'500'  
      }}>50 min</Text>
    
    </View>
     <View style={{
         flexDirection:'row',paddingHorizontal:'2%',paddingVertical:hp('1%')
     }}>
     <View style={{ flex:7,justifyContent:'center'}}>
    
    
         <Text style={{ marginLeft:wp('2%'),
             color:'#787993', fontSize:hp('1.8%') , fontWeight:'500'  
         }}>Total </Text>
         </View> 
          <Text style={{ flex:3,marginRight:wp('2%'),
             color:'#25265e', fontSize:hp('3%') , fontWeight:'500'  
         }}>$25.00</Text>
     </View>
    
    
    
    </View>
    <View style={{
    
    flex:1.5
    }}>
    </View>
    
    </View>;
    
    //--------------------
    elemento2=<View style={{ flexDirection:'row',marginTop:hp('2%')}}>
                               
    <View style={{
      flex:4
    }}>
    
    </View>
    <View style={{  flex:6,padding:hp('2%'),
    borderColor:'#00ffffff',borderWidth:1,
    borderBottomLeftRadius:hp('2%'),borderTopLeftRadius:hp('2%'),
    borderTopRightRadius:hp('2%'),backgroundColor:'#EBFAFA'
    }}>
      <Text style={{
         color:'#25265e', fontSize:hp('2.3%') , fontWeight:'500'    
      }}> {this.state.text2}</Text>
    
    </View>
    
    </View>;
    
    //----------------------------
    
    elemento3=<View style={{
      marginTop:hp('2%'),
      width:wp('75%'),
    padding:hp('1.5%'),
    borderWidth:1,
    borderBottomRightRadius:hp('2%'),
    borderTopLeftRadius:hp('2%'),
    borderTopRightRadius:hp('2%'),
    borderColor:'#00ffffff'
    }}>
    <Text style={{
    color:'#25265e', fontSize:hp('2.3%') , fontWeight:'500'
    }}>I’ve taken photos of your car</Text>
    
    <View style={{flexDirection:'row',
        flexWrap:'wrap',paddingVertical:hp('2%')
    }}>
     <View style={{
         marginLeft:wp('1%')
           }}>
           <Image source={require('../assets/iconos/coche1.png')} 
            style={{ width:wp('20%'),height:hp('10%'),
             borderRadius:hp('1%')}}
            />
      </View>
      <View style={{
            marginLeft:wp('1%')
           }}>
           <Image source={require('../assets/iconos/coche1.png')} 
            style={{ width:wp('20%'),height:hp('10%'),
             borderRadius:hp('1%')}}
            />
      </View>
      <View style={{
            marginLeft:wp('2%')
           }}>
           <Image source={require('../assets/iconos/coche1.png')} 
            style={{ width:wp('20%'),height:hp('10%'),
             borderRadius:hp('1%')}}
            />
      </View>
    
    
    </View>
    
    </View>;
    
    //---------------------------
    elemento4= <View style={{
      flexDirection:'row',marginTop:hp('2%')
    }}>
    <View style={{
    flex:8.5,
    borderWidth:1,borderColor:'#00ffffff',borderRadius:hp('5%')
    }}>
    <View style={{ }}>
              <Image source={require('../assets/iconos/coche1.png')} 
               style={{ width:wp('68%'),height:hp('25%'),
                borderTopLeftRadius:hp('5%'), borderTopRightRadius:hp('5%')}}
               />
    </View>
    <View style={{
        padding:hp('2%'),
    }}>
        <Text style={{
         color:'#25265e', fontSize:hp('2.3%') , fontWeight:'500'         
        }}>Complete: Exterior and{'\n'}Interiror Wash
       </Text>
       <Text style={{
         color:'#787993', fontSize:hp('1.8%') , fontWeight:'500'         
        }}>Estimated time
       </Text>
       <Text style={{
         color:'#25265e', fontSize:hp('2.3%') , fontWeight:'400'         
        }}>1 hour 30 min
       </Text>
    </View>
    <View style={{
              flexDirection:'row',paddingHorizontal:'2%',paddingVertical:hp('1%')
          }}>
          <View style={{ flex:7,justifyContent:'center'}}>
    
         
              <Text style={{ marginLeft:wp('2%'),
                  color:'#787993', fontSize:hp('1.8%') , fontWeight:'500'  
              }}>Total </Text>
              </View> 
               <Text style={{ flex:3,marginRight:wp('2%'),
                  color:'#25265e', fontSize:hp('3%') , fontWeight:'500'  
              }}>$85.00</Text>
          </View>
    
        <TouchableOpacity  style={{borderTopColor:'#00ffffff',alignItems:'center',justifyContent:'center',
          borderTopWidth:1,padding:hp('2%'),}}   onPress = { () => this.eleccion('cinco')}>
              <Text style={{
                   color:'#4554e5', fontSize:hp('2.3%') , fontWeight:'500'  
              } }>Confirm Request</Text>
        </TouchableOpacity>
       <View style={{borderTopColor:'#00ffffff',alignItems:'center',justifyContent:'center',
        borderTopWidth:1,padding:hp('2%'),}}>
              <Text style={{
                   color:'#4554e5', fontSize:hp('2.3%') , fontWeight:'500'  
              } }>Decline</Text>
       </View>
    
    
    </View>
    <View style={{
    flex:1.5   
    }}>
    
    </View>
    </View>;
    //-------------
    elemento5=<View  style={{marginTop:hp('2%'),
    display:this.state.PreOrder,flexDirection:'row',
    
    }}>
     <View style={{
    flex:8.5,borderWidth:1,borderColor:'#00ffffff',borderRadius:hp('5%')
    }}>
    <View style={{padding:hp('1.5%'),
               borderBottomColor:'#00ffffff',borderBottomWidth:1}}>
      <Text style={{marginLeft:wp('2%'),
        color:'#25265e', fontSize:hp('1.8%') , fontWeight:'500'
    }}>
    Order confirmation 
    </Text>  
    </View>
    
    <View style={{flexDirection:'row'}}>
         <View style={{
        flex:3,padding:hp('2%')
         }}>
         <Image source={require('../assets/iconos/coche1.png')} 
          style={{ width:wp('20%'),height:hp('10%'),
           borderRadius:hp('1%')}}
          />
    
         </View>
         <View style={{
         flex:7,padding:hp('2%')
         }}>
         <Text style={{
           color:'#787993', fontSize:hp('1.8%') , fontWeight:'500'
         }}>Service</Text>
         <Text style={{
             color:'#25265e', fontSize:hp('2.3%') , fontWeight:'500'  
         }}>Complete: Exterior{'\n'}and Interior Wash
         </Text>
    
         </View>
    </View>
    
    
    <View style={{paddingHorizontal:hp('2%'),borderBottomColor:'#00ffffff',
    borderBottomWidth:1}}>
    <Text style={{
    color:'#787993', fontSize:hp('1.8%') , fontWeight:'500'  
    }}>Estimated time</Text>
    <Text style={{
     color:'#25265e', fontSize:hp('3%') , fontWeight:'500'  
      }}>1 hour 30 min</Text>
    
    </View>
     <View style={{
         flexDirection:'row',paddingHorizontal:'2%',paddingVertical:hp('1%')
     }}>
     <View style={{ flex:7,justifyContent:'center'}}>
    
    
         <Text style={{ marginLeft:wp('2%'),
             color:'#787993', fontSize:hp('1.8%') , fontWeight:'500'  
         }}>Total </Text>
         </View> 
          <Text style={{ flex:3,marginRight:wp('2%'),
             color:'#25265e', fontSize:hp('3%') , fontWeight:'500'  
         }}>$85.00</Text>
     </View>
    

    
    
    </View>
    <View style={{
    
    flex:1.5
    }}>
    </View>
    
    </View>

    let screenWidth=Dimensions.get('window').width;
    let screenHeight=Dimensions.get('window').height;



    if(screenHeight<=592){
      LeftModal=screenWidth-wp('90%');
      horizoBot='2%';
      horizoBot2='2.1%';
      cajaInput='60%';
    }else if(screenHeight<=678){
      LeftModal=screenWidth-wp('82%');
      horizoBot='1.3%';
      horizoBot2='2%';
      cajaInput='60%'
    }else if(screenHeight<=684){
      LeftModal=screenWidth-wp('80%');
      horizoBot='1%';
      cajaInput='64%';
      horizoBot2='1.7%';
   
    }else{
      LeftModal=screenWidth-wp('82%');
      horizoBot='2%';
      horizoBot2='2.1%';
      cajaInput='60%'
    
    }
    





    return (

       <View behavior="padding" style={{flex:1}}>
       
<Modal

transparent = {true}
    animationType="fade"
        visible = {this.state.modalVisible}
        onRequestClose = {() => { console.log("Modal has been closed.") } }
        >
    
            <View style = {styles.modal}>
      
           </View> 

     

           <View style={{backgroundColor:'white',borderRadius:hp('3%'),
                    position:'absolute',top:hp('25%'),
              left:LeftModal,paddingHorizontal:wp('10%'),  paddingVertical:hp('5%')}}> 

              
                   <View style={{alignItems:'center'}}>
                 

                   <Text style={{marginTop:hp('0.5%'),
                      color:"#25265e",  fontSize: hp('3%'), fontWeight:'500',
                    }} >Please, selected :</Text>

                
                    <TouchableOpacity 
                     style={{width:'120%',marginTop:'3%'}}
                     onPress={() =>{
                      this.toggleModal(!this.state.modalVisible);
                      this.eleccion('uno');
                    }
                  
                  
                  }
                       >  
                    <LinearGradient colors={['#6c30cc','#2d7cf7']}
                      style={{ 
                          borderRadius:10,alignItems: 'center',
                            padding:hp('2.5%')}}
                             start={[0.1,0.1]}
                              end={[0.6,0.6]}
                               ><Text style={{
                                   color:'white',fontSize:hp('2.3%')
                              }}>Pre Order</Text>
                   </LinearGradient>
                 </TouchableOpacity>

                 <TouchableOpacity 
                     style={{width:'120%',marginTop:'2.5%'}}
                     onPress={() =>{
                      this.toggleModal(!this.state.modalVisible);
                      this.eleccion('tres');
                    }
                  
                  
                  }
                       >  
                    <LinearGradient colors={['#6c30cc','#2d7cf7']}
                      style={{ 
                          borderRadius:10,alignItems: 'center',
                            padding:hp('2.5%')}}
                             start={[0.1,0.1]}
                              end={[0.6,0.6]}
                               ><Text style={{
                                   color:'white',fontSize:hp('2.3%')
                              }}>Pictures</Text>
                   </LinearGradient>
                 </TouchableOpacity>

                 <TouchableOpacity 
                     style={{width:'120%',marginTop:'2.5%'}}
                     onPress={() =>{
                      this.toggleModal(!this.state.modalVisible);
                      this.eleccion('cuatro');
                    }
                  
                  
                  }
                       >  
                    <LinearGradient colors={['#6c30cc','#2d7cf7']}
                      style={{ 
                          borderRadius:10,alignItems: 'center',
                            padding:hp('2.5%')}}
                             start={[0.1,0.1]}
                              end={[0.6,0.6]}
                               ><Text style={{
                                   color:'white',fontSize:hp('2.3%')
                              }}>Confirm requestt</Text>
                   </LinearGradient>
                 </TouchableOpacity>
                 <TouchableOpacity 
                     style={{marginTop:hp('2.5%'),marginBottom:hp('7%')}}
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
        <TouchableWithoutFeedback
         onPress={Keyboard.dismiss} accessible={false}>
          <View style={{flex:this.state.fle1 ,zIndex:1,
         
        }}>
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
             }}>Karina Smith</Text>
             
             </ImageBackground>
          </View>
          </TouchableWithoutFeedback>
          <View behavior="padding" style={{
             flex:this.state.fle2,
              backgroundColor:'#F9F9FC',
              zIndex:1,
            
              }}>
        
         
        
       
          <View style={{
            flex:1,
            backgroundColor:'white',
             marginTop:hp('-7.5%'),
              marginHorizontal:wp('4%'),
              borderTopStartRadius:hp('3%'),
              borderTopEndRadius:hp('3%'),
              zIndex:4
          }}>
        
          <View style={{
                       height:hp(this.state.heiChat), padding:hp('3%')
                       }}>
                       <ScrollView showsVerticalScrollIndicator={false}>
                         
                              
                       <View style={{alignItems:'center'}}>
                          <Text style={{
                              color:'#787993', fontSize:hp('2%') , fontWeight:'500'
                          }}>{this.state.fecha}</Text>
                       </View>
                       
                 

                       { 
                         this.state.arrey.map((item,i)=> {

                             return(
                                <View key={i}>
                              {item}
                          </View>
                    
                             )
                  
                      } )

                    }

 
                 





 

                       <View style={{alignItems:'center',marginTop:hp('2%')}}>
                          <Text style={{
                              color:'#787993', fontSize:hp('2%') , fontWeight:'500'
                          }}>{this.state.hora}</Text>
                       </View>
                
                      
            </ScrollView>
            </View>
          
    
         <View style={{height:hp(this.state.heitext),backgroundColor:'#F9F9FC',
              flexDirection:'row'}}>
            
            <TouchableOpacity style={{justifyContent:'center',alignItems:'center',height:hp('7.5%'),
                  paddingVertical:hp('0.5%'),paddingHorizontal:hp(horizoBot2),borderColor:'#e2e7ee',
                  borderRadius:hp('15%'),backgroundColor:'white',marginTop:hp('2%'),
                  marginLeft:wp('0.1%')
                   }}   onPress = { () => this.toggleModal(true)}>  
                   <Image source={require('../assets/iconos/clip.jpg')} 
                                 style={{ width:wp('7%'),height:hp('4%'),
                                  borderRadius:hp('1%')}}
                     />
           </TouchableOpacity>
            {/*   #e2e7ee  */}



               <View style={{ backgroundColor:'white',marginBottom:hp('2%'),
                    flexDirection:'row', borderWidth:wp('0.2%'),borderColor: '#e2e7ee',  padding:hp('2%'),
                borderRadius:hp('7.5%'), width:wp(cajaInput),marginLeft:wp('2%'),marginTop:hp('2.5%')}}>
             
               <View style={{flex:1,alignItems:'center'}}>
                 </View>  
                 <View style={{flex:8, marginLeft:wp('1.5%')}}>
         
                   <TextInput
                    
                      underlineColorAndroid="transparent"
                      placeholder="Type a message..."
                      placeholderTextColor="#e2e7ee"
                      onChangeText={(text2) => 
                          this.setState({text2}) }
                     
                     textAlignVertical='top'
                     value={this.state.text2}
                />
              </View>
           
           </View>
           
           <TouchableOpacity style={{justifyContent:'center',alignItems:'center',height:hp('7.5%'),
                  paddingVertical:hp('1'),paddingHorizontal:hp(horizoBot),
                  borderRadius:hp('15%'),backgroundColor:'white',marginTop:hp('2%'),borderColor:'#e2e7ee',
                  marginLeft:wp('2%')
                   }}   onPress = { () => {
                     if(!this.state.text2==''){//controla que no envia nada vacio
 
                     this.eleccion('dos') ,Keyboard.dismiss() 
                     }}}>   
                   <Image source={require('../assets/iconos/enviomen.jpg')} 
                                 style={{ width:wp('9%'),height:hp('5%'),
                                  borderRadius:hp('5%')}}
                     />
            </TouchableOpacity>
         </View>
        
         </View>
  
     
        
         {/*  ----------------------------------------------------------------------------  */}
        
                
         </View>
        
        </View>
           
    );
  }
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

