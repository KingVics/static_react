import React, { useRef, useState } from "react";
import Banner from "../components/Banner";
import Carousel from "../components/Carousel";
import FirstMainBody from "../components/FirstMainBody";
import Footer from "../components/Footer";
import GetStarted from "../components/GetStarted";
import GetStartedModal from "../components/GetStartedModal";
import Locations from "../components/Locations";
import NavBar from "../components/NavBar";
import NotificationModal from "../components/NotificationModal";
import SecondMainBody from "../components/SecondMainBody";
import SubBanner from "../components/SubBanner";
import ThingsToConsider from "../components/ThingsToConsider";
import ThirdMainBody from "../components/ThirdMainBody";

const Main = () => {
  const [getStartedModal, setGetStartedModal] = useState(false);
  const [notificationModal, setNotificationModal] = useState(false);
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submissionError, setSubmissionError] = useState("");

  const firstNameRef = useRef(null);
  const lastNameRef = useRef(null);
  const emailRef = useRef(null);
  const phoneNumberRef = useRef(null);
  const residenceRef = useRef(null);

  const toggleModal = () => {
    setGetStartedModal(!getStartedModal);
  };

  const submitForm = () => {
    const Data = {
      serverData: {},
      json: {
        firstName: firstNameRef.current.value,
        lastName: lastNameRef.current.value,
        email: emailRef.current.value,
        phoneNumber: phoneNumberRef.current.value,
        residence: residenceRef.current.value,
      },
    };

    setIsSubmitting(true);

    postData(
      `https://api.stage.primeagile.com/2023-01-01/open/form-processor/1/initiate/demo.primeagile.com?grecaptcharesponse=24bd854b-4ed7-4846-9d91-24f7edd02567`,
      Data
    )
      .then((response) => {
        setSubmissionError("");

        setIsSubmitting(false);

        setNotificationModal(true);

        setTimeout(() => {
          setNotificationModal(false);
        }, 2000);

        toggleModal();
      })
      .catch((err) => {
        console.log(err.message, "errrrrr");

        setSubmissionError(err.message);

        setIsSubmitting(false);

        setNotificationModal(true);

        setTimeout(() => {
          setNotificationModal(false);
        }, 2000);

        toggleModal();
      });
  };

  console.log(submissionError, "ewewew");

  async function postData(url = "", data = {}) {
    // Default options are marked with *
    const response = await fetch(url, {
      method: "POST", // *GET, POST, PUT, DELETE, etc.
      mode: "cors", // no-cors, *cors, same-origin
      cache: "no-cache", // *default, no-cache, reload, force-cache, only-if-cached
      credentials: "same-origin", // include, *same-origin, omit
      headers: {
        "Content-Type": "application/json",
        // 'Content-Type': 'application/x-www-form-urlencoded',
      },
      redirect: "follow", // manual, *follow, error
      referrerPolicy: "no-referrer", // no-referrer, *no-referrer-when-downgrade, origin, origin-when-cross-origin, same-origin, strict-origin, strict-origin-when-cross-origin, unsafe-url
      body: JSON.stringify(data), // body data type must match "Content-Type" header
    });
    return response.json(); // parses JSON response into native JavaScript objects
  }

  return (
    <div style={{ background: "rgb(246, 246, 246)" }}>
      <GetStartedModal
        getStartedModal={getStartedModal}
        setGetStartedModal={setGetStartedModal}
        firstNameRef={firstNameRef}
        lastNameRef={lastNameRef}
        emailRef={emailRef}
        phoneNumberRef={phoneNumberRef}
        residenceRef={residenceRef}
        submitForm={submitForm}
        isSubmitting={isSubmitting}
      />

      <NotificationModal
        notificationModal={notificationModal}
        setNotificationModal={setNotificationModal}
        submissionError={submissionError}
      />

      <NavBar />

      <Banner toggleModal={toggleModal} />

      <SubBanner />

      <FirstMainBody toggleModal={toggleModal} />

      <ThingsToConsider />

      <Carousel />

      <SecondMainBody />

      <ThirdMainBody />

      <GetStarted toggleModal={toggleModal} />

      <Locations />

      <Footer />
    </div>
  );
};

export default Main;
