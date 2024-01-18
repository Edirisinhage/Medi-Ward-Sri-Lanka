import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { View, Text } from 'react-native'
import React from 'react'
import HomeScreen from '../screens/HomeScreen';
import WelcomeScreen from '../screens/WelcomeScreen';
import LoginScreen from '../screens/LoginScreen';
import SignUpScreen from '../screens/SignUpScreen';
import useAuth from '../hooks/useAuth';
import ProfileScreen from '../screens/ProfileScreen';
import SettingsScreen from '../screens/SettingsScreen';
import DetailsScreen from '../screens/DetailsScreen';
//import { Ionicons } from '@expo/vector-icons';
import Ionicons from '@expo/vector-icons/Ionicons';
//import { Entypo } from '@expo/vector-icons';


const Stack = createNativeStackNavigator();
const Tab = createBottomTabNavigator();


export default function AppNavigation() {
    const {user}=useAuth();
    const HomeTabs =()=>{
  return(
    <Tab.Navigator
        screenOptions={({route})=>({
          headerShown:false,
          tabBarIcon: ({focused})=>{
            let iconName;
              if(route.name==="Welcome"){
                iconName="home";
                //<Entypo iconName="home" size={24} color="black" />
              }else if (route.name==="Settings"){
                iconName="settings";
              }else if(route.name==="Profile"){
                iconName="person-circle-outline";
              }else if(route.name==="Details"){
                iconName="book";
              }
              const customizeSize=30
             return <Ionicons 
                          name={iconName}
                          size={customizeSize}
                          color={focused? "#243E4F":"gray"}
                          
                          />;


          },

              
          
        })}
    
    >
        <Tab.Screen name="Welcome" component={WelcomeScreen}/>
        <Tab.Screen name="Settings" component={SettingsScreen}/>
        <Tab.Screen name="Details" component={DetailsScreen}/>
        <Tab.Screen name="Profile" component={ProfileScreen}/>
    </Tab.Navigator>
  )
      
    }
    
    if(user){
        return (
            <NavigationContainer initialRouteName='Welcome'>
              <Stack.Navigator>
                <Stack.Screen name="Welcome" options={{headerShown:false}} component={HomeTabs} />

              </Stack.Navigator>
            </NavigationContainer>
          )
    }else{
        return (
            <NavigationContainer initialRouteName='Home'>
              <Stack.Navigator>
                <Stack.Screen name="Home" options={{headerShown:false}} component={HomeScreen} />
                <Stack.Screen name="Login" options={{headerShown:false}} component={LoginScreen} />
                <Stack.Screen name="SignUp" options={{headerShown:false}} component={SignUpScreen} />
                <Stack.Screen name="Profile" options={{headerShown:false}} component={ProfileScreen} />
                <Stack.Screen name="Details" options={{headerShown:false}} component={DetailsScreen} />


              </Stack.Navigator>
            </NavigationContainer>
          )
    }
 
}