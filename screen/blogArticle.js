import React, { Component } from 'react';
import {Alert,Platform,
  StyleSheet,Dimensions,
  Text,ImageBackground,TouchableWithoutFeedback,Keyboard,
  View,Image,TouchableOpacity,TextInput,ScrollView
} from 'react-native';
 


import {widthPercentageToDP as wp, heightPercentageToDP as hp} from 'react-native-responsive-screen';
import {LinearGradient} from  'expo';
import { Video } from 'expo';
import { MaterialIcons, Octicons } from '@expo/vector-icons';
//https://expo.github.io/vector-icons/
 
export default class BlogArticle extends Component {
    state = {
		mute: false,
		fullScreen: false,
		shouldPlay: true,
	}

	handlePlayAndPause = () => {
		this.setState(prevState => ({
			shouldPlay: !prevState.shouldPlay
		}));
	}

	handleVolume = () => {
		this.setState(prevState => ({
			mute: !prevState.mute,
		}));
	}


    static navigationOptions = {
        header: null ,
    };

    
  constructor(props) {
    super(props);
  
    this.state = {
 
    }
}

  render() {

    let screenWidth=Dimensions.get('window').width;
    let screenHeight=Dimensions.get('window').height;

   
    
    if(screenHeight<=592){
      widVideo='47%';
    }else if(screenHeight<=678){
      widVideo='47%';
   }else if(screenHeight<=684){
    widVideo='53%';
   }else if(screenHeight<=775){
    widVideo='47%';
   }else{
    widVideo='41.5%';
   }

   coche = this.props.navigation.getParam('datos');

   // alert(producto.tipo)
    return (
    <View style={{flex:1}}><TouchableWithoutFeedback onPress={Keyboard.dismiss} accessible={false}>
    <View style={{flex:3,backgroundColor:'#2d7cf7'}}>
    <ImageBackground source={require('../assets/mixto/fondoReal.png')}
    style={{width: '100%', height: '100%'}} >
   <TouchableOpacity
                 onPress={() => this.props.navigation.pop()} 
                 style={{width:wp('15%'),marginTop:hp('8%'),marginHorizontal: wp('6%')}} >
                  <Image source={require('../assets/iconos/retrocedeArrow.png')} 
                  style={{ }}
                   />
    </TouchableOpacity>

    <TouchableOpacity
                //  onPress={() => } 
                 style={{position:'absolute',
                      width:wp('10%'),top:hp('8%'),marginHorizontal: wp('6%'),right:wp('-4%')}} >
                  <Image source={require('../assets/iconos/subidaVideos.png')} 
                  style={{ }}
                   />
    </TouchableOpacity>

   <Text style={{
     color:'white',
     fontSize: hp('4%'),
     fontWeight:'bold',
      marginTop:hp('2.5%'),
     marginHorizontal:wp('6%'),
 
}}>Tips for washers</Text>
   
   </ImageBackground>
   </View>
 </TouchableWithoutFeedback>  
   <View  style={{
   flex:7,
   backgroundColor:'#F9F9FC',}}>

    
    <View style={{
 
 flex:1,
 backgroundColor:'white',
  marginTop:hp('-7.5%'),
   marginHorizontal:wp('4%'),
    borderRadius:hp('3%'),
        
       }}>

      <View style={{marginTop:hp('4%'),flex:4.5,
                     alignItems:'center'
                   }}>
                    
                         <Video
							 source={coche.video}
							shouldPlay={this.state.shouldPlay}
							resizeMode="cover"
							style={{ width:hp(widVideo),height:hp('30%'),borderRadius:hp('5%')}}
							isMuted={this.state.mute}
						/>
						<View style={styles.controlBar}>
							<MaterialIcons 
								name={this.state.mute ? "volume-mute" : "volume-up"}
								size={45} 
								color="white" 
								onPress={this.handleVolume} 
							/>
							<MaterialIcons 
								name={this.state.shouldPlay ? "pause" : "play-arrow"} 
								size={45} 
								color="white" 
								onPress={this.handlePlayAndPause} 
							/>

                    </View>












                  </View>
                   <View style={{
                   flex:1.5, flexDirection:'row'
                   }}>
                   <Text style={{marginLeft:wp('1.5%'),
                     flex:7, color:'#25265e', fontSize:hp('3.4%'), fontWeight:'bold'
                   }}>{coche.describe}</Text>
                   <Text style={{
                       flex:3,
                    }}>{' '}</Text>




                   </View>
                   <View style={{
                       flex:2.5,marginHorizontal:wp('1.5%')
                    }}>
                    <Text style={{
                        color:'#25265e', fontSize:hp('2%'), fontWeight:'normal'
                    }}>
                     {coche.contenido}
                    </Text>
 
                    </View>
                    <View style={{
 flex:1.5 
}}>


<View style={{alignItems:'center',marginTop:hp('1%'),marginBottom:hp('2%')}}>
                            <TouchableOpacity 
                                 style={{width:'90%' }}
                            
                                    onPress={() => this.props.navigation.navigate("video")}
                                 
                                   >  
                                <LinearGradient colors={['#6c30cc','#2d7cf7']}
                                  style={{ 
                                      borderRadius:50,alignItems: 'center',
                                        padding:'4%'}}
                                         start={[0.1,0.1]}
                                          end={[0.5,0.5]}
                                           ><Text style={{
                                               color:'white',fontSize:hp('2.5%'),
                                          }}>Ask question</Text>
                               </LinearGradient>
                             </TouchableOpacity>
                             </View>


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
        fontSize:hp('2.1%'),
        marginVertical:('0.4%')
    },
    controlBar: {
        position: 'absolute',
        bottom: hp('3%'),
        left: 0,
        right: 0,
            height: hp('6%'),
            marginHorizontal:wp('1.9%'),
            flexDirection: 'row',
            alignItems: 'center',
            justifyContent: 'center',
            backgroundColor: "rgba(0, 0, 0, 0.5)",
        }
 
});