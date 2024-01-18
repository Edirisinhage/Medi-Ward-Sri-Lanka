import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';
import AppNavigation from './navigation/appNavigation';
import WelcomeScreen from './screens/WelcomeScreen';


{/*{const DrawerNavigation =createDrawerNavigator(
  {
    HomeScreen:HomeScreen,
    SignUpScreen:SignUpScreen,
    LoginScreen:LoginScreen,
    WelcomeScreen:WelcomeScreen
  },
  {
    initialRouteName: "WelcomeScreen",
    contentOptions: {
      activeTintColor: "red"
    }
  }
  
)*/}
export default function App() {
  return (
    <AppNavigation/>
  );
}

{/*const Router = createAppContainer(
  createSwitchNavigator({
    // This is where your Auth screens would be handled.

    DrawerNavigation
  })
);

export default function App() {
  return <Router />;
}*/}
