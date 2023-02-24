import styled from "styled-components";
import { device } from "../../Global/media";

export const NavStyled = styled.nav`
  width: 100%;
  height: 85px;
  display: flex;
  justify-content: center;
  background-color: var(--white);
  align-items: center;
  border-bottom: 2px solid var(--grey-07);
  font-family: "Inter";
`;

export const NavContent = styled.div`
  position: absolute;
  max-width: 1600px;
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 0 60px;
`;

export const Logotipo = styled.div`
  width: 200px;
  padding: 15px 0;
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
    position: static;
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
    position: static;
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
      padding: 1rem 0;
      font-weight: 600;
    }
  }
`;

export const ButtonLoginStyled = styled.button.attrs((props: PropTypeBg) => ({
  visible: props.visible,
}))<PropTypeBg>`
  margin-left: 2.5rem;
  width: 2rem;
  height: 2rem;
  display: flex;
  align-items: center;
  justify-content: center;
  font-size: 0.9rem;
  font-weight: 800;
  font-family: "Inter";
  border: none;
  color: var(--brand-01);
  background-color: var(--brand-01);
  color: var(--white);
  border-radius: 50%;
  gap: 1rem;
  padding: 0 1rem;
  cursor: pointer;

  &:hover {
    background-color: var(--brand-03);
  }

  @media ${device.laptop} {
    display: none;
    overflow: hidden;
  }
`;

export const ButtonRegisterStyled = styled.p`
  flex-wrap: nowrap;
  flex-direction: row;
  flex-flow: row nowrap;
  font-size: 1rem;
  font-family: "Inter";
  font-weight: 400;
  border: none;
  margin-left: 20px;
  color: var(--grey-02);
  background-color: transparent;

  &:hover {
    color: var(--brand-01);
  }

  @media ${device.laptop} {
    display: none;
    overflow: hidden;
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

export const EditPerfilHeaderModalStyled = styled.div`
  display: none;
  overflow: hidden;

  @media ${device.laptop} {
    display: block;
    margin: 1rem 0;

    .titleEditHeader {
      display: flex;
      align-items: center;
      margin-bottom: 1.5rem;

      > svg {
        display: block;
        top: 20px;
        width: 25px;
        margin-right: 0.5rem;
        cursor: pointer;
        color: var(--grey-02);
      }
    }

    .buttonsEditHeader {
      display: flex;
      flex-direction: column;
      gap: 1.9rem;
    }

    button {
      font-family: "Inter";
      font-size: 1rem;
      background-color: transparent;
      border: none;
      text-align: left;
      font-weight: 400;
      color: var(--grey-02);
      cursor: pointer;
      outline: none;
      flex-flow: nowrap;
      gap: 1rem;

      &:hover {
        color: var(--brand-01);
      }
    }
  }
`;

<<<<<<< HEAD
=======
export const ButtonsEditHeader = styled.div<PropTypeBg>`
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
  height: 230px;
  width: 300px;
  padding: 30px;
  border-radius: 5px;
  box-shadow: 1px 6px 17px -4px rgba(161, 158, 161, 1);

  > svg {
    display: block;
    position: fixed;
    top: 20px;
    right: -110px;
    cursor: pointer;
  }

  button {
    font-family: "Inter";
    font-size: 1rem;
    background-color: transparent;
    border: none;
    text-align: left;
    font-weight: 400;
    color: var(--grey-02);
    cursor: pointer;
    outline: none;
    flex-flow: nowrap;
    padding-bottom: 1.8rem;

    &:hover {
      color: var(--brand-01);
    }
  }

  @media ${device.laptop} {
    display: none;
    overflow: hidden;
  }
`;
>>>>>>> a84fab9f0985e5cc457c430e73a966ae7e1d76a4
