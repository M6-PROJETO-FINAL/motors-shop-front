import styled from "styled-components";

export const ProfileHeader = styled.section`
  position: relative;
  display: flex;
  justify-content: center;

  .profile-content {
    position: relative;
    margin-top: 45px;
    display: flex;
    align-items: center;
    flex-direction: column;
  }

  .profile-context {
    display: flex;
    justify-content: center;
    max-width: 1240px;
  }
`;

export const ImageContent = styled.div`
  width: 752px;
  height: 355px;
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  border-radius: 4px;
  background-color: var(--white);
  margin-bottom: 16px;
  padding: 2rem;

  img {
    width: 450px;
    height: 450px;
    object-fit: cover;
  }
`;

export const ProductContent = styled.div`
  width: 752px;
  height: 240px;
  display: flex;
  justify-content: center;
  flex-direction: column;
  border-radius: 4px;
  background-color: var(--white);
  margin-bottom: 40px;
  padding: 2rem;

  .product-details {
    display: flex;
    justify-content: space-between;
    align-items: center;
    margin-bottom: 25px;
  }

  p {
    text-align: right;
    font-family: "Lexend";
    font-style: normal;
    font-weight: 500;
    font-size: 16px;
    color: var(--grey-01);
  }

  h2 {
    font-family: "Lexend";
    font-style: normal;
    font-weight: 600;
    font-size: 20px;
    color: var(--grey-01);
    margin-bottom: 40px;
  }

  .span-btns {
    width: 30%;
    display: flex;
    gap: 12px;
  }

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

  .product-btns-admin {
    display: flex;
    justify-content: start;
    gap: 1rem;
  }
`;

export const DescriptionContent = styled.div`
  width: 752px;
  height: 213px;
  display: flex;
  justify-content: center;
  flex-direction: column;
  border-radius: 4px;
  background-color: var(--white);
  margin-bottom: 16px;
  padding: 2rem;

  h2 {
    font-family: "Lexend";
    font-style: normal;
    font-weight: 600;
    font-size: 20px;
    margin-bottom: 32px;
  }

  p {
    font-family: "Inter";
    font-style: normal;
    font-weight: 400;
    font-size: 16px;
  }
`;

export const BoxImages = styled.div`
  width: 440px;
  height: 377px;
  display: flex;
  justify-content: center;
  flex-direction: column;
  border-radius: 4px;
  background-color: var(--white);
  margin-bottom: 34px;
  padding: 2rem;

  .images {
    display: flex;
    flex-flow: row wrap;
    align-items: flex-start;
    padding: 27px 7px;
    gap: 14px;
  }

  .image-book {
    width: 108px;
    height: 108px;
    display: flex;
    justify-content: center;
    align-items: center;
    background-color: var(--grey-07);
    border: 1px solid var(--grey-05);

    :hover {
      border: 1px solid var(--brand-01);
      cursor: pointer;
    }
  }

  img {
    width: 102px;
    height: 102px;
  }
`;

export const PerfilContent = styled.div`
  width: 440px;
  height: 426px;
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  border-radius: 4px;
  background-color: var(--white);
  margin-bottom: 16px;
  padding: 2rem;

  h2 {
    text-align: center;
    font-family: "Lexend";
    font-style: normal;
    font-weight: 600;
    font-size: 20px;
    color: var(--grey-01);
    margin-bottom: 35px;
  }

  p {
    text-align: center;
    font-family: "Inter";
    font-style: normal;
    font-weight: 400;
    font-size: 16px;
    color: var(--grey-02);
    margin-bottom: 30px;

    overflow: hidden;
    text-overflow: ellipsis;
    display: -webkit-box;
    -webkit-line-clamp: 3;
    -webkit-box-orient: vertical;
  }
`;

export const IconStyled = styled.div`
  margin-bottom: 30px;
  width: 104px;
  height: 104px;
  border-radius: 50%;

  display: flex;
  align-items: center;
  justify-content: center;

  background-color: var(--brand-01);
  color: var(--white);
  cursor: pointer;

  font-family: "Inter";
  font-weight: 500;
  font-size: 36px;
`;
