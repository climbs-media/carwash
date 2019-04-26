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
 
export default class  Senior extends Component {


    static navigationOptions = {
        header: null ,
    };


    usuarios=[
        {
        nombre:'John Bridges',
        foto:require('../assets/usuarios/arturo.png'),
        correo:'john@gmail.com',
        tipo:'Registered'
        },
         {
            nombre:'Randall Chapman',
            foto:require('../assets/usuarios/influencer.png'),
            correo:'rusty_kris@effertz.tv',
            tipo:'Registered'
            },
            {
                nombre:'Randall Chapman',
                foto:require('../assets/usuarios/carla.png'),
                correo:'john@gmail.com',
                tipo:'Waiting...'
                },
                {
                    nombre:'Clifford Barber',
                    foto:require('../assets/usuarios/arturo.png'),
                    correo:'maurine_rau@yahoo.com',
                    tipo:'Waiting...'
                    },
                    {
                        nombre:'Ian Ryan',
                        foto:require('../assets/usuarios/user.jpg'),
                        correo:'veronica.goodwin@gmail.com',
                        tipo:'Registered'
                        },
   
      
    ]
  
        

  constructor(props) {
    super(props);
  
    this.state = {
        nombre:'Gregory',
        numService:78,
     
    }
}

 
 
   
  
