import styled from "styled-components";

interface InputProps {
  width: string;
}

export const InputStyled = styled.input<InputProps>`
  width: ${(props) => props.width};
  padding: 0.6rem;
  background-color: var(--whiteFixed);
  color: var(--grey0);
  border: 0.12rem solid var(--grey-07);
  border-radius: 0.2rem;
  margin-bottom: 20px;

  font-size: 14px;
  font-family: "Inter";

  &:hover {
    background-color: var(--grey-08);
    border: 0.1rem solid var(--grey-08);
  }

  &:focus {
    outline: 0.1rem solid var(--brand-02);
  }
`;

export const StyledDiv = styled.div<InputProps>`
  display: flex;
  flex-direction: column;
  width: 100%;
  gap: 0.5rem;

  .label--input,
  .label--error {
    width: ${(props) => props.width};
    justify-content: flex-start;
    margin: 0 auto;
  }

  div {
    width: 100%;
    display: flex;
    justify-content: center;
  }

  div > label > p {
    font-size: 0.875rem;
  }

  .label--error > label > p {
    font-size: 0.875rem;
    color: var(--alert-1);
    font-style: italic;
  }
`;
