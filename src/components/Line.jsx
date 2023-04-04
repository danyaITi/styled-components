import React from "react";
import styled from "styled-components";

const StyledLine = styled.div`
  color: ${({ color }) => color || "white"};
  font-size: 1.5em;
`;

const Line = (props) => {
  return <StyledLine {...props} />;
};

export default Line;
