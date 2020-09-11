import React,{useState} from 'react'
import { StyleSheet, Text, View,TouchableOpacity ,ImageBackground,ScrollView} from 'react-native';
import Scrolldetail from "../componets/scrolldetail"

function home(props) {

    const itm = props.itmdata;
    const climatedata = props.climatedatavalue;
    const climatevalue = props.climatevalue
    const currentdata = props.currentclimate
    console.log(currentdata)


    var unixtimestamp =currentdata.dt

    // Months array
    var months_arr = ['Jan','Feb','Mar','Apr','May','Jun','Jul','Aug','Sep','Oct','Nov','Dec'];
   
    // Convert timestamp to milliseconds
    var date = new Date(unixtimestamp*1000);
   
    // Year
    var year = date.getFullYear();
   
    // Month
    var month = months_arr[date.getMonth()];
   
    // Day
    var day = date.getDate();
   
    // Hours
    var hours = date.getHours();
   
    // Minutes
    var minutes = "0" + date.getMinutes();
   
    // Seconds
    var seconds = "0" + date.getSeconds();
   
    // Display date time in MM-dd-yyyy h:m:s format
    var convdataTime = month+'-'+day+'-'+year+' '+hours + ':' + minutes.substr(-2) + ':' + seconds.substr(-2);



     
    return (
        <ImageBackground source={{uri:climatevalue.cloudimage}} style={{width:"100%",height:"100%", backgroundColor:"red",position:"relative"}}>
  

        <View style={{paddingTop:10}}>
    <Text style={{fontSize:15,textAlign:"center",color:"white"}}>{currentdata.name},{climatedata.city.country}</Text>
        
          <View style={{width:"70%",marginLeft:20,marginTop:20,borderRadius:10,padding:20}}>
          <Text style={{fontSize:80,marginLeft:10,marginTop:10,color:"white"}}>
            <Text style={{color:"#435561",fontSize:100}}>2</Text>1.C
          </Text>
          <Text style={{fontSize:20,marginLeft:10, color:"#435561"}}>Rain ⛈⛈</Text>
          </View>
        </View>
        <View style={{width:"94.5%",height:400,position:"absolute",bottom:"19%",left:"3%",borderRadius:20, backgroundColor:"#435561",opacity:0.85,paddingBottom:10,paddingTop:20}}>
        <ScrollView showsVerticalScrollIndicator={false} >
        
        <View style={{paddingTop:10,marginLeft:20,marginRight:20,flexDirection:"row",justifyContent:"space-between"}}>
          <View style={{width:"47%",height:70,borderWidth:0.5,borderColor:"#122029",borderRadius:10,padding:10}}>
          <Text style={{color:"white",fontSize:14,}}>Humanity</Text>
          <Text style={{padding:5}}>0.222</Text>
          </View>
          <View style={{width:"45%",height:70,borderWidth:0.5,borderColor:"#122029",borderRadius:10,borderRadius:10,padding:10}}>
          <Text style={{color:"white",fontSize:14,}}>Humanity</Text>
          <Text style={{padding:5}}>0.222</Text>
          </View>
        </View>
        
        <View style={{padding:13,borderBottomWidth:2,borderBottomColor:"#435561"}}></View>
        
        <Scrolldetail />
        <Text  style={{textAlign:"center",color:"white"}}>🌡 5 days Forecast 🌡 </Text>
        <Scrolldetail />
        </ScrollView>
        
        
        </View>
        
         </ImageBackground>
     
    )
}

export default home
