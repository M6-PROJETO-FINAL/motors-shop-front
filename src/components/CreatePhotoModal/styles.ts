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
    max-width: 520px;
    width: 95%;
    height: 354px;

    margin-top: 80px;

    background-color: var(--whiteFixed);
    position: absolute;

    border-radius: 8px;
    inset: 0;
    margin: 1rem auto;
    animation: fadeInModalChat 1s ease-in-out backwards;

    display: flex;
    flex-direction: column;

    font-family: "Inter";
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

    padding: 1rem;

    h2 {
      font-family: "Inter";
    }

    svg {
      font-size: 20px;
      color: var(--grey-04);
      cursor: pointer;
      width: 30px;

      &:hover {
        color: var(--grey-03);
      }
    }
  }

  .photo-zoom {
    background-color: var(--grey-07);
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    padding: 27px 7px;
    gap: 10px;

    position: absolute;
    width: 466px;
    height: 239px;
    left: 24px;
    top: 87px;

    border-radius: 4px;
  }
`;
