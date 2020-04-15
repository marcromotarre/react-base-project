import React from "react";
import styled from "styled-components";
import { useSelector } from "react-redux";

import { useParams } from "@reach/router";
import { Link } from "@reach/router";

import { colors } from "./data/colors.js";

import Home from "./svg/backHome.svg";
import HeightSVG from "./svg/height.svg";
import WeightSVG from "./svg/weight.svg";
import HairSVG from "./svg/hair.svg";
import AgeSVG from "./svg/candle.svg";
import FriendsSVG from "./svg/friends.svg";
import ProfessionsSVG from "./svg/professions.svg";
import CharacterMin from "./components/CharacterMin.js";

export const Banner = styled.div`
  height: 72px;
  width: 100%;
  display: flex;
  justify-content: start;
  align-items: center;

  svg {
    padding-left: 15px;
  }
`;
export const CharacterContainer = styled.div``;

export const CharacterBasicInfo = styled.div`
  display: grid;
  grid-template-columns: 33% 33% 33%;
  grid-template-rows: 137px 28px 45px 42px auto auto;
  row-gap: 20px;
  grid-template-areas:
    "m-image m-image m-image"
    "m-name m-name m-name"
    "m-age m-height m-weight"
    ". m-hair ."
    "m-professions m-professions m-professions"
    "m-friends m-friends m-friends";
`;

export const CharacterImage = styled.img`
  grid-area: ${(props) => props.name};
  border-radius: 50%;
  height: 137px;
  width: 137px;
  justify-self: center;
  align-self: center;
`;

export const CharacterName = styled.h3`
  grid-area: ${(props) => props.name};
  justify-self: center;
  align-self: center;
  font-family: "HelveticaNeue-Bold";
  color: #707070;
  font-size: 24px;
  pointer-events: none;
  text-decoration: none;
`;

export const CharacterProperty = styled.div`
  grid-area: ${(props) => props.name};
  justify-self: center;
  align-self: center;
  display: flex;
  justify-content: space-around;
  align-items: center;
  pointer-events: none;

  font-family: "HelveticaNeue-Thin";
  color: #707070;
  font-size: 27px;

  path {
    fill: ${(props) => props.color};
  }
  div {
    position: relative;
    width: 9px;
    height: 9px;
    background-color: grey;
    border-radius: 2px;
    left: -8px;
    top: -5px;
    display: flex;
    justify-content: center;
    align-items: center;

    label {
      font-family: "HelveticaNeue-Bold";
      color: #ffffff;
      font-size: 7px;
    }
  }
`;
export const FriendsContainer = styled.div`
  a {
    text-decoration: none;
  }
`;

const CharacterDetails = () => {
  let { id } = useParams();
  id = parseInt(id);
  const characters = useSelector((state) => state.characters);
  const character = characters.find((character) => character.id === id);
  const friends = characters.filter(({ name } = c) =>
    character.friends.includes(name)
  );
  return (
    <>
      <Banner>
        <Link to={`/`}>
          <Home width={25} />{" "}
        </Link>{" "}
      </Banner>{" "}
      <CharacterContainer>
        <CharacterBasicInfo>
          <CharacterImage src={character.thumbnail} name="m-image" />
          <CharacterName name="m-name"> {character.name} </CharacterName>{" "}
          <CharacterProperty name="m-age">
            <AgeSVG width={34.39} /> <label> {character.age} </label>
          </CharacterProperty>{" "}
          <CharacterProperty name="m-height">
            <HeightSVG width={14.3} />{" "}
            <label> {character.height.toFixed(0)} </label>{" "}
          </CharacterProperty>{" "}
          <CharacterProperty name="m-weight">
            <WeightSVG width={41.08} />{" "}
            <label> {character.weight.toFixed(0)} </label>{" "}
          </CharacterProperty>{" "}
          <CharacterProperty name="m-hair" color={colors[character.hair_color]}>
            <HairSVG width={49.9} />{" "}
          </CharacterProperty>{" "}
        </CharacterBasicInfo>{" "}
        <CharacterProperty name="m-professions">
          <ProfessionsSVG width={14.34} />{" "}
          <div>
            <label> {character.professions.length} </label>{" "}
          </div>{" "}
        </CharacterProperty>{" "}
        <FriendsContainer name="m-friends">
          <FriendsSVG width={15.26} />{" "}
          {friends &&
            friends.map((friend) => (
              <Link key={friend.id} to={`/user/${friend.id}`}>
                <CharacterMin {...friend} />{" "}
              </Link>
            ))}{" "}
        </FriendsContainer>{" "}
      </CharacterContainer>{" "}
    </>
  );
};

export default CharacterDetails;
