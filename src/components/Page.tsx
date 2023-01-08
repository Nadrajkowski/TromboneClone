import React from "react";
import styled from "styled-components";
import Colors from "../consts/Colors";

const Page = styled.div`
  font-family: "Courier New", Courier, monospace;
  background-color: ${Colors.SandDollar};
  padding: 24px;
  height: 100vh;
  box-sizing: border-box;
`;

export default Page;

// export default class Page extends React.Component {
//   render() {
//     return styled.div`
//       background-color: "#e5ddc";
//     `;
//   }
// }
