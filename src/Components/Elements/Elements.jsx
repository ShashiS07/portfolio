import styled from "styled-components";

export const MainHeadingWrapper = styled.div`
  text-align: center;
  padding: 30px;
  > h1 {
    font-size: 2.6rem;
    width: fit-content;
    margin: 0 auto;
    font-weight: 600;
    letter-spacing: 0.2ch;
    @media (max-width: 1100px) {
      font-size: 2rem;
    }

    @media (max-width: 750px) {
      font-size: 1.9rem;
    }

  }
  > div {
    border-bottom: 4px solid ${(props) => props.theme.secondary};
    width: 100px;
    margin: 5px auto;
    border-radius: 10px;
  }
`;

export const SubHeadingWrapper = styled.div`
  > h4 {
    font-size: 1.7rem;
    margin: 30px auto;
    width: fit-content;
    font-weight: 600;
    @media (max-width: 1100px) {
      font-size: 1.2rem;
    }

    @media (max-width: 750px) {
      font-size: 1rem;
    }
    q {
      color: #a0a0a0;
      font-style: italic;
    }
  }
`;

export const ParagraphWrapper = styled.div`
  > p {
    font-size: 1.2rem;
    line-height: 1.3;
    letter-spacing: 0.2ch;
    font-weight: 400;
    text-align: ${(props) => (props.justified ? "justify" : "left")};
    @media (max-width: 1100px) {
      font-size: 1rem;
    }
    @media (max-width: 750px) {
      font-size: 0.8rem;
    }
  }
`;
