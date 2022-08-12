import * as React from "react";
import { StyleProp, ViewStyle, Text, StyleSheet, View } from "react-native";

type FrameComponent4Type = {
  style?: StyleProp<ViewStyle>;
};

const FrameComponent4 = ({ style }: FrameComponent4Type) => {
  return (
    <View style={[styles.frameView, style]}>
      <Text style={styles.popularText}>Popular</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  popularText: {
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

export default FrameComponent4;
