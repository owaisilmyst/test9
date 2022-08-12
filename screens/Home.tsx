import * as React from "react";
import {
  Image,
  StyleSheet,
  Text,
  View,
  SafeAreaView,
  Pressable,
  TouchableOpacity,
} from "react-native";
import { useNavigation, ParamListBase } from "@react-navigation/native";
import { DrawerNavigationProp } from "@react-navigation/drawer";

const Home = () => {
  const navigation = useNavigation<DrawerNavigationProp<ParamListBase>>();

  return (
    <View style={styles.homeView}>
      <View style={styles.statusBarLight}>
        <Image
          style={styles.icons}
          resizeMode="cover"
          source={require("../assets/icons.png")}
        />
        <Text style={styles.timeText}>9:41</Text>
      </View>
      <View style={styles.frameView}>
        <Text style={styles.hOMEText}>HOME</Text>
        <TouchableOpacity
          style={[styles.contactsStackTest1, styles.mt10]}
          activeOpacity={0.2}
          onPress={() =>
            navigation.navigate("DrawerRoot", {
              screen: "1 Header - Home - Contacts",
            })
          }
        >
          <Text
            style={styles.contactsStackTest}
          >{`Contacts (Stack Test) ->`}</Text>
        </TouchableOpacity>
        <TouchableOpacity
          style={[styles.groupsTopTabs1, styles.mt10]}
          activeOpacity={0.2}
          onPress={() =>
            navigation.navigate("DrawerRoot", { screen: "Groups - Favourites" })
          }
        >
          <Text style={styles.groupsTopTabs}>{`Groups (Top Tabs) ->`}</Text>
        </TouchableOpacity>
        <TouchableOpacity
          style={[styles.goToTheWorldOfNative1, styles.mt10]}
          activeOpacity={0.2}
          onPress={() => navigation.navigate("N1 Header - Home - Contacts")}
        >
          <Text
            style={styles.goToTheWorldOfNative}
          >{`Go to the world of Native ->`}</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  ml70: {
    marginLeft: 70,
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
  icons: {
    position: "absolute",
    top: 18,
    right: 14.34,
    width: 66.66,
    height: 11.33,
  },
  timeText: {
    position: "absolute",
    transform: [
      {
        translateY: -8,
      },
    ],
    top: "50%",
    left: 32,
    fontSize: 15,
    letterSpacing: -0.24,
    lineHeight: 20,
    fontWeight: "600",
    fontFamily: "SF Pro Text",
    color: "#000",
    textAlign: "left",
  },
  statusBarLight: {
    position: "relative",
    backgroundColor: "#fff",
    width: 375,
    height: 44,
    flexShrink: 0,
  },
  hOMEText: {
    position: "relative",
    fontSize: 12,
    fontWeight: "700",
    fontFamily: "Inter",
    color: "#000",
    textAlign: "left",
  },
  contactsStackTest: {
    fontSize: 12,
    fontWeight: "700",
    fontFamily: "Inter",
    color: "#000",
    textAlign: "left",
  },
  contactsStackTest1: {
    position: "relative",
  },
  groupsTopTabs: {
    fontSize: 12,
    fontWeight: "700",
    fontFamily: "Inter",
    color: "#000",
    textAlign: "left",
  },
  groupsTopTabs1: {
    position: "relative",
  },
  goToTheWorldOfNative: {
    fontSize: 12,
    fontWeight: "700",
    fontFamily: "Inter",
    color: "#000",
    textAlign: "left",
  },
  goToTheWorldOfNative1: {
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
  homeView: {
    position: "relative",
    backgroundColor: "#fff",
    flex: 1,
    width: "100%",
    flexDirection: "column",
    alignItems: "flex-start",
    justifyContent: "flex-start",
  },
});

export default Home;
