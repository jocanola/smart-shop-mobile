import { StatusBar as ExpoStatusbar } from "expo-status-bar";
import React from "react";
import { SafeAreaView, StyleSheet, Text, View, StatusBar } from "react-native";
import { Searchbar } from "react-native-paper";
import { ResturantInfo } from "../components/resturan/ResturantInfo";
export default function ResturantsScreen() {
  return (
    <SafeAreaView style={styles.container}>
      <View style={styles.searchBar}>
        <Searchbar placeholder="search" />
      </View>
      <View style={styles.listView}>
        <ResturantInfo />
      </View>
      <ExpoStatusbar style="auto" />
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    marginTop: StatusBar.currentHeight,
    alignItems: "center",
    justifyContent: "center",
  },
  searchBar: {
    padding: 10,
    width: "100%",
  },
  listView: {
    padding: 10,
    flex: 1,
    backgroundColor: "green",
    width: "100%",
  },
});
