import * as React from "react";
import { useCallback } from "react";
import {
  Image,
  StyleSheet,
  View,
  TouchableOpacity,
  Text,
  Pressable,
  Share,
  Linking,
} from "react-native";
import { useNavigation } from "@react-navigation/native";

const N1HeaderHomeContacts = () => {
  const navigation = useNavigation();

  const onFrameButtonClick = useCallback(async () => {
    try {
      const result = await Share.share({
        message: "abc",
      });

      if (result.action === Share.sharedAction) {
        if (result.activityType) {
          // shared with activity type of result.activityType
        } else {
          // shared
        }
      } else if (result.action === Share.dismissedAction) {
        // dismissed
      }
    } catch (error) {
      alert(error.message);
    }
  }, []);

  return (
    <View style={styles.n1HeaderHomeContacts}>
      <View style={styles.frameView}>
        <Text style={styles.hOMEContacts}>{`HOME > Contacts`}</Text>
        <TouchableOpacity
          style={[styles.addContact1, styles.mt10]}
          activeOpacity={0.2}
          onPress={() => navigation.navigate("N2 Header Home - Add Contacts")}
        >
          <Text style={styles.addContact}>{`Add Contact ->`}</Text>
        </TouchableOpacity>
        <TouchableOpacity
          style={[styles.viewContactInfo1, styles.mt10]}
          activeOpacity={0.2}
          onPress={() => navigation.navigate("N4 Header Home - View Contacts")}
        >
          <Text style={styles.viewContactInfo}>{`View contact info ->`}</Text>
        </TouchableOpacity>
        <TouchableOpacity
          style={[styles.groupsNativeTopTabs1, styles.mt10]}
          activeOpacity={0.2}
          onPress={() => navigation.navigate("NGroups - Favourites")}
        >
          <Text
            style={styles.groupsNativeTopTabs}
          >{`Groups (Native top tabs) ->`}</Text>
        </TouchableOpacity>
        <TouchableOpacity
          style={[styles.googlecomExternal1, styles.mt10]}
          activeOpacity={0.2}
          onPress={() => Linking.openURL("https://www.locofy.ai")}
        >
          <Text
            style={styles.googlecomExternal}
          >{`Google.com (external) ->`}</Text>
        </TouchableOpacity>
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
  ml70: {
    marginLeft: 70,
  },
  mt10: {
    marginTop: 10,
  },
  ml100: {
    marginLeft: 100,
  },
  hOMEContacts: {
    position: "relative",
    fontSize: 12,
    fontWeight: "700",
    fontFamily: "Inter",
    color: "#000",
    textAlign: "left",
  },
  addContact: {
    fontSize: 12,
    fontWeight: "700",
    fontFamily: "Inter",
    color: "#000",
    textAlign: "left",
  },
  addContact1: {
    position: "relative",
  },
  viewContactInfo: {
    fontSize: 12,
    fontWeight: "700",
    fontFamily: "Inter",
    color: "#000",
    textAlign: "left",
  },
  viewContactInfo1: {
    position: "relative",
  },
  groupsNativeTopTabs: {
    fontSize: 12,
    fontWeight: "700",
    fontFamily: "Inter",
    color: "#000",
    textAlign: "left",
  },
  groupsNativeTopTabs1: {
    position: "relative",
  },
  googlecomExternal: {
    fontSize: 12,
    fontWeight: "700",
    fontFamily: "Inter",
    color: "#000",
    textAlign: "left",
  },
  googlecomExternal1: {
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
  n1HeaderHomeContacts: {
    position: "relative",
    backgroundColor: "#fff",
    flex: 1,
    width: "100%",
    flexDirection: "column",
    alignItems: "flex-start",
    justifyContent: "flex-start",
  },
});

export default N1HeaderHomeContacts;
