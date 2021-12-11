import React from "react";
import { StyleSheet } from "react-native";
import { ThemeProvider } from "styled-components";
import { ResturantInfoCard } from "./app/components/features/resturants/components/resturant/resturant-Info-card";
import ResturantsScreen from "./app/components/features/resturants/screens/ResturantsScreen";
import { theme } from "./app/components/infrastructure/theme";
import {
  useFonts as useOswald,
  Oswald_400Regular,
} from "@expo-google-fonts/oswald";
import { useFonts as useLato, Lato_400Regular } from "@expo-google-fonts/lato";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import { NavigationContainer } from "@react-navigation/native";
import MapScreen from "./app/components/features/resturants/screens/MapScreen";
import SettingsScreen from "./app/components/features/resturants/screens/SettingsScreen";
import { Ionicons } from "@expo/vector-icons";
import { restaurantsRequest } from "./app/services/location.service";

const Tab = createBottomTabNavigator();

export default function App() {
  let [loadLato] = useOswald({
    Lato_400Regular,
  });
  let [loadOswald] = useLato({
    Oswald_400Regular,
  });
  if (!loadLato || !loadOswald) {
    return null;
  }
  restaurantsRequest();
  const TAB_ICON = {
    Resturants: "md-restaurant",
    Map: "map",
    Settings: "settings",
  };

  const tabBarIcons = ({ size, color }) => (
    <Ionicons name={iconName} size={size} color={color} />
  );
  const createScreenOptions = ({ route }) => {
    const iconName = TAB_ICON[route.name];
    return {
      tabBarIcon: ({ size, color }) => (
        <Ionicons name={iconName} size={size} color={color} />
      ),
    };
  };
  return (
    <ThemeProvider theme={theme}>
      <NavigationContainer>
        <Tab.Navigator
          screenOptions={createScreenOptions}
          tabBarOptions={{
            activeTintColor: "tomato",
            inactiveTintColor: "gray",
          }}
        >
          <Tab.Screen name="Resturants" component={ResturantsScreen} />
          <Tab.Screen name="Map" component={MapScreen} />
          <Tab.Screen name="Settings" component={SettingsScreen} />
        </Tab.Navigator>
      </NavigationContainer>
    </ThemeProvider>
  );
}
