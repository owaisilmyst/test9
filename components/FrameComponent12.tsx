import * as React from "react";
import { StyleProp, ViewStyle, StyleSheet, View } from "react-native";

type FrameComponent12Type = {
  style?: StyleProp<ViewStyle>;
};

const FrameComponent12 = ({ style }: FrameComponent12Type) => {
  return (
    <View style={[styles.frameView, style]}>
      <View style={styles.rectangleView} />
    </View>
  );
};

const styles = StyleSheet.create({
  rectangleView: {
    position: "absolute",
    top: 0,
    left: 0,
    backgroundColor: "#d9d9d9",
    width: 258,
    height: 392,
  },
  frameView: {
    position: "relative",
    width: 258,
    height: 392,
    flexShrink: 0,
  },
});

export default FrameComponent12;
