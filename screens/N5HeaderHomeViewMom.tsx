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

const N5HeaderHomeViewMom = () => {
  const [frameButtonVisible, setFrameButtonVisible] = useState(false);
  const navigation = useNavigation();
  const [chatWithMomVisible, setChatWithMomVisible] = useState(false);

  const openFrameButton = useCallback(() => {
    setFrameButtonVisible(true);
  }, []);

  const closeFrameButton = useCallback(() => {
    setFrameButtonVisible(false);
  }, []);

  const openChatWithMom = useCallback(() => {
    setChatWithMomVisible(true);
  }, []);

  const closeChatWithMom = useCallback(() => {
    setChatWithMomVisible(false);
  }, []);
  return (
    <>
      <View style={styles.n5HeaderHomeViewMom}>
        <View style={styles.frameView}>
          <Text
            style={styles.homeContactsViewMom}
          >{`Home > Contacts > View > Mom`}</Text>
          <Text style={[styles.emailMomgmailcomText, styles.mt10]}>
            Email: mom@gmail.com
          </Text>
          <TouchableOpacity
            style={[styles.addPhoneNumberForMom1, styles.mt10]}
            activeOpacity={0.2}
            onPress={() =>
              navigation.navigate("N3 Header Home - Add Contact Phone")
            }
          >
            <Text
              style={styles.addPhoneNumberForMom}
            >{`Add Phone number for mom ->`}</Text>
          </TouchableOpacity>
          <TouchableOpacity
            style={[styles.chatWithMomModal1, styles.mt10]}
            activeOpacity={0.2}
            onPress={openChatWithMom}
          >
            <Text
              style={styles.chatWithMomModal}
            >{`Chat with mom (Modal) ->`}</Text>
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

      <Modal animationType="fade" transparent visible={chatWithMomVisible}>
        <View style={styles.chatWithMomOverlay}>
          <Modal1 onClose={closeChatWithMom} />
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
  chatWithMomOverlay: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center",
    backgroundColor: "rgba(113, 113, 113, 0.3)",
  },
  mt10: {
    marginTop: 10,
  },
  ml100: {
    marginLeft: 100,
  },
  homeContactsViewMom: {
    position: "relative",
    fontSize: 12,
    fontWeight: "700",
    fontFamily: "Inter",
    color: "#000",
    textAlign: "left",
  },
  emailMomgmailcomText: {
    position: "relative",
    fontSize: 12,
    fontWeight: "700",
    fontFamily: "Inter",
    color: "#000",
    textAlign: "left",
  },
  addPhoneNumberForMom: {
    fontSize: 12,
    fontWeight: "700",
    fontFamily: "Inter",
    color: "#000",
    textAlign: "left",
  },
  addPhoneNumberForMom1: {
    position: "relative",
  },
  chatWithMomModal: {
    fontSize: 12,
    fontWeight: "700",
    fontFamily: "Inter",
    color: "#000",
    textAlign: "left",
  },
  chatWithMomModal1: {
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
  n5HeaderHomeViewMom: {
    position: "relative",
    backgroundColor: "#fff",
    flex: 1,
    width: "100%",
    flexDirection: "column",
    alignItems: "flex-start",
    justifyContent: "flex-start",
  },
});

export default N5HeaderHomeViewMom;
