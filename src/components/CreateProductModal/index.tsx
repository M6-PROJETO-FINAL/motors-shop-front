import { useState } from "react";
import { MdClose } from "react-icons/md";
import CreateSaleForm from "../CreateSaleForm";
import { Heading } from "../Heading";
import { Container } from "./styles";

function CreateProductModal({ setShowCreateProductModal }: any) {
  const [saleType, setSaleType] = useState("sale");

  return (
    <Container>
      <div className="modal">
        <header>
          <Heading
            level={2}
            fontWeight={500}
            color={"grey00"}
            size={"small"}
            lineHeight={20}
          >
            Criar anúncio
          </Heading>
          <MdClose onClick={() => setShowCreateProductModal(false)} />
        </header>

        <div className="saleType">
          <p>Tipo de anúncio</p>
          <div className="saleButtons">
            <button
              className={saleType === "sale" ? "selected" : "notSelected"}
              onClick={() => setSaleType("sale")}
            >
              Venda
            </button>
            <button
              className={saleType === "sale" ? "notSelected" : "selected"}
              onClick={() => setSaleType("auction")}
            >
              Leilão
            </button>
          </div>
        </div>

        <p className="vehicleInfo">Informações do veículo</p>
        <CreateSaleForm setShowCreateProductModal={setShowCreateProductModal} />
      </div>
    </Container>
  );
}

export default CreateProductModal;
