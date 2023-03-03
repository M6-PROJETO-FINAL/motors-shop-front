import styled from "styled-components";
import img from "../../assets/img/auction.jpg"
import { device } from "../../Global/media";


export const Teste1 = styled.div`
width: 100%;
display: flex;
flex-direction: row;
`

export const CardAuctionContainer = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 20px;
  max-width: 735px;
  height: 326px;
  background-image: url(${img});
  background-size: cover;
  flex-direction: column;
  margin-left: 10px;

  @media ${device.laptop}{
        margin: 10px;
        width: 100%;
        
    }

  .card-container{
    display: flex;
    flex-direction: column;
    align-items:flex-start;
    gap: 30px;
    padding: 10px;
    width: 735px;
    height: 326px;
    background:linear-gradient(180deg, rgba(0, 0, 0, 0.29) 0%, #000000 100%);
    margin-bottom: -20px;
  }
  
  .auction-clock{
    display: flex;
    align-items: center;
    justify-content: flex-start;

    width: 123px;
    height: 36px;
    background: #FFFFFF;
    border-radius: 32px;

    p{
      font-family: 'Lexend';
      font-style: normal;
      font-weight: 500;
      font-size: 16px;
      line-height: 20px;
      color: #212529;
    }
  }

  .auction-icon-clock{
    width: 20px;
    height: 20px;
    margin: 6px;
    flex: 0.7;
  }
  .auction-time-clock{
    width: 65px;
    height: 20px;
  }


  .product-title {
    font-family: "Lexend", sans-serif;
    font-style: normal;
    font-weight: 600;
    font-size: 20px;
    line-height: 25px;
    color: #FDFDFD;
    cursor: pointer;
  }

  .product-subtitle {
    font-family: "Inter";
    font-style: normal;
    font-weight: 400;
    font-size: 16px;
    line-height: 28px;
    color: #CED4DA;
    cursor: pointer;
  }

  .div-product-owner {
    display: flex;
    gap: 8px;
    align-items: center;

    .owner-initials {
      display: flex;
      flex-direction: column;
      justify-content: center;
      align-items: center;
      width: 32px;
      height: 32px;
      padding: 8px;
      background-color: #4529E6;
      border-radius: 150px;
      cursor: pointer;

      p {
        font-family: "Inter", sans-serif;
        font-style: normal;
        font-weight: 500;
        font-size: 14px;
        line-height: 0px;
        color: #ffffff;
      }
    }

  .owner-name{
      font-family: "Inter";
      font-style: normal;
      font-weight: 500;
      font-size: 14px;
      line-height: 24px;
      color: #FFFFFF;
      cursor: pointer;
    }
  }

  .product-description{
    display: flex;
    flex-direction: row;
    justify-content: flex-start;
    align-items: center;
    gap: 10px;

  }
  
  .product-details {
    display: flex;
    align-items: center;
    padding: 4px;
    gap: 10px;

    width: 51px;
    height: 32px;
    background: #EDEAFD;
    border-radius: 4px;

    p {
      font-family: "Inter", sans-serif;
      font-style: normal;
      font-weight: 500;
      font-size: 14px;
      line-height: 20px;
      color: #4529E6;
    }
  }

  .product-price{

    p{
    font-family: 'Lexend';
    font-style: normal;
    font-weight: 500;
    font-size: 16px;
    line-height: 20px;
    color: #FFFFFF
  }
    }

    .auction-botton{
      display: flex;
      align-items: center;
      width: 735px;
      height: 62px;
      background: #4529E6;
      padding: 24px 36px;
      gap: 280px;
    
    p{
      font-family: 'Inter';
      font-style: normal;
      font-weight: 600;
      font-size: 16px;
      color: #FFFFFF
    }

    .auction-icon-arrow{
      display: flex;
      flex-direction: column;
      justify-content: space-between;

    }
    }
`;

