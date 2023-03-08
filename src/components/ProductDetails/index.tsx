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
import { useEffect, useState } from "react";
import CreatePhotoModal from "../CreatePhotoModal";
import api from "../../services/api";
import jwt_decode from "jwt-decode"

function ProductDetails({ product, sellerId }: any) {
  const navigate = useNavigate();
  const [advs,setAdvs] = useState([])
  const [payloadJwt,setPayloadJwt] = useState({} as any) 
  const [isPost,setIsPost] = useState(false)

  const [showPhotoProductModal, setShowPhotoProductModal] = useState(true);
  const handleClickSeller = () => {
    navigate(`/profile/${sellerId}`);
  };

  useEffect(() => {
    api
      .get(`comments/${product.id}`)
      .then((res) => {
        setAdvs(res.data)
        setIsPost(false)
        const token = localStorage.getItem("@motorsShop:token");
        if(token){
          const data = jwt_decode(token)
          setPayloadJwt(data)
        }
      })
      .catch((err) => console.log("Tente novamente mais tarde."));
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [isPost]);

  return (
    <ProfileHeader>
      {showPhotoProductModal && (
        <CreatePhotoModal setShowPhotoProductModal={setShowPhotoProductModal} />
      )}

      <div className="profile-context">
        <div className="profile-content">
          <ImageContent>
            <img src={product.image_cover} alt={product.title} />
          </ImageContent>

          <ProductContent>
            <h2>{product.title}</h2>

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
          {advs.length > 0 && 
              <CommentCard
                  comments={advs}
                  setIsPost={setIsPost}
              />
          }
     
         <PostCommentCard
            userName={payloadJwt?.name || ""}
            advertisementId={product.id}
            setIsPost={setIsPost}
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
            {/* <IconStyled>{userInitials(product.user.fullName)}</IconStyled> */}
            <IconStyled>{userInitials("Higor")}</IconStyled>
            <h2>{"Higor"}</h2>
            <p>{"Show"}</p>

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

