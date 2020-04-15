import React from "react";
import styled from "styled-components";

import { colors } from "./../data/colors.js";

import UserProperty from "./User/UserProperty.js";

import HeightSVG from "./../svg/height.svg";
import WeightSVG from "./../svg/weight.svg";
import HairSVG from "./../svg/hair.svg";
import AgeSVG from "./../svg/candle.svg";
import FriendsSVG from "./../svg/friends.svg";
import ProfessionsSVG from "./../svg/professions.svg";

export const UserContainer = styled.section`
  padding: 10px 30px 10px 10px;
  display: grid;
  grid-template-columns: 58px auto;
  column-gap: 10px;
  border-bottom: 1px solid #e3e3e3;
  background-color: #f8f8f8;
`;

export const UserImage = styled.img`
  border-radius: 50%;
  height: 58px;
  width: 58px;
  justify-self: center;
  align-self: center;
`;
export const UserInfo = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-evenly;
`;

export const UserName = styled.label`
  width: 100%;
  justify-content: start;
  align-items: center;
  font-family: "HelveticaNeue-Bold";
  color: #707070;
  font-size: 16px;
`;

export const UserProperties = styled.div`
  grid-area: m-properties;
  width: 100%;
  display: flex;
  justify-content: space-between;
  align-items: center;
`;

export const HairIcon = styled(HairSVG)`
  path {
    fill: ${(props) => props.color};
  }
`;

const CharacterMin = ({
  name,
  thumbnail,
  age,
  weight,
  height,
  hair_color,
  profesions = [],
  friends = []
}) => {
  return (
    <UserContainer>
      <UserImage src={thumbnail} />{" "}
      <UserInfo>
        <UserName> {name} </UserName>{" "}
        <UserProperties>
          <UserProperty>
            <AgeSVG width={14.63} /> <label> {age} </label>
          </UserProperty>
          <UserProperty>
            <HeightSVG height={17.7} /> <label> {height.toFixed(0)} </label>{" "}
          </UserProperty>
          <UserProperty>
            <WeightSVG width={17.7} /> <label> {weight.toFixed(0)} </label>{" "}
          </UserProperty>
          <UserProperty>
            <HairIcon color={hair_color} width={15.26} />{" "}
          </UserProperty>
          <UserProperty>
            <FriendsSVG width={15.26} />
            <label> {friends.length} </label>
          </UserProperty>
          <UserProperty>
            <ProfessionsSVG width={14.34} />{" "}
            <label> {profesions.length} </label>
          </UserProperty>
        </UserProperties>
      </UserInfo>{" "}
    </UserContainer>
  );
};

export default CharacterMin;
