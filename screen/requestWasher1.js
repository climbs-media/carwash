import React, { Component } from 'react';
import {Alert,Platform,
  StyleSheet,
  Text,Dimensions ,ImageBackground,
  View,Image,TouchableOpacity,TextInput,ScrollView,
} from 'react-native';
 
import {Ionicons}  from "@expo/vector-icons"
import {LinearGradient} from  'expo';
import {widthPercentageToDP as wp, heightPercentageToDP as hp} from 'react-native-responsive-screen';
//https://expo.github.io/vector-icons/
 
export default class RequestWasher1 extends Component {

    static navigationOptions = {
        header: null ,
      
    };

    
  constructor(props) {
    super(props);
  
    this.state = {

     
         borde1:null,
         borde2:null,
         oculta1:'flex',//motero
         oculta2:'none',//caja
        
         }
    }

    presiona(caja){
    
      switch (caja) {
        case 'cajaUno':
                          if(this.state.borde1==null){
                             this.setState({
                                borde1:styles.borde1,
                                oculta1:'none',//motero
                                oculta2:'flex',//caja
                                 })

                                
  
                          }else{
                            this.setState({
            
                              borde1:null,
                            
                               })

                            if(this.state.borde2==null){
                              this.setState({
                                oculta1:'flex',//motero
                                oculta2:'none',//caja
                                
                                })
                              } 
                              
                            }
          
                     break;
      
        case 'cajaDos':
                    if(this.state.borde2==null){
                             this.setState({

       
                            borde2:styles.borde1,
                            oculta1:'none',//motero
                            oculta2:'flex',//caja

                          })

                       }else{
                        this.setState({

                       borde2:null,
                   
                      })

                      if(this.state.borde1==null){
                        this.setState({
                          oculta1:'flex',//motero
                          oculta2:'none',//caja
                          
                          })
                        } 
                   }
                 
               break;
              }
      
         }

