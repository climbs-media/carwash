import React, { Component } from 'react';
import {Alert,Platform,ScrollView,
  StyleSheet,ImageBackground,
  Text,TouchableWithoutFeedback,Keyboard,
  View,Image,TouchableOpacity,TextInput,Dimensions,
} from 'react-native';
 
import {LinearGradient} from  'expo';
import {Ionicons}  from "@expo/vector-icons"
import {widthPercentageToDP as wp, heightPercentageToDP as hp} from 'react-native-responsive-screen';
//https://expo.github.io/vector-icons/
 
export default class  Junior extends Component {


    static navigationOptions = {
        header: null ,
    };

    washers=[
        {
        nombre:'Cory Jones',
        foto:require('../assets/usuarios/user.jpg'),
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
    
        nombre:'Gregory',
        numService:6,
    }
}



  render() {

    let screenWidth=Dimensions.get('window').width;
 let screenHeight=Dimensions.get('window').height;

 

if(screenHeight<=592){
  bolitasLeft='18%'
  marginMoter='0.1';
widMoter='46%';
heiMoter='31%';
}else if(screenHeight<=678){
  bolitasLeft='18%'
  marginMoter='0.1';
widMoter='46%';
heiMoter='31%';
}else if(screenHeight<=684){
  bolitasLeft='18%'
  marginMoter='1.8%';
  widMoter='37%';
  heiMoter='28%';
}else if(screenHeight<=775){
  bolitasLeft='18%'
  marginMoter='0.1';
widMoter='46%';
heiMoter='31%';
 }else{
  bolitasLeft='13%'
  marginMoter='1.8%';
  widMoter='46.5%';
  heiMoter='28%';
}
 



    return (
 
    <View style={{flex:1}}>

  <View style={{flex:3.5,backgroundColor:'#2d7cf7'}}>
  <ImageBackground source={require('../assets/mixto/semifondo.png')}
    style={{width: '100%', height: '100%'}} >
 
 <TouchableOpacity
                 
                 onPress={() => this.props.navigation.toggleDrawer()} 
                 style={{width:wp('15%'),marginTop:hp('6%'),marginHorizontal:wp('6%'),}} >
          <Ionicons name="md-menu" size={32} color="#e2e7ee" />
   </TouchableOpacity>
   <TouchableOpacity 
         onPress={() => this.props.navigation.navigate("senior")}
                                 >  
      <View style={{alignItems:'center'}}>
         <Text style={{marginTop:hp('-2.5%'),
         color:'#fff',fontSize:hp('2%'), fontWeight:'500'
        }}>Hi {this.state.nombre}!</Text>

        <Text style={{
           color:'#fff',fontSize:hp('6%'), fontWeight:'200', 
           }}>Junior Washer</Text>

          <Text style={{
            color:'#fff',fontSize:hp('2.5%'), fontWeight:'300',
           }}>{this.state.numService} services left to be Senior</Text>
         




      </View>
      </TouchableOpacity>


<View  style={{flexDirection: 'row' , marginLeft:wp(bolitasLeft),marginTop:hp('2%')}}>


<View style={{ flexDirection:'row' }}>

 <View style={{alignItems:'flex-end'}}>
   <Text style={{
        backgroundColor:'#ffcc00',
        borderRadius:hp('1.5%'),
        borderWidth:hp('0.3%'),
        borderColor: 'white',
       height:hp('1.5%'),
       width:hp('1.5%'),
   }}>
  </Text>
  </View>
</View>

<View style={{alignItems:'center',
 flexDirection:'row' }}>
 <Text style={styles.baraLineaElegida}>----</Text>
   <View style={styles.circuloElegido}>
  </View>
  
</View>

<View style={{alignItems:'center',
 flexDirection:'row' ,marginLeft:wp('-8.1%')}}>
   <Text style={styles.baraLineaElegida}>----</Text>
   <View style={styles.circuloElegido}>
   </View>
 </View>
 <View style={{alignItems:'center',
 flexDirection:'row' ,marginLeft:wp('-9%')}}>
   <Text style={styles.baraLineaElegida}>----</Text>
   <View style={styles.circuloElegido}>
   </View>
 </View>
 <View style={{alignItems:'center',
 flexDirection:'row' ,marginLeft:wp('-9.1%')}}>
   <Text style={styles.baraLineaElegida}>----</Text>
   <View style={styles.circuloElegido}>
   </View>
 </View>
 <View style={{alignItems:'center',
 flexDirection:'row' ,marginLeft:wp('-9.1%')}}>
   <Text style={styles.baraLineaElegida}>----</Text>
   <View style={styles.circuloElegido}>
   </View>
 </View>


 <View style={{alignItems:'center',
 flexDirection:'row' ,marginLeft:wp('-9%')}}>
   <Text style={styles.baraLineaBlanco}>----</Text>
   <View style={styles.circuloBlanco}>
   </View>
 </View>

 <View style={{alignItems:'center',
 flexDirection:'row' ,marginLeft:wp('-9%')}}>
   <Text style={styles.baraLineaBlanco}>----</Text>
   <View style={styles.circuloBlanco}>
   </View>
 </View>

 <View style={{alignItems:'center',
 flexDirection:'row' ,marginLeft:wp('-9%')}}>
   <Text style={styles.baraLineaBlanco}>----</Text>
   <View style={styles.circuloBlanco}>
   </View>
 </View>

 <View style={{alignItems:'center',
 flexDirection:'row' ,marginLeft:wp('-9%')}}>
   <Text style={styles.baraLineaBlanco}>----</Text>
   <View style={styles.circuloBlanco}>
   </View>
 </View>


</View>

   </ImageBackground>
  </View>
  <View  style={{
      flex:6.5,
      backgroundColor:'#F9F9FC',
  }}>


  <View style={{
    
    flex:1,
    backgroundColor:'white',
     marginTop:hp('-7.5%'),
      marginHorizontal:wp('4%'),
       borderRadius:hp('3%'),
  }}>


 

     


 <ScrollView>

  
    <View  style={{marginHorizontal:wp('4%'),marginTop:hp('1.%'), zIndex: 1,}}>
    <Text style={{
             color:'#25265e' , fontSize:hp('2.7%'),  fontWeight:'500'
         }}>Discover the {'\n'}CarWash family</Text>
         

    </View>
        
         <ScrollView horizontal showsHorizontalScrollIndicator={false} style={{
             zIndex: 1,
             marginTop:hp('2%')}} >
      
      {
   this.washers.map((item,i)=> {

 
    return (

        <View key={i} style={{width:wp('80%'), 
        paddingBottom:hp('1.7%'),paddingTop:hp('1.7%'), paddingHorizontal:wp('1.7%'),
        borderRadius:hp('1.5%'),marginHorizontal:wp('3%'),
        borderColor:'#d7d7df',borderWidth:hp('0.2%')}}>

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
         style={{zIndex: 4, width:wp('15%'),height:hp('7.8%'),borderRadius:hp('20%') ,
         borderColor:'#d7d7df',borderWidth:hp('0.2%')}} />
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
     
<View style={{flexDirection:'row'}}>
  <View style={{flex:5 ,marginLeft:hp('2%'), marginRight:hp('3%')}}>
     <Text style={styles.titu}>Regulate your time </Text>
      <Text style={styles.subtitu}>Choose which days you work as Washer</Text>
   
    
     <Text style={styles.titu}>Earn very good tips for service</Text>
      <Text style={styles.subtitu}>Stay with all tips without any commission</Text>
 
     <Text style={styles.titu}>Recruit your own Team Wash</Text>
      <Text style={styles.subtitu}>Get commissions for your team's work</Text>
   </View>   
 <View style={{
     flex:5,justifyContent:'center'
 }}>
   <View  style={{
       backgroundColor:'#5BDAAA',
       padding:hp('13%'),
       borderRadius:hp('15%'),
   }}>
    <View style={{alignItems:'center', flex:4,position:'absolute',left:wp('5%'),
       marginTop:hp(marginMoter)}}>
     <Image source={require('../assets/mixto/moteroMoto.png')} 
                        style={{ zIndex:2, width:wp(widMoter),height:hp(heiMoter)
                                   }} />
     </View>

   </View>
 </View>
</View>
   

            
    

                          
                       
</ScrollView>


  </View>

</View>

</View>
 
    );
  }
}

 
const styles = StyleSheet.create({
    circuloElegido:{
        backgroundColor:'#ffcc00',
        borderRadius:10,
        borderWidth:hp('0.3%'),
        borderColor: 'white',
        padding:'6%',
       
      },
    
         baraLineaElegida:{
          backgroundColor:'#ffcc00',
          fontSize:hp('2%'),
           height:hp('0.3%'),
           color:'#6c30cc'
         },
    
      
         circuloBlanco:{
        
          borderRadius:10,
          padding:'6%',
          borderWidth:hp('0.3%'),
          borderColor: 'white',
        },
      
           baraLineaBlanco:{

            backgroundColor:'#d7d7df',
            fontSize:hp('2%'),
             height:hp('0.3%'),
             color:'#6c30cc'

           },
      
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