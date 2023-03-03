import { useNavigate } from "react-router-dom";
import { Button } from "../Button/style";
import { userInitials } from "../../utils/userInitials";

import {
  BoxImages,
  DescriptionContent,
  IconStyled,
  ImageContent,
  PerfilContent,
  ProductContent,
  ProfileHeader,
} from "./style";
import CommentCard from "../CommentCard";
import PostCommentCard from "../PostCommentCard";
import { useState } from "react";
import CreatePhotoModal from "../CreatePhotoModal";

function ProductDetails({ product, sellerId }: any) {
  const navigate = useNavigate();

  const [showPhotoProductModal, setShowPhotoProductModal] = useState(false);

  const handleClickSeller = () => {
    navigate(`/profile/${sellerId}`);
  };

  return (
    <ProfileHeader>
      {showPhotoProductModal && (
        <CreatePhotoModal setShowPhotoProductModal={setShowPhotoProductModal} />
      )}

      <div className="profile-context">
        <div className="profile-content">
          <ImageContent>
            <img src={product.coverImage} alt={product.name} />
          </ImageContent>

          <ProductContent>
            <h2>{product.name}</h2>

            <div className="product-details">
              <div className="span-btns">
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
            <div className="product-btns-admin">
              <Button
                type="button"
                colorbutton="Brand"
                width="15%"
                target="_blank"
                as="a"
                href={`https://contate.me/motors-shop`}
              >
                Comprar
              </Button>
            </div>
          </ProductContent>

          <DescriptionContent>
            <h2>Descrição</h2>
            <p>{product.description}</p>
          </DescriptionContent>

          <CommentCard
            userName={product.user.fullName}
            commentDate={product.user.comments[0].date}
            text={product.user.comments[0].text}
            commentId={product.user.comments[0].id}
          />

          <PostCommentCard
            userName={product.user.fullName}
            commentDate={product.user.comments[0].date}
            text={product.user.comments[0].text}
            commentId={product.user.comments[0].id}
          />
        </div>

        <div className="profile-content">
          <BoxImages>
            <h1>Fotos</h1>

            <div className="images">
              <div className="image-book">
                <img
                  src={product.coverImage}
                  alt=""
                  onClick={() => setShowPhotoProductModal(true)}
                />
              </div>
              <div className="image-book">
                <img src={product.coverImage} alt="" />
              </div>
              <div className="image-book">
                <img src={product.coverImage} alt="" />
              </div>
              <div className="image-book">
                <img src={product.coverImage} alt="" />
              </div>
              <div className="image-book">
                <img src={product.coverImage} alt="" />
              </div>
              <div className="image-book">
                <img src={product.coverImage} alt="" />
              </div>
            </div>
          </BoxImages>

          <PerfilContent>
            <IconStyled>{userInitials(product.user.fullName)}</IconStyled>
            <h2>{product.user.fullName}</h2>
            <p>{product.user.description}</p>

            <Button
              type="button"
              colorbutton="Grey"
              width="70%"
              onClick={() => handleClickSeller()}
            >
              Ver todos os anuncios
            </Button>
          </PerfilContent>
        </div>
      </div>
    </ProfileHeader>
  );
}

export default ProductDetails;
