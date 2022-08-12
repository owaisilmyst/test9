import * as React from "react";
import { StyleProp, ViewStyle, Image, StyleSheet } from "react-native";

type NavIconHomeInactiveType = {
  style?: StyleProp<ViewStyle>;
};

const NavIconHomeInactive = ({ style }: NavIconHomeInactiveType) => {
  return (
    <Image
      style={[styles.navIconHomeInactive, style]}
      resizeMode="cover"
      source={require("../assets/nav-icon--home--inactive.png")}
    />
  );
};

const styles = StyleSheet.create({
  navIconHomeInactive: {
    position: "relative",
    width: 34,
    height: 34,
    flexShrink: 0,
    overflow: "hidden",
  },
});

export default NavIconHomeInactive;
