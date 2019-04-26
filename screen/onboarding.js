import React, { Component } from 'react';
import {Alert,Platform,
  StyleSheet,
  Text,
  View,Image,TouchableOpacity,
} from 'react-native';
 

// instalamos estas dos librerias
import {widthPercentageToDP as wp, heightPercentageToDP as hp} from 'react-native-responsive-screen';
import {LinearGradient} from  'expo';
import Infoslider from 'react-native-infoslider'
 
export default class Onboarding extends Component {


    static navigationOptions = {
        header: null ,
    };

    
  constructor(props) {
    super(props);
  
    this.state = {
      data:[
          {
          title:<Text style={{
            color:'#25265e',
            fontWeight:'bold',
            fontSize: hp('4.5%'),
          }}>Request Washer</Text>, 
          text:( <Text>
                 <Text style={styles.subtexto}>Find nearby washers for</Text>{'\n'}
                 <Text style={styles.subtexto} >cleaning services of your car</Text>{'\n'}
                 <Image source={require('../assets/uno.png')}/>
                 </Text>
                 ),
          image: require('../assets/fondoBlanco.png')},
          {
            title:<Text style={{
              color:'#25265e',
              fontWeight:'bold',
              fontSize: hp('4.5%'),
            }}>Choose Your Washer</Text>, 
            text:( <Text> 
                   <Text style={styles.subtexto}>We recommend the best cleaners</Text>{'\n'}
                   <Text style={styles.subtexto}>that meet your requirements</Text>{'\n'}
                   <Image source={require('../assets/dos.png')}/>
                   </Text>
                   ),
            image: require('../assets/fondoBlanco.png')},
          {
            title:<Text style={{
              color:'#25265e',
              fontWeight:'bold',
              fontSize: hp('4.5%'),
            }}>Track your Washer</Text>, 
            text:( <Text>
                   <Text style={styles.subtexto} >Track and view current</Text>{'\n'}
                   <Text style={styles.subtexto} >location in real time</Text>{'\n'}
                   <Image source={require('../assets/tres.png')}/>
                   </Text>
                   ),

            image: require('../assets/fondoBlanco.png')},
          
      ]
    };
  }



  render() {
    return (
    <View style={{flex:1}}>

      <View style={{flex:0.2 }}>

      </View>

          <View style={{flex:6.8}}>
            <Infoslider 
                 data={this.state.data} 
                 showDots={false} 
                 activeDotColor="#04B4AE" 
                 titleColor="#000" 
                 textColor="#666" 
                 loop={false} 
                 autoplay={false} 
                 autoplayTimeout={3}/>
            </View>
            <View style={{flex:3 ,alignItems: 'center',
                       }}>
       

            <TouchableOpacity 
                                 style={{width:wp('75%'),marginTop:hp('5%')}}
                                 onPress={() =>this.props.navigation.navigate("signUp1") }
                                   >  
                                <LinearGradient colors={['#6c30cc','#2d7cf7']}
                                  style={{ 
                                      borderRadius:wp('7%'),alignItems: 'center',
                                        padding:hp('2%')}}
                                         start={[0.1,0.1]}
                                          end={[0.5,0.5]}
                                           ><Text style={{
                                               color:'white',fontSize:hp('2.7%')
                                          }}>Create acount</Text>
                               </LinearGradient>
                             </TouchableOpacity>


                  <TouchableOpacity 
            onPress={() => this.props.navigation.navigate("landingBecome")}
            > 
                        <Text style={{
                               marginTop:hp('5%'),
                               color:'#4554e5',
                               fontSize:hp('2.3%'),
                      }}>
                       Become a Washer
                      </Text>
             </TouchableOpacity>
           </View>

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
  
  subtexto:{
    color: '#787993',
    fontSize:hp('3%'),
  }
  
});