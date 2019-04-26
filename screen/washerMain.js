import React, { Component } from 'react';
import {Alert,Platform,
  StyleSheet,ImageBackground, Dimensions,
  Text, 
  View,Image,TouchableOpacity,TextInput,ScrollView
} from 'react-native';
 
import {widthPercentageToDP as wp, heightPercentageToDP as hp} from 'react-native-responsive-screen';
import SwitchToggle from 'react-native-switch-toggle';
import {LinearGradient} from  'expo';

//https://expo.github.io/vector-icons/
 
export default class WasherMain extends Component {

    static navigationOptions = {
        header: null ,
    };
  

  constructor(props) {
    super(props);
  
    this.state = {
     switchAvalible:false,
     fecha:'January 2019',
      money:'867.60',
      numWasher:'14 washes',
      tipoCoche:'MINI 3-door Hatch',
      precio:25,
        time:50,
     }
}


  
  render() {

    let screenWidth=Dimensions.get('window').width;
    let screenHeight=Dimensions.get('window').height;

    //alert(screenHeight)
    if(screenHeight<=678){
      wiMot='40%'
   }else if(screenHeight<=684){
    wiMot='40%'
   }else if(screenHeight<=775){
    wiMot='40%'
   }else{
    wiMot='45%'
   }




    return (


    <View style={{flex:1}}>
 
       <View style={{flex:5,backgroundColor:'#2d7cf7'}}>
       <ImageBackground source={require('../assets/mixto/fondoReal.png')}
       style={{width: '100%', height: '100%'}} >

    <View style={{flexDirection:'row',marginHorizontal:wp('6%'),marginTop:hp('7.5%')}}>
        <TouchableOpacity
                   onPress={() => this.props.navigation.toggleDrawer()} 
                 style={{flex:1 }} >
               <Image source={require('../assets/iconos/menuIcon.png')} 
                  style={{ }}
                   />
        </TouchableOpacity>
        <View style={{flex:7,alignItems:'flex-end',justifyContent: 'center',}}>
          <Text style={{
             color:'#fff', fontSize:hp('2.1%'),  fontWeight:'500'}}>
             I’m available</Text>

        </View>
        
        <View style={{flex:2, alignItems:"flex-end",justifyContent:'center'}}>
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
                              switchOn={this.state.switchAvalible}
                              onPress={()=>
                                this.setState({
                                    switchAvalible:!this.state.switchAvalible,
                              })
                            } // funcion 
                              circleColorOff='white'
                              circleColorOn='white'
                           
                            />

        
        </View>
    </View>
          

        <View style={{marginTop:hp('3.5%') ,alignItems:'center'}}>
               <Text style={{
               color:'#fff', fontSize:hp('2.4%'),  fontWeight:'500'
               }}>{this.state.fecha}</Text>
               <Text style={{
               color:'#fff', fontSize:hp('5.5%'),  fontWeight:'500'         
                }}>$ {this.state.money}</Text>
               <Text style={{
               color:'#fff', fontSize:hp('2%'),  fontWeight:'500',opacity: 0.5,    
                }}>{this.state.numWasher}</Text>
        </View>

      
      
      </ImageBackground>
      </View>
   
      <View  style={{
          flex:5,
          backgroundColor:'#F9F9FC',}}>

           <View style={{
             paddingVertical:hp('5%'),
             backgroundColor:'#C4C4C4',
             marginHorizontal:wp('12%'),
             borderRadius:hp('3%'),
             marginTop:hp('-19%'),
          
              }}>

             </View>
             <View style={{
              paddingVertical:hp('5%'),
             backgroundColor:'#d7dde6',
              marginTop:hp('-9%'),
             marginHorizontal:wp('9%'),
             borderRadius:hp('3%'),
           
              }}>

        
             </View>

       <TouchableOpacity 
                  style={{ backgroundColor:'white',
                  marginTop:hp('-9%'),
                  marginHorizontal:wp('6%'),
                  borderRadius:hp('3%'),
                 height:hp('43%')}}
                                 onPress={() => this.props.navigation.navigate("washerRequestDetail")}
                        > 
            
         <View style={{alignItems:'center'}}>
              <Image source={require('../assets/coches/user1/cocheuse3.png')} 
                                  style={{width:wp('85%'),height:hp('23%'),marginTop:hp('0.5%'),
                                  marginLeft:wp('1%'),
                                  borderTopRightRadius: hp('3%'),borderTopLeftRadius: hp('3%'),}}
                                   />

                  <View style={{position:'absolute',bottom:hp('1.5%') }}>
                 <Text  style={{ 
                    color:'white',fontSize:hp('3.4%'),fontWeight:'500'}}>
                    {this.state.tipoCoche}</Text>
                 </View>
          </View>

            <View style={{alignItems:'center',marginTop:hp('2%')}}>
                <Text style={{
                   color:'#787993',fontSize:hp('1.8%'),fontWeight:'400'
                }}>Services requested</Text>
                <Text style={{
                 color:'#25265e',fontSize:hp('2%'),fontWeight:'500'
                }}>Complete: Exterior and Interior Wash</Text>
            </View>




            <View  style={{ marginTop:hp('1.5%'),flexDirection:'row',alignItems:'center', 
                               }}>
                                    <View style={{
                                        flex:5,
                                       
                                        alignItems:"center"
                                    }}>
                                        <Text style={styles.texto}>Estimate Price</Text>
                                        <Text style={styles.texto2}>${this.state.precio}.00</Text>
                                    </View>
                                    <View  style={{
                                         flex:5,
                                        borderLeftColor:'#787993', 
                                        borderLeftWidth: 0.5,  
                                       
                                        alignItems:"center"
                                    }}>
                                          <Text style={styles.texto}>Estimate Time</Text> 
                                          <Text style={styles.texto2}>{this.state.time} min</Text> 
                                    </View>

                               </View>

      
              </TouchableOpacity>
          {/*   fin de recuadro principal */}

        
    

     <View style={{marginTop:hp('6%') 

     }}>
          <LinearGradient colors={['#6c30cc','#2d7cf7']}
                                  style={{
                                        borderRadius:hp('3%'),padding:hp('1.8%'),
                                        marginHorizontal:'6%'}}
                                         start={[0.1,0.1]}
                                          end={[0.6,0.6]}
                                           >
                <Text style={{
                        color:'white',fontSize:hp('3%'),fontWeight:'400'
                   }}>Create your {'\n'}Wash Empire</Text>
                    <Text style={{ 
                        color:'white',fontSize:hp('1.8%')

                         
                   }}>Earn up to 10% of {'\n'}every service</Text>
                    
               </LinearGradient>

               <View style={{ position:'absolute',right:wp('1%'),bottom:hp('-0.6%'),
                             }}>
                        <Image source={require('../assets/mixto/moteroMoto.png')} 
                                  style={{ width:wp(wiMot),height:hp('27%') }}
                                   />

                            </View>
       </View>

      </View>

   </View>

    );
  }
}

const styles = StyleSheet.create({
    texto:{
        color:'#787993',fontSize:hp('1.8%') ,fontWeight:'500'
     },
     texto2:{
          
        color:'#25265e',fontSize:hp('3%') ,fontWeight:'500'
     },
    
});