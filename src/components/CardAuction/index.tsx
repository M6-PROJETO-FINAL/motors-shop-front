import { CardAuctionContainer } from "./style";
import { useNavigate } from "react-router-dom";
import { userInitials } from "../../utils/userInitials";
import { BsClock } from "react-icons/bs";
import {BsArrowRight} from "react-icons/bs";
import { Teste1 } from "./style";


function AuctionCard({ product }: any) {
  const navigate = useNavigate();


  return (
    <Teste1>
      <CardAuctionContainer>
        <div className="card-container">
          <div className="auction-clock">
            <div className="auction-icon-clock">
              <BsClock color="#4529E6" size={20}/>
            </div>
            <div className="auction-time-clock">
              <p>{product.time}</p>
            </div>
          </div>
            <h2 className="product-title">
              {product.title}
            </h2>
            <p className="product-subtitle">{product.subtitle}</p>
            <div className="div-product-owner">
              <div className="owner-initials" >
                <p>{userInitials(product.user.fullName)}</p>
              </div>
              <div>
                <p className="owner-name">
                  {product.user.fullName}
                </p>
              </div>
            </div>
            <div className="product-description">
              <div className="product-details">
                <p>{product.year}</p>
              </div>
              <div className="product-details">
                <p>{product.km}</p> 
              </div>
              <div className="product-price">
                <p>{product.price}</p> 
              </div>
            </div>
        </div>
        <div className="auction-botton">
          <div>
            <p>Acessar página do leilão</p>
          </div>
          <div>
            <BsArrowRight color="#FFFFFF" size={30}/>
          </div>
        </div> 
    </CardAuctionContainer>
    </Teste1>
    
  );
}

export default AuctionCard;