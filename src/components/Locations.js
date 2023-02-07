import React, { useState } from "react";
import styled from "styled-components";

const Body = styled.div`
  display: flex;
  flex-wrap: wrap;
  gap: 2rem;
  margin: 3rem 0;
  padding: 0 3rem;
  background: #f0f6ff;
`;

const ConsiderCard = styled.div`
  width: 20rem;
  padding: 1rem;

  .heading {
    font-weight: 500;
    font-size: 1.2rem;
    color: rgb(74, 144, 226);
  }
`;

const Locations = () => {
  const [consider, setConsider] = useState([
    {
      image:
        "https://images.primeagile.com/ibcscorp_com/image/20505/united-states.webp",
      heading: "USA",
      body: (
        <>
          <p>
            <strong>Boise - </strong> 800 W. Main St., Suite 1460 Boise, ID
            83702. <br /> <strong>Twin Falls</strong> - 148 Blue Lakes Blvd N.
            #109, Twin Falls, ID, 83301
          </p>

          <img
            src="https://images.primeagile.com/ibcscorp_com/image/20506/call-icon.webp"
            alt="phone icon"
            loading="lazy"
          />
          <strong> +1 208-315-9772</strong>
        </>
      ),
    },
    {
      image:
        "https://images.primeagile.com/ibcscorp_com/image/20502/india.webp",
      heading: "INDIA",
      body: (
        <>
          <p>
            <strong>Bngalore - </strong> #13, 3rd Floor, Tawakkal Chancery,
            Banaswadi Main, Cooke Town, Bangalore 560005 <br />{" "}
          </p>

          <img
            src="https://images.primeagile.com/ibcscorp_com/image/20506/call-icon.webp"
            alt="phone icon"
            loading="lazy"
          />
          <strong>+91-636-067-3052</strong>

          <p>
            <strong>Hyderabad - </strong> DSL Abacus IT Park, Survey Colony,
            Industrial Development Area, Secunderabad, Telangana-500039 <br />{" "}
          </p>

          <img
            src="https://images.primeagile.com/ibcscorp_com/image/20506/call-icon.webp"
            alt="phone icon"
            loading="lazy"
          />
          <strong>+91- 7013-923-339</strong>
        </>
      ),
    },
    {
      image:
        "https://images.primeagile.com/ibcscorp_com/image/20503/nigeria.webp",
      heading: "NIGERIA",
      body: (
        <>
          <p>
            <strong>Owerri Imo - </strong> 132A Wethdral Road, Owerri, Imo
            State, Nigeria 460242 <br />{" "}
          </p>
          <img
            src="https://images.primeagile.com/ibcscorp_com/image/20506/call-icon.webp"
            alt="phone icon"
            loading="lazy"
          />
          <strong>+234-706-831-3709</strong>
          <p>
            <strong>Lagos Nigeria - </strong> 7th Floor, Mulliner Towers. 39,
            Alfred Rewane Road, Ikoyi, Lagos. <br />{" "}
          </p>
          <img
            src="https://images.primeagile.com/ibcscorp_com/image/20506/call-icon.webp"
            alt="phone icon"
            loading="lazy"
          />
          <strong>+234-810-469-7704</strong> <br /> <br />
          <a href="mailto:sales@ibcscorp.com">sales@ibcscorp.com</a>
        </>
      ),
    },
    {
      image:
        "https://images.primeagile.com/ibcscorp_com/image/20504/southafrica.webp",
      heading: "SOUTH AFRICA",
      body: (
        <>
          <p>
            <strong>Durban - </strong> 2nd floor,102 Stephen Dlamini Road,
            Musgrave, Durban, South Africa <br />
          </p>

          <img
            src="https://images.primeagile.com/ibcscorp_com/image/20506/call-icon.webp"
            alt="phone icon"
            loading="lazy"
          />
          <strong>+278-1340-5719</strong>
        </>
      ),
    },
  ]);

  return (
    <div>
      <Body>
        {consider.map((item, index) => {
          return (
            <ConsiderCard key={index}>
              <div style={{ display: "flex", gap: "1rem" }}>
                <img src={item.image} alt={item.heading} />
                <p className="heading">{item.heading}</p>
              </div>
              <p className="body">{item.body}</p>
            </ConsiderCard>
          );
        })}
      </Body>
    </div>
  );
};

export default Locations;
