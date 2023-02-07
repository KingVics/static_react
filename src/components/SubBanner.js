import React from "react";
import styled from "styled-components";

const TopTextContainer = styled.div`
  margin: 7rem 15rem;
  text-align: center;
  font-size: 1.2rem;

  @media screen and (max-width: 1024px) {
    margin: 4rem 4rem;
  }
`;

const ImageContainer = styled.div`
  display: flex;
  justify-content: center;
`;

const Image = styled.img`
  width: 80%;
`;

const SubBanner = () => {
  return (
    <div>
      <TopTextContainer>
        iBCScorp has helped 1000s businesses grow by designing and managing
        websites for them. You, too, can be a part of a few successful
        businesses. We have professionals to advise and guide you through every
        step of the way.
      </TopTextContainer>

      <ImageContainer>
        <Image
          src="https://images.primeagile.com/ibcscorp_com/image/20751/landing-main.webp"
          alt="ibcscorp website sample"
          loading="lazy"
        />
      </ImageContainer>
    </div>
  );
};

export default SubBanner;
