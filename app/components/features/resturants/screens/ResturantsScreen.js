import { StatusBar as ExpoStatusbar } from "expo-status-bar";
import React from "react";
import {
  SafeAreaView,
  StyleSheet,
  Text,
  View,
  StatusBar,
  FlatList,
} from "react-native";
import { Searchbar } from "react-native-paper";
import Styled from "styled-components/native";
import { Spacer } from "../../../infrastructure/topography/spacer.component";
import { ResturantInfoCard } from "../components/resturant/resturant-Info-card";

const SaveArea = Styled(SafeAreaView)`
 flex: 1;
 margin-top: ${StatusBar.currentHeight}px;
`;

const SearchContainer = Styled(View)`
  padding: ${({ theme }) => theme.space[3]};
  width: 100%;
`;

const ResturantListContainer = Styled(View)`
   flex: 1;
 padding: ${({ theme }) => theme.space[3]};
    background-color:${({ theme }) => theme.colors.bg.primary};
    width: 100%;
`;

const ResturantList = Styled(FlatList).attrs({
  contentContainerStyle: {
    padding: 16,
  },
})``;
export default function ResturantsScreen() {
  return (
    <SaveArea>
      <SearchContainer>
        <Searchbar placeholder="search" />
      </SearchContainer>
      <ResturantListContainer>
        <ResturantList
          data={[{ name: 1 }, { name: 2 }, { name: 3 }]}
          renderItem={() => (
            <Spacer position="top" size="large">
              <ResturantInfoCard />
            </Spacer>
          )}
          keyExtractor={(item) => item.name.toString()}
        />
      </ResturantListContainer>
      <ExpoStatusbar style="auto" />
    </SaveArea>
  );
}
