import { Footer } from "../../components/Footer";
import NavbarLogged from "../../components/NavbarLogged";
import { useContext, useState } from "react";
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

export const products = [
  {
    id: 1,
    name: "Gol",
    description: "Carro bom, um clássico!",
    km: 25.0,
    year: 1996,
    coverImage:
      "https://cdn.wheel-size.com/automobile/body/volkswagen-gol-1995-1999-1486457284.69.jpeg",
    price: 5.0,
    type: "car",
    user: {
      id: 1,
      fullName: "Erica Lopes",
      description: "vendedora de carros",
      cellPhone: "1499819373",
      comments: [
        {
          id: "1",
          text: "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.",
          date: "01/03/23",
        },
        {
          id: "2",
          text: "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.",
          date: "01/03/23",
        },
        {
          id: "3",
          text: "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.",
          date: "01/03/23",
        },
      ],
    },
  },
  {
    id: 2,
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
      comments: {
        id: "1",
        text: "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.",
        date: "01/03/23",
      },
    },
  },
  {
    id: 3,
    name: "GS-500",
    description: "um clássico!",
    km: 25.0,
    year: 1996,
    coverImage:
      "https://p.turbosquid.com/ts-thumb/q0/BbBmqk/8l7xTpeD/0/jpg/1401122241/1920x1080/fit_q99/7e1bce7e8a8ba1335ab81feb068745a1dbef763f/0.jpg",
    price: 5.0,
    type: "motorcycle",
    user: {
      id: 1,
      fullName: "Erica Lopes",
      description: "vendedora de carros",
      cellPhone: "1499819373",
      comments: {
        id: "1",
        text: "Texto lindão renderizado",
        date: "01/03/23",
      },
    },
  },
  {
    id: 4,
    name: "Kawasaki Ninja",
    description: "um clássico!",
    km: 25.0,
    year: 1996,
    coverImage:
      "https://kawasaki-global-admin.com/ContentStorage/KMB/Products/5489/c7122247-9d3e-4574-ba23-f59cf841833f.png?w=767",
    price: 5.0,
    type: "motorcycle",
    user: {
      id: 1,
      fullName: "Erica Lopes",
      description: "vendedora de carros",
      cellPhone: "1499819373",
      comments: {
        id: "1",
        text: "Texto lindão renderizado",
        date: "01/03/23",
      },
    },
  },
  {
    id: 5,
    name: "Kawasaki Ninja",
    description: "um clássico!",
    km: 25.0,
    year: 1996,
    coverImage:
      "https://kawasaki-global-admin.com/ContentStorage/KMB/Products/5489/c7122247-9d3e-4574-ba23-f59cf841833f.png?w=767",
    price: 5.0,
    type: "motorcycle",
    user: {
      id: 1,
      fullName: "Erica Lopes",
      description: "vendedora de carros",
      cellPhone: "1499819373",
      comments: {
        id: "1",
        text: "Texto lindão renderizado",
        date: "01/03/23",
      },
    },
  },
  {
    id: 6,
    name: "Kawasaki Ninja",
    description: "um clássico!",
    km: 25.0,
    year: 1996,
    coverImage:
      "https://kawasaki-global-admin.com/ContentStorage/KMB/Products/5489/c7122247-9d3e-4574-ba23-f59cf841833f.png?w=767",
    price: 5.0,
    type: "motorcycle",
    user: {
      id: 1,
      fullName: "Erica Lopes",
      description: "vendedora de carros",
      cellPhone: "1499819373",
      comments: {
        id: "1",
        text: "Texto lindão renderizado",
        date: "01/03/23",
      },
    },
  },
  {
    id: 7,
    name: "Kawasaki Ninja",
    description: "um clássico!",
    km: 25.0,
    year: 1996,
    coverImage:
      "https://kawasaki-global-admin.com/ContentStorage/KMB/Products/5489/c7122247-9d3e-4574-ba23-f59cf841833f.png?w=767",
    price: 5.0,
    type: "motorcycle",
    user: {
      id: 1,
      fullName: "Erica Lopes",
      description: "vendedora de carros",
      cellPhone: "1499819373",
      comments: {
        id: "1",
        text: "Texto lindão renderizado",
        date: "01/03/23",
      },
    },
  },
  {
    id: 8,
    name: "Gol",
    description: "Carro bom, um clássico!",
    km: 25.0,
    year: 1996,
    coverImage:
      "https://cdn.wheel-size.com/automobile/body/volkswagen-gol-1995-1999-1486457284.69.jpeg",
    price: 5.0,
    type: "car",
    user: {
      id: 1,
      fullName: "Erica Lopes",
      description: "vendedora de carros",
      cellPhone: "1499819373",
      comments: {
        id: "1",
        text: "Texto lindão renderizado",
        date: "01/03/23",
      },
    },
  },
  {
    id: 9,
    name: "Gol",
    description: "Carro bom, um clássico!",
    km: 25.0,
    year: 1996,
    coverImage:
      "https://cdn.wheel-size.com/automobile/body/volkswagen-gol-1995-1999-1486457284.69.jpeg",
    price: 5.0,
    type: "car",
    user: {
      id: 1,
      fullName: "Erica Lopes",
      description: "vendedora de carros",
      cellPhone: "1499819373",
      comments: {
        id: "1",
        text: "Texto lindão renderizado",
        date: "01/03/23",
      },
    },
  },
  {
    id: 10,
    name: "Gol",
    description: "Carro bom, um clássico!",
    km: 25.0,
    year: 1996,
    coverImage:
      "https://cdn.wheel-size.com/automobile/body/volkswagen-gol-1995-1999-1486457284.69.jpeg",
    price: 5.0,
    type: "car",
    user: {
      id: 1,
      fullName: "Erica Lopes",
      description: "vendedora de carros",
      cellPhone: "1499819373",
      comments: {
        id: "1",
        text: "Texto lindão renderizado",
        date: "01/03/23",
      },
    },
  },
];

const ProfileViewAdmin = () => {
  const { user } = useContext(AuthContext);
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
          <ButtonLoginStyled>{userInitials(user.fullName)}</ButtonLoginStyled>
          <ContentTitleStyled>
            <p>{user.fullName}</p>
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

      <CaroselTitle id="cars">Carros</CaroselTitle>
      <CarouselAdmin props={"car"} id={products[0].user.id} />
      <CaroselTitle id="motorcycle">Motos</CaroselTitle>
      <CarouselAdmin props={"motorcycle"} id={products[0].user.id} />
      <Footer />
    </BackPageStyled>
  );
};

export default ProfileViewAdmin;
