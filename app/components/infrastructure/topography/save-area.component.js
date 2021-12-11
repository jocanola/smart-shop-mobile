import { StatusBar, SafeAreaView } from "react-native";
import styled from "styled-components";

export const SaveArea = styled(SafeAreaView)`
  flex: 1;
  margin-top: ${StatusBar.currentHeight}px;
`;
