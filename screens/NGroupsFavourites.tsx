import * as React from "react";
import { useCallback } from "react";
import {
  Pressable,
  Image,
  StyleSheet,
  TouchableOpacity,
  Text,
  View,
  Share,
} from "react-native";
import { useNavigation } from "@react-navigation/native";
import { createMaterialTopTabNavigator } from "@react-navigation/material-top-tabs";
import FrameComponent2 from "../components/FrameComponent2";
import FrameComponent7 from "../components/FrameComponent7";

const TopTab = createMaterialTopTabNavigator();

const NGroupsFavourites = () => {
  const navigation = useNavigation();

  const onFrameButtonClick = useCallback(async () => {
    try {
      const result = await Share.share({
        message: "abc",
      });

      if (result.action === Share.sharedAction) {
        if (result.activityType) {
          // shared with activity type of result.activityType
        } else {
          // shared
        }
      } else if (result.action === Share.dismissedAction) {
        // dismissed
      }
    } catch (error) {
      alert(error.message);
    }
  }, []);

  return (
    <View style={styles.nGroupsFavourites}>
      <View style={styles.tab1AView}>
        <View style={styles.frameView}>
          <TopTab.Navigator
            style={styles.frameTopTabs}
            screenOptions={{
              tabBarStyle: styles.frameTopTabstopTabBarContainer,
            }}
          >
            <TopTab.Screen
              name="Frame 252"
              component={FrameComponent2}
              options={{
                tabBarLabel: "Favourites",
              }}
            />
            <TopTab.Screen
              name="Frame 253"
              component={FrameComponent7}
              options={{
                tabBarLabel: "Archived",
              }}
            />
          </TopTab.Navigator>
        </View>
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
  );
};

const styles = StyleSheet.create({
  ml20: {
    marginLeft: 20,
  },
  frameTopTabs: {
    width: "100%",
  },
  frameTopTabstopTabBarContainer: {
    backgroundColor: "#fffbf5",
  },
  ml12: {
    marginLeft: 12,
  },
  ml100: {
    marginLeft: 100,
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
  nGroupsFavourites: {
    position: "relative",
    backgroundColor: "#fff",
    flex: 1,
    width: "100%",
    flexDirection: "column",
    alignItems: "flex-start",
    justifyContent: "flex-start",
  },
});

export default NGroupsFavourites;
