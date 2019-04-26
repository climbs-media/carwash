import React, { Component } from 'react';
import {Alert,Platform,
  StyleSheet,ImageBackground, 
  Text, 
  View,Image,TouchableOpacity,TextInput,ScrollView
} from 'react-native';
 

import {Ionicons}  from "@expo/vector-icons"
import {LinearGradient} from  'expo';
import {widthPercentageToDP as wp, heightPercentageToDP as hp} from 'react-native-responsive-screen';

//https://expo.github.io/vector-icons/
 
export default class PaymentMethod extends Component {


    static navigationOptions = {
        header: null ,
    };

    tarjetas=[
        {
        check:require('../assets/iconos/checkverde.png'),
        elegido:true,
        name:'MasterCard',
        foto:require('../assets/iconos/mastercard.png'),
        num:'**** **** ***** 5967',
        nombreCli:'Hernan Martinez',
        NumCard:'1689 3719 2711 5967',
        ValiDate:'03 / 2020',
        CVV:'864'
       },
       {
        check:null,
        elegido:false,
        name:'Visa Credit Card',
        foto:require('../assets/iconos/visa.png'),
        num:'**** **** ***** 4632',
        nombreCli:'Hernan Martinez',
        NumCard:'1689 3719 2711 5967',
        ValiDate:'03 / 2020',
        CVV:'864'
        },
        {
         check:null,
         elegido:false,
         name:'PayPal Account',
         foto:require('../assets/iconos/paypal.png'),
         num:'info@carwash.com',
         nombreCli:'Hernan Martinez',
         NumCard:'1689 3719 2711 5967',
         ValiDate:'03 / 2020',
         CVV:'864'
         }
        
    ]

  constructor(props) {
    super(props);
  
    this.state = {
       
    }
}

  render() {
    
   
    return (
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

      <Text style={{
       color:'white',
       fontSize: hp('4%'),
       fontWeight:'bold',
        marginTop:hp('2.5%'),
       marginHorizontal:wp('6%'),
    
    
   }}>Payment methods</Text>
      
      </ImageBackground>
      </View>
   
     <View  style={{flex:7,paddingHorizontal:wp('4%')}}>

           <ScrollView showsVerticalScrollIndicator={false} 
           style={{ flex:1,  marginTop:hp('-7.5%'),}}>
           
                {
                     this.tarjetas.map((item,i)=> {
                       
                        if(item.elegido){
                         var   defaut='Default Payment Method';
                        }
                       
                       return (
                        
                      

                             <View  key={i} style={{
                               
                                  backgroundColor:'white',
            
                                  
                              
                                 margintop:hp('-1%'),
                               
                                 borderTopRightRadius: hp('3%'),
                                 borderTopLeftRadius:  hp('3%'),
                                padding:hp('2.5%'),
                                borderTopColor:'#d7dde6',
                                borderTopWidth:hp('1.2%'),
                                borderStartColor:'#d7dde6',
                                borderStartWidth:hp('0.4%'),

                                borderEndColor:'#d7dde6',
                                borderEndWidth:hp('0.4%'),
           
                                }}>


                                  {/* bloque  foto nombre y fecha  */}  
                                  <TouchableOpacity 
                                 //   onPress={() => this.props.navigation.navigate("addPayment",{datos:item})}
                                       >  
                                      <View style={{flexDirection:'row'}}>
                                        
                                        <View style={{flex:1.5}}>
                                        <Image
                                           source={item.check}
                                        
                                          />
                                        </View>
                                        <View style={{flex:8.5}}>
                                       <Text  style={{
                                        color:'#25265e',fontSize:hp('1.8%'), fontWeight:'500'
                                        }}>{defaut}</Text>
                                        </View>
                                      </View>

                                    
                                    <View style={{
                                        flexDirection:'row',paddingTop:hp('2%')
                                    }}>
          
                                         <View style={{
                                             flex:2
                                         }}>
                                          <Image
                                           source={item.foto}
                                            style={{}}
                                          />
                                             
                                         </View>
                                         <View style={{
                                             flex:8,marginLeft:wp('3%'),
                                            
                                         }}>
                                           <Text
                                            style={{
                                                color:'#25265e',fontSize:hp('2.2%') , fontWeight:'500'   
                                            }}>
                                                 {item.name}
                                           </Text>
                                           <Text style={{marginTop:hp('1.5%'),
                                              color:'#25265e',fontSize:hp('2.2%') , fontWeight:'300'  
                                            } }>
                                                 {item.num}
                                           </Text>
                                             
                                         </View>

                                    </View>



                                     </TouchableOpacity>
              
                            </View>
                        
                            )
                          }
                       )
                }
 
                             <View style={{alignItems:'center',marginTop:hp('11%')}}>
                     <TouchableOpacity 
                                 style={{width:wp('75%')}}
                                onPress={() =>this.props.navigation.navigate("addPayment",{datos:this.tarjetas[0]}) }
                                   >  
                                <LinearGradient colors={['#6c30cc','#2d7cf7']}
                                  style={{ 
                                      borderRadius:wp('7%'),alignItems: 'center',
                                        padding:hp('2%')}}
                                         start={[0.1,0.1]}
                                          end={[0.5,0.5]}
                                           ><Text style={{
                                               color:'white',fontSize:hp('2.7%')
                                          }}>Add Payment Method</Text>
                               </LinearGradient>
                             </TouchableOpacity>
                             </View>

             </ScrollView> 
       
        {/* arriba cierre de view caja de contenido */}
      </View>

   </View>

    );
  }
}


const styles = StyleSheet.create({
    
    
 
});