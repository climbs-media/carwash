import React, { Component } from 'react';
import {Alert,Platform,
  StyleSheet,ImageBackground,
  Text,TouchableWithoutFeedback,Keyboard,
  View,Image,TouchableOpacity,TextInput
} from 'react-native';
 
import {LinearGradient} from  'expo';
import {Ionicons}  from "@expo/vector-icons"
import {widthPercentageToDP as wp, heightPercentageToDP as hp} from 'react-native-responsive-screen';
//https://expo.github.io/vector-icons/
 
export default class  MyWalletTransfer extends Component {


    static navigationOptions = {
        header: null ,
    };

        

  constructor(props) {
    super(props);
  
    this.state = {
      //datos 
      dinero:'1.867.60',
      fecha:'January, 2019',

      cajaInicio:'00.00',
      cajaNumeros:'',
      mostrarA:'flex',
      mostrarB:'none'
     
    }
}

presionaste(num){
  this.setState({
    mostrarA:'none',
    mostrarB:'flex',
    cajaNumeros:this.state.cajaNumeros+num
  }) 
}

 
  
  borramos(){
  
  let cadena=this.state.cajaNumeros;
  //alert(cadena.length);
  cadena=cadena.substr(0,cadena.length-1);
  
  this.setState({
    cajaNumeros:cadena,
  })
  }
  
  
 

  render() {
    return (

<TouchableWithoutFeedback onPress={Keyboard.dismiss} accessible={false}>
    <View style={{flex:1}}>

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

      <View style={{alignItems:'center'}}>
         <Text style={{marginTop:hp('-4.5%'),
         color:'#fff',fontSize:hp('2%'), fontWeight:'500',opacity:0.5
        }}>Total Balance</Text>

        <Text style={{
           color:'#fff',fontSize:hp('6%'), fontWeight:'500', 
           }}>$ {this.state.dinero}</Text>

          <Text style={{
            color:'#fff',fontSize:hp('2.5%'), fontWeight:'300',
           }}>{this.state.fecha}</Text>
         

      </View>


   
   </ImageBackground>
  </View>
  <View  style={{
      flex:7,
      backgroundColor:'#F9F9FC', }}>


  <View style={{
flex:1,
backgroundColor:'white',
 marginTop:hp('-7%'),
  marginHorizontal:wp('4%'),
  borderTopStartRadius:hp('3%'),
  borderTopEndRadius:hp('3%'),
  }}>


    <View style={{marginHorizontal:wp('8.5%'),marginTop:hp('2.5%'),
                alignItems: 'center', justifyContent: 'center',marginBottom:hp('1%')}}>
        
        <Text style={styles.parrafos}>How much do you want to transfer to</Text>
        <Text style={styles.parrafos}>your bank account?</Text>
      
    </View>

     

    <View style={{alignItems: 'center', justifyContent: 'center'}}>
       <View style={{ alignItems:'center',justifyContent:'center', borderWidth: hp('0.2%'),borderColor: '#e2e7ee',
             borderRadius:hp('20%'),width:wp('70%'),height:hp('8%')}}>
        
          <Text style={{display:this.state.mostrarA,
              color:'#e2e7ee',  fontSize:hp('4.5%')   }}>$ {this.state.cajaInicio}</Text>
          <Text style={ {display:this.state.mostrarB,
              color:'#25265e',  fontSize:hp('4.5%')   }}>$ {this.state.cajaNumeros}</Text>
        
          
     </View>

     <Text style={styles.parrafos2}>The transfer is completed in 3 working days to</Text>
        <Text style={[styles.parrafos2,{marginTop:hp('-0.6%')}]}>your back account</Text>

 </View>



                  <View style={{ 
                   flexDirection:'row',alignItems:'center', 
                         }}>
                         
                          <View style={{flex:2 ,
                            alignItems:'flex-end',width:wp('20%'),height:hp('6%')}}>
                           <Image source={require('../assets/iconos/mastercard.png')} 
                                        style={{ width:wp('10%'),height:hp('6%')}}
                                      />

                          </View>
                           
                             <Text style={{
                                flex:3,marginLeft:wp('3%'), color:'#25265e' , fontSize:hp('2.3%'), fontWeight:'500'
                            }}>
                            MasterCard
                            </Text>
                            <Text style={{
                                flex:5,marginLeft:wp('1%'), color:'#25265e' ,fontSize:hp('2.3%'), fontWeight:'500'
                            }}>
                           **** **** **** 5967
                            </Text>

                         </View>
  


            <View style={{alignItems:'center',marginTop:hp('0.5%')}}>
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
                                          }}>Transfer to my back</Text>
                               </LinearGradient>
                             </TouchableOpacity>
                             </View>


