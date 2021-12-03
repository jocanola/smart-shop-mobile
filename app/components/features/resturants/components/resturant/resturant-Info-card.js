import React from "react";
import { Text, View } from "react-native";
import { Card } from "react-native-paper";
import styled from "styled-components";
import { SvgXml } from "react-native-svg";
import star from "../../../../../../assets/star";
import open from "../../../../../../assets/open";
import { colors } from "../../../../infrastructure/theme/colors";
import { Spacer } from "../../../../infrastructure/topography/spacer.component";
import { AppText } from "../../../../infrastructure/topography/text.component";
import {
  Title,
  Section,
  Rating,
  ResturantCard,
  SectionEnd,
  Info,
  Address,
} from "./resturant.info-card.style";

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
            {isClodedTemporarily ? (
              <Spacer position="right" size="medium">
                <AppText variant="error"> Temporary Closed</AppText>
              </Spacer>
            ) : null}
            <SvgXml xml={open} width={20} height={20} />
          </SectionEnd>
        </Section>
        <Address>{address}</Address>
      </Info>
    </Card>
  );
};
