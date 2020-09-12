import React,{useState} from 'react';
import { StyleSheet,Text, View,TouchableOpacity ,ImageBackground,ScrollView} from 'react-native';


function scrolldetail(props) {


 const list =  props.list;


 
    return (
      <View style={{height:130,marginTop:20}}>
      <ScrollView horizontal={true}>
   <View style={{height:130,width:160}}>

        <View style={{flex:2}}>
          <View style={{flex:1,width:null,height:null}}>
           <View style={{borderWidth:0.5,borderColor:"#122029",borderRadius:10,padding:10}}>
         <Text style={{color:"white",fontSize:14,}}>Humidity</Text>
             <Text style={{padding:5}}>ertg</Text>
         </View>
         </View> </View>
       
   </View>
   
    </ScrollView>
    </View>



{/* <View style={{paddingTop:10,marginLeft:20,marginRight:20,flexDirection:"row",justifyContent:"space-between"}}>
<View style={{height:70,borderWidth:0.5,borderColor:"#122029",borderRadius:10,padding:10}}>
<Text style={{color:"white",fontSize:14,}}>Humidity</Text>
<Text style={{padding:5}}>ertg</Text>
</View>
<View style={{height:70,borderWidth:0.5,borderColor:"#122029",borderRadius:10,borderRadius:10,padding:10}}>
<Text style={{color:"white",fontSize:14,}}>Pressure</Text>
<Text style={{padding:5}}>edfg</Text>
</View>
</View> */}


   )
}





export default scrolldetail
