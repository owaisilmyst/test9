import * as React from "react";
import {
  View,
  Text,
  StyleSheet,
  Pressable,
  Image,
  TouchableOpacity,
} from "react-native";

type Modal1Type = {
  onClose?: () => void;
};

const Modal1 = ({ onClose }: Modal1Type) => {
  return (
    <View style={styles.modalView}>
      <Text style={styles.mOMText}>MOM</Text>
      <View style={styles.frameView}>
        <Text style={styles.mOMWhyAreYouNotHomeYet}>
          MOM: Why are you not home yet?
        </Text>
      </View>
      <View style={styles.frameView1}>
        <Text style={styles.enterMessageText}>Enter Message:</Text>
      </View>
      <View style={styles.frameView2}>
        <Text style={styles.mEIllBeBackSoon}>ME: I’ll be back soon</Text>
      </View>
      <TouchableOpacity
        style={styles.groupTouchableOpacity}
        activeOpacity={0.3}
        onPress={onClose}
      >
        <Image
          style={styles.icon}
          resizeMode="cover"
          source={require("../assets/group-3.svg")}
        />
      </TouchableOpacity>
    </View>
  );
};

const styles = StyleSheet.create({
  mOMText: {
    position: "absolute",
    top: 23,
    left: 32,
    fontSize: 12,
    fontWeight: "700",
    fontFamily: "Inter",
    color: "#000",
    textAlign: "left",
  },
  mOMWhyAreYouNotHomeYet: {
    position: "relative",
    fontSize: 12,
    fontWeight: "700",
    fontFamily: "Inter",
    color: "#000",
    textAlign: "left",
  },
  frameView: {
    position: "absolute",
    top: 73,
    left: 32,
    borderStyle: "solid",
    borderColor: "#000",
    borderWidth: 1,
    flexDirection: "row",
    paddingHorizontal: 10,
    paddingVertical: 5,
    boxSizing: "border-box",
    alignItems: "flex-start",
    justifyContent: "flex-start",
  },
  enterMessageText: {
    position: "absolute",
    top: 5,
    left: 10,
    fontSize: 12,
    fontWeight: "700",
    fontFamily: "Inter",
    color: "#000",
    textAlign: "left",
  },
  frameView1: {
    position: "absolute",
    right: 32,
    bottom: 20,
    left: 32,
    borderStyle: "solid",
    borderColor: "#000",
    borderWidth: 1,
    height: 87,
  },
  mEIllBeBackSoon: {
    position: "relative",
    fontSize: 12,
    fontWeight: "700",
    fontFamily: "Inter",
    color: "#000",
    textAlign: "left",
  },
  frameView2: {
    position: "absolute",
    top: 116,
    right: 32,
    borderStyle: "solid",
    borderColor: "#000",
    borderWidth: 1,
    flexDirection: "row",
    paddingHorizontal: 10,
    paddingVertical: 5,
    boxSizing: "border-box",
    alignItems: "flex-start",
    justifyContent: "flex-start",
  },
  icon: {
    width: 15.72,
    height: 16.19,
  },
  groupTouchableOpacity: {
    position: "absolute",
    top: 19.15,
    right: 27.14,
  },
  modalView: {
    position: "relative",
    borderRadius: 20,
    backgroundColor: "#d8ffd1",
    width: 311,
    height: 342,
    overflow: "hidden",
    maxWidth: "90%",
    maxHeight: "90%",
  },
});

export default Modal1;
