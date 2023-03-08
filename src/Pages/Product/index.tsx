import { Footer } from "../../components/Footer";
import NavbarLogged from "../../components/NavbarLogged";
import ProductDetails from "../../components/ProductDetails";
import { BackgroundHeaderStyled, BackPageStyled } from "./style";
import { useState, useEffect } from "react";
import api from "../../services/api";
import { useLocation } from "react-router";

const ProductPage = () => {

  debugger
  const userId = localStorage.getItem("@motorsShop:userId");
  const token = localStorage.getItem("@motorsShop:token");
  const location = useLocation();
  const product = location.state


  return (
    <BackPageStyled>
      <NavbarLogged />
      <BackgroundHeaderStyled className="background"></BackgroundHeaderStyled>
      <ProductDetails
        product={product}
        productId={product.id}
        sellerId={"Higor"} // Não está vindo no backend
      />
      <Footer />
    </BackPageStyled>
  );
};

export default ProductPage;

