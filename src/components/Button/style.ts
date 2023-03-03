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
  flex-direction: row;
  border-radius: 4px;
  font-weight: 600;
  font-family: "Inter", sans-serif;

  ${(props) => {
    switch (props.colorbutton) {
      case "Grey":
        return css`
          color: var(--whiteFixed);
          background-color: var(--grey-01);
          border: 1px solid var(--grey-01);

          &:hover {
            background-color: var(--grey-02);
            border: 1px solid var(--grey-01);
          }
        `;

      case "Negative":
        return css`
          color: var(--grey2);
          background-color: var(--grey-06);
          border: 1px solid var(--grey-06);

          &:hover {
            background-color: var(--grey-05);
            border: 1px solid var(--grey-05);
          }
        `;

      case "Disable":
        return css`
          color: var(--whiteFixed);
          background-color: var(--grey-05);
          border: 1px solid var(--grey-05);
          cursor: not-allowed;
        `;

      case "Brand":
        return css`
          color: var(--whiteFixed);
          background-color: var(--brand-01);
          border: none;

          &:hover {
            background-color: var(--brand-04);
            color: var(--brand-01);
          }
        `;

      case "Brand2":
        return css`
          color: var(--whiteFixed);
          background-color: var(--brand-02);
          border: 1px solid var(--grey-10);

          &:hover {
            background-color: var(--grey-10);
            border: 1px solid var(--grey-10);

            a {
              color: var(--grey-01);
            }
          }
        `;

      case "BrandNew":
        return css`
          color: var(--whiteFixed);
          background-color: var(--brand-01);
          border: 1px solid var(--grey-10);

          &:hover {
            background-color: var(--brand-02);
            border: 1px solid var(--brand-02);
          }
        `;

      case "BrandOpacity":
        return css`
          color: var(--brand1);
          background-color: var(--brand-04);
          border: 1px solid var(--brand-04);

          &:hover {
            background-color: var(--grey-01);
            border: 1px solid var(--grey-01);
          }
        `;

      case "Light":
        return css`
          color: var(--grey1);
          background-color: var(--grey-10);
          border: 1px solid var(--grey-10);
        `;

      case "LightLogin":
        return css`
          color: var(--grey-02);
          justify-content: flex-end;
          background-color: var(--grey-10);
          border: 1px solid var(--grey-10);
        `;

      case "Outline1":
        return css`
          color: var(--grey-00);
          background-color: transparent;
          border: 1px solid var(--grey-00);

          &:hover {
            background-color: var(--grey-01);
            color: var(--whiteFixed);
            border: 1px solid var(--grey-01);
          }
        `;

      case "Outline2":
        return css`
          color: var(--grey-00);
          background-color: transparent;
          border: 1px solid var(--grey-04);

          &:hover {
            background-color: var(--brand-04);
            border: 1px solid var(--brand-01);
          }
        `;

      case "OutlineBrand":
        return css`
          color: var(--brand1);
          background-color: var(--whiteFixed);
          border: 1px solid var(--brand-01);

          &:hover {
            background-color: var(--brand-04);
            border: 1px solid var(--brand-01);
          }
        `;

      case "Link":
        return css`
          color: var(--grey1);
          background-color: var(--whiteFixed);
          border: 1px solid var(--whiteFixed);

          &:hover {
            background-color: var(--grey-08);
            border: 1px solid var(--grey-08);
          }
        `;

      case "Alert":
        return css`
          color: var(--alert1);
          background-color: var(--alert-3);
          border: 1px solid var(--alert-3);

          &:hover {
            background-color: var(--alert-2);
            border: 1px solid var(--alert-2);
          }
        `;

      case "Sucess":
        return css`
          color: var(--sucess-1);
          background-color: var(--sucess-3);
          border: 1px solid var(--sucess-3);

          &:hover {
            background-color: var(--sucess-2);
            border: 1px solid var(--sucess-2);
          }
        `;

      case "BrandDisable":
        return css`
          color: var(--whiteFixed);
          background-color: var(--brand-03);
          border: 1px solid var(--brand-03);
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
          padding: 0.75rem 1.75rem;
          font-size: 1rem;
        `;
    }
  }};
`;

export const ContainerButtonVehicle = styled.button`
  box-sizing: border-box;
  border: 1.5px solid #fdfdfd;
  height: 48px;
  width: 146px;
  padding: 12px 28px;
  gap: 10px;
  background-color: #5126ea;
  color: #fdfdfd;
  font-size: 16px;
  border-radius: 4px;
  font-family: "Inter";

  cursor: pointer;
  &:hover {
    opacity: 0.9;
  }
  @media ${device.mobile} {
    width: 100%;
  }
`;

export const DivButton = styled.div`
  display: flex;
  gap: 30px;
  justify-content: center;
  margin-top: 50px;

  @media ${device.mobile} {
    align-items: center;
    flex-direction: column;
  }
`;
