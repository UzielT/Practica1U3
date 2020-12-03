import React from 'react'
import {createStackNavigator, HeaderTitle} from '@react-navigation/stack';
import HomeScreen from '../Screens/HomeScreen'
import Screen2 from '../Screens/Screen2'
import EmailScreen from '../Screens/EmailScreen'
import ContactScreen from '../Screens/ContactScreen'
import AboutScreen1 from '../Screens/AboutScreen1'
import AboutScreen2 from '../Screens/AboutScreen2'

const Stack = createStackNavigator();

export default function StackNavigation1(){

    return(
        <Stack.Navigator>
            <Stack.Screen name="HomeScreen" component={HomeScreen}
            options={{headerShown:true, HeaderTitle:"Home"}}/>
            <Stack.Screen name="Screen2" component={Screen2}/>
            <Stack.Screen name="EmailScreen" component={EmailScreen}/>
            <Stack.Screen name="ContactScreen" component={ContactScreen}/>
            <Stack.Screen name="AboutScreen1" component={AboutScreen1}/>
            <Stack.Screen name="AboutScreen2" component={AboutScreen2}/>
        </Stack.Navigator>

    )
}
