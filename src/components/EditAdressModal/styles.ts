import styled from "styled-components";

export const Container = styled.div`
  width: 100vw;
  height: 100vh;
  background-color: rgba(0, 0, 0, 0.5);
  z-index: 1001;
  position: fixed;
  inset: 0;
  overflow-y: scroll;
  .editAddress--modal {
    max-height: 520px;
    width: 95%;

    background-color: var(--whiteFixed);
    position: absolute;

    border-radius: 8px;
    inset: 0;
    margin: 1rem auto;
    animation: fadeInModalChat 1s ease-in-out backwards;

    display: flex;
    flex-wrap: wrap;
    justify-content: center;
    align-content: flex-start;
    gap: 30px;
    margin-top: 95px;

    @media (min-width: 426px) {
      max-width: 520px;
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
    width: 85%;
    margin: 16px 0px;

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
`;
