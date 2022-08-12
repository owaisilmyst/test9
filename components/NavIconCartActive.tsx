import * as React from "react";
import { StyleProp, ViewStyle, Image, StyleSheet } from "react-native";

type NavIconCartActiveType = {
  style?: StyleProp<ViewStyle>;
};

const NavIconCartActive = ({ style }: NavIconCartActiveType) => {
  return (
    <Image
      style={[styles.navIconCartActive, style]}
      resizeMode="cover"
      source={require("../assets/nav-icon--cart--active.png")}
    />
  );
};

const styles = StyleSheet.create({
  navIconCartActive: {
    position: "relative",
    width: 34,
    height: 34,
    flexShrink: 0,
    overflow: "hidden",
  },
});

export default NavIconCartActive;
