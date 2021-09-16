import React from "react";
import { StyleSheet, StatusBar, SafeAreaView } from "react-native";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import Home from "./pages/Home";
import Profile from "./pages/Profile";
import { Entypo } from "@expo/vector-icons";
import Service from './pages/Services';

const Tab = createBottomTabNavigator();

export default function Routes() {
  return (
    <>
      <SafeAreaView>
        <StatusBar barStyle="light-content" backgroundColor="#302E4D" />
      </SafeAreaView>
      <Tab.Navigator
        tabBarOptions={{
          style: {
            backgroundColor: "#FFF",
            borderTopColor: "transparent",
            position: "absolute",
            left: 20,
            right: 20,
            bottom: 15,
            borderRadius: 15,
            height: 60,
            ...styles.shadow,
          },
          keyboardHidesTabBar: true,
          activeTintColor: "#302E4D",
          inactiveTintColor: "#605C99",
          tabStyle: {
            paddingBottom: 5,
            paddingTop: 5,
          },
        }}
      >
        <Tab.Screen
          name="Home"
          component={Home}
          options={{
            tabBarIcon: ({ size, color }) => (
              <Entypo name="home" size={size} color={color} />
            ),
          }}
        />

        <Tab.Screen
          name="Serviços"
          component={Service}
          options={{
            tabBarIcon: ({ size, color }) => (
              <Entypo name="suitcase" size={size} color={color} />
            ),
          }}
        />

        <Tab.Screen
          name="Perfil"
          component={Profile}
          options={{
            tabBarIcon: ({ size, color }) => (
              <Entypo name="user" size={size} color={color} />
            ),
          }}
        />
      </Tab.Navigator>
    </>
  );
}

const styles = StyleSheet.create({
  shadow: {
    shadowColor: "#302E4D",
    shadowOffset: {
      width: 0,
      height: 10,
    },
    shadowOpacity: 0.25,
    shadowRadius: 3.5,
    elevation: 5,
  },
});
