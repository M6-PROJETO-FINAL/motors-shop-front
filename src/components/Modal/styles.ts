import styled from "styled-components";

export const Container = styled.div`
  width: 100vw;
  height: 100vh;
  background-color: rgba(0, 0, 0, 0.5);

  z-index: 1001;
  position: fixed;
  inset: 0;

  .modal {
    max-width: 347px;
    width: 95%;
    height: 287px;
    background-color: var(--whiteFixed);
    position: absolute;

    border-radius: 8px;
    inset: 0;
    margin: 1rem auto;
    animation: fadeInModalChat 1s ease-in-out backwards;
    box-sizing: content-box;
    padding: 16px 24px;

    @media (max-width: 375px) {
      height: 60%;
      box-sizing: border-box;
      padding: 16px 24px;
    }
    display: flex;
    flex-wrap: wrap;
    align-content: flex-start;
    gap: 58px;
    margin-top: 95px;
    .modal--withButton {
      height: 70%;
    }
    section {
      display: flex;
      flex-wrap: wrap;
      align-content: space-between;
      gap: 18px;
      h2 {
        font-family: "Lexend";
        font-style: normal;
        font-weight: 500;
        font-size: 16px;
        line-height: 20px;
        width: 100%;
      }
      p {
        font-family: "Inter";
        font-style: normal;
        font-weight: 400;
        font-size: 16px;
        line-height: 28px;
        color: var(--grey2);
      }
      button {
        height: 38px;
        font-family: "Inter";
        font-style: normal;
        font-weight: 500;
        font-size: 14px;
        max-width: 132px;
      }
      .button--box {
        width: 100%;
        display: flex;
        justify-content: flex-end;
        gap: 10px;

        button:first-child {
          width: 40%;
        }
        button:last-child {
          width: 60%;
        }
        @media (min-width: 426px) {
          button:first-child {
            max-width: 126px;
          }
          button:last-child {
            max-width: 211px;
          }
        }
      }
    }
  }

  @keyframes fadeInModalChat {
    from {
      opacity: 0;
      transform: translateY(-30%);
    }
    to {
      opacity: 1;
      transform: translateY(0);
    }
  }

  header {
    display: flex;
    align-items: center;
    justify-content: space-between;
    width: 100%;

    h2 {
      font-family: "Lexend";
      font-style: normal;
      font-weight: 500;
      font-size: 16px;
      line-height: 20px;
      margin-bottom: 0px;
    }

    svg {
      font-size: 24px;
      color: var(--grey4);
      cursor: pointer;

      &:hover {
        color: var(--grey3);
      }
    }
  }

  @media (min-width: 768px) {
    .modal {
      max-width: 520px;
    }
  }
`;
