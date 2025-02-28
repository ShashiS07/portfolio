import React from "react";
import styled from "styled-components";
import { MainHeadingWrapper } from "../../Elements/Elements";
import { ExperianceElement } from "./ExperianceElement";

const SlideSectionOne = styled.div`
  padding: 50px 0;
  width: 80%;
  background-color: ${(props) => props.theme.body};
  color: ${(props) => props.theme.fontColor};
  margin: 0 auto;
`;

const BridgeOne = styled.div`
  padding: 50px 0;
  position: relative;
  top: 0;
  left: 0;
  width: 100%;
  margin: 0 auto;
  background-color: ${(props) => props.theme.body};
  color: ${(props) => props.theme.fontColor};
  z-index: 99;
  display: flex;
  flex-direction: column;
  justify-content: center;
  object-fit: contain;
`;

const Experiance = ({ currentTheme }) => {
  return (
    <div id="education">
      <BridgeOne>
        <MainHeadingWrapper>
          <h1>Experience</h1>
          <div></div>
        </MainHeadingWrapper>
      </BridgeOne>
      <SlideSectionOne>
        <ExperianceElement currentTheme={currentTheme} />
      </SlideSectionOne>
    </div>
  );
};

export default Experiance;
