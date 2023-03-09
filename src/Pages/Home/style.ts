import styled from "styled-components";

export const Main = styled.main`
display: flex;
flex-direction: column;
align-items: center;
justify-content: center;
`;

export const DivContainer = styled.div`
  width: 95%;
  display: flex;
  overflow-x: scroll;
  align-items: center;
  padding-bottom: 60px;
  margin: 40px 60px;
  gap: 40px;

  &::-webkit-scrollbar {
    width: 10px;
  }

  &::-webkit-scrollbar-track {
    background: var(--grey-05);
    border-radius: 10px;
  }

  &::-webkit-scrollbar-thumb {
    background-color: var(--brand-03);
    border: 1px solid var(--grey-04);
    border-radius: 10px;
  }

  @media (min-width: 800px) {
    padding-bottom: 60px;
  }
`;

export const CaroselTitle = styled.h1`
  font-family: "Lexend";
  font-weight: 600;
  font-size: 24px;
  margin-left: 90px;
  margin-top: 100px;
  color: var(--grey-01);
`;
