import styled from "styled-components";
import { device } from "../../Global/media";

export const NavStyled = styled.nav`
  width: 100%;
  height: 85px;
  display: flex;
  justify-content: center;
  align-items: center;
  border-bottom: 2px solid var(--grey-07);
  font-family: "Inter";
`;

export const NavContent = styled.div`
  max-width: 1600px;
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 0 60px;
`;

export const Logotipo = styled.div`
  width: 200px;
  padding: 15px 0;

  @media ${device.mobile} {
    width: 150px;
  }
`;

type PropTypeBg = {
  visible: boolean;
};

export const MenuIconStyled = styled.div.attrs((props: PropTypeBg) => ({
  visible: props.visible,
}))<PropTypeBg>`
  width: 2rem;
  height: 2rem;
  display: flex;
  align-items: center;
  top: 20px;
  right: 60px;
  position: absolute;
  z-index: 4;
  height: 40px;
  color: var(--grey-03);
  overflow: hidden;
  display: none;

  @media ${device.laptop} {
    display: flex;
    align-items: center;
    position: fixed;
    cursor: pointer;
  }
`;

export const MenuLinks = styled.ul<PropTypeBg>`
  width: 700px;
  display: flex;
  align-items: center;
  flex-flow: row nowrap;
  overflow: hidden;
  justify-content: space-between;
  font-size: 1rem;

  > svg {
    display: none;
    overflow: hidden;
  }

  li {
    display: block;
    text-align: center;
  }

  a {
    font-weight: 400;
    color: var(--grey-02);
    cursor: pointer;
    outline: none;
  }

  a:hover {
    color: var(--brand-01);
  }

  @media ${device.laptop} {
    display: ${({ visible }: PropTypeBg) => (visible ? "block" : "none")};
    flex-flow: column nowrap;
    backdrop-filter: blur(3px);
    background: rgb(255, 255, 255);
    background: linear-gradient(
      90deg,
      rgba(255, 255, 255, 0.8668555240793201) 0%,
      rgba(253, 253, 253, 0.6515580736543909) 53%,
      rgba(255, 255, 255, 1) 100%
    );
    position: fixed;
    z-index: 4;
    top: 20px;
    right: 40px;
    overflow: hidden;
    height: 430px;
    width: 300px;
    padding: 15px;
    border-radius: 5px;
    box-shadow: 1px 6px 17px -4px rgba(161, 158, 161, 1);

    > svg {
      display: block;
      position: fixed;
      top: 20px;
      right: -110px;
      cursor: pointer;
    }

    li {
      text-align: left;
      padding: 1.8rem 0;
      font-weight: 600;
    }
  }
`;

export const ButtonLoginStyled = styled.button`
  font-size: 1rem;
  font-family: "Inter";
  border: none;
  font-weight: 400;
  color: var(--brand-01);
  background-color: transparent;
  gap: 1rem;
  padding: 0 1rem;
  @media ${device.laptop} {
    text-align: left;
    padding: 2rem 0;
    margin-bottom: 1rem;
  }
`;

export const ButtonRegisterStyled = styled.button`
  font-size: 1rem;
  font-family: "Inter";
  font-weight: 500;
  border: 2px solid var(--grey-04);
  padding: 10px;
  color: var(--grey-02);
  border-radius: 5px;
  background-color: transparent;

  &:hover {
    color: var(--brand-01);
    border: 2px solid var(--brand-01);
    background-color: var(--brand-04);
  }

  @media ${device.laptop} {
    padding: 10px;
  }
`;

export const DivLineHeaderStyled = styled.div`
  width: 1px;
  height: 85px;
  border: 1px solid var(--grey-07);
  @media ${device.laptop} {
    width: 270px;
    align-items: center;
    height: 2px;
    z-index: 4;
  }
`;
