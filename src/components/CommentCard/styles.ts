import styled from "styled-components";

export const CommentDiv = styled.div`
  width: 752px;
  height: 557px;
  display: flex;
  flex-direction: column;
  border-radius: 4px;
  gap: 12px;
  background-color: var(--white);
  color: var(--grey-01);
  padding: 2rem;
  overflow-x: auto;
  margin-bottom: 33px;

  &::-webkit-scrollbar {
    width: 10px;
  }

  &::-webkit-scrollbar-track {
    background: var(--grey-05);
    border-radius: 10px;
  }

  &::-webkit-scrollbar-thumb {
    background-color: var(--brand-03);
    border: 1px solid var(--grey-04);
    border-radius: 10px;
  }

  h2 {
    font-family: "Lexend";
    font-style: normal;
    font-weight: 600;
    font-size: 20px;
    margin-bottom: 28px;
  }

  .userInfo {
    display: flex;
    align-items: center;
    

    .sellerPhoto {
      background-color: var(--random-10);
      color: var(--whiteFixed);

      display: flex;
      align-items: center;
      margin-right: 16px;

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
      max-width: 25ch;
      overflow: hidden;
      text-overflow: ellipsis;
      white-space: nowrap;
      font-family: Inter;
      font-weight: 500;
      font-size: 14px;

      color: var(--grey-01);
    }

    .time {
      display: flex;
      align-items: center;

      color: var(--grey-03);

      margin: 0;
      padding: 0%;
      width: 20%;
    }

    .date {
      font-family: Inter;
      font-weight: 400;
      font-size: 12px;
      line-height: 24px;

      color: var(--grey-03);
    }
  }

  .text {
    font-family: Inter;
    font-weight: 400;
    font-size: 14px;
    line-height: 24px;

    color: var(--grey-02);

    margin-bottom: 48px;
  }

  .buttons {
    display: flex;
    justify-content: flex-end;
    gap: 10px;

    .editButton {
      display: flex;
      justify-content: center;
      align-items: center;

      width: 30px;
      height: 30px;

      background-color: var(--grey-10);
      border: none;
      border-radius: 4px;

      color: var(--grey-02);

      &:hover {
        background-color: var(--grey-02);
        color: var(--grey-10);
      }
    }

    .deleteButton {
      display: flex;
      justify-content: center;
      align-items: center;

      width: 30px;
      height: 30px;

      background-color: var(--grey-10);
      border: none;
      border-radius: 4px;

      color: var(--alert-1);

      &:hover {
        background-color: var(--alert-1);
        color: var(--whiteFixed);
      }
    }
  }
`;
