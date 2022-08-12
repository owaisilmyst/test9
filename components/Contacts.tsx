import * as React from "react";
import {
  Pressable,
  StyleProp,
  ViewStyle,
  Text,
  StyleSheet,
} from "react-native";
import { useNavigation } from "@react-navigation/native";

type ContactsType = {
  style?: StyleProp<ViewStyle>;
};

const Contacts = ({ style }: ContactsType) => {
  const navigation = useNavigation();

  return (
    <Pressable
      style={[styles.contactsPressable, style]}
      onPress={() => navigation.navigate("1 Header - Home - Contacts")}
    >
      <Text style={styles.contactsText}>Contacts</Text>
    </Pressable>
  );
};

const styles = StyleSheet.create({
  contactsText: {
    fontSize: 18,
    fontWeight: "700",
    fontFamily: "Inter",
    color: "#fff",
    textAlign: "left",
  },
  contactsPressable: {
    position: "relative",
  },
});

export default Contacts;
