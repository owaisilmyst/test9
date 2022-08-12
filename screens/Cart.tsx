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

const Cart = () => {
  const navigation = useNavigation<DrawerNavigationProp<ParamListBase>>();

  return (
    <View style={styles.cartView}>
      <StatusBar barStyle="dark-content" backgroundColor="#b2ffb6" />
      <View style={styles.frameView}>
        <Text style={styles.cARTText}>CART</Text>
        <Pressable
          style={[styles.viewEmergencyContactMom1, styles.mt10]}
          onPress={() =>
            navigation.navigate("DrawerRoot", {
              screen: "5 Header Home - View Mom",
            })
          }
        >
          <Text
            style={styles.viewEmergencyContactMom}
          >{`View emergency contact: Mom ->`}</Text>
        </Pressable>
      </View>
      <View style={styles.tab1AView}>
        <View style={styles.frameView4}>
          <View style={styles.frameView3}>
            <View style={styles.frameView1}>
              <Text style={styles.popularText}>Popular</Text>
            </View>
            <View style={[styles.frameView2, styles.ml12]}>
              <Text style={styles.recentlyViewedText}>Recently Viewed</Text>
            </View>
          </View>
        </View>
        <View style={styles.frameView5}>
          <Text style={styles.cARTText1}>CART</Text>
          <Pressable
            style={[styles.viewEmergencyContactMom3, styles.mt10]}
            onPress={() =>
              navigation.navigate("DrawerRoot", {
                screen: "5 Header Home - View Mom",
              })
            }
          >
            <Text style={styles.viewEmergencyContactMom2}>
              View emergency contact: Mom
            </Text>
          </Pressable>
        </View>
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
  ml12: {
    marginLeft: 12,
  },
  ml1: {
    marginLeft: 1,
  },
  mt4: {
    marginTop: 4,
  },
  mt8: {
    marginTop: 8,
  },
  ml10: {
    marginLeft: 10,
  },
  ml100: {
    marginLeft: 100,
  },
  cARTText: {
    position: "relative",
    fontSize: 12,
    fontWeight: "700",
    fontFamily: "Inter",
    color: "#000",
    textAlign: "left",
  },
  viewEmergencyContactMom: {
    fontSize: 12,
    fontWeight: "700",
    fontFamily: "Inter",
    color: "#000",
    textAlign: "left",
  },
  viewEmergencyContactMom1: {
    position: "relative",
  },
  frameView: {
    alignSelf: "stretch",
    height: 71,
    flexShrink: 0,
    flexDirection: "column",
    paddingHorizontal: 20,
    paddingVertical: 0,
    boxSizing: "border-box",
    alignItems: "center",
    justifyContent: "center",
  },
  popularText: {
    position: "relative",
    fontSize: 16,
    fontWeight: "500",
    fontFamily: "Inter",
    color: "#f69f21",
    textAlign: "left",
  },
  frameView1: {
    borderStyle: "solid",
    borderColor: "#f69f21",
    borderTopWidth: 0,
    borderRightWidth: 0,
    borderBottomWidth: 2,
    borderLeftWidth: 0,
    position: "relative",
    flexDirection: "row",
    padding: 10,
    boxSizing: "border-box",
    alignItems: "flex-start",
    justifyContent: "flex-start",
  },
  recentlyViewedText: {
    position: "relative",
    fontSize: 16,
    fontWeight: "500",
    fontFamily: "Inter",
    color: "#000",
    textAlign: "left",
  },
  frameView2: {
    borderRadius: 4,
    flexDirection: "row",
    padding: 10,
    boxSizing: "border-box",
    alignItems: "flex-start",
    justifyContent: "flex-start",
  },
  frameView3: {
    alignSelf: "stretch",
    backgroundColor: "#fffbf5",
    flexDirection: "row",
    padding: 10,
    boxSizing: "border-box",
    alignItems: "flex-start",
    justifyContent: "flex-start",
  },
  frameView4: {
    alignSelf: "stretch",
    height: 470,
    flexShrink: 0,
    overflow: "hidden",
    flexDirection: "column",
    alignItems: "flex-start",
    justifyContent: "flex-start",
  },
  cARTText1: {
    position: "relative",
    fontSize: 12,
    fontWeight: "700",
    fontFamily: "Inter",
    color: "#000",
    textAlign: "left",
  },
  viewEmergencyContactMom2: {
    fontSize: 12,
    fontWeight: "700",
    fontFamily: "Inter",
    color: "#000",
    textAlign: "left",
  },
  viewEmergencyContactMom3: {
    position: "relative",
  },
  frameView5: {
    alignSelf: "stretch",
    flexDirection: "column",
    paddingHorizontal: 20,
    paddingVertical: 0,
    boxSizing: "border-box",
    alignItems: "center",
    justifyContent: "center",
  },
  tab1AView: {
    alignSelf: "stretch",
    backgroundColor: "#fff",
    flexDirection: "column",
    alignItems: "center",
    justifyContent: "flex-start",
  },
  cartView: {
    position: "relative",
    backgroundColor: "#fff",
    flex: 1,
    width: "100%",
    flexDirection: "column",
    alignItems: "flex-start",
    justifyContent: "flex-start",
  },
});

export default Cart;
