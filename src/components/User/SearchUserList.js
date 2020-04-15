import React, { useState } from "react";
import { getUsersByName } from "./../../searching.js";
import SearchInput from "./../SearchInput.js";
import UsersList from "./UsersList.js";

const SearchUserList = ({ users }) => {
  const [searchedUsers, setSearchedCharacters] = useState([...users]);

  const search = (searchValue) => {
    setSearchedCharacters(getUsersByName(users, searchValue));
  };

  return (
    <>
      <SearchInput onSearch={search} /> <UsersList users={searchedUsers} />{" "}
    </>
  );
};

export default SearchUserList;
