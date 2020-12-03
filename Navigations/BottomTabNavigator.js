import React from 'react'
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import Screen2 from '../Screens/Screen2'
import EmailScreen from '../Screens/EmailScreen'
import ContactScreen from '../Screens/ContactScreen'
import AboutScreen1 from '../Screens/AboutScreen1'
import Ionicons from 'react-native-vector-icons/Ionicons'
import HomeScreen from '../Navigations/StackNavigation1'


const Tab = createBottomTabNavigator();

export default function BottomTabNavigator() {

    return(
        <Tab.Navigator
        initialRouteName="Home"
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
            name="Home"
            component={HomeScreen}
            options={{
                tabBarLabel:"Home",
                tabBarIcon:({color})=>(
                    <Ionicons name={"md-home"}
                    size={20}
                    color={color}/>
                )

            }}
            />
            <Tab.Screen
            name="Screen2"
            component={Screen2}
            options={{
                tabBarLabel:"Screen2",
                tabBarIcon:({color})=>(
                    <Ionicons name={"ios-musical-notes"}
                    size={20}
                    color={color}/>
                )

            }}
            />
            <Tab.Screen
            name="Email"
            component={EmailScreen}
            options={{
                tabBarLabel:"Email",
                tabBarIcon:({color})=>(
                    <Ionicons name={"ios-mail"}
                    size={20}
                    color={color}/>
                )
            }}
            />
            
            <Tab.Screen
            name="Contact"
            component={ContactScreen}
            options={{
                tabBarLabel:"Contact",
                tabBarIcon:({color})=>(
                    <Ionicons name={"ios-contact"}
                    size={20}
                    color={color}/>
                )
            }}
            />
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
        </Tab.Navigator>



    )
}
