import React from 'react';
import { Image,Text, StyleSheet, View,ImageBackground,  ScrollView} from 'react-native';
import { BlurView } from 'expo';


const uri = 'https://s3.amazonaws.com/exp-icon-assets/ExpoEmptyManifest_192.png';

export default class BlurViewExample extends React.Component {
  render() {

    elemento= <ScrollView   onScroll={
      (event)=>{
        pos=event.nativeEvent.contentOffset.y;
      
      if(pos==100){
        alert(pos)
      }
       
      
      }
       } >

<Text style={{fontSize:20,marginTop:10 }}>  TEXTO   </Text>
<Text style={{fontSize:20,marginTop:10 }}>  TEXTO   </Text>
<Text style={{fontSize:20,marginTop:10 }}>  TEXTO   </Text>

<Text style={{fontSize:20,marginTop:10 }}>  TEXTO   </Text>
<Text style={{fontSize:20,marginTop:10 }}>  TEXTO   </Text>
<Text style={{fontSize:20,marginTop:10 }}>  TEXTO   </Text>

<Text style={{fontSize:20,marginTop:10 }}>  TEXTO   </Text>
<Text style={{fontSize:20,marginTop:10 }}>  TEXTO   </Text>
<Text style={{fontSize:20,marginTop:10 }}>  TEXTO   </Text>

<Text style={{fontSize:20,marginTop:10 }}>  TEXTO   </Text>
<Text style={{fontSize:20,marginTop:10 }}>  TEXTO   </Text>
<Text style={{fontSize:20,marginTop:10 }}>  TEXTO   </Text>

<Text style={{fontSize:20,marginTop:10 }}>  TEXTO   </Text>
<Text style={{fontSize:20,marginTop:10 }}>  TEXTO   </Text>
<Text style={{fontSize:20,marginTop:10 }}>  TEXTO   </Text>

<Text style={{fontSize:20,marginTop:10 }}>  TEXTO   </Text>
<Text style={{fontSize:20,marginTop:10 }}>  TEXTO   </Text>
<Text style={{fontSize:20,marginTop:10 }}>  TEXTO   </Text>

<Text style={{fontSize:20,marginTop:10 }}>  TEXTO   </Text>
<Text style={{fontSize:20,marginTop:10 }}>  TEXTO   </Text>
<Text style={{fontSize:20,marginTop:10 }}>  TEXTO   </Text>


</ScrollView>
    return (
      <View style={{ flex: 1 }}>
  

 
   {elemento}

      </View>

    );
  }
}