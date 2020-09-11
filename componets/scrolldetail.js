import React from 'react';
import { StyleSheet, Text, View,TouchableOpacity ,ImageBackground,ScrollView} from 'react-native';

function scrolldetail(props) {
    return (
        <View style={{height:150,paddingTop:20,paddingLeft:20,paddingRight:20}}>
  <Text style={{textAlign:"center",color:"white"}}>☁ Today weather ☁</Text>
<ScrollView style={{paddingTop:10}} horizontal={true} showsHorizontalScrollIndicator={false}> 
  <View style={{height:100,width:150}}>
    
    <View style={{flex:1}}>
    <View style={{borderWidth:0.5,borderColor:"white",borderRadius:10,borderRadius:10,padding:10,marginRight:10}}>
  <Text style={{color:"white",fontSize:14,}}>Humanity</Text>
  <Text style={{padding:5}}>0.222</Text>
  </View>
    </View>


  </View>
  <View style={{height:100,width:150}}>
    <View style={{flex:1}}>
    <View style={{borderWidth:0.5,borderColor:"white",borderRadius:10,borderRadius:10,padding:10,marginRight:10}}>
  <Text style={{color:"white",fontSize:14,}}>Humanity</Text>
  <Text style={{padding:5}}>0.222</Text>
  </View>
    </View>


  </View>
  <View style={{height:100,width:150}}>
    <View style={{flex:1}}>
    <View style={{borderWidth:0.5,borderColor:"white",borderRadius:10,borderRadius:10,padding:10,marginRight:10}}>
  <Text style={{color:"white",fontSize:14,}}>Humanity</Text>
  <Text style={{padding:5}}>0.222</Text>
  </View>
    </View>


  </View>
  
  
  

</ScrollView>

</View>

    )
}

export default scrolldetail
