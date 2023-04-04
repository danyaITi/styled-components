import React from "react";
import styled from "styled-components";

const StyledFlex = styled.div`
  display: flex;
  justify-content: ${({ justifyContent }) => justifyContent || "stretch"};
  align-items: ${({ alignItems }) => alignItems || "stretch"};
  flex-direction: ${({ flexDirection }) => flexDirection || "row"};
  margin: ${({ margin }) => margin || "0"};
`;

const Flex = (props) => {
  return <StyledFlex {...props}></StyledFlex>;
};

export default Flex;