  render() {
 let screenWidth=Dimensions.get('window').width;
 let screenHeight=Dimensions.get('window').height;



if(screenHeight<=592){

} else if(screenHeight<=678){

  
}
else{

}



if(screenHeight<=592){
  heiImg='7%';
  wiImg='15%';
  marginMoter='2%';
  widMoter='45.3%';
  heiMoter='35%';
  cajaTrans='10%';
  padingBordeBlanko='9.6%';
  flex2=3.5;
  botoTop='2.2%';
}else if(screenHeight<=678){
  heiImg='5.5%';
  wiImg='10%';
  marginMoter='1.5%';
  widMoter='55%';
  heiMoter='37%';
  cajaTrans='9%';
  padingBordeBlanko='8.5%';
  flex2=4;
  botoTop='4%';
}else if(screenHeight<=684){
  heiImg='7%';
  wiImg='15%';
  marginMoter='1.8%';
widMoter='47.9%';
heiMoter='37%';
cajaTrans='9%';
padingBordeBlanko='8.5%';
flex2=4;
botoTop='4%';
}else if(screenHeight<=775){
  heiImg='5.5%';
  wiImg='10%';
  marginMoter='1.8%';
widMoter='47.9%';
heiMoter='37%';
cajaTrans='8%';
padingBordeBlanko='7.5%';
flex2=4;
botoTop='4%';
}else{
  heiImg='7%';
  wiImg='15%';
  marginMoter='1.8%';
widMoter='47.9%';
heiMoter='37%';
cajaTrans='8%';
padingBordeBlanko='7.5%';
flex2=4;
botoTop='4%';
}



    return (


      <ImageBackground source={require('../assets/mixto/fondo2.png')}
      style={{flex:1,width: '100%', height: '100%', }}>
       

        
         <View style={{flex:6}}> 
        <View style={{marginHorizontal:wp('4%'),marginTop:hp('3%')}}>
        <TouchableOpacity
                 onPress={() => this.props.navigation.toggleDrawer()} 
                 style={{width:wp('15%'),marginTop:hp('4%')}} >
        <Image source={require('../assets/iconos/menuIcon.png')} 
                  style={{ }}
                   />
        </TouchableOpacity>
        <Text style={{marginTop:hp('2%'),
            color:'#fff',fontSize:hp('4.2%') ,fontWeight:'bold'
        }}>Request Washer</Text> 
        <Text style={{marginTop:hp('0.2%'),
              color:'#fff',fontSize:hp('2%'),fontWeight:'500'
        }}> Choose type service</Text>
        </View>

{/* ----------  primera caja ------------------*/}
<TouchableOpacity  
         onPress={() => this.presiona('cajaUno')}
            >  
  <View style={{marginHorizontal:wp('4%') , marginTop:hp('1.5%')}}>

  
     <View  style={{
            
             flexDirection:'row',
        }}>
         <View style={{ flex:2.5,
            alignItems:"center",justifyContent: 'center',paddingVertical:hp('1.5%'),
         }}>
          <Image source={require('../assets/iconos/car1.png')} 
                        style={{ height:hp(heiImg),width:wp(wiImg),
                           zIndex:3,marginTop:hp('1.5%')
                                   }} />
           <Text style={{color:'white',marginTop:hp('1.5%'), fontSize:hp('2.3%'),zIndex:3,fontWeight:'500'}}>
           Exterior
           </Text>
        </View>
        <View  style={{flex:7.5,marginHorizontal:wp('2%')    }}>

        <View style={{marginTop:hp('3%'),borderLeftColor:'white',
                     borderLeftWidth:hp('0.1%'),zIndex:3}}>
        <Text style={styles.texto}>This wash package includes:</Text>
         <Text style={styles.texto}>• Repel Shield</Text>
         <Text style={styles.texto}>• Underbody Wash</Text>
         <Text style={styles.texto}>• Tire Shine </Text>
         <Text style={styles.texto}>• T3 Conditioner</Text>

        </View>
         

        </View>
       
       <View style={{
            backgroundColor:'#6c30cc',
            opacity:0.4,
            paddingRight:screenWidth-wp('10%'),
            paddingVertical: hp(cajaTrans),
           
            borderRadius:hp('1.5%'),
            zIndex:2,
            position:'absolute',
        
       }}>
      </View>
       <View style={[{
           
         
           paddingRight:screenWidth-wp('12%'),
          
           paddingVertical: hp(padingBordeBlanko),
          right:wp('2%'),
           borderRadius: hp('1.5%'),
           zIndex:4,
           position:'absolute',
          
            },this.state.borde1]}>
            </View>

       </View>
     </View>
     </TouchableOpacity>
     {/* ---------- -------------  -----------*/}
     <TouchableOpacity  
         onPress={() => this.presiona('cajaDos')}
            >  

     <View style={{marginHorizontal:'4%' , marginTop:hp('3.5%')}}>

  
     <View  style={{ 
             
             flexDirection:'row'
        }}>
          <View style={{ flex:2.5,
            alignItems:"center",justifyContent: 'center',paddingVertical:hp('1%'),
         }}>
        
          <Image source={require('../assets/iconos/llave1.png')} 
                        style={{ 
                          height:hp(heiImg),width:wp(wiImg),
                         zIndex:3,marginTop:hp('1.5%')
                                   }} />
           <Text style={{color:'white',fontSize:hp('2.3%'),marginTop:hp('1.5%'), zIndex:3,fontWeight:'500'}}>
           Interior
           </Text>
        </View>
        <View  style={{flex:7,marginHorizontal:wp('2%')    }}>

        <View style={{marginTop:hp('3%'),borderLeftColor:'white',
                     borderLeftWidth:hp('0.1%'),zIndex:3}}>
        <Text style={styles.texto}>This wash package includes:</Text>
         <Text style={styles.texto}>• Repel Shield</Text>
         <Text style={styles.texto}>• Underbody Wash</Text>
         <Text style={styles.texto}>• Tire Shine </Text>
         <Text style={styles.texto}>• T3 Conditioner</Text>

        </View>
         

        </View>
       

     {/*   CAJA TRANSPARENTE   */}
       <View style={{
            backgroundColor:'#6c30cc',
            opacity:0.4,
            paddingRight:screenWidth-wp('10%'),
            paddingVertical: hp(cajaTrans),
           
            borderRadius:hp('1.5%'),
            zIndex:2,
            position:'absolute',
        
       }}>
          
       </View>
       <View style={[{
           
         
           paddingRight:screenWidth-wp('12%'),
          
           paddingVertical: hp(padingBordeBlanko),
          right:wp('2%'),
           borderRadius: hp('1.5%'),
           zIndex:4,
           position:'absolute',
          
            },this.state.borde2]}>
            </View>

       </View>
     </View>

     </TouchableOpacity>

     </View> 

     {/* --------------------------------------   */}

     <View style={{display:this.state.oculta1, alignItems:'center', flex:flex2,
       marginTop:hp(marginMoter)}}>
     <Image source={require('../assets/mixto/moteroMoto.png')} 
                        style={{ zIndex:2, width:wp(widMoter),height:hp(heiMoter)
                                   }} />
     </View>

     {/*----------------------------------------------- */}

     <View style={{display:this.state.oculta2,flex:flex2,
         marginHorizontal:wp('0.5%'),marginTop:hp('4%')
     }}>
          <View  style={{
              backgroundColor:'white',
              borderTopStartRadius:hp('4.5%'),
              borderTopEndRadius:hp('4.5%'),
              alignItems:'center',
               marginHorizontal:wp('2%'),
               flex:1,
            
          }}>
          <Text style={{marginTop:hp('1.5%'),
              color:'#25265e',fontSize:hp('3%'),  fontWeight:'500'
          }}>How much is your budget?</Text>
          <Text style={{marginTop:hp('2%'),
              color:'#787993',fontSize:hp('2%'), fontWeight:'300'
          }}>Washer can send you a new </Text>
          <Text style={{
           color:'#787993',fontSize:hp('2%'), fontWeight:'300'
          }}>estimation when he checks your car</Text>
          <View style={{ marginTop:hp('2%'),paddingHorizontal:wp('20%'),
              borderRadius:hp('6%'),paddingVertical:hp('1%'),borderColor: '#787993',
              borderWidth: hp('0.2%'), alignItems:'center'
          }}>
          <Text style={{
              color:'#25265e',fontSize: hp('4.5%'),fontWeight:'500'
          }}>$ 30.00</Text>

          </View>
        
                       <TouchableOpacity 
                                 style={{width:wp('75%'),marginTop:hp(botoTop),marginBottom:hp('4%')}}
                                 onPress={() =>{
                                   this.props.navigation.navigate("request3") ,
                                  this.setState({
                                    borde1:null,
                                    borde2:null,
                                    oculta1:'flex',//motero
                                    oculta2:'none',//caja
                                  })
                                  }
                                 }
                                  >  
                                <LinearGradient colors={['#6c30cc','#2d7cf7']}
                                  style={{ 
                                      borderRadius:wp('7%'),alignItems: 'center',
                                        padding:hp('2%')}}
                                         start={[0.1,0.1]}
                                          end={[0.6,0.6]}
                                           ><Text style={{
                                               color:'white',fontSize:hp('2.7%')
                                          }}>Find my washer now</Text>
                               </LinearGradient>
                             </TouchableOpacity>

          </View>

          

     </View>



 
   </ImageBackground>
    );
  }
}

 
const styles = StyleSheet.create({
  

   texto:{
   color:'white',
   fontWeight:'500',
   fontSize:13,
   marginLeft:15,
   zIndex:3
  
  
   },
   borde1:{
       borderWidth:hp('0.4%'),
       borderColor:'white',
       borderRadius:hp('1.5%'),

   }
});