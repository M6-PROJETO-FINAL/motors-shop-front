import { useState } from "react";
import { MdClose } from "react-icons/md";
import { IModalEdit } from "../../interfaces/successModal.interfaces";
import EditSaleForm from "../EditSaleForm";
import { Container } from "./styles";

export const EditProductModal: React.FC<IModalEdit> = ({
  setShowEditProductModal,
  product,
  setShowDeleteModal,
}) => {
  const [saleType, setSaleType] = useState(product?.type);

  return (
    <Container>
      <div className="modal">
        <header>
          <h2>Editar anúncio</h2>
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
          product={product}
          setShowDeleteModal={setShowDeleteModal}
          setShowEditProductModal={setShowEditProductModal}
        />
      </div>
    </Container>
  );
};

export default EditProductModal;
