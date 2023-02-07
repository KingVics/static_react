import ReactDOM from "react-dom";
import React from "react";
import Backdrop from "../Backdrop/Backdrop";
// import Button from '../FormElements/Button'
import styled from "styled-components";
import { motion, AnimatePresence } from "framer-motion";
import { Button } from "../Buttons/Button";
import { CancelNoBorder } from "../Icons/Icon";
import { useEffect } from "react";

const MainModal = styled.div`
  z-index: ${({ zIndex }) => (zIndex ? zIndex : "11")};
  position: fixed;
  left: ${({ left }) => left};
  right: ${({ right }) => right};
  top: ${({ top }) => top};
  margin-right: -50%;
  transform: translate(-50%, -50%);
  width: ${({ width }) => width};
  /* height: ${({ height }) => height}; */
  background: ${({ background }) =>
    background ? background : "var(--color-white)"};
  box-shadow: ${({ boxShadow }) =>
    boxShadow ? boxShadow : "0 2px 8px rgba(0, 0, 0, 0.26)"};
  border-radius: ${({ borderRadius }) => (borderRadius ? borderRadius : "8px")};
  /* padding: ${({ padding }) => (padding ? padding : "1rem")}; */
  overflow: ${({ overflow }) => overflow};

  div svg {
    opacity: 1;
    font-size: 0.9rem;
  }
  div svg:hover {
    opacity: 0.5;
  }
`;

const ModalBody = styled.div`
  height: 60vh;
  overflow-y: auto;
  border-top: 2px solid #ebecf0;
  padding: ${({ padding }) => (padding ? padding : "1rem")};
  height: ${({ height }) => height};
  ::-webkit-scrollbar {
    height: 5px;
  }

  ::-webkit-scrollbar-track {
    background-color: transparent;
  }

  ::-webkit-scrollbar-thumb {
    background-color: #d6dee1;
  }

  ::-webkit-scrollbar-thumb {
    background-color: #d6dee1;
    border-radius: 1px;
  }

  ::-webkit-scrollbar-thumb {
    background-color: #d6dee1;
    border-radius: 1px;
  }
`;

const ModalHeader = styled.div`
  background-color: ${({ headerBG }) => (headerBG ? headerBG : "#fff")};
  color: ${({ headerColor }) => (headerColor ? headerColor : "black")};

  //padding: 10px;
  padding: ${({ padding }) => (padding ? padding : "1rem")};

  h3 {
    margin: 0;
    padding: 0;
  }

  display: flex;
  align-items: start !important;
  justify-content: space-between;

  h4 {
    color: ${({ cancelButtonColor }) =>
      cancelButtonColor ? cancelButtonColor : "black"};
    transform: scale(2.5);
    cursor: pointer;
  }
`;

const ModalFooter = styled.div`
  background-color: #fff;
  padding: 10px;
  border-top: 2px solid #ebecf0;
  padding: ${({ padding }) => (padding ? padding : "1rem")};
  display: flex;
  gap: 10px;
  justify-content: end;
  align-items: center;

  .cancelFooter {
    cursor: pointer;
    color: ${({ cancelButtonColor }) =>
      cancelButtonColor ? cancelButtonColor : "black"};

    &:hover {
      border-bottom: 1px solid #ccc;
    }
  }
`;



