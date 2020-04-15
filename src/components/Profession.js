import React from "react";
import styled from "styled-components";

export const ProfessionContainer = styled.section`
  padding: 4px 8px;
  background: #7b7b7b;
  border-radius: 10px;
  height: 20px;
  label {
    font-family: "HelveticaNeue-Thin";
    color: #ffffff;
    font-size: 13px;
  }
`;

const Profession = ({ name }) => {
  return (
    <ProfessionContainer>
      <label>{name}</label>
    </ProfessionContainer>
  );
};

export default Profession;
