import styled from "styled-components";
import { device } from "../../Global/media";

export const ContainerFooter = styled.div`
  display: flex;
  height: 8.75rem;

  max-width: 100vw;
  width: 100vw;
  background-color: var(--grey-00);

  .footer-div-main {
    width: 100%;
    display: flex;
    align-items: center;
    justify-content: space-between;
    padding: 3rem;
    color: var(--white);

    img {
      width: 9.5rem;
    }

    p {
      font-family: "Inter";
      font-style: normal;
      font-weight: 400;
      font-size: 14px;
      line-height: 24px;
      width: 30%;
    }
  }

  .footer-div-btn {
    width: 2.5rem;
    height: 2.5rem;
    display: flex;
    align-items: center;
    justify-content: center;
    background: var(--grey-01);
    border: 1px;
    border-radius: 4px;
    cursor: pointer;

    button {
      background-color: transparent;
      appearance: none;
      border: none;

      svg {
        color: white;
      }
    }
  }

  @media ${device.mobile} {
    height: 19.375rem;

    .footer-div-main {
      flex-direction: column;
      align-items: center;

      p {
        width: 18rem;
      }
    }
  }
`;
