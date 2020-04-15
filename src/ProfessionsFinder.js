import React from "react";
import styled from "styled-components";
import { useSelector } from "react-redux";

import { useParams } from "@reach/router";

import ProfessionsSVG from "./svg/professions.svg";

import Profession from "./components/Profession";
import SearchUserList from "./components/User/SearchUserList";
import { getUsersByProfession } from "./searching";
import SectionBanner from "./components/Banners/SectionBanner";

export const ProfessionHeader = styled.div`
  display: grid;
  grid-template-columns: 100%;
  row-gap: 13px;

  svg,
  section {
    justify-self: center;
  }
`;

const ProfessionsFinder = () => {
  let { profession } = useParams();
  const users = useSelector((state) => state.users);

  const usersByProfession = getUsersByProfession(users, profession);
  return (
    <>
      <SectionBanner />
      <ProfessionHeader>
        <ProfessionsSVG width={49.83}> </ProfessionsSVG>{" "}
        <Profession name={profession}> </Profession>{" "}
      </ProfessionHeader>{" "}
      <SearchUserList users={usersByProfession} />;{" "}
    </>
  );
};

export default ProfessionsFinder;
