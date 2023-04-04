import styled from "styled-components";
import Title from "./components/Title";
import Flex from "./components/Flex";
import Console from "./components/Console";
import Button from "./components/Button";

const AppWrapper = styled.div`
  width: 100%;
  height: 100vh;
  background: black;
  color: white;
  padding: 2rem;
`;

const App = () => {
  return (
    <AppWrapper>
      <Flex justifyContent={"center"}>
        <Title color={"green"}>Console @md 2023</Title>
      </Flex>
      <Flex flexDirection={"column"}>
        <Console color={"green"} />
        <Button outlined alignSelft={"flex-end"}>
          Добавить
        </Button>
      </Flex>
    </AppWrapper>
  );
};

export default App;
