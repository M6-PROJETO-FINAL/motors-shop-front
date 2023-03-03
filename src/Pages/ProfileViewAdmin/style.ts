import styled from "styled-components";
import { device } from "../../Global/media";

export const BackPageStyled = styled.main`
  background-color: var(--grey-08);
  position: absolute;
`;

export const BackgroundHeaderStyled = styled.div`
  position: absolute;
  width: 100%;
  height: 250px;
  background-color: var(--brand-01);
`;

export const ProfileHeader = styled.section`
  position: relative;
  width: 100%;
  z-index: 1;
  display: flex;
  align-items: center;
  flex-direction: column;
`;

export const ButtonLoginStyled = styled.div`
  width: 6.5rem;
  height: 6.5rem;
  display: flex;
  align-items: center;
  justify-content: center;
  font-size: 2.25rem;
  font-weight: 500;
  font-family: "Inter";
  border: none;
  color: var(--white);
  background-color: var(--brand-01);
  border-radius: 50%;
  gap: 1rem;
  padding: 0 1rem;
  margin-bottom: 24px;
`;

export const ProfileContent = styled.div`
  margin-top: 45px;
  width: 80%;
  height: 60%;
  display: flex;
  justify-content: center;
  flex-direction: column;
  border-radius: 4px;
  background-color: var(--white);
  margin-bottom: 89px;
  padding: 2rem;
`;

export const ContentTitleStyled = styled.div`
  display: flex;
  margin-bottom: 24px;

  @media ${device.mobile} {
    flex-direction: column;
    gap: 1rem;
  }

  p {
    width: 11.25rem;
    font-family: "Lexend";
    font-style: normal;
    font-weight: 600;
    font-size: 1.25rem;
    color: var(--grey-01);
    margin-right: 15px;

    @media ${device.mobile} {
      font-size: 1rem;
    }
  }

  small {
    width: 100px;
    height: 32px;
    font-family: "Inter";
    display: flex;
    flex-direction: row;
    justify-content: center;
    align-items: center;
    font-weight: 500;
    padding: 4px 8px;
    background: #edeafd;
    color: var(--brand-01);
    border-radius: 4px;
    margin-right: 41px;
  }
`;

export const DescriptionProfile = styled.p`
  font-family: "Inter";
  font-style: normal;
  font-weight: 400;
  font-size: 16px;
  margin-bottom: 41px;
  color: var(--grey-03);

  @media ${device.laptop} {
    text-align: justify;
  }
`;

export const ButtonCreateAnnouncement = styled.button`
  width: 200px;
  height: 48px;
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: center;
  padding: 12px 28px;
  border: 1px solid var(--brand-01);
  background-color: transparent;
  font-size: 16px;
  font-family: "Inter";
  font-style: normal;
  font-weight: 600;
  border-radius: 4px;
  color: var(--brand-01);

  &:hover {
    background-color: var(--brand-04);
    border: 2px solid var(--brand-01);
  }
`;
