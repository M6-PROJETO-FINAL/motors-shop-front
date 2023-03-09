import { Footer } from "../../components/Footer";
import NavbarLogged from "../../components/NavbarLogged";
import ProductDetails from "../../components/ProductDetails";
import { BackgroundHeaderStyled, BackPageStyled } from "./style";
import { useState, useEffect } from "react";
import api from "../../services/api";
import { useLocation, useParams } from "react-router";

const ProductPage = () => {
  const token = localStorage.getItem("@motorsShop:token");
  const { uuid } = useParams<{ uuid: string }>();

  console.log(uuid);

  return (
    <BackPageStyled>
      <NavbarLogged />
      <BackgroundHeaderStyled className="background"></BackgroundHeaderStyled>
      <ProductDetails productId={uuid} />
      <Footer />
    </BackPageStyled>
  );
};

export default ProductPage;
