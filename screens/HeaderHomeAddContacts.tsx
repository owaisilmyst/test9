import * as React from "react";
import {
  StatusBar,
  StyleSheet,
  SafeAreaView,
  Pressable,
  Image,
  TouchableOpacity,
  Text,
  View,
} from "react-native";
import { useNavigation, ParamListBase } from "@react-navigation/native";
import { DrawerNavigationProp } from "@react-navigation/drawer";

const HeaderHomeAddContacts = () => {
  const navigation = useNavigation<DrawerNavigationProp<ParamListBase>>();

  return (
    <View style={styles.headerHomeAddContacts}>
      <StatusBar barStyle="dark-content" backgroundColor="#b2ffb6" />
      <View style={styles.frameView}>
        <Text style={styles.homeContactsAdd}>{`Home > Contacts > Add`}</Text>
        <TouchableOpacity
          style={[styles.phoneTouchableOpacity, styles.mt10]}
          activeOpacity={0.2}
          onPress={() =>
            navigation.navigate("3 Header Home - Add Contact Phone")
          }
        >
          <Text style={styles.phoneText}>{`Phone ->`}</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  ml60: {
    marginLeft: 60,
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
  homeContactsAdd: {
    position: "relative",
    fontSize: 12,
    fontWeight: "700",
    fontFamily: "Inter",
    color: "#000",
    textAlign: "left",
  },
  phoneText: {
    fontSize: 12,
    fontWeight: "700",
    fontFamily: "Inter",
    color: "#000",
    textAlign: "left",
  },
  phoneTouchableOpacity: {
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
  headerHomeAddContacts: {
    position: "relative",
    backgroundColor: "#fff",
    flex: 1,
    width: "100%",
    flexDirection: "column",
    alignItems: "flex-start",
    justifyContent: "flex-start",
  },
});

export default HeaderHomeAddContacts;
