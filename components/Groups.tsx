import * as React from "react";
import {
  Pressable,
  StyleProp,
  ViewStyle,
  Text,
  StyleSheet,
} from "react-native";
import { useNavigation } from "@react-navigation/native";

type GroupsType = {
  style?: StyleProp<ViewStyle>;
};

const Groups = ({ style }: GroupsType) => {
  const navigation = useNavigation();

  return (
    <Pressable
      style={[styles.groupsPressable, style]}
      onPress={() => navigation.navigate("Groups - Favourites")}
    >
      <Text style={styles.groupsText}>Groups</Text>
    </Pressable>
  );
};

const styles = StyleSheet.create({
  groupsText: {
    fontSize: 18,
    fontWeight: "700",
    fontFamily: "Inter",
    color: "#fff",
    textAlign: "left",
  },
  groupsPressable: {
    position: "relative",
  },
});

export default Groups;
