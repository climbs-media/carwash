import React, { Component } from 'react';
import {Alert,Platform,
  StyleSheet,ImageBackground,
  Text,TouchableWithoutFeedback,Keyboard,
  View,Image,TouchableOpacity,TextInput
} from 'react-native';
 
 
import {Ionicons}  from "@expo/vector-icons"
import {widthPercentageToDP as wp, heightPercentageToDP as hp} from 'react-native-responsive-screen';
//https://expo.github.io/vector-icons/
 
export default class SignUp3 extends Component {


   static navigationOptions = {
      header: null ,
  };

      

constructor(props) {
  super(props);

  this.state = {
    number1:<Text style={{borderRadius:hp('1.5%'),width:hp('1.8%'),height:hp('1.8%')
             ,backgroundColor:'#d7d7df'
               }}>{' '}</Text>,
    elegido1:false,


    number2:<Text style={{borderRadius:hp('1.5%'),width:hp('1.8%'),height:hp('1.8%')
    ,backgroundColor:'#d7d7df',
      }}>{' '}</Text>,
       elegido2:false,


    number3:<Text style={{borderRadius:hp('1.5%'),width:hp('1.8%'),height:hp('1.8%')
    ,backgroundColor:'#d7d7df',
      }}>{' '}</Text>,
       elegido3:false,


    number4:<Text style={{borderRadius:hp('1.5%'),width:hp('1.8%'),height:hp('1.8%')
    ,backgroundColor:'#d7d7df',
      }}>{' '}</Text>,
       elegido4:false,
  }
}


presionaste(num){

 

if(this.state.elegido1==false){
   this.setState({
      number1:<Text>{num}</Text>,
      elegido1:true
   })
} else if(this.state.elegido2==false){
   this.setState({
      number2:<Text>{num}</Text>,
      elegido2:true
   })

}else if(this.state.elegido3==false){
   this.setState({
      number3:<Text>{num}</Text>,
      elegido3:true
   })}else if(this.state.elegido4==false){
    this.setState({
       number4:<Text>{num}</Text>,
       elegido4:true
    }
    
    )

}

}


borramos(){




if(this.state.elegido4==true){
  this.setState({
     number4:<Text style={{borderRadius:hp('1.5%'),width:hp('1.8%'),height:hp('1.8%')
     ,backgroundColor:'#d7d7df'
       }}>{' '}</Text>,
     elegido4:false
  })
} else if(this.state.elegido3==true){
   this.setState({
      number3:<Text style={{borderRadius:hp('1.5%'),width:hp('1.8%'),height:hp('1.8%')
      ,backgroundColor:'#d7d7df'
        }}>{' '}</Text>,
      elegido3:false
   })
} else if(this.state.elegido2==true){
   this.setState({
      number2:<Text style={{borderRadius:hp('1.5%'),width:hp('1.8%'),height:hp('1.8%')
      ,backgroundColor:'#d7d7df'
        }}>{' '}</Text>,
      elegido2:false
   })

}else if(this.state.elegido1==true){
   this.setState({
      number1:<Text style={{borderRadius:hp('1.5%'),width:hp('1.8%'),height:hp('1.8%')
      ,backgroundColor:'#d7d7df'
        }}>{' '}</Text>,
      elegido1:false
   })
}

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
 <Text style={{
   color:'white',
   fontSize: hp('4%'),
   fontWeight:'bold',
    marginTop:hp('2.5%'),
   marginHorizontal:wp('6%'),
 }}>Verify your identity</Text>
 
 </ImageBackground>
</View>
<View  style={{
    flex:7,
    backgroundColor:'#F9F9FC',
}}>


<View style={{
  flex:1,
  backgroundColor:'white',
   marginTop:hp('-7.5%'),
    marginHorizontal:wp('4%'),
        borderTopStartRadius:hp('3%'),
          borderTopEndRadius:hp('3%'),
}}>


  <View style={{marginHorizontal:hp('1.5%'),marginTop: hp('2.5%'),marginBottom:hp('1.5%'),
              alignItems: 'center', justifyContent: 'center'}}>
      
      <Text style={styles.parrafos}>We’ve  just  sent a text message with</Text>
      <Text style={styles.parrafos}>a verification code to the phone</Text>
      <Text style={styles.parrafos}>number ending (**) *** *** 657</Text>
  </View>

   

  <View style={{alignItems: 'center', justifyContent: 'center',marginTop:hp('2%')}}>
     <View style={{ flexDirection:'row', borderWidth:hp('0.2%'),borderColor: '#e2e7ee',
          paddingLeft:wp('15%'),  borderRadius:hp('7.5%'), width:wp('85%'),height:hp('6%')}}>
      <View style={{flex:2.5,marginTop:hp('2%')}}>
         {this.state.number1} 
     </View>
       
     <View style={{flex:2.5,marginTop:hp('2%')}}>
         {this.state.number2} 
     </View>

     <View style={{flex:2.5,marginTop:hp('2%')}}>
         {this.state.number3} 
     </View>

     <View style={{flex:2.5,marginTop:hp('2%')}}>
         {this.state.number4} 
     </View>
    
        
   </View>
</View>





        <View style={{alignItems:'center',justifyContent:'center',
           marginTop:hp('2%')}}>

          <Text style={{
               fontSize:hp('2%'),color:'#25265e',fontWeight:'bold'
          }}>Didn’t receive a code? </Text>
          <TouchableOpacity 
           onPress={() => this.props.navigation.navigate("searchMakeModel")}
          >  
                      <Text style={{
                           
                             color:'#4554e5',
                             fontSize:hp('2%'),
                             fontWeight:'500'
                    }}>Try again</Text>

              </TouchableOpacity>
           
           </View>



 {/* -------------------- teclado -------------- */}

 <View style={{ marginHorizontal:wp('6%'),marginTop:hp('6%'),
             flexDirection:'row'}}>


     <TouchableOpacity style={{
        flex:3.3,alignItems:"center"
     }}
     onPress={() => 
       this.presionaste('1')
        } >
         <Text  style={
           styles.botoneX
         }>1</Text>
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
         <Text  style={
           styles.botoneX
         }>3</Text>
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
       <View style={{  borderColor:'#F7F3F2',borderWidth:wp('0.2%'),borderRadius:hp('3%'),
        width:wp('14.5%'),height:hp('8.6%') ,alignItems:"center",justifyContent:'center'
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
      fontSize:hp('2%'),
    
  },
  caja:{
 
     flexDirection:'row',
     marginTop:hp('1.5%'),
    
     marginHorizontal:wp('6%') 
   
  },
   botoneX:{
      borderColor:'#F7F3F2',borderWidth:wp('0.2%'),borderRadius:hp('3%'),
      paddingHorizontal:wp('5.5%'),fontSize:hp('2.5%'),fontWeight:'500',
     
      paddingVertical:hp('2.3%')
   }

});