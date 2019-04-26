import React, { Component } from 'react';
import {Alert,Platform,ScrollView,
  StyleSheet,ImageBackground,
  Text,TouchableWithoutFeedback,Keyboard,
  View,Image,TouchableOpacity,TextInput
} from 'react-native';
 
import {LinearGradient} from  'expo';
import {Ionicons}  from "@expo/vector-icons"
import {widthPercentageToDP as wp, heightPercentageToDP as hp} from 'react-native-responsive-screen';
//https://expo.github.io/vector-icons/
 
export default class  RequestMaterial extends Component {


    static navigationOptions = {
        header: null ,
    };

    productos=[
        {
        nombre:'shampoo Exterior car',
        foto:require('../assets/productos/bote1.png'),
        describe:`Adopt well selected materials and make use of chemical technology, which creates glossy finish that other wax in shampoo cannot. Blended modified silicone resin and oil combination produce beautiful gloss even only do car wash.This goes well with 'Kiwami Extreme Gloss Wax" series.`,
        tipo:'Exterior'
      },
      {
        nombre:'Deluxe Car Shampoo',
        foto:require('../assets/productos/bote2.png'),
        describe:`Adopt well selected materials and make use of chemical technology, which creates glossy finish that other wax in shampoo cannot. Blended modified silicone resin and oil combination produce beautiful gloss even only do car wash.This goes well with 'Kiwami Extreme Gloss Wax" series.`,
        tipo:'Exterior'
      },
      {
        nombre:'Gel car',
        foto:require('../assets/productos/bote1.png'),
        describe:`Adopt well selected materials and make use of chemical technology, which creates glossy finish that other wax in shampoo cannot. Blended modified silicone resin and oil combination produce beautiful gloss even only do car wash.This goes well with 'Kiwami Extreme Gloss Wax" series.`,
        tipo:'Exterior'
      },
      {
        nombre:'Relentless Drive Ultimate',
        foto:require('../assets/productos/pro1.png'),
        describe:`Adopt well selected materials and make use of chemical technology, which creates glossy finish that other wax in shampoo cannot. Blended modified silicone resin and oil combination produce beautiful gloss even only do car wash.This goes well with 'Kiwami Extreme Gloss Wax" series.`,
        tipo:'Interior'
      },
      {
        nombre:'Colored Cleaning Sponge',
        foto:require('../assets/productos/pro2.png'),
        describe:`Adopt well selected materials and make use of chemical technology, which creates glossy finish that other wax in shampoo cannot. Blended modified silicone resin and oil combination produce beautiful gloss even only do car wash.This goes well with 'Kiwami Extreme Gloss Wax" series.`,
        tipo:'Interior'
      },
      {
        nombre:'Deslize interior',
        foto:require('../assets/productos/pro1.png'),
        describe:`Adopt well selected materials and make use of chemical technology, which creates glossy finish that other wax in shampoo cannot. Blended modified silicone resin and oil combination produce beautiful gloss even only do car wash.This goes well with 'Kiwami Extreme Gloss Wax" series.`,
        tipo:'Interior'
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
    return (
 
    <View style={{flex:1}}>

  <View style={{flex:2.7,backgroundColor:'#2d7cf7'}}>
  <ImageBackground source={require('../assets/mixto/fondoReal.png')}
       style={{width: '100%', height: '100%'}} >

          <TouchableOpacity
                 onPress={() => this.props.navigation.toggleDrawer()} 
                 style={{ width:wp('15%'),marginTop:hp('8%'),marginHorizontal: wp('6%')}} >
             <Image source={require('../assets/iconos/menuIcon.png')} 
                  style={{ }}
                   />
       </TouchableOpacity>

   <Text style={{
     color:'white',
     fontSize: hp('4%'),
     fontWeight:'bold',
      marginTop:hp('4%'),
     marginHorizontal:wp('6%'),
    
   }}>Request Material</Text>

      
   </ImageBackground>
  </View>
  <View  style={{
      flex:7.3,
      backgroundColor:'#F9F9FC',
  }}>


  <View style={{
    
  backgroundColor:'white',
  flex:1,
      marginTop:hp('-5%'),
      marginHorizontal:wp('4%'),
      
      borderTopRightRadius:hp('3%'),
      borderTopLeftRadius:hp('3%'),
  }}>


 

     




  

            {/* BUSCADOR*/}
            <View style={{ marginTop:hp('1%'), marginHorizontal:wp('4%'),paddingVertical:hp('2%'),flexDirection:'row' }}>
                <View style={{flexDirection:'row',flex:5,backgroundColor:'#fff',paddingLeft: wp('3%'),
                      alignItems:'center',marginRight:wp('0.9%'),borderRadius:hp('3%'),borderWidth:hp('0.4%'),
                      borderColor:'#F9F9F9'}}>
                      <View style={{ width:wp('10%'),height:hp('6.5%'), justifyContent:'center'}}>
                     <Image source={require('../assets/iconos/lupa.png')} 
                          style={{  width:'80%',height:'65%'}}
                      />
                      </View>
                    <TextInput
                        style={{
                    
                       height:hp('6%'),
                       width:wp('70%'),
                     
                       borderRadius:hp('1.5%'),
                    
                    } }
                    placeholder="Search product"
                    editable={true} // con false , no podremos escribir nada
                    underlineColorAndroid="transparent"
                   
                    paddingHorizontal={5}
                    onChangeText={
                      (text3)=>{
                        this.setState(()=> {
      
                                          return {
                                            tytexto:text3,
                                          }
                               })
                      }
                      
      
                      }//fin de onchange
                   />
                  
              </View>
                 
            </View> 
   <ScrollView> 

  
   <Text style={{marginHorizontal:wp('4%'),marginTop:hp('-0.5%'),
  color :'#25265e', fontSize:hp('2.3%'), fontWeight:'500'
   }}>Our catalogue</Text>

   <View style={{flexDirection:'row',marginHorizontal:wp('4%'),marginTop:hp('0.5%') }}>
       <View style={{
         flex:7.6,  
       }}>
      <Text style={styles.washes}>For exterior washes</Text>
       </View>
       <View  style={{
         flex:2.4,flexDirection:'row'
       }}> 
        <Text style={styles.show}>Show All </Text>
        <Text style={styles.flecha}> > </Text>
       </View>
   </View>



         <ScrollView horizontal showsHorizontalScrollIndicator={false} style={{
             zIndex: 1,
             marginTop:hp('1%')}} >
      

      {
   this.productos.map((item,i)=> {

   if(item.tipo=='Exterior') {
    return (
        <TouchableOpacity key={i} 
        onPress={() => this.props.navigation.navigate("productoDetail",{datos:item})}
           >  
        <View style={{ paddingVertical:hp('1%'),width:wp('40%'),height:hp('25%') ,marginHorizontal:wp('1.8%'),
            borderColor:'#787993',borderWidth:hp('0.1%'),borderRadius:wp('1.9%')
        }}>
        
        
        <View style={{alignItems:"center"}}>
        <Image source={item.foto} 
                    style={{ width:hp('10%'),height:hp('15%')}}
                                      />
        </View>
        <View style={{marginTop:hp('2%'),
          marginHorizontal:wp('5%')
        }}>
        <Text style={{
            color:'#25265e',fontSize:hp('2%') ,fontWeight:'500',
        }}>
            {item.nombre}
        </Text>
    
        </View>


        </View>
        </TouchableOpacity>
    
        )
       

       }
    }
   )
}
</ScrollView>

{/*    bloque de interior  */}
   <View style={{flexDirection:'row',marginHorizontal:wp('4%'),marginTop:hp('1.5%') }}>
       <View style={{
         flex:7.6,  
       }}>
      <Text style={styles.washes}>For interior washes</Text>
       </View>
       <View  style={{
         flex:2.4,flexDirection:'row'
       }}> 
        <Text style={styles.show}>Show All </Text>
        <Text style={styles.flecha}> > </Text>
       </View>
   </View>



         <ScrollView horizontal showsHorizontalScrollIndicator={false} style={{
             zIndex: 1,
             marginTop:hp('1%')}} >
      

      {
   this.productos.map((item,i)=> {

   if(item.tipo=='Interior') {
    return (
        <TouchableOpacity key={i} 
        onPress={() => this.props.navigation.navigate("productoDetail",{datos:item})}
           >  
        <View  style={{paddingVertical:hp('1%'),width:wp('40%'),height:hp('25%'),marginHorizontal:wp('1.8%'),
            borderColor:'#787993',borderWidth:hp('0.1%'),borderRadius:wp('1.9%')
        }}>
        
        
        <View style={{alignItems:"center"}}>
        <Image source={item.foto} 
                                       style={{ width:hp('15%'),height:hp('15%')}}
                                      />
        </View>
        <View style={{marginTop:hp('2%'),
          marginHorizontal:wp('2%')
        }}>
        <Text style={{
            color:'#25265e',fontSize:hp('2%') ,fontWeight:'500',
        }}>
            {item.nombre}
        </Text>
    
        </View>


        </View>
        
      </TouchableOpacity>
        )
       

       }
    }
   )
}


       
        </ScrollView>
     
 
            
    

                          
                       
</ScrollView>


  </View>

</View>

</View>
 
    );
  }
}

 
const styles = StyleSheet.create({
    washes:{
     color :'#7b7b93', fontSize:hp('2%'), fontWeight:'500'
    } ,
    
    show:{
        color :'#4554e5', fontSize:hp('2%'), fontWeight:'500'
    },
    
    flecha:{
        color :'#4554e5', fontSize:hp('3.5%'), fontWeight:'500',
        marginTop: hp('-1.2%'),
   },
 
});