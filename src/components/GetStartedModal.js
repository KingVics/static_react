import React from "react";
import styled from "styled-components";
import ModalIndex from "./Modal/ModalIndex";

const Input = styled.input`
  border: 1px solid gray;
  width: 80%;
  border-radius: 10px;
  padding: 10px;
  margin: 10px;
`;

const GetStartedModal = ({
  getStartedModal,
  setGetStartedModal,
  firstNameRef,
  lastNameRef,
  emailRef,
  phoneNumberRef,
  residenceRef,
  submitForm,
  isSubmitting,
}) => {
  return (
    <ModalIndex
      show={getStartedModal}
      setShow={setGetStartedModal}
      top={"25vh"}
      left={"37%"}
      background="#fff"
      initial={{ top: "0vh", left: "50%", opacity: 0 }}
      exit={{ top: "0vh", left: "50%", opacity: 0 }}
      animate={{ top: "50vh", left: "50%", opacity: 1 }}
      theme="rgba(0,0,0,.5)" // width={Query ? '50%' : '90%'}
      overFlow="auto"
      width={"40%"}
      height={"30%"}
      borderRadius={"3px"}
      ButtonBG={"rgb(240,240,240)"}
      headerColor={"red"}
      title={"Fill out the form to get started"}
      saveContent={isSubmitting ? "Submitting" : "SEND"}
      ButtonBackGround={"red"}
      onSumbit={submitForm}
    >
      <Input type="text" placeholder="Enter first name" ref={firstNameRef} />

      <Input type="text" placeholder="Enter last name" ref={lastNameRef} />

      <Input type="text" placeholder="Enter your email ID" ref={emailRef} />

      <Input type="number" placeholder="Phone number" ref={phoneNumberRef} />

      <Input
        type="text"
        placeholder="Country of residence"
        ref={residenceRef}
      />
    </ModalIndex>
  );
};

export default GetStartedModal;
