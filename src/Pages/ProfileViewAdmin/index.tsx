import { Footer } from "../../components/Footer";
import NavbarLogged from "../../components/NavbarLogged";
import { useEffect, useState } from "react";
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
import api from "../../services/api";

function ProfileViewAdmin() {
  const [showCreateProductModal, setShowCreateProductModal] = useState(false);
  const [products,setProducts] = useState<any>([])
  const [productsCar,setProductsCar] = useState<any>([])
  const [productsBike,setProductsBike] = useState<any>([]) 

  const token = localStorage.getItem("@motorsShop:token");
  useEffect(() => {
    api
      .get(`vehicles/`)
      .then((res) => {
        const data = res.data
        setProducts(data);
        const cars = data.filter((element:any) => 
            element?.type_veihcle === "car"
        )
        const bike = data.filter((element:any) => 
          element?.type_veihcle === "bike"
        )
        setProductsCar(cars)
        setProductsBike(bike)
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
          <ButtonLoginStyled>SL</ButtonLoginStyled>
          <ContentTitleStyled>
            <p>Nome do Usuário</p>
            <small>Anunciante</small>
          </ContentTitleStyled>

          <DescriptionProfile>
            Lorem Ipsum is simply dummy text of the printing and typesetting
            industry. Lorem Ipsum has been the industry's standard dummy text
            ever since the 1500s
          </DescriptionProfile>

          <ButtonCreateAnnouncement
            onClick={() => setShowCreateProductModal(true)}
          >
            Criar Anúncio
          </ButtonCreateAnnouncement>
        </ProfileContent>
      </ProfileHeader>
      {
        products.length > 0 && (
          <>
            <CaroselTitle id="cars">Carros</CaroselTitle>
            <CarouselAdmin props={"car"} products={productsCar} />
            <CaroselTitle id="motorcycle">Motos</CaroselTitle>
            <CarouselAdmin props={"motorcycle"} products={productsBike} />
          </>
        )
      }
      <Footer />
    </BackPageStyled>
  );
};

export default ProfileViewAdmin;
