import * as React from "react";
import { StyleProp, ViewStyle, Image, StyleSheet } from "react-native";

type NavIconCartInactiveType = {
  style?: StyleProp<ViewStyle>;
};

const NavIconCartInactive = ({ style }: NavIconCartInactiveType) => {
  return (
    <Image
      style={[styles.navIconCartInactive, style]}
      resizeMode="cover"
      source={require("../assets/nav-icon--cart--inactive.png")}
    />
  );
};

const styles = StyleSheet.create({
  navIconCartInactive: {
    position: "relative",
    width: 34,
    height: 34,
    flexShrink: 0,
    overflow: "hidden",
  },
});

export default NavIconCartInactive;
