import * as React from "react";
import { StyleProp, ViewStyle, Text, StyleSheet, View } from "react-native";

type FrameComponent11Type = {
  style?: StyleProp<ViewStyle>;
};

const FrameComponent11 = ({ style }: FrameComponent11Type) => {
  return (
    <View style={[styles.frameView, style]}>
      <Text style={styles.archivedText}>Archived</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  archivedText: {
    position: "relative",
    fontSize: 16,
    fontWeight: "500",
    fontFamily: "Inter",
    color: "#000",
    textAlign: "left",
  },
  frameView: {
    position: "relative",
    borderRadius: 4,
    flexDirection: "row",
    padding: 10,
    boxSizing: "border-box",
    alignItems: "flex-start",
    justifyContent: "flex-start",
  },
});

export default FrameComponent11;
