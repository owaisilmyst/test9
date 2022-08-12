import * as React from "react";
import { StyleProp, ViewStyle, Text, StyleSheet, View } from "react-native";

type FrameComponent9Type = {
  style?: StyleProp<ViewStyle>;
};

const FrameComponent9 = ({ style }: FrameComponent9Type) => {
  return (
    <View style={[styles.frameView, style]}>
      <Text style={styles.favouritesText}>Favourites</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  favouritesText: {
    position: "relative",
    fontSize: 16,
    fontWeight: "500",
    fontFamily: "Inter",
    color: "#000",
    textAlign: "left",
  },
  frameView: {
    position: "relative",
    flexDirection: "row",
    padding: 10,
    boxSizing: "border-box",
    alignItems: "flex-start",
    justifyContent: "flex-start",
  },
});

export default FrameComponent9;
