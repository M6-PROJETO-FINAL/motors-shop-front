import Navbar from "../../components/Navbar";
import { Footer } from "../../components/Footer";
import Header from "../../components/Header";
import CarouselProducts from "../../components/CarouselProducts";
import CardAuction from "../../components/CardAuction";
import { DivContainer, Main } from "./style";
import { CaroselTitle } from "./style";
import { productAuction } from "../../utils/auctionProducts";
import { useContext, useEffect, useState } from "react";
import api from "../../services/api";
import { useNavigate } from "react-router";

const HomePage = () => {
  const [products, setProducts] = useState<any>([]);
  const [productsCar, setProductsCar] = useState<any>([]);
  const [productsBike, setProductsBike] = useState<any>([]);

  const token = localStorage.getItem("@motorsShop:token");
  const navigate = useNavigate();

  if (token) {
    navigate(`/profile`);
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
    <Main>
      <Navbar />
      <Header />
      <CaroselTitle>Leilão</CaroselTitle>
      <DivContainer>
        <CardAuction product={productAuction} />
        <CardAuction product={productAuction} />
        <CardAuction product={productAuction} />
      </DivContainer>
      <CaroselTitle id="cars">Carros</CaroselTitle>
      <CarouselProducts props={"car"} products={productsCar} />
      <CaroselTitle id="motorhicle">Motos</CaroselTitle>
      <CarouselProducts props={"motorhicle"} products={productsBike} />
      <Footer />
    </Main>
  );
};

export default HomePage;
