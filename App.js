import { StyleSheet, Text, View ,Button,Image, ImageBackground} from 'react-native'
import React from 'react'
import { TouchableOpacity } from 'react-native-web'

const App = () => {
  return (
  <View style={{
     flex:1,
    background:'yellow',

 

 }}>
   <View style={{
    flex:2,
    background:'blue',
   
 }}>
 <View style={{
  height:50,
  width:50,
  backgroundColor:'white',
  borderRadius:25,
  marginTop:5,
  marginLeft:500,
 }}>
    <Image style={{
      height:35,
      width:35,
      marginTop:9,
      marginLeft:9
    }} source={require('./assets/Hat.png')}/>   
 </View>
  <Text style={{
    color:'white',
    fontWeight:'bold',            
    fontSize:40,
    marginLeft:500,           
  }}>Food for</Text>

  <Text style={{
    color:'white',
    fontWeight:'bold',
    fontSize:40,
    marginLeft:500,   
    }}>Everyone</Text>
 </View>

  <View style={{
    flex:2,
    background:'red'
  }}>
  <Image style={{ 
   height:255,
   width:235,
   marginTop:2,
   marginLeft:500,
  }}  

 
   source={require('./assets/people.png')}/>  
  </View>

  <View style={{
    flex:1,
    background:'red',
    }}>
    <TouchableOpacity style={{
      backgroundColor:'white',
      height:40,
      width:250,
      borderRadius:50,
      marginLeft:500,
      marginTop:60,
      justifyContent:'center',
      alignCenter:'Text'
    }}> <Text style={{
      color:'red',
      fontSize:18,
      fontWeight:'bold',
      marginLeft:75
      
    }}>Get started</Text>
      
    </TouchableOpacity> 
    
    
    
  
  </View>

  </View>
  )
}

export default App

const styles = StyleSheet.create({})
