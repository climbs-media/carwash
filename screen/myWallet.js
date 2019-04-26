import React, { Component } from 'react';
import {Alert,Platform,ScrollView,
  StyleSheet,ImageBackground,Dimensions,
  Text,TouchableWithoutFeedback,Keyboard,
  View,Image,TouchableOpacity,TextInput
} from 'react-native';
 
import {LinearGradient} from  'expo';
import {Ionicons}  from "@expo/vector-icons"
import {widthPercentageToDP as wp, heightPercentageToDP as hp} from 'react-native-responsive-screen';
//https://expo.github.io/vector-icons/
 
export default class  MyWallet extends Component {


    static navigationOptions = {
        header: null ,
    };


    usuariosPago1=[
        {
        nombre:'Jeffery Nguyen',
        foto:require('../assets/usuarios/arturo.png'),
        motivo:'Commision from Washer',
        tipo:'comision',//me ayuda para saber que tipo de caja usare
        dinero:'3.00',
        fecha:'12/01/2019',
        },
       {
        nombre:'Mario Hernández',
        foto:' ',
        motivo:'Service Exerior and Interio Washr',
        tipo:'service',//me ayuda para saber que tipo de caja usare
        dinero:'93.00',
        fecha:'12/01/2019',
        pago:1,

        }
    ]
     usuariosPago2=[   {
          nombre:'Sam Pittman',
          foto:require('../assets/usuarios/carla.png'),
          motivo:'Commision from Washer',
          tipo:'comision',//me ayuda para saber que tipo de caja usare
          dinero:'2.00',
          fecha:'08/01/2019'
          },
          {
            nombre:'Duane Romero',
            foto:require('../assets/usuarios/influencer.png'),
            motivo:'Commision from Washer',
            tipo:'comision',//me ayuda para saber que tipo de caja usare
            dinero:'2.00',
            fecha:'08/01/2019'
            },
            {
                nombre:'Mario Hernández',
                foto:' ',
                motivo:'Service Exerior and Interio Washr',
                tipo:'service',//me ayuda para saber que tipo de caja usare
                dinero:'93.00',
                fecha:'12/01/2019'
                },
        
    ]
  
        

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
 
  
 

