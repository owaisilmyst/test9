import * as React from "react";
import { useCallback } from "react";
import {
  Pressable,
  StyleProp,
  ViewStyle,
  StyleSheet,
  View,
  Share,
} from "react-native";

type FrameComponent1Type = {
  style?: StyleProp<ViewStyle>;
};

const FrameComponent1 = ({ style }: FrameComponent1Type) => {
  const onFrameButtonClick = useCallback(async () => {
    try {
      const result = await Share.share({
        message: "abc",
      });

      if (result.action === Share.sharedAction) {
        if (result.activityType) {
          // shared with activity type of result.activityType
        } else {
          // shared
        }
      } else if (result.action === Share.dismissedAction) {
        // dismissed
      }
    } catch (error) {
      alert(error.message);
    }
  }, []);

  return (
    <Pressable
      style={[styles.framePressable, style]}
      onPress={onFrameButtonClick}
    >
      <View style={styles.rectangleView} />
      <View style={styles.rectangleView1} />
      <View style={styles.rectangleView2} />
    </Pressable>
  );
};

const styles = StyleSheet.create({
  rectangleView: {
    position: "absolute",
    top: 0,
    left: 0,
    backgroundColor: "#fff",
    width: 18,
    height: 3,
  },
  rectangleView1: {
    position: "absolute",
    top: 12,
    left: 0,
    backgroundColor: "#fff",
    width: 18,
    height: 3,
  },
  rectangleView2: {
    position: "absolute",
    top: 6,
    left: 0,
    backgroundColor: "#fff",
    width: 18,
    height: 3,
  },
  framePressable: {
    position: "relative",
    borderStyle: "solid",
    borderColor: "#000",
    borderWidth: 1,
    width: 18,
    height: 15,
    flexShrink: 0,
  },
});

export default FrameComponent1;
