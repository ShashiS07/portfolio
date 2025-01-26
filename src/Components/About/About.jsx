import React from "react";
import styled from "styled-components";

import { MainHeadingWrapper, ParagraphWrapper } from "../Elements/Elements";

const Wrapper = styled.div`
  padding: 50px 0;
  width: 100%;
  margin: 0px auto;
  background-color: ${(props) => props.theme.body};
  color: ${(props) => props.theme.fontColor};
`;

const Content = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  width: 80%;
  margin: 0px auto;
  flex-wrap: wrap;

  > div:nth-child(1) {
    max-width: 900px;
    margin: 0px auto;
  }
`;
const Quote = styled.div`
  p {
    font-size: 22px;
    color: grey;
  }
  p::before {
    content: "“";
    margin-right: 5px;
  }
  p::after {
    content: "”";
    margin-left: 5px;
  }
  cite {
    font-size: 18px;
  }

  margin: 20px 0;
  @media (max-width: 768px) {
    p {
      font-size: 18px;
      color: grey;
    }
    cite {
      font-size: 16px;
    }
  }
`;

function About() {
  return (
    <Wrapper id="about">
      <MainHeadingWrapper>
        <h1>About Me</h1>
        <div></div>
      </MainHeadingWrapper>
      <Quote>
        <blockquote>
          <p>The comfort zone is the great enemy of courage and confidence.</p>
          <cite>&mdash; Brian Tracy</cite>
        </blockquote>
      </Quote>
      <Content>
        <ParagraphWrapper justified={true}>
          <p>
            A self-motivated, hard-working Full Stack Web Developer with 1.5
            year of experience in MERN Stack development, possessing strong
            problem-solving skills. A team player eager to work with growing
            organizations to further enhance skills. Passionate about creating
            user-centric products, and currently seeking a full-time role as a
            MERN Stack Developer.
          </p>
        </ParagraphWrapper>
      </Content>
    </Wrapper>
  );
}

export default About;
