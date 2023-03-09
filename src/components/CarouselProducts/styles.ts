import styled from "styled-components";

export const CarouselProductsContainer = styled.ul`
  width: 95%;
  display: flex;
  overflow-x: scroll;
  padding-bottom: 120px;
  margin: 40px 60px;
  gap: 48px;


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
    gap: 48px;
    padding-bottom: 110px;
    overflow-x: auto;
  }
`;
