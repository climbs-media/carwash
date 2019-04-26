import React, { Component } from 'react';
import {Alert,Platform,Dimensions,
  StyleSheet,ScrollView,
  Text,ImageBackground,
  View,Image,TouchableOpacity,
} from 'react-native';
 

// instalamos estas dos librerias
import {LinearGradient} from  'expo';
import Infoslider from 'react-native-infoslider'
import {widthPercentageToDP as wp, heightPercentageToDP as hp} from 'react-native-responsive-screen';

export default class LandingBecome extends Component {


    static navigationOptions = {
        header: null ,
    };
    washers=[
      {
      nombre:'Cory Jones',
      foto:require('../assets/usuarios/limpia_hernan.png'),
      rango:'CarWash Team',
      describe:'Es un trabajo innovador, moderno y tecnologógico ya que todo lo gestiono desde el móvil'
      },
      {
       nombre:'Samy Velasquez',
       foto:require('../assets/usuarios/carla.png'),
        rango:'CarWash Team',
       describe:'Es un trabajo innovador, moderno y tecnologógico ya que todo lo gestiono desde el móvil'
          },
  ]

    
  constructor(props) {
    super(props);
  
    this.state = {
       calculo:'1.600'
    };
  
  }



  render() {

    let screenWidth=Dimensions.get('window').width;
    let screenHeight=Dimensions.get('window').height;
  
//alert(screenHeight)
  
   
   if(screenHeight<=592){
    marginMoter='1%';
      widMoter='45.2%';
      heiMoter='35%';
       widthFote='13%';
       horiTop='7%';
       butTop='7%'
  }else if(screenHeight<=605){ //mopvil de  david
    marginMoter='1%';
    widMoter='46%';
    heiMoter='35%';
     widthFote='13%';
     horiTop='10%';
     butTop='14%'

} else if(screenHeight<=678){
       //segundo motero
       marginMoter='1%';
       widMoter='52%';
       heiMoter='35%';
        widthFote='15%';
        horiTop='4%';
        butTop='5%'
 }else if(screenHeight<=684){
  marginMoter='1%';
  widMoter='46%';
  heiMoter='35%';
 
  widthFote='13%'; // foto de lavador scrool horizontal
  horiTop='4%';
  butTop='5%'
 }else if(screenHeight<=775){ //MOVIL DE ELLOS
     //segundo motero
     marginMoter='1%';
     widMoter='52%';
     heiMoter='35%';
      widthFote='15%';
      horiTop='4%';
      butTop='5%'
 }else{
  marginMoter='1%';
  widMoter='59%';
  heiMoter='35%';
   widthFote='15%';
   horiTop='4%';
   butTop='5%';
 }


   
    return (
     
 <View style={{
  flex:1
 }} >


    <ScrollView >
    <ImageBackground source={require('../assets/mixto/landingBecome.png')}
     style={{
         
           }}>
          
          <TouchableOpacity
                 onPress={() => this.props.navigation.pop()} 
                 style={{width:wp('15%'),marginTop:hp('8%'),marginHorizontal: wp('6%'),}} >
                 
                 <Image source={require('../assets/iconos/retrocedeArrow.png')} 
                  style={{ }}
                   />
         </TouchableOpacity>
          
          <View style={{marginHorizontal:wp('6%'),marginTop:hp('1.5%'),}}>
           <Text style={{
             color:'#fff' , fontSize:hp('4.3%') , fontWeight:'500'
           }}>
           Apply to become {'\n'}an affiliate partner
           </Text>

           <Text style={{marginTop:hp('2%'),
             color:'#fff' , fontSize:hp('2.3%') , fontWeight:'500'
           }}>
            How much cars could{'\n'}you wash per day?
           </Text>

          <View style={{   flexDirection:'row', borderWidth: hp('0.2%'),borderColor: '#e2e7ee', 
            padding:hp('1.5%'), borderRadius:hp('7.5%'), width:wp('40%'),marginTop:hp('2%')}}>
            <View style={{flex:8, marginLeft:wp('1.5%'),}}>
            <Text   style={{ 
           color:'#fff',fontSize:hp('2%'), fontWeight:'300'
            }}>Car Size - M</Text>
           </View>
           <View style={{flex:2 ,alignItems:'center',justifyContent:'center'}}>
           <Image source={require('../assets/iconos/arrowdropdownTrans.png')} 
             style={{height:hp('2%'),width:wp('5%')}} />
           </View>  
          </View>
          <View style={{   flexDirection:'row', borderWidth: hp('0.2%'),borderColor: '#e2e7ee', 
            padding:hp('1.5%'), borderRadius:hp('7.5%'), width:wp('40%'),marginTop:hp('1%')}}>
            <View style={{flex:8, marginLeft:wp('1.5%'),}}>
            <Text   style={{ 
           color:'#fff',fontSize:hp('2%'), fontWeight:'300'
            }}>5 cars / day</Text>
           </View>
           <View style={{flex:2 ,alignItems:'center',justifyContent:'center'}}>
           <Image source={require('../assets/iconos/arrowdropdownTrans.png')} 
             style={{height:hp('2%'),width:wp('5%')}} />
           </View>  
          </View>


    <View style={{flexDirection:'row',marginTop:hp('2%')}}>
               <Text style={{
                  color:'#fff',fontSize:hp('5%'), fontWeight:'400'
               }}>
                 $ {this.state.calculo}
               </Text>
               <Text style={{marginLeft:wp('1.5%'),
                  color:'#fff',fontSize:hp('2%'), fontWeight:'300'
               }}>
                /month
               </Text>
          </View>
          <Text style={{marginBottom:hp('70%'),
              color:'#fff',fontSize:hp('2%'), fontWeight:'normal'
          }}>
          washing cars with us
          </Text>
        
           </View>
          
    </ImageBackground>
    <View  style={{marginTop:hp('-58%')}}>

    
    <View style={{marginHorizontal:wp('6%')}}>
           <Text style={{
             color:'#25265e' , fontSize:hp('3%') , fontWeight:'500'
           }}>
           Be part of the {'\n'}CarWash family
           </Text>
     </View>
         
     <ScrollView horizontal showsHorizontalScrollIndicator={false} style={{
             zIndex: 1,backgroundColor:'#F9F9FC',
             marginTop:hp(horiTop),marginHorizontal:wp('2%')}} >
      
      {
   this.washers.map((item,i)=> {

    return (

        <View key={i} style={{width:wp('80%'),marginVertical:hp('1%'),backgroundColor:'white',
        paddingBottom:hp('1.7%'),paddingTop:hp('1.7%'), paddingHorizontal:wp('1.7%'),
        borderRadius:hp('1.5%'),marginHorizontal:wp('3%'),
         }}>

       <View style={{flexDirection:'row'  }}>
        <View style={{flex:8,justifyContent:'center'}}>
        <Text style={{
         color:'#25265e' ,fontSize:hp('2%'),fontWeight:'500'
        }}>{item.nombre}</Text>
       <Text style={{
          color:'#787993',fontSize:hp('1.7%'),fontWeight:'500'
       }}>{item.rango}</Text>
      </View>
      <View style={{flex:2}}>
      <Image source={item.foto} 
         style={{
           zIndex: 4, width:wp(widthFote),height:hp('7.8%'),borderRadius:hp('20%') ,
         }} />
       </View>
      </View>
      



 <Text style={{
   color:'#787993',fontSize:hp('2%'),fontWeight:'200',marginTop:hp('2%') 
 }}> {item.describe}</Text>
</View>
     )

        }
   )
}

 </ScrollView>
         
 <View style={{flexDirection:'row',marginTop:hp('1.5%')}}>
  <View style={{flex:5 ,marginLeft:hp('2%'), marginRight:hp('3%')}}>
     <Text style={styles.titu}>Regulate your time </Text>
      <Text style={styles.subtitu}>Choose which days you work as Washer</Text>
   
    
     <Text style={styles.titu}>Earn very good tips for service</Text>
      <Text style={styles.subtitu}>Stay with all tips without any commission</Text>
 
     <Text style={styles.titu}>Recruit your own Team Wash</Text>
      <Text style={styles.subtitu}>Get commissions for your team's work</Text>
   </View>   
 
 <View style={{
     flex:5,
 }}>

    <View style={{alignItems:'flex-end', flex:4,position:'absolute',left:wp('5%'),
       top:hp(marginMoter)}}>
     <Image source={require('../assets/mixto/moteroMoto.png')} 
                        style={{ zIndex:2, width:wp(widMoter),height:hp(heiMoter)
                                   }} />
     </View>

 </View>
</View>
   
 <View style={{alignItems:'center',marginTop:hp(butTop),marginBottom:hp('4%')}}>
                     <TouchableOpacity 
                                 style={{width:wp('75%')}}
                                 onPress={() =>this.props.navigation.navigate("formBecomeWasher") }
                                   >  
                                <LinearGradient colors={['#6c30cc','#2d7cf7']}
                                  style={{ 
                                      borderRadius:wp('7%'),alignItems: 'center',
                                        padding:hp('2%')}}
                                         start={[0.1,0.1]}
                                          end={[0.6,0.6]}
                                           ><Text style={{
                                               color:'white',fontSize:hp('2.7%')
                                          }}>Apply to Washer</Text>
                               </LinearGradient>
                             </TouchableOpacity>
                             </View>




 </View>
 
      </ScrollView>
      </View>
   
    );
  }
}

 
const styles = StyleSheet.create({
  titu:{
    marginTop:hp('2%'),
color:'#25265e',
fontWeight:'500',
fontSize:hp('2.3%'),
   },
       subtitu:{
        color:'#787993',
        fontWeight:'300',
        fontSize:hp('1.8%'),

       }
});