import CardProduct from "../CardProduct";
import { CarouselProductsContainer } from "./styles";
import { useContext, useEffect, useState } from "react";
import { CheckTypeContext } from "../../context/CheckTypeContext";
import { IVehicle } from "../../context/ProductContext";
import api from "../../services/api";
import { UpdateApiContext } from "../../context/UpdateApi";

function CarouselProducts({ props, products }: any) {
  const { isBikes, isCar, isCarOrBikesExists } = useContext(CheckTypeContext);
  const { updateApi } = useContext(UpdateApiContext);
  useEffect(() => {
    isCarOrBikesExists(products);
  }, [products, isCarOrBikesExists]);

  return (
    <CarouselProductsContainer>
      {props === "car" ? (
        products.length === 0 ? (
          <p>Nenhum Carro Cadastrado</p>
        ) : (
          products?.map(
            (product: any) =>
              product.type_veihcle === props && (
                <CardProduct key={product.id} product={product} />
              )
          )
        )
      ) : products.length === 0 ? (
        <p>Nenhuma Moto Cadastrada</p>
      ) : (
        products?.map(
          (product: any) =>
            product.type_veihcle === props && (
              <CardProduct key={product.id} product={product} />
            )
        )
      )}
    </CarouselProductsContainer>
  );
}

export default CarouselProducts;
