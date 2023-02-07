import React from "react";
import styled from "styled-components";

const BannerButtonContainer = styled.div`
  display: flex;
  justify-content: center;
  margin: 1rem 0;
`;

const BannerButton = styled.button`
  border: none;
  background-color: rgb(253, 34, 34);
  color: white;
  border-radius: 50px;
  font-size: 1.2rem;
  padding: 1.2rem 2rem;
  cursor: pointer;
`;
const GetStarted = ({ toggleModal }) => {
  return (
    <div>
      <BannerButtonContainer>
        <BannerButton onClick={toggleModal}>Get started now</BannerButton>
      </BannerButtonContainer>
    </div>
  );
};

export default GetStarted;
