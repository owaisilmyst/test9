import * as React from "react";
import { useCallback } from "react";
import {
  StatusBar,
  StyleSheet,
  SafeAreaView,
  Pressable,
  Image,
  TouchableOpacity,
  Text,
  View,
  Alert,
} from "react-native";
import { useNavigation, ParamListBase } from "@react-navigation/native";
import { DrawerNavigationProp } from "@react-navigation/drawer";

const HeaderHomeContacts = () => {
  const navigation = useNavigation<DrawerNavigationProp<ParamListBase>>();

  const onViewNotifsAlertClick = useCallback(() => {
    Alert.alert("Notifs", "abcdfg", [
      {
        text: "button 1",
        onPress: () => console.log("button 1 pressed"),
      },
      {
        text: "button 2",
        onPress: () => console.log("button 2 pressed"),
      },
      {
        text: "button 3",
        onPress: () => console.log("button 3 pressed"),
      },
    ]);
  }, []);

  return (
    <View style={styles.headerHomeContacts}>
      <StatusBar barStyle="dark-content" backgroundColor="#b2ffb6" />
      <View style={styles.frameView}>
        <Text style={styles.hOMEContacts}>{`HOME > Contacts`}</Text>
        <TouchableOpacity
          style={[styles.addContact1, styles.mt10]}
          activeOpacity={0.2}
          onPress={() => navigation.navigate("2 Header Home - Add Contacts")}
        >
          <Text style={styles.addContact}>{`Add Contact ->`}</Text>
        </TouchableOpacity>
        <TouchableOpacity
          style={[styles.viewContactInfo1, styles.mt10]}
          activeOpacity={0.2}
          onPress={() => navigation.navigate("4 Header Home - View Contacts")}
        >
          <Text style={styles.viewContactInfo}>{`View contact info ->`}</Text>
        </TouchableOpacity>
        <TouchableOpacity
          style={[styles.viewNotifsAlert1, styles.mt10]}
          activeOpacity={0.2}
          onPress={onViewNotifsAlertClick}
        >
          <Text style={styles.viewNotifsAlert}>{`View Notifs (Alert) ->`}</Text>
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
  viewNotifsAlert: {
    fontSize: 12,
    fontWeight: "700",
    fontFamily: "Inter",
    color: "#000",
    textAlign: "left",
  },
  viewNotifsAlert1: {
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
  headerHomeContacts: {
    position: "relative",
    backgroundColor: "#fff",
    flex: 1,
    width: "100%",
    flexDirection: "column",
    alignItems: "flex-start",
    justifyContent: "flex-start",
  },
});

export default HeaderHomeContacts;
