import React, { useState } from "react";
import styled from "styled-components";

const BodyContainer = styled.div`
  display: flex;

  @media screen and (max-width: 1024px) {
    display: grid;
    min-width: fit-content;
  }
`;

const ContainerOne = styled.div`
  width: 55%;
  padding: 3rem 10rem;

  @media screen and (max-width: 1024px) {
    width: 100vw;
    padding: 3rem;
    width: fit-content;
  }
`;

const TextHeading = styled.p`
  color: rgb(74, 144, 226);
  font-size: 1.2rem;
  font-weight: 500;
  margin: 1rem 0;
`;

const TextBody = styled.p``;

const ReasonContainer = styled.div`
  .dot-one {
    color: red;
    font-size: 3rem;
  }

  .dot-two {
    font-size: 3rem;
    position: relative;
    top: 0.3rem;
  }

  .reason-heading {
    margin: 0.7rem 2rem;
    font-weight: 500;
  }

  .reason-body {
    margin: 0rem 2rem;
  }
`;

const ContainerTwo = styled.div`
  width: 40%;
  padding: 3rem;

  @media screen and (max-width: 1024px) {
    padding: 0;
    min-width: fit-content;
  }
`;

const ContainerTwoBody = styled.div`
  background-color: black;
  padding: 1rem;

  .heading {
    color: rgb(74, 144, 226);
    font-size: 1.5rem;
  }

  @media screen and (max-width: 1024px) {
    padding: 3rem;
    width: fit-content;
  }
`;

const ContainerTwoReasons = styled.div`
  color: white;
  margin: 2rem 1rem;

  .reason-heading {
    font-weight: 500;
    text-decoration: underline;
  }
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

const FirstMainBody = ({ toggleModal }) => {
  const [reasons, setReasons] = useState([
    {
      reasonHeading: "Educate Business Patrons -",
      reasonBody:
        "A website allows customers to learn about your business and what you offer. A potential customer might want to learn more about you by doing a simple google search; an optimized website would help show up when potential customers are looking for you.",
    },
    {
      reasonHeading: "Reach a Wider Audience -",
      reasonBody:
        "A website can help you reach a wider audience, including people who may need help visiting your physical location. Your website can contain directions to your physical store, phone number, etc.",
    },
    {
      reasonHeading: "Showcase Products -",
      reasonBody:
        "It allows you to showcase your products and services in a professional and organized manner.",
    },
    {
      reasonHeading: "Create Touch Points -",
      reasonBody:
        "A website can establish credibility and build trust with potential customers.",
    },
    {
      reasonHeading: "Establish Leads -",
      reasonBody:
        "A website can help you generate leads and sales. A functioning website can make sales even when you do not do anything. People can visit your website and purchase while you’re asleep.",
    },
    {
      reasonHeading: "Find New Customers -",
      reasonBody:
        "A website can help you improve your search engine rankings, making it easier for people to find your business when they search online.",
    },
  ]);

  const [ibcscorpReasons, setIbcscorpReasons] = useState([
    {
      image:
        "https://images.primeagile.com/ibcscorp_com/image/20655/wi-stars.png",
      reasonHeading: "iBCScorp™ has over three decades of experience.",
      reasonBody:
        "Experience matters when building professional sites with pages that rank high in search engines.",
    },
    {
      image:
        "https://images.primeagile.com/ibcscorp_com/image/20654/fluent-people-team-20-regular.png",
      reasonHeading: "A diverse and deep team makes all the difference.",
      reasonBody:
        "There is a lot more to a website than just design; one or two persons, even with decades of experience in the industry, can’t do everything that is required to create a world-class website. At iBCScorp™, a team of experienced professionals works on every single site; this includes website design experts, digital marketing experts, content writers, editors, and more.  ",
    },
    {
      image:
        "https://images.primeagile.com/ibcscorp_com/image/20656/ph-google-chrome-logo-thin.png",
      reasonHeading:
        "Search Engine Optimization (SEO) is Included in the Design Time",
      reasonBody:
        "Every professional website built at iBCScorp™ is built with SEO in mind. Search engines will be able to index your website and help you rank higher. Websites are also optimized for mobile and load fast.",
    },
  ]);

  return (
    <div>
      <BodyContainer>
        <ContainerOne>
          <div>
            <TextHeading>Website for any Business</TextHeading>
            <TextBody>
              We have created multiple websites across diverse industries;
              medical, technology, construction, and furniture. Whether it’s a
              blog, e-commerce website, or portfolio website, we can help set
              you up for success.
            </TextBody>

            <TextHeading>
              $100 is a small amount compared to how much a properly managed
              website would generate.
            </TextHeading>
            <TextBody>
              iBCScorp has always been passionate about helping small businesses
              grow, and from our experience, we’ve learned that many small
              businesses fail because they do not have the right tools to help
              them succeed. One of those tools is a website.
            </TextBody>

            <div>
              There are many reasons why businesses need a website. Here are a
              few:
            </div>

            <ReasonContainer>
              {reasons.map((item, index) => {
                return (
                  <div key={index}>
                    <span className="dot-one">.</span>
                    <span className="dot-two">.</span>

                    <div className="reason-heading">{item.reasonHeading}</div>

                    <div className="reason-body">{item.reasonBody}</div>
                  </div>
                );
              })}
            </ReasonContainer>

            <div style={{ margin: "1rem" }}>
              Conversely, if the website is done poorly, all of those same
              benefits can also have a negative effect.
            </div>
          </div>
        </ContainerOne>

        <ContainerTwo>
          <ContainerTwoBody>
            <div className="heading">Why build your website with iBCScorp?</div>

            {ibcscorpReasons.map((item, index) => {
              return (
                <ContainerTwoReasons key={index}>
                  <img src={item.image} alt={item.reasonHeading} />
                  <p className="reason-heading">{item.reasonHeading}</p>
                  <p>{item.reasonBody}</p>
                </ContainerTwoReasons>
              );
            })}

            <BannerButton onClick={toggleModal}>Get started now</BannerButton>
          </ContainerTwoBody>
        </ContainerTwo>
      </BodyContainer>
    </div>
  );
};

export default FirstMainBody;
