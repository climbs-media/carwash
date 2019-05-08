import React, { Component } from 'react';
import {Alert,Platform,
  StyleSheet,TouchableWithoutFeedback,Keyboard,
  Text,KeyboardAvoidingView,ScrollView,Picker,
  View,Image,TouchableOpacity,TextInput,ImageBackground ,
} from 'react-native';
 
import {Ionicons}  from "@expo/vector-icons"
import {LinearGradient} from  'expo';
import {widthPercentageToDP as wp, heightPercentageToDP as hp} from 'react-native-responsive-screen';

//https://expo.github.io/vector-icons/
 
export default class SearchMakeModel extends Component {


    static navigationOptions = {
        header: null ,
    };

    
  constructor(props) {
    super(props);
  
    this.state = {
  
      tam:'8%',
    
     
      color1:'#C1BCBC',
      modelos:[ "MINI Hatch 0", "MINI Convertible1", "MMINI 3-door Hatch2" ,
               "MINI Hatch3" ,"MINI Convertible4",'Abarth5',
              ' Alfa Romeo6', 'Alpine',  'Aston Martin',  'Audi',
               'Bentley', 'BMW', 'Bugatti',"MINI Hatch", "MINI Convertible", "MMINI 3-door Hatch" ,
               "MINI Hatch" ,"MINI Convertible"
                ],
       
    }
    original=this.state.modelos
}
 

 

  render() {

   

   coches= this.state.modelos.map((item,i)=> {

    if(i%2==0)
    {
     return( 
       <View  key={i}>
               <View  style={{flex:1,flexDirection: 'row',padding:hp('2%'),
                 alignItems:'center',justifyContent:'center'
                     }}  >
                   

                   <TouchableOpacity 
                                    onPress={() =>{

                                    this.props.navigation.navigate("carDetails1",{datos:item})
                                    this.setState({
                                      modelos:original ,//los valores originales
                                  
                                     })
                                  
                                  }}
                                       > 
                   <Text  
                    style={{
                      color:'#25265e', fontSize:hp('3%'), fontWeight:'bold'
                    }}>{item}</Text>
                   </TouchableOpacity>
               </View>

       </View>
      )
     }else{
      return( 


        <View  key={i}>
                <View style={{flex:1,flexDirection: 'row',padding:hp('2%'),
                  alignItems:'center',justifyContent:'center'
                      }}   >
                      <TouchableOpacity 
                                    onPress={() =>{

                                    this.props.navigation.navigate("carDetails1",{datos:item})
                                    this.setState({
                                      modelos:original, //los valores originales
                                      
                                    
                                      
                                     })
                                  
                                  }}
                                       > 
                   
                    <Text
                     style={{
                      color:'#25265e', fontSize:hp('3%'), fontWeight:'bold'
                     }}>{item}</Text>
                    </TouchableOpacity>
                </View>
 
        </View>
       )
     }
    
    }
   )





    return (


  <KeyboardAvoidingView behavior="padding" style={{flex:1}}>

 <TouchableWithoutFeedback onPress={Keyboard.dismiss} accessible={false}>
  <View style={{flex:3}}>
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
       marginTop:hp('1.5%'),
       marginHorizontal: wp('6%'),
    
   }}>Choose your</Text>
     <Text style={{
       color:'white',
       fontSize: hp('4%'),
       fontWeight:'bold',
       marginHorizontal: wp('6%'),
       marginTop:hp('-1.1%')
   }}>make and model car</Text>


    <Text style={{
       color:'white',
       fontSize: hp('2%'),
       marginHorizontal:wp('6%'),
       marginTop:hp('-0.1%'),
    
   }}>We need to finding washers for you</Text>
   </ImageBackground>
  </View>
  </TouchableWithoutFeedback>
  <View  style={{
      flex:7,
      backgroundColor:'#F9F9FC',
      
  }}>


  <View style={{
      flex:2,
  backgroundColor:'white',
      marginTop:hp('-3.5%'),
      marginHorizontal:wp('4%'),
      borderRadius:hp('3%'),
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

                        //alert(original)
                      
                        busqueda=[]; //metere los coches que coincidan con la letra
                        text3=text3.toLowerCase();

                        this.state.modelos.map((item,i)=>{
         
                          if(item.toLowerCase().search(text3)!=-1 ){ 
                            busqueda.push(item);   
                               
                            }
     
                         }

                        
                        )

                        if(text3!=''){

                          this.setState({
                            modelos:busqueda //los que va encontrando
                          })
                      }else{
                          this.setState({
                           modelos:original //los valores originales
                          })
                         }
                       }

                      }//fin de onchange
                
                   />
                  
              </View>
                 
            </View> 
 



 <ScrollView showsVerticalScrollIndicator={false} style={{marginHorizontal:'4%'}}
 
 >

  
 
 
      
  {/* LOS COCHES */ }

         {coches}

 
 
        </ScrollView>
  </View>

  </View>
  
</KeyboardAvoidingView>

    );
  }
}

 
const styles = StyleSheet.create({
  
 
});