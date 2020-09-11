import React,{useState} from 'react';
import { StyleSheet, Text, View,TouchableOpacity ,ImageBackground,ScrollView} from 'react-native';


function scrolldetail(props) {

  const [state, setstate] = useState('')
 const list =  props.list;

 var clist = '';
 
  if(list){
    clist = list.map((itm)=>{
      return(
        <Text>hello</Text>
      )
    })
    
  }
 
  

 
    return (
      {clist}
   )
}

export default scrolldetail
