import { MdClose } from "react-icons/md";
import { IModal } from "../../interfaces/showModal.interfaces";

import { FormEditAddress } from "./FormEditAddress";
import { Container } from "./styles";

const EditAddressModal: React.FC<IModal> = ({
  setShowModal,
  setShowSuccessModal,
}) => {
  return (
    <Container>
      <div className="editAddress--modal">
        <header>
          <h2>Editar endereço</h2>
          <MdClose onClick={() => setShowModal(false)} />
        </header>
        <FormEditAddress
          setShowModal={setShowModal}
          setShowSuccessModal={setShowSuccessModal}
        />
      </div>
    </Container>
  );
};

export default EditAddressModal;
