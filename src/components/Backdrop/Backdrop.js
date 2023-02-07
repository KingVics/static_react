import React from "react";
import ReactDOM from "react-dom";
import styled from "styled-components";

const Back = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100vh;
  background: ${({ theme }) =>
    theme ? theme : "rgba(0, 0, 0, .8)"} !important;
  z-index: ${({ zIndex }) => (zIndex ? zIndex : "10")};
  opacity: 1;
`;

const Backdrop = (props) => {
  return ReactDOM.createPortal(
    <Back
      onClick={() => props.setShow(!props.show)}
      theme={props.theme}
      zIndex={props.zIndex}
    />,
    document.getElementById("backdrop-protal")
  );
};

export default Backdrop;
