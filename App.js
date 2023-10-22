import { StyleSheet, Text, View,Image,TouchableOpacity,}from 'react-native'
import { useState } from 'react'
import { isEnabled } from 'react-native/Libraries/Performance/Systrace';
 const App=() => {

 const[enable,setenable,]=useState(false)
 
 const onclickMe=() => {
 console.log(enable,'clicked');
  setenable(!enable);
}
  return (
    <View style={{
      flex:1,
      backgroundColor:enable? 'orange':'grey',
    }}>
    <Text style={{
      fontSize:35,
      color:'white',
      marginTop:36,
      fontWeight:'bold',
      textAlign:'center'
    }}>Bedroom</Text>

    <view style={{
      height:2,
      width:530,
      marginTop:2,
      backgroundColor:'white'
    }}></view>

    <view style={{
      height:2,
      width:520,
      marginTop:2,
      marginLeft:700,
      backgroundColor:'white'
    }}></view>

    <Text style={{
      fontSize:36,
      color:'white',
      marginBottom:6,
      fontWeight:'bold',
      textAlign:'center'
    }}>Lights</Text>

    <Image style={{
      height:180,
      width:200,
      marginTop:65,
      alignSelf:'center'
      }} 
      resizeMode="contain"
     source={enable ? require('./assets/30535-2-idea-bulb-clipart-thumb.png'):require('./assets/13444.png')}/>

    <TouchableOpacity 
     onPress={
      ()=> {
        onclickMe();
      }
    }
    style={{
      height:50,
      width:130,
      borderRadius:55,
      marginLeft:480,
      marginTop:100,
      backgroundColor:enable?'yellow':'black',
    
     }}>
    <Text style={{
      fontSize:25,
      color:'white',
      alignItems:'center',
      textAlign:'left',
      marginLeft:4,
      marginTop:4,
    }}>
    {enable ? 'ON' : 'OFF'} 
    </Text>
    <View style={{
      height:48,
      width:48,
      borderRadius:48/2,
      backgroundColor:'white',
      position:'absolute',
      marginBottom:4,
      marginLeft:81
    }}></View>
    
    </TouchableOpacity>

    </View>
  )
}

export default App

const styles = StyleSheet.create({})