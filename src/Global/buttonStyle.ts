import styled from "styled-components";
import { device } from "./media";


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