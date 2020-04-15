import React, { useState } from "react";
import styled from "styled-components";

import Search from "./../svg/Search.svg";

export const SearchContainer = styled.div`
  background-color: #ffffff;
  border-bottom: 1px solid #e6e6e6;
  height: 40px;
  width: 100%;
  display: grid;
  grid-template-columns: 40px auto;
  grid-template-rows: 40px;
  column-gap: 10px;
`;

const SearchIcon = styled(Search)`
  justify-self: center;
  align-self: center;
`;

const SearchInputSearcher = styled.input`
  justify-self: start;
  align-self: center;
  font-family: "HelveticaNeue-Thin";
  color: #929292;
  font-size: 12px;
  width: 90%;
  height: 90%;
  :focus {
    outline: none;
  }
`;

const SearchInput = ({ onSearch }) => {
  const [inputValue, setInputValue] = useState("");

  const handleInputChange = (event) => {
    setInputValue(event.target.value);
    onSearch(event.target.value);
  };

  return (
    <SearchContainer>
      <SearchIcon width={21.42} />{" "}
      <SearchInputSearcher
        value={inputValue}
        placeholder="Search"
        onChange={handleInputChange}
      />{" "}
    </SearchContainer>
  );
};

export default SearchInput;
