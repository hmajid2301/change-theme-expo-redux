import React from "react";
import { Text, View } from "react-native";


const Headline = ({ color, text }) => (
  <View>
    <Text style={{backgroundColor: color, fontSize: 24, color: 'white', textAlign: 'center' }}>{text}</Text>
  </View>
);


export default Headline;
