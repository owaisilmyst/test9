import * as React from "react";
import {
  Pressable,
  StyleProp,
  ViewStyle,
  Image,
  StyleSheet,
  TouchableOpacity,
} from "react-native";
import { useNavigation } from "@react-navigation/native";

type GroupComponentType = {
  style?: StyleProp<ViewStyle>;
};

const GroupComponent = ({ style }: GroupComponentType) => {
  const navigation = useNavigation();

  return (
    <TouchableOpacity
      style={[styles.groupTouchableOpacity, style]}
      activeOpacity={0.2}
      onPress={() => navigation.goBack()}
    >
      <Image
        style={styles.frameIcon}
        resizeMode="cover"
        source={require("../assets/frame-2541.png")}
      />
    </TouchableOpacity>
  );
};

const styles = StyleSheet.create({
  frameIcon: {
    position: "absolute",
    top: 0,
    left: 0,
    width: 16,
    height: 16,
  },
  groupTouchableOpacity: {
    position: "relative",
    width: 16,
    height: 16,
    flexShrink: 0,
  },
});

export default GroupComponent;