   {/* -------------------- teclado -------------- */}

   <View style={{ marginHorizontal:wp('10%'),marginTop:hp('2.5%'),
               flexDirection:'row'}}>


       <TouchableOpacity style={{
          flex:3.3,alignItems:"center"
       }}
       onPress={() => 
         this.presionaste('1')
          } >
           <Text  style={[
             styles.botoneX,{marginLeft:wp('-4.5%')}
           ]}>1</Text>
        </TouchableOpacity>
        <TouchableOpacity style={{
          flex:3.3,alignItems:"center"
       }}
       onPress={() => 
         this.presionaste('2')
    } >
           <Text  style={
             styles.botoneX
           }>2</Text>
         </TouchableOpacity>

         <TouchableOpacity style={{
          flex:3.3,alignItems:"center"
       }}
       onPress={() => 
         this.presionaste('3')
    } >
           <Text  style={[
             styles.botoneX,{marginRight:wp('-4.5%')}
           ]}>3</Text>
          </TouchableOpacity>
   </View>



   <View style={styles.caja}>
   <TouchableOpacity style={{
          flex:3.3,alignItems:"center"
       }}
       onPress={() => 
         this.presionaste('4')
      } >
           <Text style={
             styles.botoneX
           }>4</Text>
        </TouchableOpacity>
        <TouchableOpacity style={{
          flex:3.3,alignItems:"center"
       }}
       onPress={() => 
         this.presionaste('5')
    } >
           <Text  style={
             styles.botoneX
           }>5</Text>
         </TouchableOpacity>

         <TouchableOpacity style={{
          flex:3.3,alignItems:"center"
       }}
          onPress={() => 
             this.presionaste('6')
           } >
           <Text  style={
             styles.botoneX
           }>6</Text>
          </TouchableOpacity>
 </View>




   <View style={styles.caja}>
   <TouchableOpacity style={{
          flex:3.3,alignItems:"center"
       }}
          onPress={() => 
              this.presionaste('7')
       } >
           <Text style={
             styles.botoneX
           }>7</Text>
        </TouchableOpacity>
        <TouchableOpacity style={{
          flex:3.3,alignItems:"center"
       }}
         onPress={() => 
             this.presionaste('8')
          } >
           <Text style={
             styles.botoneX
           }>8</Text>
         </TouchableOpacity>

         <TouchableOpacity style={{
          flex:3.3,alignItems:"center"
       }}
          onPress={() => 
              this.presionaste('9')
           } >
           <Text style={
             styles.botoneX
           }>9</Text>
          </TouchableOpacity>

   </View>



   <View style={styles.caja}>
    
<Text style={{flex:3.3,textAlign:"center"
          }}>{' '}</Text>
  
  
  <TouchableOpacity style={{
          flex:3.3,alignItems:"center"
       }}
       onPress={() => 
         this.presionaste('0')
    } >
        
           <Text style={
             styles.botoneX
           }>0</Text>
         </TouchableOpacity>

         <TouchableOpacity style={{
          flex:3.3, alignItems:'center'
       }}
       onPress={() =>  this.borramos() }>
       <View style={{  borderColor:'#F7F3F2',borderWidth:wp('0.5%'),borderRadius:hp('3%'),
        width:wp('13%'),height:hp('7%') ,alignItems:"center",justifyContent:'center'
       }}>
       <Image source={require('../assets/iconos/teclaBorra.png')} 
                        style={{ width:wp('8%'),height:hp('4%') , 
                           }}
                        />

       </View>
           
          </TouchableOpacity>

   </View>




  {/* -----  fin de teclado --------------*/}
  </View>

</View>

</View>
</TouchableWithoutFeedback>
    );
  }
}

 
const styles = StyleSheet.create({
 
    parrafos:{
        color:'#25265e',
        fontSize:hp('2.3%'),
        fontWeight:'500'
      
    },
    parrafos2:{
      color:'#787993',
      fontSize:hp('2%'),

      marginTop:hp('1%'),
    
  },
  caja:{
 
    flexDirection:'row',
    marginTop:hp('1.5%'),
   
    marginHorizontal:wp('6%') 
  
 },

  botoneX:{
     borderColor:'#F7F3F2',borderWidth:wp('0.5%'),borderRadius:hp('3%'),
     paddingHorizontal:wp('4.5%'),
     fontSize:hp('3%') ,fontWeight:'300',
     paddingVertical:hp('1%')
  }

});