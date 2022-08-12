import * as React from "react";
import {
  SafeAreaView,
  Pressable,
  Image,
  StyleSheet,
  TouchableOpacity,
  Text,
  View,
} from "react-native";
import { useNavigation, ParamListBase } from "@react-navigation/native";
import { DrawerNavigationProp } from "@react-navigation/drawer";
import { createMaterialTopTabNavigator } from "@react-navigation/material-top-tabs";
import FrameComponent2 from "../components/FrameComponent2";
import FrameComponent7 from "../components/FrameComponent7";
import FrameComponent8 from "../components/FrameComponent8";
import FrameComponent9 from "../components/FrameComponent9";
import FrameComponent10 from "../components/FrameComponent10";
import FrameComponent11 from "../components/FrameComponent11";

const TopTab = createMaterialTopTabNavigator();

const GroupsFavourites = () => {
  const navigation = useNavigation<DrawerNavigationProp<ParamListBase>>();

  return (
    <View style={styles.groupsFavourites}>
      <View style={styles.tab1AView}>
        <View style={styles.frameView}>
          <TopTab.Navigator
            style={styles.frameTopTabs}
            tabBar={({ state, descriptors, navigation, position }) => {
              const [activeItems] = React.useState([
                <FrameComponent8 />,
                <FrameComponent10 />,
              ]);
              const [normalItems] = React.useState([
                <FrameComponent9 />,
                <FrameComponent11 />,
              ]);
              const activeIndex = state.index;
              return (
                <View style={styles.topTabBarStyle}>
                  {normalItems.map((item, index) => {
                    const isFocused = state.index === index;
                    return (
                      <TouchableOpacity
                        key={index}
                        onPress={() => {
                          navigation.navigate({
                            name: state.routes[index].name,
                            merge: true,
                          });
                        }}
                      >
                        {activeIndex === index ? activeItems[index] : item}
                      </TouchableOpacity>
                    );
                  })}
                </View>
              );
            }}
          >
            <TopTab.Screen name="Frame 252" component={FrameComponent2} />
            <TopTab.Screen name="Frame 253" component={FrameComponent7} />
          </TopTab.Navigator>
        </View>
      </View>
      <View style={styles.bottomTabView}>
        <Image
          style={styles.navIconHomeActive}
          resizeMode="cover"
          source={require("../assets/nav-icon--home--active.png")}
        />
        <Image
          style={[styles.navIconCartInactive, styles.ml100]}
          resizeMode="cover"
          source={require("../assets/nav-icon--cart--inactive.png")}
        />
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  ml100: {
    marginLeft: 100,
  },
  headerSafeAreaView: {
    backgroundColor: "#e92f48",
  },
  frameTopTabs: {
    width: "100%",
  },
  ml12: {
    marginLeft: 12,
  },
  topTabBarStyle: {
    alignSelf: "stretch",
    backgroundColor: "#fffbf5",
    flexDirection: "row",
    padding: 10,
    boxSizing: "border-box",
    alignItems: "flex-start",
    justifyContent: "flex-start",
    minHeight: 59,
  },
  frameView: {
    alignSelf: "stretch",
    flexDirection: "column",
    alignItems: "flex-start",
    justifyContent: "flex-start",
  },
  tab1AView: {
    alignSelf: "stretch",
    backgroundColor: "#fff",
    flexDirection: "column",
    alignItems: "center",
    justifyContent: "flex-start",
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
  groupsFavourites: {
    position: "relative",
    backgroundColor: "#fff",
    flex: 1,
    width: "100%",
    flexDirection: "column",
    alignItems: "flex-start",
    justifyContent: "flex-start",
  },
});

export default GroupsFavourites;
