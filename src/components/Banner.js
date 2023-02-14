import React from "react";
import { useTranslation } from "react-i18next";
import styled from "styled-components";

const BannerContainer = styled.div`
  background-image: url(https://images.primeagile.com/ibcscorp_com/image/20701/banner-bg.webp);
  background-size: cover;
  background-repeat: no-repeat;
  background-position: center center;
  padding: 50px;
  height: 100%;

  @media screen and (max-width: 1024px) {
    padding: 10px;
  }
`;

const Bannerheading = styled.h1`
  text-align: center;
  font-size: 4rem;
  padding: 0 14rem;
  color: rgb(65, 104, 199);

  @media screen and (max-width: 1024px) {
    padding: 2px;
  }
`;

const BannerSubText = styled.p`
  color: rgb(251, 152, 71);
  text-align: center;
  font-size: 1.5rem;
`;

const BannerButtonContainer = styled.div`
  display: flex;
  justify-content: center;
  margin: 1rem 0;
  gap: 2rem;
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

const Banner = ({ toggleModal }) => {
  const { t } = useTranslation();

  return (
    <div>
      <BannerContainer>
        <Bannerheading>
          Get a full-service website for only {t("promotion_price")}
        </Bannerheading>

        <BannerSubText>Limited time offer</BannerSubText>

        <BannerButtonContainer>
          <BannerButton onClick={toggleModal}>Get started now</BannerButton>

          <a href={`tel:${t("phone_number")}`}>
            <BannerButton>Call now</BannerButton>
          </a>
        </BannerButtonContainer>
      </BannerContainer>
    </div>
  );
};

export default Banner;
