import React from "react";
import styled from "styled-components";

const Nav = styled.nav`
  margin: 0;
    padding: 1rem;
`;

const NavBar = () => {
  return (
    <div>
      <Nav>
        <a href="https://www.ibcscorp.com/">
          <img
            src="https://images.primeagile.com/ibcscorp_com/image/18915/ibcscorp-logo-image.webp"
            alt="ibcsc logo"
            loading="lazy"
            width={'160px'}
          />
        </a>
      </Nav>
    </div>
  );
};

export default NavBar;
