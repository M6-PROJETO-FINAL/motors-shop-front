import styled from "styled-components";

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
  }

  .footer-div-btn {
    width: 2.5rem;
    height: 2.5rem;
    display: flex;
    align-items: center;
    justify-content: center;
    background: var(--grey-03);
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
`;
