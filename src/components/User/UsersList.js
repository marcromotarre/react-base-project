import React from "react";
import { Link } from "@reach/router";
import styled from "styled-components";

import UserElement from "./UserElement.js";

export const UsersListContainer = styled.div`
  a {
    text-decoration: none;
  }
`;

const UsersList = ({ users }) => {
  return (
    <UsersListContainer>
      {" "}
      {users &&
        users
          .filter((a, index) => index < 50)
          .map((user) => (
            <Link key={user.id} to={`/user/${user.id}`}>
              <UserElement {...user} />{" "}
            </Link>
          ))}{" "}
    </UsersListContainer>
  );
};

export default UsersList;
