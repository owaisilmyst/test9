import * as React from "react";
import { StyleProp, ViewStyle, Image, StyleSheet } from "react-native";

type NavIconHomeActiveType = {
  style?: StyleProp<ViewStyle>;
};

const NavIconHomeActive = ({ style }: NavIconHomeActiveType) => {
  return (
    <Image
      style={[styles.navIconHomeActive, style]}
      resizeMode="cover"
      source={require("../assets/nav-icon--home--active.png")}
    />
  );
};

const styles = StyleSheet.create({
  navIconHomeActive: {
    position: "relative",
    width: 34,
    height: 34,
    flexShrink: 0,
    overflow: "hidden",
  },
});

export default NavIconHomeActive;
