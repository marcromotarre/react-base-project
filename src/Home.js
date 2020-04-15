import React from "react";
import { useSelector } from "react-redux";
import styled from "styled-components";

import Banner from "./components/Banner.js";
import SearchUserList from "./components/User/SearchUserList.js";

export const HomeContainer = styled.div`
  a {
    text-decoration: none;
  }
`;

const Home = () => {
  const townName = useSelector((state) => state.townName);
  const users = useSelector((state) => state.users);

  return (
    <HomeContainer>
      <Banner townName={townName}> </Banner>
      <SearchUserList users={users} />
    </HomeContainer>
  );
};

export default Home;
