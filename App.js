import { StatusBar } from 'expo-status-bar';
import React,{useEffect,useState,Fragment} from 'react';
import { StyleSheet, Text, View,TouchableOpacity ,ImageBackground,ScrollView} from 'react-native';
import Header from "./screens/header";
import Search from "./componets/search"
import { NavigationContainer,useNavigation } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';

import Homepage from "./screens/home"
import {
  useFonts,
  Roboto_400Regular,
  Bangers_400Regular,
  OpenSans_400Regular
} from "@expo-google-fonts/dev";
const Stack = createStackNavigator();



const Home = (props)=> {
 const navigation = useNavigation()

  const citydetails = props.route.params

 
 let defaultvalue = ( <View style={{width:"100%",height:400,justifyContent:"center",alignItems:"center"}}>

 <TouchableOpacity onPress={()=> navigation.navigate('search')} style={{width:"70%",height:50,backgroundColor:"white",borderRadius:10,justifyContent:"center",alignItems:"center",backgroundColor:"#435561"}}><Text style={{fontSize:18,color:"white"}}>Search your City</Text></TouchableOpacity>
   </View>)
var headerclimatecolor = {
  clouds:"#B9C1C3",
  rain:""
}

const climate = {
  cloudcolor:'#435561',
  clouddarkcolor:'#122029',
  cloudimage:'https://images.unsplash.com/photo-1532939198640-a7f0da02b62f?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1534&q=80',
  rainimage:'https://images.unsplash.com/photo-1516368694098-47836cebec97?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1546&q=80' 
  

} 


var climatedata = '';

 if(citydetails){
  var actualdata = []
   actualdata.push(citydetails)
   
 defaultvalue =  actualdata.map((itm)=>{
   climatedata = itm.citydetails
  return(
   
    
    <Homepage key={itm.citydetails.city.id} itmdata = {itm} climatevalue={climate} climatedatavalue={climatedata} currentclimate={citydetails.citycurrentdetails} />
   
   )
     
   })

}else{


}
 


 return (
    <View style={styles.container}>
      
     
      <StatusBar style="auto" />
      <Header headercolor= {headerclimatecolor.clouds}/>
    {defaultvalue}


    </View>
  );
}



export default function App() {
  return (
    <NavigationContainer>
    <Stack.Navigator headerMode="none">
      <Stack.Screen name="home" component={Home} />
      <Stack.Screen name="search" component={Search} />
     
    </Stack.Navigator>
    </NavigationContainer>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    flexDirection:"column"
  },
});
