import styled from "styled-components";
import { device } from "../../Global/media";

export const HeaderStyled = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  width: 100%;
  height: 40%;
  background: #5126EA;
  margin-bottom: 1rem;
  padding: 6rem 3rem;


  h1 {
    font-family: 'Inter';
    font-style: normal;
    font-weight: 700;
    font-size: 44px;
    line-height: 56px;
    color: #FDFDFD;
    text-align: center;
    line-height: 56px;
  }

  h4 {
    font-family: 'Inter';
    font-style: normal;
    font-weight: 400;
    font-size: 16px;
    line-height: 28px;
    color: #F8F9FA;
    text-align: center;
    margin-top: 20px;
  }
`;

export const HeaderContent =styled.div`
    display:flex;
    flex-direction:column;
    justify-content: center;
    align-items: center;
    width: 80%;


    @media ${device.laptop}{
        margin: 10px;
        width: 100%;
        
    }
    
`



