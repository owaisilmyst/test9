import * as React from "react";
import { Text, StyleSheet, View } from "react-native";

const A = () => {
  return (
    <View style={styles.aView}>
      <Text style={styles.juleeText}>Julee</Text>
      <Text style={styles.oswaldText}>Oswald</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  juleeText: {
    position: "absolute",
    top: 111,
    left: 145,
    fontSize: 49,
    fontFamily: "Julee",
    color: "#fff",
    textAlign: "center",
  },
  oswaldText: {
    position: "absolute",
    top: 220,
    left: 130,
    fontSize: 49,
    fontFamily: "Oswald",
    color: "#fff",
    textAlign: "center",
  },
  aView: {
    position: "relative",
    backgroundColor: "#3430d3",
    flex: 1,
    width: "100%",
    height: 844,
    overflow: "hidden",
  },
});

export default A;
