import React from "react";
import { Text, View } from "react-native";
import { Card } from "react-native-paper";
import styled from "styled-components";


export const ResturantCard = styled(Card.Cover)`
  padding: 20px;
`;

export const Title = styled(Text)`
  color: ${({ theme }) => theme.colors.ui.primary};
  font-size: ${({ theme }) => theme.fontSizes.title};
  font-family: ${({ theme }) => theme.fonts.heading};
`;

export const Info = styled(View)`
  padding: ${({ theme }) => theme.space[3]};
`;

export const Address = styled(Text)`
  font-family: ${({ theme }) => theme.fonts.body};
  font-size: ${({ theme }) => theme.fontSizes.caption};
`;

export const Rating = styled(View)`
  flex-direction: row;
`;

export const Section = styled(View)`
  width: 100%;
  flex-direction: row;
  align-items: center;
  justify-content: space-between;
  padding-top: ${({ theme }) => theme.space[3]};
  padding-bottom: ${({ theme }) => theme.space[3]};
`;

export const SectionEnd = styled(View)`
  flex-direction: row;
`;
