import React from 'react'
import {createMaterialTopTabNavigator} from '@react-navigation/material-top-tabs';
import AboutScreen1 from '../Screens/AboutScreen1'
import AboutScreen2 from '../Screens/AboutScreen2'
import Ionicons from 'react-native-vector-icons/Ionicons'


const Tab = createMaterialTopTabNavigator();

export default function TopTabNavigator() {

    return(
        <Tab.Navigator
        initialRouteName="AboutScreen1"
        tabBarOptions={{
        activeTintColor:"#ff6600",
        inactiveTint:"#060606",
        showLabel:true,
        labelStyle:{
            fontSize:10
        },
        style:{
            paddingBottom:5,
            backgroundColor:"#f3f3f1"
        }
        
        }}>
            <Tab.Screen
            name="About"
            component={AboutScreen1}
            options={{
                tabBarLabel:"About",
                tabBarIcon:({color})=>(
                    <Ionicons name={"ios-help-circle"}
                    size={20}
                    color={color}/>
                )
            }}
            />

            <Tab.Screen
            name="About"
            component={AboutScreen2}
            options={{
                tabBarLabel:"About",
                tabBarIcon:({color})=>(
                    <Ionicons name={"ios-add-circle"}
                    size={20}
                    color={color}/>
                )
            }}
            />
        </Tab.Navigator>



    )
}
