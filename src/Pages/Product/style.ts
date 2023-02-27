import styled from "styled-components";
import { device } from "../../Global/media";

export const BackgroundHeaderStyled = styled.div`
  position: absolute;
  width: 100%;
  height: 450px;
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

  h1 {
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
`;
