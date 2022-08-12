import * as React from "react";
import {
  View,
  SafeAreaView,
  StyleProp,
  ViewStyle,
  Pressable,
  Image,
  StyleSheet,
  TouchableOpacity,
  Text,
} from "react-native";
import { useNavigation, ParamListBase } from "@react-navigation/native";
import { DrawerNavigationProp } from "@react-navigation/drawer";

type Header5Type = {
  style?: StyleProp<ViewStyle>;
};

const Header5 = ({ style }: Header5Type) => {
  const navigation = useNavigation<DrawerNavigationProp<ParamListBase>>();

  return (
    <SafeAreaView style={[styles.headerSafeAreaView, style]}>
      <View style={styles.view}>
        <TouchableOpacity
          style={styles.backcontactsTouchableOpacity}
          activeOpacity={0.2}
          onPress={() => navigation.goBack()}
        >
          <Image
            style={styles.frameIcon}
            resizeMode="cover"
            source={require("../assets/frame-2541.png")}
          />
        </TouchableOpacity>
        <Text style={[styles.homeContacts, styles.ml70]}>Home - Contacts</Text>
        <Pressable
          style={[styles.menucontactsPressable, styles.ml70]}
          onPress={() => navigation.toggleDrawer()}
        >
          <View style={styles.rectangleView} />
          <View style={styles.rectangleView1} />
          <View style={styles.rectangleView2} />
        </Pressable>
      </View>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  ml70: {
    marginLeft: 70,
  },
  headerSafeAreaView: {
    backgroundColor: "#e92f48",
  },
  frameIcon: {
    position: "absolute",
    top: 0,
    left: 0,
    width: 16,
    height: 16,
  },
  backcontactsTouchableOpacity: {
    position: "relative",
    width: 16,
    height: 16,
    flexShrink: 0,
  },
  homeContacts: {
    position: "relative",
    fontSize: 12,
    fontWeight: "700",
    fontFamily: "Inter",
    color: "#fff",
    textAlign: "left",
  },
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
  menucontactsPressable: {
    position: "relative",
    width: 18,
    height: 15,
    flexShrink: 0,
  },
  view: {
    alignSelf: "stretch",
    position: "relative",
    backgroundColor: "#e92f48",
    height: 53,
    flexShrink: 0,
    flexDirection: "row",
    paddingHorizontal: 29,
    paddingVertical: 19,
    boxSizing: "border-box",
    alignItems: "center",
    justifyContent: "center",
  },
});

export default Header5;
