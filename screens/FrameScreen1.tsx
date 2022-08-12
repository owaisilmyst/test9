import * as React from "react";
import { useState } from "react";
import Contacts from "../components/Contacts";
import Groups from "../components/Groups";
import Mom from "../components/Mom";
import { Text, StyleSheet, Pressable, View } from "react-native";

type FrameScreen1Type = {
  state?: any;
  navigation?: any;
};

const FrameScreen1 = ({ state, navigation }: FrameScreen1Type) => {
  const [drawerItemsNormal] = useState([
    <Contacts style={styles.mt32} />,
    <Groups style={styles.mt32} />,
    <Mom style={styles.mt32} />,
  ]);
  const [drawerItemsActive] = useState([
    <Contacts style={styles.mt32} />,
    <Groups style={styles.mt32} />,
    <Mom style={styles.mt32} />,
  ]);
  const stateIndex = !state ? 0 : state.index - 1;
  return (
    <View style={styles.frameView1}>
      <View style={styles.frameView}>
        <Text style={styles.dRAWERMENUText}>DRAWER MENU</Text>
        {stateIndex === 0 ? drawerItemsActive[0] : drawerItemsNormal[0]}
        {stateIndex === 1 ? drawerItemsActive[1] : drawerItemsNormal[1]}
        {stateIndex === 2 ? drawerItemsActive[2] : drawerItemsNormal[2]}
        <Pressable
          style={[styles.cLOSEDRAWERPressable, styles.mt32]}
          onPress={() => navigation.toggleDrawer()}
        >
          <Text style={styles.cLOSEDRAWERText}>CLOSE DRAWER</Text>
        </Pressable>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  mt32: {
    marginTop: 32,
  },
  dRAWERMENUText: {
    position: "relative",
    fontSize: 25,
    fontWeight: "700",
    fontFamily: "Inter",
    color: "#fff",
    textAlign: "left",
  },
  cLOSEDRAWERText: {
    fontSize: 18,
    fontWeight: "700",
    fontFamily: "Inter",
    color: "#fff",
    textAlign: "left",
  },
  cLOSEDRAWERPressable: {
    position: "relative",
  },
  frameView: {
    position: "absolute",
    top: 131,
    left: 29,
    flexDirection: "column",
    alignItems: "flex-start",
    justifyContent: "flex-start",
  },
  frameView1: {
    position: "relative",
    backgroundColor: "rgba(28, 90, 249, 0.88)",
    flex: 1,
    width: "100%",
    height: 689,
    overflow: "hidden",
  },
});

export default FrameScreen1;
