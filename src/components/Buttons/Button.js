import React from "react";
import styled from "styled-components";

const Btn = styled.button`
  width: ${(props) => props.width && props.width};
  height: ${(props) => (props.height ? props.height : "40px")};
  border: ${(props) => (props.border ? props.border : "1px solid #ccc")};
  background-color: ${(props) =>
    props.background ? props.background : "#fff"};
  color: ${(props) => (props.color ? props.color : "#fff")};
  display: ${(props) => (props.display ? props.display : "inline-block")};
  justify-content: ${(props) => props.justify && props.justify};
  align-items: ${(props) => props.align && props.align};
  border-radius: ${(props) => props.radius && props.radius};
  font-size: ${(props) => props.fontSize && props.fontSize};
  padding: ${(props) => props.padding && props.padding};
  cursor: pointer;

  svg {
    font-size: ${(props) => props.svgSize && props.svgSize};
    transition: ${(props) => props.animateIcon && props.animateIcon};
    width: ${(props) => props.animateIcon && "100%"};
  }

  svg:hover {
    width: ${(props) => props.animateIcon && "80%"};
  }

  :hover {
    background-color: ${(props) =>
      props.backgroundHover && props.backgroundHover};
    color: ${(props) => props.colorHover && props.colorHover};
  }

  :disabled {
    cursor: not-allowed;
    pointer-events: all !important;
  }
`;
export const Button = ({
  content,
  color,
  width,
  height,
  border,
  icon,
  display,
  background,
  radius,
  justify,
  align,
  fontSize,
  padding,
  svgSize,
  onClick,
  backgroundHover,
  colorHover,
  animateIcon,
  disable,
  onMouseEnter,
  onMouseLeave,
  onFocus,
}) => {
  return (
    <Btn
      color={color}
      width={width}
      height={height}
      border={border}
      display={display}
      background={background}
      radius={radius}
      justify={justify}
      align={align}
      fontSize={fontSize}
      padding={padding}
      svgSize={svgSize}
      onClick={onClick}
      colorHover={colorHover}
      backgroundHover={backgroundHover}
      animateIcon={animateIcon}
      disabled={disable}
      onMouseEnter={onMouseEnter}
      onMouseLeave={onMouseLeave}
      onFocus={onFocus}
    >
      {icon}
      {content}
    </Btn>
  );
};

export const ModalConvertButton = ({
  content,
  color,
  width,
  height,
  border,
  icon,
  display,
  background,
  radius,
  justify,
  align,
  fontSize,
  padding,
  svgSize,
  onClick,
}) => {
  return (
    <Btn
      color={color}
      width={width}
      height={height}
      border={border}
      display={display}
      background={background}
      radius={radius}
      justify={justify}
      align={align}
      fontSize={fontSize}
      padding={padding}
      svgSize={svgSize}
      onClick={onClick}
    >
      {content}
    </Btn>
  );
};

export const ModalContactButton = ({
  color,
  width,
  height,
  border,
  icon,
  display,
  background,
  radius,
  justify,
  align,
  fontSize,
  padding,
  svgSize,
  onClick,
}) => {
  return (
    <Btn
      color={color}
      width={width}
      height={height}
      border={border}
      display={display}
      background={background}
      radius={radius}
      justify={justify}
      align={align}
      fontSize={fontSize}
      padding={padding}
      svgSize={svgSize}
      onClick={onClick}
    >
      {icon}
    </Btn>
  );
};
