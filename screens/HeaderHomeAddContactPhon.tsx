import * as React from "react";
import {
  SafeAreaView,
  Pressable,
  Image,
  StyleSheet,
  TouchableOpacity,
  Text,
  View,
} from "react-native";
import { useNavigation, ParamListBase } from "@react-navigation/native";
import { DrawerNavigationProp } from "@react-navigation/drawer";

const HeaderHomeAddContactPhon = () => {
  const navigation = useNavigation<DrawerNavigationProp<ParamListBase>>();

  return (
    <View style={styles.headerHomeAddContactPhon}>
      <View style={styles.frameView}>
        <Text
          style={styles.homeContactsAddPhone}
        >{`Home > Contacts > Add > Phone number`}</Text>
        <TouchableOpacity
          style={[styles.eNTERTouchableOpacity, styles.mt10]}
          activeOpacity={0.2}
          onPress={() =>
            navigation.navigate("3 Header Home - Add Contact Phone")
          }
        >
          <Text style={styles.eNTERText}>ENTER: __________________</Text>
        </TouchableOpacity>
      </View>
      <View style={styles.bottomTabView}>
        <Image
          style={styles.navIconHomeActive}
          resizeMode="cover"
          source={require("../assets/nav-icon--home--active.png")}
        />
        <Image
          style={[styles.navIconCartInactive, styles.ml100]}
          resizeMode="cover"
          source={require("../assets/nav-icon--cart--inactive.png")}
        />
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  ml50: {
    marginLeft: 50,
  },
  headerSafeAreaView: {
    backgroundColor: "#e92f48",
  },
  mt10: {
    marginTop: 10,
  },
  ml100: {
    marginLeft: 100,
  },
  homeContactsAddPhone: {
    position: "relative",
    fontSize: 12,
    fontWeight: "700",
    fontFamily: "Inter",
    color: "#000",
    textAlign: "left",
  },
  eNTERText: {
    fontSize: 12,
    fontWeight: "700",
    fontFamily: "Inter",
    color: "#000",
    textAlign: "left",
  },
  eNTERTouchableOpacity: {
    position: "relative",
  },
  frameView: {
    alignSelf: "stretch",
    height: 596,
    flexShrink: 0,
    flexDirection: "column",
    paddingHorizontal: 20,
    paddingVertical: 0,
    boxSizing: "border-box",
    alignItems: "center",
    justifyContent: "center",
  },
  navIconHomeActive: {
    position: "relative",
    width: 34,
    height: 34,
    flexShrink: 0,
    overflow: "hidden",
  },
  navIconCartInactive: {
    position: "relative",
    width: 34,
    height: 34,
    flexShrink: 0,
    overflow: "hidden",
  },
  bottomTabView: {
    alignSelf: "stretch",
    backgroundColor: "#e92f48",
    flexDirection: "row",
    paddingHorizontal: 29,
    paddingVertical: 19,
    boxSizing: "border-box",
    alignItems: "center",
    justifyContent: "center",
  },
  headerHomeAddContactPhon: {
    position: "relative",
    backgroundColor: "#fff",
    flex: 1,
    width: "100%",
    flexDirection: "column",
    alignItems: "flex-start",
    justifyContent: "flex-start",
  },
});

export default HeaderHomeAddContactPhon;
