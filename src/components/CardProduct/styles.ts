import styled from "styled-components";

export const CardProductContainer = styled.li`
  display: flex;
  flex-direction: column;
  gap: 20px;
  max-width: 312px;

  li {
    justify-content: space-around;
    height: 220px;
  }

  .product-image {
    background-color: var(--grey-07);
    display: flex;
    align-items: center;
    justify-content: center;
    max-width: 310px;
    height: 152px;
    cursor: pointer;
    width: 100%;
    margin: auto;

    padding: none;

    :hover {
      border: 1px solid var(--brand-01);
    }
  }

  img {
    width: 310px;
    height: 152px;
    object-fit: cover;
  }

  .product-title {
    font-family: "Lexend", sans-serif;
    font-style: normal;
    font-weight: 600;
    font-size: 16px;
    line-height: 20px;
    color: var(--grey-01);
    overflow: hidden;
    text-overflow: ellipsis;
    display: -webkit-box;
    -webkit-line-clamp: 1;
    -webkit-box-orient: vertical;
    cursor: pointer;
  }

  .product-description {
    font-family: "Inter";
    font-style: normal;
    font-weight: 400;
    font-size: 14px;
    line-height: 24px;
    color: var(--grey-02);
    overflow: hidden;
    text-overflow: ellipsis;
    display: -webkit-box;
    -webkit-line-clamp: 2;
    -webkit-box-orient: vertical;
  }

  .div-product-owner {
    display: flex;
    gap: 8px;
    align-items: center;

    .owner-initials {
      display: flex;
      flex-direction: column;
      justify-content: center;
      align-items: center;
      text-align: center;
      width: 32px;
      height: 32px;
      background-color: var(--brand-01);
      border-radius: 150px;
      cursor: pointer;
      padding: 0.5rem;

      p {
        font-family: "Inter", sans-serif;
        font-style: normal;
        font-weight: 500;
        font-size: 14px;
        line-height: 0px;
        color: #ffffff;
      }
    }

    .owner-name {
      font-family: "Inter";
      font-style: normal;
      font-weight: 500;
      font-size: 14px;
      line-height: 24px;
      color: #495057;
      cursor: pointer;
    }
  }

  .product-details {
    display: flex;
    justify-content: space-between;
    align-items: center;

    div {
      display: flex;
      gap: 12px;

      span {
        display: flex;
        flex-direction: row;
        justify-content: center;
        align-items: center;
        padding: 4px 8px;
        gap: 10px;
        height: 32px;
        background: var(--brand-04);
        border-radius: 4px;
        font-family: "Inter";
        font-style: normal;
        font-weight: 500;
        font-size: 14px;
        line-height: 24px;
        color: var(--brand-01);
      }
    }

    p {
      font-family: "Lexend", sans-serif;
      font-style: normal;
      font-weight: 500;
      font-size: 16px;
      line-height: 20px;
      color: var(--grey-01);
      text-align: right;
    }
  }
`;
