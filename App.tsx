const Stack = createNativeStackNavigator();
import * as React from "react";
import { NavigationContainer } from "@react-navigation/native";
import Home from "./screens/Home";
import N5HeaderHomeViewMom from "./screens/N5HeaderHomeViewMom";
import N3HeaderHomeAddContactP from "./screens/N3HeaderHomeAddContactP";
import NGroupsFavourites from "./screens/NGroupsFavourites";
import FrameScreen from "./screens/FrameScreen";
import NGroupsArchived from "./screens/NGroupsArchived";
import HeaderHomeContacts from "./screens/HeaderHomeContacts";
import HeaderHomeAddContacts from "./screens/HeaderHomeAddContacts";
import Cart from "./screens/Cart";
import HeaderHomeAddContactPhon from "./screens/HeaderHomeAddContactPhon";
import HeaderHomeViewContacts from "./screens/HeaderHomeViewContacts";
import HeaderHomeViewMom from "./screens/HeaderHomeViewMom";
import GroupsFavourites from "./screens/GroupsFavourites";
import GroupsArchived from "./screens/GroupsArchived";
import FrameScreen1 from "./screens/FrameScreen1";
import N1HeaderHomeContacts from "./screens/N1HeaderHomeContacts";
import N2HeaderHomeAddContacts from "./screens/N2HeaderHomeAddContacts";
import N4HeaderHomeViewContacts from "./screens/N4HeaderHomeViewContacts";
import NavIconHomeActive from "./components/NavIconHomeActive";
import NavIconHomeInactive from "./components/NavIconHomeInactive";
import NavIconCartActive from "./components/NavIconCartActive";
import NavIconCartInactive from "./components/NavIconCartInactive";
import Header6 from "./components/Header6";
import Header7 from "./components/Header7";
import Header5 from "./components/Header5";
import Header from "./components/Header";
import Header2 from "./components/Header2";
import GroupComponent from "./components/Group1";
import FrameComponent1 from "./components/Frame256";
import Header9 from "./components/Header9";
import Header4 from "./components/Header4";
import Header1 from "./components/Header1";
import Header3 from "./components/Header3";
import Header8 from "./components/Header8";

import { createNativeStackNavigator } from "@react-navigation/native-stack";
import { View, Text, Pressable, TouchableOpacity } from "react-native";
import { createDrawerNavigator } from "@react-navigation/drawer";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";

const Drawer = createDrawerNavigator();

const Tab = createBottomTabNavigator();

function DrawerRoot({ navigation }: any) {
  return (
    <Drawer.Navigator
      screenOptions={{ headerShown: false, drawerStyle: { width: 250 } }}
      drawerContent={(props) => <FrameScreen1 {...props} />}
    >
      <Drawer.Screen name="BottomTabsRoot" component={BottomTabsRoot} />
      <Drawer.Screen
        name="1 Header - Home - Contacts"
        component={HeaderHomeContacts}
        options={(props: any) => ({
          headerShown: true,
          header: () => <Header5 />,
        })}
      />
      <Drawer.Screen
        name="Groups - Favourites"
        component={GroupsFavourites}
        options={(props: any) => ({
          headerShown: true,
          header: () => <Header />,
        })}
      />
      <Drawer.Screen
        name="5 Header Home - View Mom"
        component={HeaderHomeViewMom}
        options={(props: any) => ({
          headerShown: true,
          header: () => <Header2 />,
        })}
      />
    </Drawer.Navigator>
  );
}
function BottomTabsRoot({ navigation }: any) {
  const [bottomTabItemsNormal] = React.useState([
    <NavIconHomeInactive />,
    <NavIconCartInactive />,
  ]);
  const [bottomTabItemsActive] = React.useState([
    <NavIconHomeActive />,
    <NavIconCartActive />,
  ]);
  return (
    <Tab.Navigator
      screenOptions={{ headerShown: false }}
      tabBar={({ state, descriptors, navigation }: any) => {
        const activeIndex = state.index;
        return (
          <View
            style={{
              alignSelf: "stretch",
              backgroundColor: "#e92f48",
              flexDirection: "row",
              paddingHorizontal: 29,
              paddingVertical: 19,
              boxSizing: "border-box",
              alignItems: "center",
              justifyContent: "center",
              height: 72,
            }}
          >
            {bottomTabItemsNormal.map((item: any, index: any) => {
              const isFocused = state.index === index;
              return (
                <Pressable
                  style={{ flex: 1 }}
                  onPress={() => {
                    navigation.navigate({
                      name: state.routes[index].name,
                      merge: true,
                    });
                  }}
                >
                  {activeIndex === index
                    ? bottomTabItemsActive[index] || item
                    : item}
                </Pressable>
              );
            })}
          </View>
        );
      }}
    >
      <Tab.Screen
        name="Home"
        component={Home}
        options={(props: any) => ({
          headerShown: true,
          header: () => <Header6 />,
        })}
      />
      <Tab.Screen
        name="Cart"
        component={Cart}
        options={(props: any) => ({
          headerShown: true,
          header: () => <Header7 />,
        })}
      />
    </Tab.Navigator>
  );
}

