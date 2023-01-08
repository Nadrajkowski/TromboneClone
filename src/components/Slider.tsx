import React from "react";
import styled from "styled-components";
import Colors from "../consts/Colors";

interface SliderProps {
  top: number;
}

interface SliderState {
  top: number;
}

export default class Slider extends React.Component<{}, SliderState> {
  constructor(props: {}) {
    super(props);
    this.state = {
      top: 0
    };
  }
  render() {
    const Slider = styled.div<SliderProps>`
      background-color: ${Colors.NavyBlue};
      border: 4px solid ${Colors.Red};
      border-radius: 32px;
      width: 32px;
      height: 32px;
      position: absolute;
      left: -10px;
      cursor: move;
      top: ${(props) => props.top};
    `;
    return <Slider top={this.state.top} />;
  }
}
