import React, { useState } from "react";
import styled from "styled-components";

const Container = styled.div`
  margin: 0 10rem;

  @media screen and (max-width: 1024px) {
    margin: 0 2rem;
  }
`;

const Heading = styled.div`
  color: rgb(74, 144, 226);
  font-size: 1.5rem;
  font-weight: 500;
  margin: 2rem 0;
`;

const Body = styled.div`
  display: flex;
  flex-wrap: wrap;
  gap: 2rem;
`;

const ConsiderCard = styled.div`
  background: white;
  box-shadow: rgba(100, 100, 111, 0.2) 0px 7px 29px 0px;
  width: 20rem;
  padding: 1rem;

  .heading {
    font-weight: 500;
    text-decoration: underline;
  }
`;

const ThingsToConsider = () => {
  const [consider, setConsider] = useState([
    {
      heading: "Create a website myself?",
      body: "NO WAY!!! 90% of websites get no traffic, and constant discussions with business owners who have been online for over 5 years and have never once sold something online is enough evidence to know this is not a good option. Choose a professional web design company",
    },
    {
      heading: "Free Website?",
      body: "Consider this; is a site free if it takes the owner's time, and represents the business poorly?",
    },
    {
      heading: "Custom Domain Included",
      body: "Custom domains are used for all businesses, however, this price does not include the price of the domain name registration.",
    },
  ]);

  return (
    <Container>
      <Heading>Things to Consider</Heading>

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

export default ThingsToConsider;