  render() {

    let screenWidth=Dimensions.get('window').width;
    let screenHeight=Dimensions.get('window').height;
   
  
   
   if(screenHeight<=592){
    wifoto='15%';
        heifoto='7.5%'
  }else if(screenHeight<=678){
    wifoto='15%';
        heifoto='7.5%'
 }else if(screenHeight<=684){
    wifoto='15%';
    heifoto='7.5%'
 }else if(screenHeight<=775){
    wifoto='15%';
        heifoto='7.5%'
   }else{
    wifoto='15.5%';
    heifoto='7%'
 }
   

    return (
 
    <View style={{flex:1}}>

  <View style={{flex:3,backgroundColor:'#2d7cf7'}}>
  <ImageBackground source={require('../assets/mixto/fondoReal.png')}
       style={{width: '100%', height: '100%'}} >

<TouchableOpacity
                 onPress={() => this.props.navigation.toggleDrawer()} 
                 style={{ width:wp('15%'),marginTop:hp('8%'),marginHorizontal: wp('6%')}} >
             <Image source={require('../assets/iconos/menuIcon.png')} 
                  style={{ }}
                   />
       </TouchableOpacity>

      <View style={{alignItems:'center'}}>
         <Text style={{marginTop:hp('-3.5%'),
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
      marginTop:hp('-5%'),
       marginHorizontal:wp('4%'),
        borderRadius:hp('3%'),
  }}>


 

     

    <View style={{alignItems: 'center',marginTop:hp('1.5%')}}>
       <View style={{borderWidth:hp('0.2%'),borderColor: '#e2e7ee',justifyContent:'center',
             borderRadius:hp('20%'),width:wp('85%'),height:hp('8%')}}>
           
             <View style={{flexDirection:'row',marginHorizontal:wp('6%')}}>
                 <View tyle={{
                     flex:1
                 }}>
                  <Text style={{
                      color:'#25265e',fontSize:hp('2.3%'),fontWeight:'500'
                  }} >All transactions</Text>
                 </View>
             
                  <View style={{flex:1,alignItems:'flex-end',justifyContent:'center'
                          }}>
                           <Image source={require('../assets/iconos/arrowdrow.png')} 
                                        style={{  }}
                                      />
                   </View>
             </View>
         </View>
 </View>

 <ScrollView showsVerticalScrollIndicator={false} style={{marginHorizontal:wp('4%'),marginTop:hp('1.5%')}}>

{/*  pago de primer bloque de clientes  1 */}

 {
   this.usuariosPago1.map((item,i)=> {

      
if(item.tipo=="comision"){
    return (
        <View key={i} style={{marginHorizontal:wp('2%'),marginTop:hp('1.2%'),
          paddingBottom:hp('1.7%'),paddingTop:hp('1'),   borderBottomColor:'#d7d7df',borderBottomWidth:hp('0.2%')}}>
            <View style={{flexDirection:'row',
                }}>
             <View style={{flex:2}}>
             <Image source={item.foto} 
                    style={{ width:wp(wifoto),height:hp(heifoto),borderRadius:hp('20%') }} />

             </View>
             <View style={{flex:5,marginLeft:wp('0.5%'),justifyContent:'center'}}>
              <Text style={{
                  color:'#25265e' ,fontSize:hp('2%'),fontWeight:'500'
              }}>{item.nombre}</Text>
             <Text style={{
                  color:'#787993',fontSize:hp('1.7%'),fontWeight:'200'
              }}>{item.motivo}</Text>
             </View>
              <View style={{flex:3 ,alignItems:'flex-end',justifyContent:'center'}}>
             <Text  style={{
                  color:'#25265e',fontSize:hp('2.8%'),fontWeight:'500'
              }}>$ {item.dinero}</Text>
             <Text style={{
                  color:'#787993',fontSize:hp('1.8%'),fontWeight:'500'
              }}>{item.fecha}</Text>
             </View>
            

            </View>
        </View>
       )

}else if(item.tipo=="service"){
    return (
        <View key={i} style={{marginHorizontal:wp('2%'),paddingBottom:hp('1.7%'),paddingTop:hp('1'),
              borderBottomColor:'#d7d7df',borderBottomWidth:hp('0.2%')}}>
            <View style={{flexDirection:'row',
                }}>
             
             <View style={{flex:7,justifyContent:'center'}}>
              <Text style={{
                  color:'#25265e' ,fontSize:hp('2%'),fontWeight:'500'
              }}>{item.nombre}</Text>
             <Text style={{
                  color:'#787993',fontSize:hp('1.7%'),fontWeight:'200'
              }}>{item.motivo}</Text>
             </View>
              <View style={{flex:3 ,alignItems:'flex-end',justifyContent:'center'}}>
             <Text  style={{
                  color:'#25265e',fontSize:hp('2.8%'),fontWeight:'500'
              }}>$ {item.dinero}</Text>
             <Text style={{
                  color:'#787993',fontSize:hp('1.8%'),fontWeight:'500'
              }}>{item.fecha}</Text>
             </View>
            

            </View>
        </View>
       )

}
 })
 }
    <View  style={{marginHorizontal:'2%',paddingBottom:hp('1.7%'),paddingTop:hp('1'),
              borderBottomColor:'#d7d7df',borderBottomWidth:hp('0.2%')}}>
            <View style={{flexDirection:'row',
                }}>
             
             <View style={{flex:6,justifyContent:'center'}}>
              <Text style={{
                  color:'#25265e' ,fontSize:hp('2%'),fontWeight:'500'
              }}>Transfer Amount</Text>
             <Text style={{
                  color:'#787993',fontSize:hp('1.7%'),fontWeight:'200'
              }}>From CarWash</Text>
             </View>
              <View style={{flex:4 ,alignItems:'flex-end',justifyContent:'center'}}>
             <Text  style={{
                  color:'#ff7d78',fontSize:hp('2.8%'),fontWeight:'500'
              }}>-$3000.00</Text>
             <Text style={{
                  color:'#787993',fontSize:hp('1.8%'),fontWeight:'500'
              }}>10/01/2019</Text>
             </View>
            

            </View>
        </View>
 
{/*   segundoo  bloquee , con  los segundos clientes*/}




{
   this.usuariosPago2.map((item,i)=> {

      
if(item.tipo=="comision"){
    return (
        <View key={i} style={{marginHorizontal:wp('2%'),marginTop:hp('1.2%'),
          paddingBottom:hp('1.7%'),paddingTop:hp('1'),   borderBottomColor:'#d7d7df',borderBottomWidth:hp('0.2%')}}>
            <View style={{flexDirection:'row',
                }}>
             <View style={{flex:2}}>
             <Image source={item.foto} 
                    style={{ width:wp(wifoto),height:hp('7.5%'),borderRadius:hp('20%') }} />

             </View>
             <View style={{flex:5,marginLeft:wp('0.5%'),justifyContent:'center'}}>
              <Text style={{
                  color:'#25265e' ,fontSize:hp('2%'),fontWeight:'500'
              }}>{item.nombre}</Text>
             <Text style={{
                  color:'#787993',fontSize:hp('1.7%'),fontWeight:'200'
              }}>{item.motivo}</Text>
             </View>
              <View style={{flex:3 ,alignItems:'flex-end',justifyContent:'center'}}>
             <Text  style={{
                  color:'#25265e',fontSize:hp('2.8%'),fontWeight:'500'
              }}>$ {item.dinero}</Text>
             <Text style={{
                  color:'#787993',fontSize:hp('1.8%'),fontWeight:'500'
              }}>{item.fecha}</Text>
             </View>
            

            </View>
        </View>
       )

}else if(item.tipo=="service"){
    return (
        <View key={i} style={{marginHorizontal:wp('2%'),paddingBottom:hp('1.7%'),paddingTop:hp('1'),
              borderBottomColor:'#d7d7df',borderBottomWidth:hp('0.2%')}}>
            <View style={{flexDirection:'row',
                }}>
             
             <View style={{flex:7,justifyContent:'center'}}>
              <Text style={{
                  color:'#25265e' ,fontSize:hp('2%'),fontWeight:'500'
              }}>{item.nombre}</Text>
             <Text style={{
                  color:'#787993',fontSize:hp('1.7%'),fontWeight:'200'
              }}>{item.motivo}</Text>
             </View>
              <View style={{flex:3 ,alignItems:'flex-end',justifyContent:'center'}}>
             <Text  style={{
                  color:'#25265e',fontSize:hp('2.8%'),fontWeight:'500'
              }}>$ {item.dinero}</Text>
             <Text style={{
                  color:'#787993',fontSize:hp('1.8%'),fontWeight:'500'
              }}>{item.fecha}</Text>
             </View>
            

            </View>
        </View>
       )

}
 })
 }
    <View  style={{marginHorizontal:wp('2%'),paddingBottom:hp('1.7%'),paddingTop:hp('1'),
              borderBottomColor:'#d7d7df',borderBottomWidth:hp('0.2%')}}>
            <View style={{flexDirection:'row',
                }}>
             
             <View style={{flex:6,justifyContent:'center'}}>
              <Text style={{
                  color:'#25265e' ,fontSize:hp('2%'),fontWeight:'500'
              }}>Transfer Amount</Text>
             <Text style={{
                  color:'#787993',fontSize:hp('1.7%'),fontWeight:'200'
              }}>From CarWash</Text>
             </View>
              <View style={{flex:4 ,alignItems:'flex-end',justifyContent:'center'}}>
             <Text  style={{
                  color:'#ff7d78',fontSize:hp('2.8%'),fontWeight:'500'
              }}>-$1.090.00</Text>
             <Text style={{
                  color:'#787993',fontSize:hp('1.8%'),fontWeight:'500'
              }}>10/01/2019</Text>
             </View>
            

            </View>
        </View>

</ScrollView>

<View style={{alignItems:'center',marginTop:hp('4%'),marginBottom:hp('3%')}}>
                     <TouchableOpacity 
                                 style={{width:wp('75%')}}
                                 onPress={() =>this.props.navigation.navigate("myWalletTransfer") }
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


   




  </View>

</View>

</View>
 
    );
  }
}

 
const styles = StyleSheet.create({
 
 
});