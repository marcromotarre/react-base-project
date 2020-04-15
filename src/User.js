import React from "react";
import { useSelector } from "react-redux";
import { useParams } from "@reach/router";

import { default as UserContainer } from "./components/User/User.js";
import SectionBanner from "./components/Banners/SectionBanner";

const User = () => {
  let { id } = useParams();
  id = parseInt(id);
  const users = useSelector((state) => state.users);
  const user = users.find((user) => user.id === id);
  const friends = users.filter(({ name } = u) => user.friends.includes(name));
  return (
    <>
      <SectionBanner />
      <UserContainer {...user} friends={friends} />{" "}
    </>
  );
};

export default User;
