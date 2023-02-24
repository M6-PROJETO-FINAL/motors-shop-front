import { CardProductContainer } from "./style";
import { useNavigate } from "react-router-dom";
import { userInitials } from "../../utils/userInitials";

function CardProdutOwner({ product, sellerName, sellerId }: any) {
  const navigate = useNavigate();

  const openProduct = (id: string) => {
    window.scrollTo(0, 0);
    navigate(`/product/${id}`);
  };

  const handleClickSeller = () => {
    navigate(`/profile/${sellerId}`);
  };

  return (
    <CardProductContainer>
      <div className="product-image" onClick={() => openProduct(product.id)}>
        <img src={product.coverImage} alt={product.name} width={310} />
      </div>
      <h2 className="product-title" onClick={() => openProduct(product.id)}>
        {product.name}
      </h2>
      <p className="product-description">{product.description}</p>
      <div className="div-product-owner">
        <div className="owner-initials" onClick={() => handleClickSeller()}>
          <p>{userInitials(sellerName)}</p>
        </div>
        <p className="owner-name" onClick={() => handleClickSeller()}>
          {sellerName}
        </p>
      </div>
      <div className="product-details">
        <div>
          <span>{product.km}</span>
          <span>{product.year}</span>
        </div>
        <p>
          {Number(product.price).toLocaleString("pt-BR", {
            style: "currency",
            currency: "BRL",
          })}
        </p>
      </div>
    </CardProductContainer>
  );
}

export default CardProdutOwner;