const ModalOverLay = ({
  justifyButton,
  boxShadow,
  borderRadius,
  padding,
  top,
  exit,
  background,
  width,
  overFlow,
  right,
  height,
  left,
  initial,
  children,
  setShow,
  animate,
  transition,
  btn,
  title,
  saveContent,
  onSumbit,
  disableBtn,
  headerBG,
  headerColor,
  ButtonColor,
  ButtonBackGround,
  buttonWidth,
  buttonHeight,
  buttonFontSize,
  buttonRadius,
  buttonBorder,
  cancelButtonPosition,
  cancelButtonColor,
  zIndex,
  bodyStyle,
  closeModal,
}) => {
  const content = (
    <>
      <MainModal
        as={motion.div}
        initial={initial}
        animate={animate}
        exit={exit ? exit : { opacity: 0 }}
        transition={transition}
        className="Modal"
        padding={padding}
        top={top}
        width={width}
        left={left}
        overflow={overFlow}
        height={height}
        right={right}
        background={background}
        boxShadow={boxShadow}
        borderRadius={borderRadius}
        zIndex={zIndex}
      >
        <ModalHeader
          padding={padding}
          headerBG={headerBG}
          headerColor={headerColor}
          cancelButtonColor={cancelButtonColor}
        >
          <div>
            <h3>{title}</h3>
          </div>
          <div onClick={() => setShow(false)}>
            {cancelButtonPosition === "top" && <h4>{CancelNoBorder}</h4>}
          </div>
        </ModalHeader>
        <ModalBody padding={padding} height={height}>
          <div style={bodyStyle}>{children}</div>
        </ModalBody>

        <ModalFooter padding={padding} cancelButtonColor={cancelButtonColor}>
          {cancelButtonPosition !== "top" && (
            <div
              onClick={() => (closeModal ? closeModal() : setShow(false))}
              className="cancelFooter"
            >
              Cancel
            </div>
          )}
          <div>
            {onSumbit ? (
              <Button
                display="flex"
                align={"center"}
                justify={"center"}
                padding={"6px"}
                iconstyle="icon"
                background={ButtonBackGround ? ButtonBackGround : "#48acdf"}
                color={ButtonColor ? ButtonColor : "#fff"}
                boxShadow="none"
                height={buttonHeight ? buttonHeight : ""}
                width={buttonWidth ? buttonWidth : ""}
                fontSize={buttonFontSize ? buttonFontSize : "1rem"}
                radius={buttonRadius ? buttonRadius : "3px"}
                border={buttonBorder ? buttonBorder : "none"}
                backgroundHover={
                  ButtonBackGround ? ButtonBackGround : "#48acdf"
                }
                onClick={() => onSumbit()}
                content={saveContent}
                disable={disableBtn}
              />
            ) : (
              <></>
            )}
          </div>
        </ModalFooter>
      </MainModal>
    </>
  );

  return ReactDOM.createPortal(
    content,
    document.getElementById("modal-portal")
  );
};

const ModalIndex = (props) => {
  useEffect(() => {
    if (props.show) {
      document.body.style.overflow = "hidden";
      // document.body.style.paddingRight = '15px';
    }
    return () => {
      document.body.style.overflow = "auto";
      // document.body.style.paddingRight = '0px';
    };
  }, [props.show]);

  return (
    <>
      {props.show && (
        <Backdrop
          setShow={props.setShow}
          theme={props.theme}
          show={props.show}
        />
      )}
      <AnimatePresence>
        {props.show && (
          <ModalOverLay
            ButtonBG={props.ButtonBG}
            justifyButton={props.justifyButton}
            boxShadow={props.boxShadow}
            borderRadius={props.borderRadius}
            reserveModal={props.reserveModal}
            setShowMobileReserveModal={props.setShowMobileReserveModal}
            height={props.height}
            background={props.background}
            right={props.right}
            exit={props.exit}
            overFlow={props.overFlow}
            show={props.show}
            btn={props.btn}
            transition={props.transition}
            animate={props.animate}
            initial={props.initial}
            setShow={props.setShow}
            top={props.top}
            width={props.width}
            left={props.left}
            padding={props.padding}
            saveContent={props.saveContent}
            title={props.title}
            onSumbit={props.onSumbit}
            disableBtn={props.disableBtn}
            headerBG={props.headerBG}
            headerColor={props.headerColor}
            ButtonColor={props.ButtonColor}
            ButtonBackGround={props.ButtonBackGround}
            buttonWidth={props.buttonWidth}
            buttonHeight={props.buttonHeight}
            buttonFontSize={props.buttonFontSize}
            buttonRadius={props.buttonRadius}
            buttonBorder={props.buttonBorder}
            cancelButtonPosition={props.cancelButtonPosition}
            cancelButtonColor={props.cancelButtonColor}
            zIndex={props.zIndex}
            bodyStyle={props.bodyStyle}
            closeModal={props.closeModal}
          >
            {props.children}
          </ModalOverLay>
        )}
      </AnimatePresence>
    </>
  );
};

export default ModalIndex;
