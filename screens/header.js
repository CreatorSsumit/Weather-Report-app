import * as React from 'react';
import { Appbar } from 'react-native-paper';
import {useNavigation, } from "@react-navigation/native"



const MyComponent = (props) => {
    const navigation = useNavigation()
  const _goBack = () => console.log('Went back');

  const _handleSearch = () => navigation.navigate('search');

  const _handleMore = () => console.log('Shown more');

  return (
    <Appbar.Header style={{backgroundColor:props.headercolor}}>
     
      <Appbar.Content style={{marginLeft:20}} title="Weather 🌧 " />
      <Appbar.Action icon="magnify" onPress={_handleSearch} />
      <Appbar.Action icon="dots-vertical" onPress={_handleMore} />
    </Appbar.Header>
  );
};

export default MyComponent;