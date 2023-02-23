import { CarouselProductsContainer } from "./style";
import { useContext, useEffect, useState } from "react";
import { IUser } from "../../context/ProductContext";
import api from "../../services/api";
import CardProdutOwner from "../CardProductOwner";
import { CheckTypeContext } from "../../context/CheckTypeContext";

function CarouselProductsOwner({ props, id }: any) {
  const [userInfo, setUserInfo] = useState<IUser | undefined>();

  const [state, setState] = useState({} as any);

  const { isCarOrBikesExists } = useContext(CheckTypeContext);

  useEffect(() => {
    api
      .get(`users/${id}`)
      .then((res) => {
        setUserInfo(res.data);
        setState(isCarOrBikesExists(res.data.vehicle));
      })
      .catch((err) => console.log("Tente novamente mais tarde."));
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  return (
    <CarouselProductsContainer>
      {props === "car" ? (
        !state.car ? (
          <p>Nenhum Carro Cadastrado</p>
        ) : (
          userInfo?.vehicle?.map(
            (elem) =>
              elem.type === props && (
                <CardProdutOwner
                  key={elem.id}
                  product={elem}
                  sellerName={userInfo.fullName}
                  sellerId={id}
                />
              )
          )
        )
      ) : !state.bike ? (
        <p>Nenhuma Moto Cadastrada</p>
      ) : (
        userInfo?.vehicle?.map(
          (elem) =>
            elem.type === props && (
              <CardProdutOwner
                key={elem.id}
                product={elem}
                sellerName={userInfo.fullName}
                sellerId={id}
              />
            )
        )
      )}
    </CarouselProductsContainer>
  );
}

export default CarouselProductsOwner;
