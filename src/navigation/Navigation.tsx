import React ,{FC} from 'react';
import {View, Text} from 'react-native';
import {NavigationContainer} from '@react-navigation/native';
import {createNativeStackNavigator} from '@react-navigation/native-stack';      
import SplashScreen from '../features/auth/SplashScreen';
import LoginScreen from '../features/auth/LoginScreen';
import { navigationRef } from '../utils/NavigationUtils';
import UserBottomTab from '../features/tabs/UserBottomTab';

const Stack = createNativeStackNavigator();

const Navigation:FC = () => {
  return (
    <NavigationContainer ref={navigationRef}>
      <Stack.Navigator
      initialRouteName='SplashScreen'
      screenOptions={{headerShown: false}}>
        <Stack.Screen name="SplashScreen" component={SplashScreen} />
        <Stack.Screen 
          name="LoginScreen"
          component={LoginScreen}
          options={{
            animation: 'fade',
          }}
        />
        <Stack.Screen
          options={{
            animation: 'fade',
          }}
          name="UserBottomTab"
          component={UserBottomTab}
          />
        </Stack.Navigator>
        {/* Add other screens here */}  
    </NavigationContainer>
  )
}

export default Navigation