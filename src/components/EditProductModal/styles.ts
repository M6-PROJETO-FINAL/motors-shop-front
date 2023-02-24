import styled from "styled-components";

export const Container = styled.div`
  width: 100vw;
  height: 100vh;
  background-color: rgba(0, 0, 0, 0.5);
  /* backdrop-filter: blur(5px); */
  z-index: 1001;
  position: fixed;
  inset: 0;

  overflow-y: scroll;

  .modal {
    max-width: 450px;
    width: 95%;

    background-color: var(--whiteFixed);
    position: absolute;

    border-radius: 8px;
    inset: 0;
    margin: 1rem auto;
    animation: fadeInModalChat 1s ease-in-out backwards;

    display: flex;
    flex-direction: column;
    gap: 1rem;

    p {
      color: var(--black);
      font-weight: 500;
      font-size: 14px;
    }

    .vehicleInfo {
      padding: 1rem;
    }

    .saleType {
      display: flex;
      flex-direction: column;
      gap: 1rem;

      padding: 1rem;

      .saleButtons {
        display: flex;
        gap: 1rem;

        .notSelected {
          background-color: var(--whiteFixed);

          color: var(--grey0);
          font-size: 16px;
          font-weight: 600;

          border: 0.14rem solid var(--grey5);
          border-radius: 4px;

          width: 100%;
          height: 48px;

          &:hover {
            background-color: var(--brand1);
            color: var(--whiteFixed);
            border: none;
          }
        }

        .selected {
          background-color: var(--brand1);

          color: var(--whiteFixed);
          font-size: 16px;
          font-weight: 600;

          border: none;
          border-radius: 4px;

          width: 100%;
          height: 48px;

          &:hover {
            background-color: var(--brand3);
            color: var(--whiteFixed);
            border: none;
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

    margin: 0 auto;
    width: 100%;

    margin-top: 0.2rem;
    margin-bottom: 1rem;

    padding: 1rem;

    h2 {
      font-weight: 500;
      font-size: 16px;
      color: var(--grey1);
    }

    svg {
      font-size: 20px;
      color: var(--grey4);
      cursor: pointer;

      &:hover {
        color: var(--grey3);
      }
    }
  }
`;
