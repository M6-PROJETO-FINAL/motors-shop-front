import styled, { css } from "styled-components";
import { device } from "../../Global/media";

interface ButtonProps {
  sizebutton?: string;
  colorbutton?: string;
  width?: string;
}

export const Button = styled.button<ButtonProps>`
  width: ${(props) => props.width};
  display: flex;
  align-items: center;
  justify-content: center;
  border-radius: 4px;
  font-weight: 600;
  font-family: "Inter", sans-serif;

  ${(props) => {
    switch (props.colorbutton) {
      case "Grey":
        return css`
          color: var(--whiteFixed);
          background-color: var(--grey0);
          border: 1px solid var(--grey0);

          &:hover {
            background-color: var(--grey1);
            border: 1px solid var(--grey1);
          }
        `;

      case "Negative":
        return css`
          color: var(--grey2);
          background-color: var(--grey6);
          border: 1px solid var(--grey6);

          &:hover {
            background-color: var(--grey5);
            border: 1px solid var(--grey5);
          }
        `;

      case "Disable":
        return css`
          color: var(--whiteFixed);
          background-color: var(--grey5);
          border: 1px solid var(--grey5);
          cursor: not-allowed;
        `;

      case "Brand":
        return css`
          color: var(--whiteFixed);
          background-color: var(--brand1);
          border: 1px solid var(--brand1);

          &:hover {
            background-color: var(--brand2);
            border: 1px solid var(--brand2);
          }
        `;

      case "Brand2":
        return css`
          color: var(--whiteFixed);
          background-color: var(--brand2);
          border: 1px solid var(--grey10);

          &:hover {
            background-color: var(--grey10);
            border: 1px solid var(--grey10);

            a {
              color: var(--grey1);
            }
          }
        `;

      case "BrandNew":
        return css`
          color: var(--whiteFixed);
          background-color: var(--brand1);
          border: 1px solid var(--grey10);

          &:hover {
            background-color: var(--brand2);
            border: 1px solid var(--brand2);
          }
        `;

      case "BrandOpacity":
        return css`
          color: var(--brand1);
          background-color: var(--brand4);
          border: 1px solid var(--brand4);

          &:hover {
            background-color: var(--grey1);
            border: 1px solid var(--grey1);
          }
        `;

      case "Light":
        return css`
          color: var(--grey1);
          background-color: var(--grey10);
          border: 1px solid var(--grey10);
        `;

      case "LightLogin":
        return css`
          color: var(--grey2);
          justify-content: flex-end;
          background-color: var(--grey10);
          border: 1px solid var(--grey10);
        `;

      case "Outline1":
        return css`
          color: var(--grey0);
          background-color: var(--whiteFixed);
          border: 1px solid var(--grey1);
        `;

      case "Outline2":
        return css`
          color: var(--grey0);
          background-color: var(--whiteFixed);
          border: 1px solid var(--grey4);
        `;

      case "OutlineBrand":
        return css`
          color: var(--brand1);
          background-color: var(--whiteFixed);
          border: 1px solid var(--brand1);

          &:hover {
            background-color: var(--brand4);
            border: 1px solid var(--brand1);
          }
        `;

      case "Link":
        return css`
          color: var(--grey1);
          background-color: var(--whiteFixed);
          border: 1px solid var(--whiteFixed);

          &:hover {
            background-color: var(--grey8);
            border: 1px solid var(--grey8);
          }
        `;

      case "Alert":
        return css`
          color: var(--alert1);
          background-color: var(--alert3);
          border: 1px solid var(--alert3);

          &:hover {
            background-color: var(--alert2);
            border: 1px solid var(--alert2);
          }
        `;

      case "Sucess":
        return css`
          color: var(--sucess1);
          background-color: var(--sucess3);
          border: 1px solid var(--sucess3);

          &:hover {
            background-color: var(--sucess2);
            border: 1px solid var(--sucess2);
          }
        `;

      case "BrandDisable":
        return css`
          color: var(--whiteFixed);
          background-color: var(--brand3);
          border: 1px solid var(--brand3);
          cursor: not-allowed;
        `;

      default:
        return false;
    }
  }}
  ${(props) => {
    switch (props.sizebutton) {
      case "medium":
        return css`
          font-size: 0.875rem;
          padding: 0.25rem 0.7rem;
        `;

      case "login":
        return css`
          font-size: 0.875rem;
          padding: 0.25rem 0rem;
        `;

      default:
        return css`
          padding: 0.35rem 1rem;
          font-size: 1rem;
        `;
    }
  }};
`;



export const ContainerButtonVehicle = styled.button`
  box-sizing: border-box;
  border: 1.5px solid #FDFDFD;
  height: 48px;
  width: 146px;
  padding: 12px 28px;
  gap: 10px;
  background-color: #5126EA;    ;
  color: #FDFDFD;
  font-size: 16px;
  border-radius: 4px;
  font-family: "Inter";
  
  cursor: pointer;
  &:hover {
    opacity: 0.9;
  }
  @media ${device.mobile}{
    width: 100%;
  }
`;

export const DivButton = styled.div`
  display: flex;
  gap: 30px;
  justify-content: center;
  margin-top: 50px;
  
  @media ${device.mobile}{
    align-items: center;
    flex-direction: column;
  }
`