import React, { useState } from "react";
import Slider from "react-slick";
import styled from "styled-components";

import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

const CarouselContainer = styled.div`
  margin: 10rem;

  @media screen and (max-width: 1024px) {
    margin: 2rem;
  }
`;

const CarouselCard = styled.div`
  background: white;
  border-radius: 5rem;
  overflow: hidden;
  display: flex !important;

  height: 30rem;

  .image {
    width: 45%;
    overflow: hidden;
  }

  .text {
    width: 55%;
    padding: 5%;
    font-size: 0.9rem;
  }

  .heading {
    color: rgb(74, 144, 226);
  }

  @media screen and (max-width: 600px) {
    display: grid !important;
    height: fit-content;
    border-radius: 0;

    img {
      height: 200px !important;
    }

    .image {
      width: 100%;
    }

    .text {
      width: fit-content;
    }
  }
`;

const Carousel = () => {
  const [cardBody, setCardBody] = useState([
    {
      image:
        "https://images.primeagile.com/ibcscorp_com/image/20753/landing-2.webp",
      heading: "Web Design Services for a CUSTOM Design are Included!",
      body: (
        <>
          <p>
            While this offer does not include brand development or corporate
            identity, it does provide a custom site built around each business's
            personal brand identity.
          </p>
          <p>
            It is important for every business to establish a brand identity.
          </p>
          <p>
            Establishing a brand identity helps businesses gain loyal customers.
            It also helps customers recognize a business's products. Finally,
            customers perceive businesses that have a strong brand identity as
            superior.
          </p>
          <p>
            For more information on brand identity, and how iBCScorp™ can help,
            click here.
          </p>
        </>
      ),
    },

    {
      image:
        "https://images.primeagile.com/ibcscorp_com/image/20754/landing-3.webp",
      heading:
        "A custom SEO-optimized website is a must-have for any digital marketing strategy!",
      body: (
        <>
          <p>
            According to Ahrefs, a whopping 90.88% of pages in the 1 billion
            pages sample get ZERO traffic from Google, and 4.5% of them get less
            than 10 visits per month. Surprising as this might be, it is true.
            There is no point in having a website if it doesn’t get any traffic
            or owning one for fancy. By letting iBCScorp™ develop your website,
            you are already that much closer to reaching your target audience, a
            clear pathway to success.
          </p>
          <p>
            Yes, you need an SEO-optimized website, and yes, you need a
            professional web developer with SEO knowledge. iBCScorp™ has
            professionals who specialize in search engine optimization that will
            help your website get organic traffic.
          </p>
          <p>
            Don’t be part of a statistic that has had a website for 5 years that
            no one has looked at. It might seem like it was free, cheap, or a
            do-it-yourself website builder, but was it? It might cost you your
            business. The reason for having a website is to generate traffic and
            make sales. Having a website that isn’t accomplishing these tasks is
            a waste. Keep in mind that a website is an essential part of a
            marketing strategy.
          </p>
        </>
      ),
    },

    {
      image:
        "https://images.primeagile.com/ibcscorp_com/image/20752/landing-1.webp",
      heading: "Businesses need an online presence!",
      body: (
        <>
          <p>
            Having a brick-and-mortar store is important, but do you have an
            online presence? Can your potential customers find you when they do
            a simple Google search?
          </p>
          <h4>Research and Comparison are Done Online</h4>
          <p>
            GE Capital Retail Bank’s second annual Major Purchase Shopper Study
            has found that a growing number of consumers extensively research
            and compare prices and financing offers before making major
            purchases.
          </p>
          <p>
            According to the study, 81% of consumers go online before heading
            out to the store, up 20% from last year, and spend an average of 79
            days gathering information before making a major purchase. Having an
            online presence will provide potential customers with information
            about your business when they search for it, even if you aren’t
            selling online.
          </p>
          <h4>Businesses Need to Own Their Brand and Their Content</h4>
          <p>
            Accurate and well-tailored information on a webpage can help
            businesses increase sales and improve their online presence, but
            there is more to it than that. Having one protects a company's brand
            and ensures that customers get the most accurate information.
          </p>
        </>
      ),
    },
  ]);

  var settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
  };

  return (
    <div>
      <CarouselContainer>
        <Slider {...settings}>
          {cardBody.map((item, index) => {
            return (
              <CarouselCard key={index}>
                <div className="image">
                  <img
                    style={{
                      verticalAlign: "middle",
                      overflow: "clip",
                      width: "100%",
                      height: "500px",
                      objectFit: "cover",
                    }}
                    src={item.image}
                    alt={item.heading}
                  />
                </div>

                <div className="text">
                  <div className="heading">
                    <h3>{item.heading}</h3>
                  </div>

                  {item.body}
                </div>
              </CarouselCard>
            );
          })}
        </Slider>
      </CarouselContainer>
    </div>
  );
};

export default Carousel;
