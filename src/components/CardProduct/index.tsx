import { CardProductContainer } from "./styles";
import { useNavigate } from "react-router-dom";
import { userInitials } from "../../utils/userInitials";

function CardProduct({ product }: any) {
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
          <img
            src={product.image_cover}
            alt={product.title}
            width={310}
            height={152}
          />
        </div>
        <h2 className="product-title" onClick={() => openProduct(product.id)}>
          {product.title}
        </h2>
        <p className="product-description">{product.description}</p>
        <div className="div-product-owner">
          <div className="owner-initials" onClick={() => handleClickSeller()}>
            {/* <p>{userInitials(product.user.fullName)}</p> */}
            <p>{userInitials("Higor")}</p>
          </div>
          <p className="owner-name" onClick={() => handleClickSeller()}>
            {/* {product.user.fullName} */ "Higor"} 
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

export default CardProduct;
