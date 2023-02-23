import styled from "styled-components";

export const StyledForm = styled.form`
  width: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
  background-color: var(--whiteFixed);
  gap: 1.2rem;
  border-radius: 8px;

  .title--signIn,
  .subTitle {
    width: 85%;
    display: flex;
  }
  input,
  .label--input,
  .label--error {
    width: 85%;
  }
  input {
    color: var(--random13);
  }

  h1 {
    font-size: 1.5rem;
    padding: 1rem 0rem;
    font-family: "Lexend", sans-serif;
    background-color: var(--grey10);
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

  .city--infos {
    width: 90%;
    display: flex;
  }

  .number--infos {
    width: 90%;
    display: flex;
  }

  .button--box {
    width: 85%;
    display: flex;
    margin: 36px 0px 24px 0px;

    justify-content: flex-end;
    gap: 11px;
    .label--error {
      font-size: 0.875rem;
      color: var(--alert1);
      font-style: italic;
    }
  }

  .button--box > button {
    height: 48px;
    /* width: 50%; */
  }

  .text--register {
    color: var(--grey2);
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
      font-weight: 500;
      color: var(--black);
    }

    textarea {
      border: 0.12rem solid var(--grey7);
      resize: none;
      font-family: "Inter";
      font-size: 16px;
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

  @media (min-width: 426px) {
    max-width: 520px;
    .button--box {
    }
    .button--box > button:last-child {
      max-width: 198px;
    }
    .button--box > button:first-child {
      max-width: 126px;
    }
  }
`;
