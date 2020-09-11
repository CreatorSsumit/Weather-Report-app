import { createStackNavigator } from '@react-navigation/stack';
import React from "react"
import {Text,View,Modal,TouchableOpacity } from "react-native"
import { TextInput } from 'react-native-paper';
import { Entypo } from '@expo/vector-icons';
import { useNavigation} from "@react-navigation/native"


let apikey ={
    acckey:"3ESYAqNoDYIODHATCVK9bv7NI4qFX1Pt",
    key:"8c2d2cb971e4c64c718cdd6350bf0e7a",
    base: "http://api.openweathermap.org/data/2.5/",
    all:"api.openweathermap.org/data/2.5/forecast?q={city name}&appid={your api key}"
}

export default function MySearch() {
    const [text, setText] = React.useState('');
    const [citydetails,setcity] = React.useState('')
    const [citycurrentdetails,setcurrentcity] = React.useState('')
    const navigation = useNavigation()

  

   const oncityselect = function(text){
        setText(text)
     fetch(`${apikey.base}forecast?q=${text}&appid=${apikey.key}`).then(response => response.json()).then(result=>{
    setcity(result)
     })

     fetch(`${apikey.base}weather?q=${text}&appid=${apikey.key}`).then(res => res.json()).then(resu=>{
     setcurrentcity(resu)
     })
        
     }

    const cityname = ()=>{
       
        if(citydetails){
            
            if(citydetails.city){
                  
                   return(
                       <TouchableOpacity onPress={()=>navigation.navigate('home',{citydetails,citycurrentdetails})} style={{width:"100%",height:60,backgroundColor:"#435561",position:"relative"}}> 
                   <Text style={{color:"white",fontSize:17,position:"absolute",top:"30%" ,left:"24%"}}>{citydetails.city.name+", " + citydetails.city.country }</Text>
                   </TouchableOpacity>
                   )
                }else{
                    return(
                        <View style={{width:"100%",height:60,backgroundColor:"#e3e3e3",position:"relative"}}> 
                        <Text style={{color:"black",fontSize:17,position:"absolute",top:"30%" ,left:"24%"}}> Place invaild</Text>
                        </View>
                    )
                   
                }
         
            
        }else if(text.length === 0){
           
        }
   
        }

        
      


  return (

    <Modal animationType="slide">
        <View style={{flexDirection:"row" ,backgroundColor:"#efefef"}}>
      <TouchableOpacity onPress={()=> navigation.navigate('home') } style={{width:"20%", flex:1,justifyContent:"center",alignItems:"center"  }}>
      <Entypo name="back" size={24} color="black" />   
      </TouchableOpacity>
      <View style={{width:"80%"}}>
      <TextInput style={{backgroundColor:"#efefef"}}
      label="Enter Place"
      value={text}
      onChangeText={(text)=> oncityselect(text) }
    />
      </View>


 
  </View>
 
  {cityname()}
 
   



    </Modal>
  
  )
}