import React from 'react';
import { NavigationContainer } from "@react-navigation/native"
import { createStackNavigator } from "@react-navigation/stack";
import Login from './pages/Login';
import Home from './pages/Home';
import Register from './pages/Register';
import ServiceProvider from './pages/ServiceProvider';
import ProfileServiceProvider from './pages/ProfileServiceProvider';
import Service from './pages/Services';
import Profile from './pages/Profile';

const AppStack = createStackNavigator();


export default function Routes(){
    return(
       <NavigationContainer>
           <AppStack.Navigator screenOptions={{ headerShown: false }}>
               <AppStack.Screen name='Login' component={Login} />
               <AppStack.Screen name="Register" component={Register} />
               <AppStack.Screen name="Home" component={Home} />
               <AppStack.Screen name="ServiceProvider" component={ServiceProvider} />
               <AppStack.Screen name="ProfileServiceProvider" component={ProfileServiceProvider} />
               <AppStack.Screen name="Service" component={Service} />
               <AppStack.Screen name="Profile" component={Profile} />
           </AppStack.Navigator>
       </NavigationContainer>
    )
}