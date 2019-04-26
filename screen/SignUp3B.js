import React, { Component } from 'react';
import {Alert,Platform,
  StyleSheet,ImageBackground,
  Text,TouchableWithoutFeedback,Keyboard,
  View,Image,TouchableOpacity,TextInput
} from 'react-native';
 
 
import {Ionicons}  from "@expo/vector-icons"
//https://expo.github.io/vector-icons/
 
export default class SignUp3 extends Component {


    static navigationOptions = {
        header: null ,
    };

    
  constructor(props) {
    super(props);
  
    this.state = {
      text2:'',
      value:'',
      value2:'',
    }
}

  render() {
    return (

<TouchableWithoutFeedback onPress={Keyboard.dismiss} accessible={false}>
    <View style={{flex:1}}>

  <View style={{flex:3.5,backgroundColor:'#2d7cf7'}}>
  <ImageBackground source={require('../assets/mixto/semifondo.png')}
    style={{width: '100%', height: '100%'}} >
  <TouchableOpacity
                 onPress={() => this.props.navigation.pop()} 
                 style={{width:'20%',marginTop:'12%',marginHorizontal: '6%',}} >
                 
                 <Ionicons name="md-arrow-round-back" size={32} color="white" />
          
    </TouchableOpacity>
   <Text style={{
       color:'white',
       fontSize: 28,
       fontWeight:'bold',
       marginTop:'8%',
       marginHorizontal: '6%',
    
   }}>Verify your identity</Text>
   
   </ImageBackground>
  </View>
  <View  style={{
      flex:6.5,
      backgroundColor:'#e2e7ee'
  }}>


  <View style={{
      flex:2,
  backgroundColor:'white',
      marginTop:'-15%',
      marginHorizontal:'4%',
      borderRadius:20,
  }}>


    <View style={{marginHorizontal:'10%',marginVertical: '10%',
                alignItems: 'center', justifyContent: 'center'}}>
        
        <Text style={styles.parrafos}>We’ve  just  sent a text message with</Text>
        <Text style={styles.parrafos}>a verification code to the phone</Text>
        <Text style={styles.parrafos}>number ending (**) *** *** 657</Text>
    </View>

 
    <View style={{alignItems: 'center', justifyContent: 'center'}}>
       <View style={{ borderWidth: 1,borderColor: '#e2e7ee',  padding:10,
        borderRadius:50, width:'90%'}}>
     
        
           <TextInput
               secureTextEntry={true}
              maxLength={4}
              underlineColorAndroid="transparent"
              keyboardType='numeric'
              placeholder="enter number"
              placeholderTextColor="#e2e7ee"
               onChangeText={(text2) =>  
                    this.setState({  
                      text2 
                    })
                         
                  }
               
              value={this.state.text2}
              
        />
     </View>
 </View>
  




          <View style={{alignItems:'center',justifyContent:'center',marginTop:20}}>
  
            <Text style={{
                 fontSize:15,color:'#25265e',fontWeight:'bold'
            }}>Didn’t receive a code? </Text>
            <TouchableOpacity 
             onPress={() => this.props.navigation.navigate("login")}
            >  
                        <Text style={{
                             
                               color:'#4554e5',
                               fontSize:17,
                      }}>Try again</Text>

                </TouchableOpacity>
             
             </View>

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
        fontSize:16,
        marginVertical:2
    }
 
});