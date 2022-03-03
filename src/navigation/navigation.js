import React from 'react'
// import StartPage from '../screens/Home/StartPage.screen'
import Login from '../screens/Auth/Login'
import SignUp from '../screens/Auth/SignUp'
import { NavigationContainer } from '@react-navigation/native'
import { createStackNavigator } from '@react-navigation/stack'
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs'
import Icon from 'react-native-vector-icons/Ionicons'
import chatscreen from '../screens/Screens/chatscreen'
import ChatMessage from '../screens/Screens/ChatMessage'
import Camera from '../components/Camera'

const Stack = createStackNavigator()
const Tab = createBottomTabNavigator()

// function MyTabs() {
//   return (
//     <Tab.Navigator>
//       <Tab.Screen
//         name="Home"
//         component={Home}
//         options={{
//           headerShown: false,
//           tabBarIcon: ({ focused, color, size }) => {
//             return <Icon name={'ios-home'} size={25} color={color} />
//           }
//         }}
//       />
//     </Tab.Navigator>
//   )
// }

const MainNavigation = () => {
  return (
    <NavigationContainer>
      <Stack.Navigator screenOptions={{ headerShown: false }}>
        <Stack.Screen
          name="SignUp"
          options={{ headerShown: false }}
          component={SignUp}
        />
        <Stack.Screen
          name="Camera"
          options={{ headerShown: false }}
          component={Camera}
        />
        <Stack.Screen
          name="ChatMessage"
          options={{ headerShown: false }}
          component={ChatMessage}
        />
        <Stack.Screen
          name="chatscreen"
          options={{ headerShown: false }}
          component={chatscreen}
        />
        {/* <Stack.Screen
          name="StartPage"
          options={{ headerShown: false }}
          component={StartPage}
        /> */}
        <Stack.Screen
          name="Login"
          options={{ headerShown: false }}
          component={Login}
        />

        
        {/* add your another screen here using -> Stack.Screen */}
      </Stack.Navigator>
    </NavigationContainer>
  )
}

export default MainNavigation