  render() {


    let screenWidth=Dimensions.get('window').width;
    let screenHeight=Dimensions.get('window').height;
   
   

   if(screenHeight<=592){
    widfoto='15%';
    heifoto='7.5%'
  }else if(screenHeight<=678){
    widfoto='15%';
       heifoto='7.5%'
 }else if(screenHeight<=684){
  widfoto='12.5%';
  heifoto='7.5%'
 }else if(screenHeight<=775){
  widfoto='15%';
       heifoto='7.5%'
 }else{
  widfoto='15%';
  heifoto='7%'
 }
   
    return (
 
    <View style={{flex:1}}>
<TouchableWithoutFeedback onPress={Keyboard.dismiss} accessible={false}>
  <View style={{flex:3,backgroundColor:'#2d7cf7'}}>
  <ImageBackground source={require('../assets/mixto/fondoReal.png')}
       style={{width: '100%', height: '100%'}} >

<TouchableOpacity
                onPress={() => this.props.navigation.pop()} 
                 style={{ width:wp('15%'),marginTop:hp('8%'),marginHorizontal: wp('6%')}} >
              <Image source={require('../assets/iconos/retrocedeArrow.png')} 
                  style={{ }}
                   />
       </TouchableOpacity>

   <View style={{alignItems:'center'}}>
         <Text style={{marginTop:hp('-3.5%'),
         color:'#fff',fontSize:hp('2%'), fontWeight:'500'
        }}>Hi {this.state.nombre}!</Text>

        <Text style={{
           color:'#fff',fontSize:hp('5.5%'), fontWeight:'200', 
           }}>Senior Washer</Text>

          <Text style={{
            color:'#fff',fontSize:hp('2.5%'), fontWeight:'300',
           }}>{this.state.numService} Washers in your Empire</Text>
         

      </View>


   
   </ImageBackground>
  </View>
  </TouchableWithoutFeedback>
  <View  style={{
      flex:7,
      backgroundColor:'#F9F9FC', 
  }}>


  <View style={{
  flex:1,
  backgroundColor:'white',
   marginTop:hp('-6.5%'),
    marginHorizontal:wp('4%'),
       borderTopStartRadius:hp('3%'),
    borderTopEndRadius:hp('3%'),
  }}>


 

     

   
            {/* BUSCADOR*/}
            <View style={{ marginTop:hp('2.5%'), marginHorizontal:wp('4%'),paddingVertical:hp('2%'),flexDirection:'row' }}>
                <View style={{flexDirection:'row',flex:5,backgroundColor:'#fff',paddingLeft: '3%',
                      alignItems:'center',marginRight:wp('0.9%'),borderRadius:hp('3%'),borderWidth:hp('0.4%'),
                      borderColor:'#F9F9F9'}}>
                      <View style={{ width:wp('10%'),height:hp('7%'), justifyContent:'center'}}>
                     <Image source={require('../assets/iconos/lupa.png')} 
                          style={{  width:'80%',height:'70%'}}
                      />
                      </View>
                    <TextInput
                        style={{
                    
                       height:hp('6%'),
                       width:wp('70%'),
                     
                       borderRadius:hp('3%'),
                    
                    } }
                    placeholder="Search by name"
                    editable={true} // con false , no podremos escribir nada
                    underlineColorAndroid="transparent"
                   
                    paddingHorizontal={5}
                    onChangeText={
                      (text3)=>{
                        this.setState(()=> {
      
                                          return {
                                            tytexto:text3,
                                          }
                               })
                      }
                      
      
                      }//fin de onchange
                   />
                  
              </View>
                 
            </View> 
 

 <ScrollView showsVerticalScrollIndicator={false} style={{marginHorizontal:'4%',marginVertical:'3%'}}>

{/*  pago de primer bloque de clientes  1 */}

 {
   this.usuarios.map((item,i)=> {

    if(item.tipo=='Registered')
{
    return (
        <View key={i} style={{marginHorizontal:'2%',marginTop:hp('1.2%'),
          paddingBottom:hp('1.7%'),paddingTop:hp('1'),   borderBottomColor:'#d7d7df',borderBottomWidth:hp('0.2%')}}>
            <View style={{flexDirection:'row',
                }}>
             <View style={{flex:2}}>
             <Image source={item.foto} 
                    style={{ width:wp(widfoto),height:hp(heifoto),borderRadius:hp('20%') }} />

             </View>
             <View style={{flex:5,marginLeft:wp('0.5%'),justifyContent:'center'}}>
              <Text style={{
                  color:'#25265e' ,fontSize:hp('2%'),fontWeight:'500'
              }}>{item.nombre}</Text>
             <Text style={{
                  color:'#787993',fontSize:hp('1.7%'),fontWeight:'200'
              }}>{item.correo}</Text>
             </View>
              <View style={{flex:3 ,alignItems:'flex-end',justifyContent:'center'}}>
             <Text  style={{
                  color:'#4554e5',fontSize:hp('1.8%'),fontWeight:'500'
              }}>{item.tipo}</Text>
            
             </View>
            

            </View>
        </View>
       )
    }else{
        return(
        <View key={i} style={{marginHorizontal:'2%',marginTop:hp('1.2%'),
          paddingBottom:hp('1.7%'),paddingTop:hp('1'),   borderBottomColor:'#d7d7df',borderBottomWidth:hp('0.2%')}}>
            <View style={{flexDirection:'row',
                }}>
             <View style={{flex:2}}>
             <Image source={item.foto} 
                    style={{width:wp(widfoto),height:hp(heifoto),borderRadius:hp('20%') }} />

             </View>
             <View style={{flex:5,marginLeft:wp('0.5%'),justifyContent:'center'}}>
              <Text style={{
                  color:'#25265e' ,fontSize:hp('2%'),fontWeight:'500'
              }}>{item.nombre}</Text>
             <Text style={{
                  color:'#787993',fontSize:hp('1.7%'),fontWeight:'200'
              }}>{item.correo}</Text>
             </View>
              <View style={{flex:3 ,alignItems:'flex-end',justifyContent:'center'}}>
             <Text  style={{
                  color:'#787993',fontSize:hp('1.8%'),fontWeight:'500'
              }}>{item.tipo}</Text>
            
             </View>
            

            </View>
        </View>
        )
       }
   }
     )
   }
 
 
    

</ScrollView>


  <View style={{alignItems:'center',justifyContent:'center', marginBottom:hp('4%') }}>
               <TouchableOpacity 
            style={{width:wp('75%')}}
            onPress={() => this.props.navigation.navigate("addTeam")}
            >  
             <LinearGradient colors={['#6c30cc','#2d7cf7']}
                   style={{ 
                    borderRadius:wp('7%'),alignItems: 'center',
                      padding:hp('2%')}}
                         start={[0.1,0.1]}
                         end={[0.6,0.6]}
                         ><Text style={{
                           color:'white',fontSize:hp('2.3%')
                         }}>Send Registration Code</Text>
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
 
    parrafos:{
        color:'#25265e',
        fontSize:hp('2.3%'),
        fontWeight:'500'
      
    },
    parrafos2:{
      color:'#787993',
      fontSize:hp('2%'),

      marginTop:'2%',
    
  },
    caja:{
   
       flexDirection:'row',
       marginTop:'3%',
      
       marginHorizontal:'10%',
     
    },
     botoneX:{
        borderColor:'#F7F3F2',borderWidth:wp('0.5%'),borderRadius:hp('3%'),
        paddingHorizontal:'20%',
       
        paddingVertical:'15%'
     }
 
});