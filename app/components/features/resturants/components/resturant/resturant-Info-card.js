import React from "react";
import { Text, View } from "react-native";
import { Card } from "react-native-paper";
import styled from "styled-components";
import { SvgXml } from "react-native-svg";
import star from "../../../../../../assets/star";
import open from "../../../../../../assets/open";
import { colors } from "../../../../infrastructure/theme/colors";

const ResturantCard = styled(Card.Cover)`
  padding: 20px;
`;

const Title = styled(Text)`
  color: ${({ theme }) => theme.colors.ui.primary};
  font-size: ${({ theme }) => theme.fontSizes.title};
  font-family: ${({ theme }) => theme.fonts.heading};
`;

const Info = styled(View)`
  padding: ${({ theme }) => theme.space[3]};
`;

const Address = styled(Text)`
  font-family: ${({ theme }) => theme.fonts.body};
  font-size: ${({ theme }) => theme.fontSizes.caption};
`;

const Rating = styled(View)`
  flex-direction: row;
`;

const Section = styled(View)`
  flex: 1;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
  padding-top: ${({ theme }) => theme.space[3]};
  padding-bottom: ${({ theme }) => theme.space[3]};
  padding-right: ${({ theme }) => theme.space[3]};
`;

const SectionEnd = styled(View)`
flex-direction: row;
`;
export const ResturantInfoCard = ({ resturant = {} }) => {
  const {
    name = "Some resturants",
    photos = [
      "https://maaltidtildoeren.dk/wp-content/uploads/2015/03/foodiesfeed.com_DSC_0053-1024x683.jpg",
    ],
    icon,
    address = "100 some random street",
    isOpenNow = true,
    isClodedTemporarily = true,
    rating = 4,
  } = resturant;
  return (
    <Card>
      <ResturantCard
        key={name}
        source={{
          uri: photos[0],
        }}
      />
      <Info>
        <Title>{name}</Title>
        <Section>
          <Rating>
            {Array.from(new Array(Math.floor(rating))).map((key, index) => (
              <SvgXml key={index} xml={star} width={20} height={20} />
            ))}
          </Rating>
          <SectionEnd>
            {isClodedTemporarily? <Text style={{color:"red"}}> Temporary Closed </Text> : null}
            <SvgXml xml={open} width={20} height={20} />
          </SectionEnd>
        </Section>
        <Address>{address}</Address>
      </Info>
    </Card>
  );
};