const App = () => {
  const [hideSplashScreen, setHideSplashScreen] = React.useState(false);
  const SplashScreen = () => {
    return <C$88:4610$ />;
  };
  React.useEffect(() => {
    setTimeout(() => {
      setHideSplashScreen(true);
    }, 1000);
  }, []);

  return (
    <NavigationContainer>
      {hideSplashScreen ? (
        <Stack.Navigator screenOptions={{ headerShown: false }}>
          <Stack.Screen name="DrawerRoot" component={DrawerRoot} />

          <Stack.Screen
            name="N5 Header Home - View Mom"
            component={N5HeaderHomeViewMom}
            options={(props: any) => ({
              headerShown: true,
              headerLeft: () => <GroupComponent />,
              headerTitle: "Home - View Mom",
              headerRight: () => <FrameComponent1 />,
            })}
          />
          <Stack.Screen
            name="N3 Header Home - Add Contact Phone"
            component={N3HeaderHomeAddContactP}
            options={(props: any) => ({
              headerShown: true,
              headerLeft: () => <GroupComponent />,
              headerTitle: "Home - Add Contact Phone",
              headerRight: () => <FrameComponent1 />,
            })}
          />
          <Stack.Screen
            name="NGroups - Favourites"
            component={NGroupsFavourites}
            options={(props: any) => ({
              headerShown: true,
              headerLeft: () => <GroupComponent />,
              headerTitle: "Groups - Native top tabs not visible",
              headerRight: () => <FrameComponent1 />,
            })}
          />
          <Stack.Screen
            name="Frame 253"
            component={FrameScreen}
            options={{ headerShown: false }}
          />
          <Stack.Screen
            name="NGroups - Archived"
            component={NGroupsArchived}
            options={(props: any) => ({
              headerShown: true,
              header: () => <Header9 />,
            })}
          />
          <Stack.Screen
            name="2 Header Home - Add Contacts"
            component={HeaderHomeAddContacts}
            options={(props: any) => ({
              headerShown: true,
              header: () => <Header4 />,
            })}
          />
          <Stack.Screen
            name="3 Header Home - Add Contact Phone"
            component={HeaderHomeAddContactPhon}
            options={(props: any) => ({
              headerShown: true,
              header: () => <Header1 />,
            })}
          />
          <Stack.Screen
            name="4 Header Home - View Contacts"
            component={HeaderHomeViewContacts}
            options={(props: any) => ({
              headerShown: true,
              header: () => <Header3 />,
            })}
          />
          <Stack.Screen
            name="Groups - Archived"
            component={GroupsArchived}
            options={(props: any) => ({
              headerShown: true,
              header: () => <Header8 />,
            })}
          />
          <Stack.Screen
            name="N1 Header - Home - Contacts"
            component={N1HeaderHomeContacts}
            options={(props: any) => ({
              headerShown: true,
              headerLeft: () => <GroupComponent />,
              headerTitle: "Home - Contacts",
              headerRight: () => <FrameComponent1 />,
            })}
          />
          <Stack.Screen
            name="N2 Header Home - Add Contacts"
            component={N2HeaderHomeAddContacts}
            options={(props: any) => ({
              headerShown: true,
              headerLeft: () => <GroupComponent />,
              headerTitle: "Home - Add Contacts",
              headerRight: () => <FrameComponent1 />,
            })}
          />
          <Stack.Screen
            name="N4 Header Home - View Contacts"
            component={N4HeaderHomeViewContacts}
            options={(props: any) => ({
              headerShown: true,
              headerLeft: () => <GroupComponent />,
              headerTitle: "Home - View Contacts",
              headerRight: () => <FrameComponent1 />,
            })}
          />
        </Stack.Navigator>
      ) : (
        <SplashScreen />
      )}
    </NavigationContainer>
  );
};
export default App;
