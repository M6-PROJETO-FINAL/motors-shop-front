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
import jwt_decode from "jwt-decode";
import { IUser, IVehicle } from "../../context/ProductContext";

function ProductDetails({ productId }: any) {
  const navigate = useNavigate();
  const [advs, setAdvs] = useState([]);
  const [payloadJwt, setPayloadJwt] = useState({} as any);
  const [isPost, setIsPost] = useState(false);
  const [product, setProduct] = useState<IVehicle>();
  const [owner, setOwner] = useState<IUser>();

  const [showPhotoProductModal, setShowPhotoProductModal] = useState(false);
  // const handleClickSeller = () => {
  //   navigate(`/profile/${sellerId}`);
  // };

  const functionCatchAdv = (id: string) => {
    api
      .get(`vehicles/`)
      .then((res) => {
        const data = res.data;
        const advSelect = data.filter((element: any) => element?.id === id);
        setProduct(advSelect[0]);
        setOwner(advSelect[0].user);
      })
      .catch((err) => console.log("Tente novamente mais tarde."));
  };

  useEffect(() => {
    api.get(`comments/${productId}`).then((res) => {
      setAdvs(res.data);
      setIsPost(false);
      if (res.data.length > 0) {
        setProduct(res.data[0].vehicle);
        setOwner(res.data[0].user);
      } else {
        functionCatchAdv(productId);
      }
      const token = localStorage.getItem("@motorsShop:token");
      if (token) {
        const data = jwt_decode(token);
        setPayloadJwt(data);
      }
    });
    // .catch((err) => {
    //   navigate(`/home`);
    //   console.log("Tente novamente mais tarde.");
    // });
  }, [isPost]);

  console.log(product);

  return (
    <ProfileHeader>
      {showPhotoProductModal && (
        <CreatePhotoModal setShowPhotoProductModal={setShowPhotoProductModal} />
      )}

      <div className="profile-context">
        <div className="profile-content">
          <ImageContent>
            <img src={product?.image_cover} alt={product?.title} />
          </ImageContent>

          <ProductContent>
            <h2>{product?.title}</h2>

            <div className="product-details">
              <div className="span-btns">
                <span>{product?.km}</span>
                <span>{product?.year}</span>
              </div>
              <p>
                {Number(product?.price).toLocaleString("pt-BR", {
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
            <p>{product?.description}</p>
          </DescriptionContent>
          {advs.length > 0 && (
            <CommentCard comments={advs} setIsPost={setIsPost} />
          )}

          {product && (
            <PostCommentCard
              userName={payloadJwt?.name || ""}
              advertisementId={product?.id}
              setIsPost={setIsPost}
            />
          )}
        </div>

        <div className="profile-content">
          <BoxImages>
            <h1>Fotos</h1>

            <div className="images">
              <div className="image-book">
                <img
                  src={product?.image_cover}
                  alt=""
                  onClick={() => setShowPhotoProductModal(true)}
                />
              </div>
              <div className="image-book">
                <img src={product?.image_cover} alt="" />
              </div>
              <div className="image-book">
                <img src={product?.image_cover} alt="" />
              </div>
              <div className="image-book">
                <img src={product?.image_cover} alt="" />
              </div>
              <div className="image-book">
                <img src={product?.image_cover} alt="" />
              </div>
              <div className="image-book">
                <img src={product?.image_cover} alt="" />
              </div>
            </div>
          </BoxImages>

          <PerfilContent>
            {owner?.fullName && (
              <IconStyled>{userInitials(owner?.fullName)}</IconStyled>
            )}
            <h2>{owner?.fullName}</h2>
            <p>{"Show"}</p>

            <Button
              type="button"
              colorbutton="Grey"
              width="70%"
              // onClick={() => handleClickSeller()}
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
