import React from "react";
import ModalIndex from "./Modal/ModalIndex";

const NotificationModal = ({
  notificationModal,
  setNotificationModal,
  submissionError,
}) => {
  return (
    <ModalIndex
      show={notificationModal}
      setShow={setNotificationModal}
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
      title={"Notification"}
      saveContent={"SEND"}
      // ButtonBackGround={"red"}
      // onSumbit={submitForm}
    >
      {submissionError
        ? "Unfortunately, you details didn't get submitted."
        : "Your details was submitted successfully."}
    </ModalIndex>
  );
};

export default NotificationModal;
