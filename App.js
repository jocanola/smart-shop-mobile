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
  return (
    <ThemeProvider theme={theme}>
      <ResturantsScreen />
    </ThemeProvider>
  );
}
