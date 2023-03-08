import { MdClose } from "react-icons/md";
import { IModalAddress } from "../../interfaces/showModal.interfaces";

import { FormEditAddress } from "./FormEditAddress";
import { Container } from "./styles";

const EditAddressModal: React.FC<IModalAddress> = ({
  setShowAddressModal,
  setShowAddressSuccessModal,
}) => {
  return (
    <Container>
      <div className="editAddress--modal">
        <header>
          <h2>Editar endereço</h2>
          <MdClose onClick={() => setShowAddressModal(false)} />
        </header>
        <FormEditAddress
          setShowAddressModal={setShowAddressModal}
          setShowAddressSuccessModal={setShowAddressSuccessModal}
        />
      </div>
    </Container>
  );
};

export default EditAddressModal;
