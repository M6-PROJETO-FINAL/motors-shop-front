import { CarouselProductsContainer } from "./style";
import { useContext, useEffect, useState } from "react";
import { IUser } from "../../context/ProductContext";
import api from "../../services/api";
import CardProductAdmin from "../CardProductAdmin";
import { CheckTypeContext } from "../../context/CheckTypeContext";
import { UpdateApiContext } from "../../context/UpdateApi";

function CarouselAdmin({ props, products }: any) {
  const [userInfo, setUserInfo] = useState<IUser | undefined>();
  const [state, setState] = useState({} as any);

  const { updateApi } = useContext(UpdateApiContext);
  const { isBikes, isCar, isCarOrBikesExists } = useContext(CheckTypeContext);
  useEffect(() => {
    isCarOrBikesExists(products);
  }, [products, isCarOrBikesExists]);

  useEffect(() => {
    api
      .get(`user/profile`)
      .then((res) => {
        setUserInfo(res.data);
        setState(isCarOrBikesExists(res.data.vehicle));
      })
      .catch((err) => console.log("Tente novamente mais tarde."));
  }, [updateApi]);

  console.log(updateApi);

  return (
    <CarouselProductsContainer>
      {props === "car" ? (
        products.length === 0 ? (
          <p>Nenhum Carro Cadastrado</p>
        ) : (
          products?.map(
            (elem: any) =>
              elem.type_veihcle === props && (
                <CardProductAdmin
                  key={elem.id}
                  product={elem}
                  sellerName={elem.user.fullName}
                  sellerId={elem.user.id}
                />
              )
          )
        )
      ) : products.length === 0 ? (
        <p>Nenhuma Moto Cadastrada</p>
      ) : (
        products?.map(
          (elem: any) =>
            elem.type_veihcle === props && (
              <CardProductAdmin
                key={elem.id}
                product={elem}
                sellerName={elem.user.fullName}
                sellerId={elem.user.id}
              />
            )
        )
      )}
    </CarouselProductsContainer>
  );
}

export default CarouselAdmin;
