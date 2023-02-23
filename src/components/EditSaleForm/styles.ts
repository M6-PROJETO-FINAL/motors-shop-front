import styled from "styled-components";

export const Form = styled.form`
  display: flex;
  flex-direction: column;
  gap: 0.2rem;

  width: 100%;

  background-color: var(--whiteFixed);

  padding: 1rem;

  border-radius: 8px;

  .description {
    display: flex;
    flex-direction: column;
    gap: 0.4rem;

    label {
      font-size: 0.875rem;
      font-weight: 500;
      color: var(--black);
    }

    textarea {
      border: 0.12rem solid var(--grey7);
      resize: none;

      padding: 0.6rem;
      height: 5rem;

      &:hover {
        background-color: var(--grey8);
        border: 0.1rem solid var(--grey8);
      }

      &:focus {
        outline: 0.1rem solid var(--brand2);
      }

      &::placeholder {
        font-size: 16px;
        font-family: "Inter";
        font-weight: 400;
        color: var(--grey3);
      }
    }

    .label--error > label > p {
      font-size: 0.875rem;
      color: var(--alert1);
      font-style: italic;
    }
  }

  .choose-vehicle {
    display: flex;
    flex-direction: column;
    gap: 1rem;

    margin-top: 1rem;

    .buttons {
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

  .final-buttons {
    display: flex;
    gap: 1rem;

    margin-top: 2rem;

    .cancel {
      background-color: var(--grey6);

      color: var(--grey2);
      font-size: 16px;
      font-weight: 600;

      border: none;
      border-radius: 4px;

      width: 100%;
      height: 48px;

      &:hover {
        background-color: var(--grey3);
        color: var(--whiteFixed);
        border: none;
      }
    }

    .create {
      background-color: var(--brand3);

      color: var(--whiteFixed);
      font-size: 16px;
      font-weight: 600;

      border: none;
      border-radius: 4px;

      width: 100%;
      height: 48px;

      &:hover {
        background-color: var(--brand1);
        border: none;
      }
    }
  }
`;
