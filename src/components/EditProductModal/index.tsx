import { useState } from "react";
import { MdClose } from "react-icons/md";
import EditSaleForm from "../EditSaleForm";
import { Container } from "./styles";

function EditProductModal({
  setShowEditProductModal,
  productId,
  setShowDeleteModal,
}: any) {
  const [saleType, setSaleType] = useState("sale");

  return (
    <Container>
      <div className="modal">
        <header>
          <h2>Criar anúncio</h2>
          <MdClose onClick={() => setShowEditProductModal(false)} />
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
        <EditSaleForm
          setShowEditProductModal={setShowEditProductModal}
          productId={productId}
          setShowDeleteModal={setShowDeleteModal}
        />
      </div>
    </Container>
  );
}

export default EditProductModal;
