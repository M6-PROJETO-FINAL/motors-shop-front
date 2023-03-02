import styled from "styled-components";

export const Form = styled.form`
  display: flex;
  flex-direction: column;
  gap: 0.2rem;

  width: 100%;

  background-color: var(--whiteFixed);

  padding: 1rem;

  border-radius: 8px;

  font-family: "Inter";

  .description {
    display: flex;
    flex-direction: column;
    gap: 0.4rem;
    font-size: 14px;

    label {
      font-size: 0.875rem;
      font-weight: 500;
      color: var(--grey-00);
      font-family: "Inter";
    }

    textarea {
      border: 0.12rem solid var(--grey-07);
      resize: none;

      padding: 0.6rem;
      height: 5rem;

      &:hover {
        background-color: var(--grey-08);
        border: 0.1rem solid var(--grey-08);
      }

      &:focus {
        outline: 0.1rem solid var(--brand-02);
      }

      &::placeholder {
        font-size: 14px;
        font-family: "Inter";
        font-weight: 400;
        color: var(--grey-03);
      }
    }

    .label--error > label > p {
      font-size: 0.875rem;
      color: var(--alert-1);
      font-style: italic;
    }
  }

  .choose-vehicle,
  .published {
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
        font-family: "Inter";

        border: 0.14rem solid var(--grey-05);
        border-radius: 4px;

        width: 100%;
        height: 48px;

        &:hover {
          background-color: var(--brand-01);
          color: var(--whiteFixed);
          border: none;
        }
      }

      .selected {
        background-color: var(--brand-01);

        color: var(--whiteFixed);
        font-size: 16px;
        font-weight: 600;
        font-family: "Inter";

        border: none;
        border-radius: 4px;

        width: 100%;
        height: 48px;

        &:hover {
          background-color: var(--brand-03);
          color: var(--whiteFixed);
          border: none;
        }
      }
    }
  }

  .published {
    margin-bottom: 1rem;
  }

  .final-buttons {
    display: flex;
    gap: 1rem;

    margin-top: 2rem;

    .cancel {
      background-color: var(--grey-06);

      color: var(--grey2);
      font-size: 16px;
      font-weight: 600;
      font-family: "Inter";

      border: none;
      border-radius: 4px;

      width: 100%;
      height: 48px;

      &:hover {
        background-color: var(--grey-03);
        color: var(--whiteFixed);
        border: none;
      }
    }

    .create {
      background-color: var(--brand-03);

      color: var(--whiteFixed);
      font-size: 16px;
      font-weight: 600;
      font-family: "Inter";

      border: none;
      border-radius: 4px;

      width: 100%;
      height: 48px;

      &:hover {
        background-color: var(--brand-01);
        border: none;
      }
    }
  }
`;
