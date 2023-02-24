import styled from "styled-components";
import { device } from "./media";


export const DivButton = styled.div`
  display: flex;
  gap: 30px;
  justify-content: center;
  margin-top: 50px;
  

  @media ${device.mobile}{
    align-items: center;
    flex-direction: column;
  }
`;

export const ContainerButtonVehicle = styled.button`
  box-sizing: border-box;
  border: 1.5px solid #FDFDFD;
  height: 48px;
  width: 146px;
  padding: 12px 28px;
  gap: 10px;
  background-color: #5126EA; 
  color: #FDFDFD;
  font-size: 16px;
  border-radius: 4px;
  font-family: "Inter";
`;

export const Grey1Button = styled.button`
    display: flex;
    flex-direction: row;
    justify-content: center;
    align-items: center;
    padding: 12px 28px;

    width: 206px;
    height: 48px;
    font-size: 1rem;
    font-style: normal;
    font-family: "Inter";
    font-weight: 600;
    border-radius: 4px;

    color: #FFFFFF; 
    border: 1.5px solid #0B0D0D;
    background-color: #0B0D0D;

    &:hover {
        border: 1.5px solid #212529;
        background-color: #212529;
    }
`;

export const NegativeButton = styled.button`
    display: flex;
    flex-direction: row;
    justify-content: center;
    align-items: center;

    width: 206px;
    height: 48px;
    font-size: 1rem;
    font-family: "Inter";
    font-style: normal;
    font-weight: 600;
    border-radius: 4px;

    color: #495057; 
    border: 1.5px solid #DEE2E6;
    background-color: #DEE2E6;

    &:hover {
        border: 2px solid #CED4DA;
        background-color: #CED4DA;
    }
`;

export const DisableButton = styled.button`
    display: flex;
    flex-direction: row;
    justify-content: center;
    align-items: center;
    
    width: 206px;
    height: 48px;
    font-size: 1rem;
    font-family: "Inter";
    font-style: normal;
    font-weight: 600;
    border-radius: 4px;

    color: #FFFFFF; 
    border: 1.5px solid #CED4DA;
    background-color: #CED4DA;
`;
    
export const Brand1Button = styled.button`
    display: flex;
    flex-direction: row;
    justify-content: center;
    align-items: center;
    
    width: 206px;
    height: 48px;
    font-size: 1rem;
    font-family: "Inter";
    font-style: normal;
    font-weight: 600;
    border-radius: 4px;

    color: #FFFFFF; 
    border: 1.5px solid #4529E6;
    background-color: #4529E6;

    &:hover {
        border: 1.5px solid #5126EA;
        background-color: #5126EA;
    }
`;

export const BrandOpacityButton = styled.button`
    display: flex;
    flex-direction: row;
    justify-content: center;
    align-items: center;
    
    width: 206px;
    height: 48px;
    font-size: 1rem;
    font-family: "Inter";
    font-style: normal;
    font-weight: 600;
    border-radius: 4px;

    color: #4529E6; 
    border: 1.5px solid #EDEAFD;
    background-color: #EDEAFD;
`;

export const LightButton = styled.button`
    display: flex;
    flex-direction: row;
    justify-content: center;
    align-items: center;
    
    width: 206px;
    height: 48px;
    font-size: 1rem;
    font-family: "Inter";
    font-style: normal;
    font-weight: 600;
    border-radius: 4px;

    color: #212529; 
    border: 1.5px solid var(--gray-10);
    background-color: var(--gray-10);
`;

export const OutlineLightButton = styled.button`
    display: flex;
    flex-direction: row;
    justify-content: center;
    align-items: center;
    
    width: 206px;
    height: 48px;
    font-size: 1rem;
    font-family: "Inter";
    font-style: normal;
    font-weight: 600;
    border-radius: 4px;

    color: #FDFDFD;
    border: 1.5px solid #FDFDFD;
    background-color: #F8F9FA;

    &:hover {
        color: #212529;
        border: 1.5px solid #FDFDFD;
        background-color: #FDFDFD;
    }
`;    

