import { CarouselProductsContainer } from "./style";
import { useContext, useEffect, useState } from "react";
import { IUser } from "../../context/ProductContext";
import api from "../../services/api";
import CardProductAdmin from "../CardProductAdmin";
import { CheckTypeContext } from "../../context/CheckTypeContext";
import { UpdateApiContext } from "../../context/UpdateApi";
import { products } from "../../Pages/ProfileViewAdmin";

function CarouselAdmin({ props, id }: any) {
  const [userInfo, setUserInfo] = useState<IUser | undefined>();
  const [state, setState] = useState({} as any);

  const { isBikes, isCar, isCarOrBikesExists } = useContext(CheckTypeContext);
  const { updateApi } = useContext(UpdateApiContext);

  useEffect(() => {
    isCarOrBikesExists(products);
  }, [products, isCarOrBikesExists]);

  // useEffect(() => {
  //   api
  //     .get(`users/${id}`)
  //     .then((res) => {
  //       setUserInfo(res.data);
  //       setState(isCarOrBikesExists(res.data.vehicle));
  //     })
  //     .catch((err) => console.log("Tente novamente mais tarde."));
  //   // eslint-disable-next-line react-hooks/exhaustive-deps
  // }, [updateApi]);

  return (
    <CarouselProductsContainer>
      {props === "car" ? (
        !isCar ? (
          <p>Nenhum Carro Cadastrado</p>
        ) : (
          products?.map(
            (elem) =>
              elem.type === props && (
                <CardProductAdmin
                  key={elem.id}
                  product={elem}
                  sellerName={elem.user.fullName}
                  sellerId={elem.user.id}
                />
              )
          )
        )
      ) : !isBikes ? (
        <p>Nenhuma Moto Cadastrada</p>
      ) : (
        products?.map(
          (elem) =>
            elem.type === props && (
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
