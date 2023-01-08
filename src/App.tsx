import "./styles.css";
import Page from "./components/Page";
import { Title } from "./components/Title";
import Slider from "./components/Slider";
import styled from "styled-components";
import Colors from "./consts/Colors";

interface SliderProps {
  top: number;
}

export default function App() {
  const GameBoard = styled.div`
    border: 3px solid ${Colors.NavyBlue};
    border-radius: 4px;
    width: 100%;
    height: 200px;
    padding: 12px;
  `;
  const SlideBar = styled.div`
    background-color: ${Colors.NavyBlue};
    border-radius: 20px;
    width: 20px;
    height: 100%;
    position: relative;
  `;

  return (
    <Page>
      <Title>TromboneClone</Title>
      <GameBoard>
        <SlideBar>
          <Slider />
        </SlideBar>
      </GameBoard>
    </Page>
  );
}
