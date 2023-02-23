import { CardProductContainer } from "./styles";
import { useNavigate } from "react-router-dom";
import { userInitials } from "../../utils/userInitials";

function CardProdut({ product }: any) {
  const navigate = useNavigate();

  const openProduct = (id: string) => {
    window.scrollTo(0, 0);
    navigate(`/product/${id}`);
  };

  const handleClickSeller = () => {
    navigate(`/profile/${product.user.id}`);
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
          <p>{userInitials(product.user.fullName)}</p>
        </div>
        <p className="owner-name" onClick={() => handleClickSeller()}>
          {product.user.fullName}
        </p>
      </div>
      <div className="product-details">
        <div>
          <span>{product.km} KM</span>
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

export default CardProdut;
