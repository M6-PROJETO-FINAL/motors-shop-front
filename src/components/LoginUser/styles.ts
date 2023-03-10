import styled from "styled-components";
import { device } from "../../Global/media";

export const Container = styled.div`
  margin-top: 95px;
  margin-bottom: 95px;

  .content {
    display: flex;
    flex-direction: column;
    align-items: center;
    padding: 0.5rem;
    border-radius: 8px;
    width: 480px;
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
