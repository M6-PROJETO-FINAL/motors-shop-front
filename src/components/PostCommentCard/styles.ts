import styled from "styled-components";

export const PostCommentDiv = styled.div`
  width: 752px;
  height: 290px;
  display: flex;
  flex-direction: column;
  align-items: center;
  background-color: var(--white);
  padding: 2rem;
  gap: 12px;
  margin-bottom: 73px;

  .userInfo {
    display: flex;
    align-items: center;
    gap: 1rem;
    margin-bottom: 10px;

    .sellerPhoto {
      background-color: var(--random-10);
      color: var(--whiteFixed);

      display: flex;
      align-items: center;

      width: 30px;
      height: 30px;

      font-weight: 500;
      font-size: 13px;

      border-radius: 50%;
      font-family: "Inter";

      padding: 1rem;

      p {
        display: flex;
        justify-content: center;
        text-align: center;
      }
    }

    .userName {
      font-family: Inter;
      font-weight: 500;
      font-size: 14px;
      line-height: 24px;

      color: var(--grey1);
    }
  }

  .text-form {
    width: 672px;
    height: 128px;
    border: 1px solid var(--grey-05);
    padding: 1.5rem;
    border-radius: 4px;

    form {
      font-weight: 400;
      line-height: 24px;
      color: var(--grey2);

      textarea {
        border: none;
        font-size: 14px;
        font-family: "Inter";
      }
    }
  }

  .button-comment {
    display: flex;
    justify-content: end;
  }

  .suggestion-text {
    margin-top: 20px;

    span {
      font-family: "Inter";
      font-style: normal;
      font-weight: 500;
      font-size: 12px;
      color: var(--grey-02);
      background-color: var(--grey-07);
      border-radius: 20px;
      padding: 0.5rem 1rem;
      margin-right: 1rem;
      cursor: pointer;

      :hover {
        background-color: var(--brand-04);
      }
    }
  }
`;
