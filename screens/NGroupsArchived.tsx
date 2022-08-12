import * as React from "react";
import {
  SafeAreaView,
  Pressable,
  Image,
  StyleSheet,
  TouchableOpacity,
  Text,
  View,
  ScrollView,
} from "react-native";
import { useNavigation, ParamListBase } from "@react-navigation/native";
import { DrawerNavigationProp } from "@react-navigation/drawer";

const NGroupsArchived = () => {
  const navigation = useNavigation<DrawerNavigationProp<ParamListBase>>();

  return (
    <View style={styles.nGroupsArchived}>
      <View style={styles.tab1BView}>
        <ScrollView
          style={styles.frameScrollView}
          contentContainerStyle={styles.frameScrollViewContent}
        >
          <View style={styles.frameView2}>
            <View style={styles.frameView}>
              <Text style={styles.favouritesText}>Favourites</Text>
            </View>
            <View style={[styles.frameView1, styles.ml12]}>
              <Text style={styles.archivedText}>Archived</Text>
            </View>
          </View>
        </ScrollView>
      </View>
      <View style={styles.bottomTabView}>
        <Image
          style={styles.navIconHomeActive}
          resizeMode="cover"
          source={require("../assets/nav-icon--home--active1.png")}
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
  ml100: {
    marginLeft: 100,
  },
  headerSafeAreaView: {
    backgroundColor: "#e92f48",
  },
  ml12: {
    marginLeft: 12,
  },
  frameScrollViewContent: {
    alignItems: "flex-start",
    justifyContent: "flex-start",
    flexDirection: "column",
  },
  favouritesText: {
    position: "relative",
    fontSize: 16,
    fontWeight: "500",
    fontFamily: "Inter",
    color: "#000",
    textAlign: "left",
  },
  frameView: {
    flexDirection: "row",
    padding: 10,
    boxSizing: "border-box",
    alignItems: "flex-start",
    justifyContent: "flex-start",
  },
  archivedText: {
    position: "relative",
    fontSize: 16,
    fontWeight: "500",
    fontFamily: "Inter",
    color: "#f69f21",
    textAlign: "left",
  },
  frameView1: {
    borderStyle: "solid",
    borderColor: "#f69f21",
    borderTopWidth: 0,
    borderRightWidth: 0,
    borderBottomWidth: 2,
    borderLeftWidth: 0,
    position: "relative",
    flexDirection: "row",
    padding: 10,
    boxSizing: "border-box",
    alignItems: "flex-start",
    justifyContent: "flex-start",
  },
  frameView2: {
    alignSelf: "stretch",
    backgroundColor: "#fffbf5",
    flexDirection: "row",
    padding: 10,
    boxSizing: "border-box",
    alignItems: "flex-start",
    justifyContent: "flex-start",
  },
  frameScrollView: {
    alignSelf: "stretch",
    flex: 1,
  },
  tab1BView: {
    alignSelf: "stretch",
    backgroundColor: "#fff",
    flexDirection: "column",
    alignItems: "center",
    justifyContent: "flex-start",
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
  nGroupsArchived: {
    position: "relative",
    backgroundColor: "#fff",
    flex: 1,
    width: "100%",
    flexDirection: "column",
    alignItems: "flex-start",
    justifyContent: "flex-start",
  },
});

export default NGroupsArchived;
