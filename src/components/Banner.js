import React from "react";
import styled from "styled-components";

import BannerSmallSVG from "./../svg/banner-mini.svg";
import FilterSVG from "./../svg/filter.svg";

export const BannerContainer = styled.div`
  position: relative;
  width: 100%;
  height: 72px;
  display: grid;
  grid-template-columns: 15% 35% 35% 15%;
  grid-template-areas: ". m-town-name m-town-name m-filter";

  label {
    grid-area: m-town-name;
    font-family: "HelveticaNeue-Thin";
    font-weight: 300;
    font-size: 42px;
    align-self: center;
    justify-self: center;
  }
`;

const BannerBackground = styled.div`
  position: absolute;
  display: flex;
  justify-content: center;
  align-items: center;
  width: 100%;
  height: 100%;
  svg {
    width: 90%;
    opacity: 0.17;
  }
`;

const BannerSmall = styled(BannerSmallSVG)`
  width: 90%;
  opacity: 0.17;
  position: absolute;
`;

const Filter = styled(FilterSVG)`
  grid-area: m-filter;
  align-self: center;
  justify-self: center;
`;

const Banner = ({ townName }) => {
  return (
    <BannerContainer>
      <BannerBackground>
        <BannerSmallSVG />
      </BannerBackground>{" "}
      <Filter width={21.5} /> {townName && <label> {townName} </label>}{" "}
    </BannerContainer>
  );
};

export default Banner;
