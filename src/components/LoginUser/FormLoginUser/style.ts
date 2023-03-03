import styled from "styled-components";

export const StyledForm = styled.form`
  width: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
  background-color: var(--whiteFixed);
  gap: 1.2rem;
  border-radius: 8px;
  font-family: "Inter";

  .title--signIn,
  .subTitle {
    width: 85%;
    display: flex;
  }

  .password {
    display: flex;
    flex-direction: column;
    small {
      width: 88%;
      margin: 1rem;
      text-align: right;
      font-family: "Inter";
      font-style: normal;
      font-weight: 500;
      font-size: 14px;
      color: var(--grey-02);

      :hover {
        color: var(--brand-01);

        cursor: pointer;
      }
    }
  }

  .choose-user {
    display: flex;
    flex-direction: column;
    gap: 1rem;
    margin-top: 1rem;
    cursor: pointer;

    .buttons {
      display: flex;
      gap: 1rem;
      height: 48px;

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

    p {
      font-family: "Inter";
      font-style: normal;
      font-weight: 500;
      font-size: 14px;
    }
  }

  input,
  .label--input,
  .label--error {
    width: 85%;
    margin-bottom: 0;
  }

  input {
    color: var(--random-13);
  }

  h1 {
    font-size: 1.5rem;
    padding: 1rem 0rem;
    font-family: "Lexend", sans-serif;
    background-color: var(--grey-10);
  }

  h2 {
    font-family: "Inter";
    font-style: normal;
    font-weight: 500;
    font-size: 14px;
    line-height: 24px;
    text-align: left;
    margin-bottom: 15px;
  }

  .button--box {
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    gap: 2rem;
    margin-bottom: 24px;
    cursor: pointer;

    p {
      text-align: center;
      font-family: "Inter";
      font-style: normal;
      font-weight: 400;
      font-size: 14px;
      color: var(--grey-02);
    }

    .label--error {
      font-size: 0.875rem;
      color: var(--alert-1);
      font-style: italic;
    }
  }

  .button--box > button {
    height: 48px;
  }

  .text--register {
    color: var(--grey-02);
    font-size: 0.875rem;
    padding: 0.5rem 0rem;
  }

  .description {
    display: flex;
    flex-direction: column;
    gap: 0.4rem;
    width: 85%;
    label {
      font-size: 0.875rem;
      font-weight: 400;
      color: var(--grey-01);
    }

    textarea {
      border: 0.12rem solid var(--grey-07);
      resize: none;
      font-family: "Inter";
      font-size: 16px;
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
`;
