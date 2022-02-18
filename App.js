import React from "react";
import {
  Text,
  View,
  StyleSheet,
  StatusBar,
  Platform,
  SafeAreaView,
  Image,
} from "react-native";
import {NavigationContainer} from "@react-navigation/native";
import DrawerNavigator from "./navigation/drawer"
export default function App(){
  
    return(
      <NavigationContainer>
      <DrawerNavigator />
    </NavigationContainer>
    )
  
}