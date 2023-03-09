import { device } from './../../Global/media';
import styled from "styled-components";

export const Container = styled.div`
  margin-top: 45px;
  margin-bottom: 45px;

  .content {
    display: flex;
    flex-direction: column;
    align-items: center;
    padding: 0.5rem;
    border-radius: 8px;
    width: 411px;
    gap: 30px;
    margin: 1rem auto;
    background-color: var(--whiteFixed);

    @media ${device.mobile} {
      width: 70%;
      flex-direction: column;
      gap: 1rem;
    }
  }

  h1 {
    font-family: "Lexend";
    font-style: normal;
    font-weight: 500;
    font-size: 24px;
    line-height: 20px;
    width: 85%;
    margin-top: 20px;
  }
`;
