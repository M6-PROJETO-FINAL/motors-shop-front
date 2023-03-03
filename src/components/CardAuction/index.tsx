import {
  AuctionBotton,
  AuctionContainer,
  AuctionContext,
  CardAuctionContainer,
} from "./style";
import { userInitials } from "../../utils/userInitials";
import { BsClock } from "react-icons/bs";
import { BsArrowRight } from "react-icons/bs";

function AuctionCard({ product }: any) {
  return (
    <AuctionContainer>
      <AuctionContext>
        <CardAuctionContainer>
          <div className="card-container">
            <div className="auction-clock">
              <div className="auction-icon-clock">
                <BsClock color="#4529E6" size={20} />
              </div>
              <div className="auction-time-clock">
                <p>{product.time}</p>
              </div>
            </div>
            <h2 className="product-title">{product.title}</h2>
            <p className="product-subtitle">{product.subtitle}</p>
            <div className="div-product-owner">
              <div className="owner-initials">
                <p>{userInitials(product.user.fullName)}</p>
              </div>
              <div>
                <p className="owner-name">{product.user.fullName}</p>
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
        </CardAuctionContainer>

        <AuctionBotton>
          <p>Acessar página do leilão</p>
          <div className="action-svg">
            <BsArrowRight color="#FFFFFF" size={30} />
          </div>
        </AuctionBotton>
      </AuctionContext>
    </AuctionContainer>
  );
}

export default AuctionCard;
