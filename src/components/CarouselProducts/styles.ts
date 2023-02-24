import styled from "styled-components";

export const CarouselProductsContainer = styled.div`
  display: flex;
  gap: 12px;
  overflow-x: scroll;
  padding-bottom: 10px;

  &::-webkit-scrollbar {
    width: 10px;
  }

  &::-webkit-scrollbar-track {
    background: var(--grey10);
  }

  &::-webkit-scrollbar-thumb {
    background-color: var(--brand1);
    border: 5px solid var(--grey10);
  }

  @media (min-width: 800px) {
    gap: 48px;
    padding-bottom: 12px;
    overflow-x: auto;
  }
`;