export const Outline1Button = styled.button`
    display: flex;
    flex-direction: row;
    justify-content: center;
    align-items: center;
    
    width: 206px;
    height: 48px;
    font-size: 1rem;
    font-family: "Inter";
    font-style: normal;
    font-weight: 600;
    border-radius: 4px;

    color: #0B0D0D;
    border: 1.5px solid #0B0D0D;
    background-color: #F1F3F5;
`;

export const Big45Button = styled.button`
    display: flex;
    flex-direction: row;
    justify-content: center;
    align-items: center;
    
    width: 206px;
    height: 48px;
    font-size: 1rem;
    font-family: "Inter";
    font-style: normal;
    font-weight: 600;
    border-radius: 4px;

    color: #FDFDFD;
    border: 1.5px solid #212529;
    background-color: #212529;
`; 

export const Outline2Button = styled.button`
    display: flex;
    flex-direction: row;
    justify-content: center;
    align-items: center;
    
    width: 206px;
    height: 48px;
    font-size: 1rem;
    font-family: "Inter";
    font-style: normal;
    font-weight: 600;
    border-radius: 4px;

    color: #0B0D0D;
    border: 1.5px solid #ADB5BD;
    background-color: #F7F7F7;

    &:hover {
        color: #FDFDFD;
        border: 1.5px solid #212529;
        background-color: #212529;
    }
`;   

export const OutlineBrand1Button = styled.button`
    display: flex;
    flex-direction: row;
    justify-content: center;
    align-items: center;
    
    width: 206px;
    height: 48px;
    font-size: 1rem;
    font-family: "Inter";
    font-style: normal;
    font-weight: 600;
    border-radius: 4px;
    
    color: #4529E6;
    border: 1.5px solid #4529E6;
    background-color: #F7F7F7;

    &:hover {
        color: #4529E6;
        border: 1.5px solid #4529E6;
        background-color: #EDEAFD;
    }
`;  

export const LinkButton = styled.button`
    display: flex;
    flex-direction: row;
    justify-content: center;
    align-items: center;
    
    width: 206px;
    height: 48px;
    font-size: 1rem;
    font-family: "Inter";
    font-style: normal;
    font-weight: 600;
    border-radius: 4px;
    
    color: #0B0D0D;
    border: 1.5px solid transparent;
    background-color: transparent;

    &:hover {
        color: #0B0D0D;
        border: 1.5px solid transparent;
        background-color: #EDEAFD;
    }
`; 

export const AlertButton = styled.button`
    display: flex;
    flex-direction: row;
    justify-content: center;
    align-items: center;
    
    width: 206px;
    height: 48px;
    font-size: 1rem;
    font-family: "Inter";
    font-style: normal;
    font-weight: 600;
    border-radius: 4px;
    
    color: #CD2B31;
    border: 1.5px solid #FFE5E5;
    background-color: #FFE5E5;

    &:hover {
        color: #CD2B31;
        border: 1.5px solid  #FDD8D8;
        background-color: #FDD8D8;
    }
`;    

export const SucessButton = styled.button`
    display: flex;
    flex-direction: row;
    justify-content: center;
    align-items: center;
    
    width: 206px;
    height: 48px;
    font-size: 1rem;
    font-family: "Inter";
    font-style: normal;
    font-weight: 600;
    border-radius: 4px;
    
    color: #18794E;
    border: 1.5px solid  #DDF3E4;
    background-color:  #DDF3E4;

    &:hover {
        color: #18794E;
        border: 1.5px solid #CCEBD7;
        background-color: #CCEBD7;
    }
`;    

export const BrandDisableButton = styled.button`
    display: flex;
    flex-direction: row;
    justify-content: center;
    align-items: center;
    
    width: 206px;
    height: 48px;
    font-size: 1rem;
    font-family: "Inter";
    font-style: normal;
    font-weight: 600;
    border-radius: 4px;
    
    color: #EDEAFD;
    border: 1.5px solid #B0A6F0;
    background-color: #B0A6F0;
`;
