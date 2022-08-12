import * as React from "react";
import {
  Pressable,
  StyleProp,
  ViewStyle,
  Text,
  StyleSheet,
} from "react-native";
import { useNavigation } from "@react-navigation/native";

type MomType = {
  style?: StyleProp<ViewStyle>;
};

const Mom = ({ style }: MomType) => {
  const navigation = useNavigation();

  return (
    <Pressable
      style={[styles.momPressable, style]}
      onPress={() => navigation.navigate("5 Header Home - View Mom")}
    >
      <Text style={styles.momText}>Mom</Text>
    </Pressable>
  );
};

const styles = StyleSheet.create({
  momText: {
    fontSize: 18,
    fontWeight: "700",
    fontFamily: "Inter",
    color: "#fff",
    textAlign: "left",
  },
  momPressable: {
    position: "relative",
  },
});

export default Mom;
