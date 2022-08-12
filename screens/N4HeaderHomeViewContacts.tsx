import * as React from "react";
import { useState, useCallback } from "react";
import {
  Pressable,
  Image,
  StyleSheet,
  TouchableOpacity,
  Text,
  View,
  Modal,
} from "react-native";
import { useNavigation } from "@react-navigation/native";
import Modal1 from "../components/Modal1";

const N4HeaderHomeViewContacts = () => {
  const [frameButtonVisible, setFrameButtonVisible] = useState(false);
  const navigation = useNavigation();

  const openFrameButton = useCallback(() => {
    setFrameButtonVisible(true);
  }, []);

  const closeFrameButton = useCallback(() => {
    setFrameButtonVisible(false);
  }, []);
  return (
    <>
      <View style={styles.n4HeaderHomeViewContacts}>
        <View style={styles.frameView}>
          <Text
            style={styles.homeContactsView}
          >{`Home > Contacts > View`}</Text>
          <TouchableOpacity
            style={[styles.momTouchableOpacity, styles.mt10]}
            activeOpacity={0.2}
            onPress={() => navigation.navigate("N5 Header Home - View Mom")}
          >
            <Text style={styles.momText}>{`Mom ->`}</Text>
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

      <Modal animationType="fade" transparent visible={frameButtonVisible}>
        <View style={styles.frameButtonOverlay}>
          <Modal1 onClose={closeFrameButton} />
        </View>
      </Modal>
    </>
  );
};

const styles = StyleSheet.create({
  frameButtonOverlay: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center",
    backgroundColor: "rgba(113, 113, 113, 0.3)",
  },
  ml70: {
    marginLeft: 70,
  },
  mt10: {
    marginTop: 10,
  },
  ml100: {
    marginLeft: 100,
  },
  homeContactsView: {
    position: "relative",
    fontSize: 12,
    fontWeight: "700",
    fontFamily: "Inter",
    color: "#000",
    textAlign: "left",
  },
  momText: {
    fontSize: 12,
    fontWeight: "700",
    fontFamily: "Inter",
    color: "#000",
    textAlign: "left",
  },
  momTouchableOpacity: {
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
  n4HeaderHomeViewContacts: {
    position: "relative",
    backgroundColor: "#fff",
    flex: 1,
    width: "100%",
    flexDirection: "column",
    alignItems: "flex-start",
    justifyContent: "flex-start",
  },
});

export default N4HeaderHomeViewContacts;
