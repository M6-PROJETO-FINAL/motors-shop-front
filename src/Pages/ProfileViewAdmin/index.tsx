import CarouselProducts from "../../components/CarouselProducts";
import { Footer } from "../../components/Footer";
import NavbarLogged from "../../components/NavbarLogged";
import { useState } from "react";
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

const products = [
  {
    id: 1,
    name: "Gol",
    description: "Carro bom, um clássico!",
    km: 25.0,
    year: 1996,
    coverImage: "https://cdn.wheel-size.com/automobile/body/volkswagen-gol-1995-1999-1486457284.69.jpeg",
    price: 5.0,
    type: "car",
    user: {
      id: 1,
      fullName: "Erica Lopes",
      description: "vendedora de carros",
      cellPhone: "1499819373",
    },
  },
  {
    id:2,
    name: "Golf",
    description: "um clássico!",
    km: 25.0,
    year: 1996,
    coverImage: "https://heycar.com.br/images/2018/Maio/Golf-1995.jpg",
    price: 5.0,
    type: "car",
    user: {
      id: 1,
      fullName: "Erica Lopes",
      description: "vendedora de carros",
      cellPhone: "1499819373",
    },
  },
  {
    id:3,
    name: "Golf",
    description: "um clássico!",
    km: 25.0,
    year: 1996,
    coverImage: "https://heycar.com.br/images/2018/Maio/Golf-1995.jpg",
    price: 5.0,
    type: "motocycle",
    user: {
      id: 1,
      fullName: "Erica Lopes",
      description: "vendedora de carros",
      cellPhone: "1499819373",
    },
  },
];


const ProfileViewAdmin = () => {
  const [showCreateProductModal, setShowCreateProductModal] = useState(false);

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
      <CarouselProducts props={"car"}  arr={products} />
      <Footer />
    </BackPageStyled>
  );
};

export default ProfileViewAdmin;
