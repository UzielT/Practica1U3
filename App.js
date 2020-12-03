import { StatusBar } from 'expo-status-bar';
import React, { Component } from 'react';
import { StyleSheet, Text, View, ActivityIndicator} from 'react-native';
import Constants from 'expo-constants'
import {NavigationContainer} from '@react-navigation/native';
import StackNavigation1 from './Navigations/StackNavigation1'
import BottomTabNavigator from './Navigations/BottomTabNavigator';
import TopTabNavigator from './Navigations/TopTabNavigator';

export default class  App extends Component {
  
  render(){
  
    return (
      
      <NavigationContainer>
        <BottomTabNavigator/>
      </NavigationContainer>
      
    )};
}



const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
    marginTop: Constants.statusBarHeight
  },
});

/* {
  
  state ={
    cargado: false 
  }
  componentDidMount(){

    setTimeout(() => {
      this.setState({
        cargado:true
      })
    }, 3000);
  }
        this.state.cargado===false
        ?
        <ActivityIndicator size="large" color="#0000ff" />
        :
        <HomeScreen/>
      }
      */