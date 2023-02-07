import React, { useState } from "react";
import styled from "styled-components";

const Container = styled.div`
  margin: 0 10rem;

  @media screen and (max-width: 1024px) {
    margin: 0 2rem;
  }
`;

const Body = styled.div`
  display: flex;
  flex-wrap: wrap;
  gap: 2rem;
  margin: 3rem 0;
`;

const ConsiderCard = styled.div`
  background: white;
  box-shadow: rgba(100, 100, 111, 0.2) 0px 7px 29px 0px;
  width: 23rem;
  padding: 0rem 2rem;

  .heading {
    font-weight: 500;
    font-size: 1.2rem;
    color: rgb(74, 144, 226);
  }
`;

const ThirdMainBody = () => {
  const [consider, setConsider] = useState([
    {
      heading: "Need an online store? Let us help you get started",
      body: "If you want to run an online business, or you already have a business but are thinking of taking it online, having an e-commerce site is a must. You can arrange your catalog, including a payment gateway, and start selling online. If you are also thinking about advertising your business, you will need a website.",
    },
    {
      heading: "We Offer Different Marketing Services",
      body: "Whether it is web design, email marketing, social media marketing or search engine marketing, we can provide you with the necessary marketing tools you need to succeed. Let us discuss your business needs and how we can help you using various types of digital marketing.",
    },
    {
      heading:
        "In addition to a custom website, we can help you put together a marketing strategy.",
      body: "Working with a strategy would set your business up for success. We have digital marketing professionals that can help you craft a marketing strategy according to your specific business needs. Whether it’s social media, email, or Google marketing, we can work with you to develop the perfect marketing strategy for your business.",
    },
  ]);

  return (
    <Container>
      <Body>
        {consider.map((item, index) => {
          return (
            <ConsiderCard key={index}>
              <p className="heading">{item.heading}</p>
              <p className="body">{item.body}</p>
            </ConsiderCard>
          );
        })}
      </Body>
    </Container>
  );
};

export default ThirdMainBody;
