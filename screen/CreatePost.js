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

export default class CreatePost extends React.Component {
  render(){
    return(
      <View>
        <Text>CreatePost</Text>
      </View>
    )
  }
}
const styles = StyleSheet.create({
    droidSafeArea: {
        marginTop:
          Platform.OS === "android" ? StatusBar.currentHeight : RFValue(35),
      },
})