import React from "react";
import styled from "styled-components";
import Flex from "./Flex";
import { useState } from "react";
import Line from "./Line";

const StyledConsole = styled.textarea`
  color: ${({ color }) => color || "white"};
  width: 100%;
  margin-left: 10px;
  background: black;
  font-size: 1.5em;
  height: 70vh;
  resize: none;
  border: 0;
  &:focus {
    outline: 0;
  }
  @media ${({ theme }) => theme.media.phone} {
    border: 1px solid red;
  }
  @media ${({ theme }) => theme.media.tablet} {
    border: 1px solid green;
  } ;
`;

const Console = (props) => {
  const [directory, setDirectory] = useState(["C/Desktop/VS/"]);

  const onKeyPress = (e) => {
    e.charCode == 13 && setDirectory([...directory, "C/Desktop/VS/"]);
  };

  return (
    <Flex>
      <Flex flexDirection={"column"}>
        {directory.map((item, idx) => (
          <Line key={idx} color={props.color}>
            {item}
          </Line>
        ))}
      </Flex>
      <StyledConsole onKeyPress={onKeyPress} {...props} />
    </Flex>
  );
};

export default Console;
