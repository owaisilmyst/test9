import * as React from "react";
import { StyleProp, ViewStyle, Text, StyleSheet, View } from "react-native";

type FrameComponent3Type = {
  style?: StyleProp<ViewStyle>;
};

const FrameComponent3 = ({ style }: FrameComponent3Type) => {
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
    color: "#f69f21",
    textAlign: "left",
  },
  frameView: {
    position: "relative",
    borderStyle: "solid",
    borderColor: "#f69f21",
    borderTopWidth: 0,
    borderRightWidth: 0,
    borderBottomWidth: 2,
    borderLeftWidth: 0,
    flexDirection: "row",
    padding: 10,
    boxSizing: "border-box",
    alignItems: "flex-start",
    justifyContent: "flex-start",
  },
});

export default FrameComponent3;
