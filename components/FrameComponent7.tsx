import * as React from "react";
import { StyleProp, ViewStyle, StyleSheet, View } from "react-native";

type FrameComponent7Type = {
  style?: StyleProp<ViewStyle>;
};

const FrameComponent7 = ({ style }: FrameComponent7Type) => {
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
    flex: 1,
    alignSelf: "stretch",
    position: "relative",
  },
});

export default FrameComponent7;
