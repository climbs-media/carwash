import React, { Component } from 'react';
import {Alert,
  AppRegistry,
  StyleSheet,
  Text,ScrollView,
  View,
  TouchableOpacity,
  UIManager,
  findNodeHandle
} from 'react-native';


const uri = 'https://s3.amazonaws.com/exp-icon-assets/ExpoEmptyManifest_192.png';

export default class BlurViewExample extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      fx:0,
      px:0,
      py:0,
      col:'green',
      col1:'green',
      col2:'green',
      col3:'green',
      col4:'green',
      col5:'green',
      col6:'green',
    }
  }

  componentDidMount() {
          
}

datos(dato){

dato


}
  render() {



elemento= <ScrollView   onScroll={
                  (event)=>{
                    
                    pos=event.nativeEvent.contentOffset.x;
                    if(this.state.py>=60 && this.state.py<=80 ){
                     
                      this.setState({
                        col:'blue',
                      })
                     
                    }else{
                      this.setState({
                        col:'green',
                      })
                    }
                }
               
           }
                >



<TouchableOpacity ref="mycomponent" onPress={()=>this.datos()}>
<Text  style={{marginLeft:20,padding:50,marginTop:250,backgroundColor:this.state.col}}>textoo</Text>
</TouchableOpacity>
 
      <Text style={{marginTop:20 ,backgroundColor:this.state.col2}}>textooo1</Text>
      <Text style={{ marginTop:20 ,backgroundColor:this.state.col3}}>textooo2</Text>
      <Text style={{ marginTop:20,backgroundColor:this.state.col4 }}>textooo3</Text>  
      <Text style={{marginTop:20 ,backgroundColor:this.state.col5}}>textooo4</Text>
      <Text style={{marginTop:20 ,backgroundColor:this.state.col6}}>textooo5</Text>
      <Text>textooo</Text>
      <Text>textooo</Text>
      <Text>textooo</Text>
      <Text>textooo</Text>
      <Text>textooo</Text>  
      <Text>textooo</Text>
      <Text>textooo</Text>
      <Text>textooo</Text>
      <Text>textooo</Text>
      <Text>textooo</Text>
      <Text>textooo</Text>
      <Text>textooo</Text>  
      <Text>textooo</Text>
      <Text>textooo</Text>
      <Text>textooo</Text>
      <Text>textooo</Text>
      <Text>textooo</Text>
      <Text>textooo</Text>
      <Text>textooo</Text>  
      <View ref='mycom'onTouchMove={
                  
                 this.refs.mycom.measure( (fx, fy, width, height, px, py) => {
                 this.setState({
                   fx:fx,
                   px:px,
                   py:py
                 })
                }) 
                } 
                
                onResponderMove={Alert.alert(this.state.py)}>
                                  <Text>texiiiiiiiiiiiiiiiiiiiiiii</Text>
                                </View>
      <Text>textooo</Text>
      <Text>textooo</Text>
      <Text>textooo</Text>  
      <Text>textooo</Text>
      <Text>textooo</Text>
      <Text>textooo</Text>
      <Text>textooo</Text>
      <Text>textooo</Text>
      <Text>textooo</Text>
      <Text>textooo</Text>  
      <Text>textooo</Text>
      <Text>textooo</Text>
      <Text>textooo</Text>
</ScrollView>


    return (
      <View style={styles.container}>
     {elemento}
      

      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#F5FCFF',
  },
  measure: {
    padding: 30,
    borderWidth: 1,
    marginLeft: 0,
  }
});