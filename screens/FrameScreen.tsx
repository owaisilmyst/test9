import * as React from "react";
import { Text, StyleSheet, View } from "react-native";

const FrameScreen = () => {
  return (
    <View style={styles.frameView2}>
      <View style={styles.frameView1}>
        <View style={styles.frameView}>
          <Text style={styles.familyText}>Family</Text>
        </View>
        <Text style={[styles.highSchoolFriends, styles.mt10]}>
          High School Friends
        </Text>
        <Text style={[styles.boardGamesClub, styles.mt10]}>
          Board games club
        </Text>
        <Text style={[styles.locosText, styles.mt10]}>Locos</Text>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  mt10: {
    marginTop: 10,
  },
  familyText: {
    flex: 1,
    position: "relative",
    fontSize: 16,
    fontWeight: "500",
    fontFamily: "Inter",
    color: "#000",
    textAlign: "left",
  },
  frameView: {
    alignSelf: "stretch",
    flexDirection: "row",
    alignItems: "flex-start",
    justifyContent: "flex-start",
  },
  highSchoolFriends: {
    position: "relative",
    fontSize: 16,
    fontWeight: "500",
    fontFamily: "Inter",
    color: "#000",
    textAlign: "left",
    width: 334,
  },
  boardGamesClub: {
    position: "relative",
    fontSize: 16,
    fontWeight: "500",
    fontFamily: "Inter",
    color: "#000",
    textAlign: "left",
    width: 334,
  },
  locosText: {
    position: "relative",
    fontSize: 16,
    fontWeight: "500",
    fontFamily: "Inter",
    color: "#000",
    textAlign: "left",
    width: 334,
  },
  frameView1: {
    alignSelf: "stretch",
    flexDirection: "column",
    paddingHorizontal: 20,
    paddingVertical: 0,
    boxSizing: "border-box",
    alignItems: "flex-start",
    justifyContent: "flex-start",
  },
  frameView2: {
    position: "relative",
    backgroundColor: "#fff",
    flex: 1,
    width: "100%",
    height: 380,
    flexDirection: "column",
    alignItems: "flex-start",
    justifyContent: "flex-start",
  },
});

export default FrameScreen;
