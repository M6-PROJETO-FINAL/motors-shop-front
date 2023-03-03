import styled from "styled-components";

export const DivContainer = styled.div`
  display: flex;
  padding-bottom:60px;
  margin: 40px 60px;
  gap: 40px;

  @media (min-width: 800px) {
    padding-bottom: 60px;
  }
`;

export const CaroselTitle = styled.h1`
  font-family: "Lexend";
  font-weight: 600;
  font-size: 24px;
  margin-left: 60px;
  margin-top: 100px;
  color: var(--grey-01);
`;
