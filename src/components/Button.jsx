import React from "react";
import styled, { css, keyframes } from "styled-components";

const rotateAnimation = keyframes`
0%{
    transform: rotateZ(0deg);
}
100%{
    transform: rotateZ(360deg);
}
`;

const StyledButton = styled.button`
  padding: 10px 15px;
  font-size: 18px;
  border: 0;
  align-self: ${({ alignSelft }) => alignSelft || "stretch"};
  cursor: pointer;
  color: white;
  &:hover {
    animation: ${rotateAnimation} 0.5s linear;
  }

  ${({ primary }) =>
    primary &&
    css`
      background: blue;
    `}

  ${({ outlined }) =>
    outlined &&
    css`
      background: transparent;
      border: 1px solid green;
      color: green;
    `};
`;

// расширение стилей
// const LargeButton = styled(StyledButton)`
//   font-size: 32px;
// `;

const Button = (props) => {
  return <StyledButton {...props} />;
};

export default Button;
