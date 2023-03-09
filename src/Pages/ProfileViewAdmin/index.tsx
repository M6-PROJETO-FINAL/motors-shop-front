import { Footer } from "../../components/Footer";
import NavbarLogged from "../../components/NavbarLogged";
import { useEffect, useContext, useState } from "react";
import {
  ProfileContent,
  ProfileHeader,
  ContentTitleStyled,
  ButtonLoginStyled,
  DescriptionProfile,
  ButtonCreateAnnouncement,
  BackgroundHeaderStyled,
  BackPageStyled,
} from "./style";
import CreateProductModal from "../../components/CreateProductModal";
import { CaroselTitle } from "../Home/style";
import CarouselAdmin from "../../components/CarouselAdmin";
import { AuthContext } from "../../context/AuthContext";
import { userInitials } from "../../utils/userInitials";
import { productAuction } from "../../utils/auctionProducts";
import { DivContainer } from "../Home/style";
import CardAuction from "../../components/CardAuction";
import api from "../../services/api";
import CarouselProducts from "../../components/CarouselProducts";
import { Navigate, useNavigate } from "react-router";

function ProfileViewAdmin() {
  const { user } = useContext(AuthContext);
  const [showCreateProductModal, setShowCreateProductModal] = useState(false);

  const [products, setProducts] = useState<any>([]);
  const [productsCar, setProductsCar] = useState<any>([]);
  const [productsBike, setProductsBike] = useState<any>([]);

  const token = localStorage.getItem("@motorsShop:token");

  const navigate = useNavigate();
  if (!token) {
    navigate(`/home`);
  }

  useEffect(() => {
    api
      .get(`vehicles/`)
      .then((res) => {
        const data = res.data;
        setProducts(data);
        const cars = data.filter(
          (element: any) => element?.type_veihcle === "car"
        );
        const bike = data.filter(
          (element: any) => element?.type_veihcle === "motorhicle"
        );
        setProductsCar(cars);
        setProductsBike(bike);
      })
      .catch((err) => console.log("Tente novamente mais tarde."));
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  return (
    <BackPageStyled>
      {showCreateProductModal && (
        <CreateProductModal
          setShowCreateProductModal={setShowCreateProductModal}
        />
      )}
      <NavbarLogged />

      <BackgroundHeaderStyled className="background"></BackgroundHeaderStyled>

      <ProfileHeader>
        <ProfileContent>
          <ButtonLoginStyled>{userInitials(user.fullName)}</ButtonLoginStyled>
          <ContentTitleStyled>
            {user && <p>{user.fullName}</p>}
            <small>{user.isSeller ? "Anunciante" : "Comprador"}</small>
          </ContentTitleStyled>

          <DescriptionProfile>{user.description}</DescriptionProfile>

          <ButtonCreateAnnouncement
            onClick={() => setShowCreateProductModal(true)}
          >
            Criar Anúncio
          </ButtonCreateAnnouncement>
        </ProfileContent>
      </ProfileHeader>

      <CaroselTitle>Leilão</CaroselTitle>
      <DivContainer>
        <CardAuction product={productAuction} />
        <CardAuction product={productAuction} />
        <CardAuction product={productAuction} />
      </DivContainer>

      {/* <CaroselTitle id="cars">Carros</CaroselTitle>
      <CarouselProducts props={"car"} arr={products} />
      <CaroselTitle id="motorhicle">Motos</CaroselTitle>
      <CarouselProducts props={"motorhicle"} arr={products} /> */}

      {products ? (
        <>
          <CaroselTitle id="cars">Carros</CaroselTitle>
          <CarouselAdmin props={"car"} products={productsCar} />
          <CaroselTitle id="motorhicle">Motos</CaroselTitle>
          <CarouselAdmin props={"motorhicle"} products={productsBike} />
        </>
      ) : (
        <>
          <CaroselTitle id="cars">Carros</CaroselTitle>
          <CarouselProducts props={"car"} arr={products} />
          <CaroselTitle id="motorhicle">Motos</CaroselTitle>
          <CarouselProducts props={"motorhicle"} arr={products} />
        </>
      )}

      <Footer />
    </BackPageStyled>
  );
}

export default ProfileViewAdmin;
