import { MdClose } from "react-icons/md";
import { IModal } from "../../interfaces/showModal.interfaces";

import { FormEditUser } from "./FormEditUser";
import { Container } from "./styles";

const EditUserModal: React.FC<IModal> = ({
  setShowModal,
  setShowSuccessModal,
}) => {
  return (
    <Container>
      <div className="editUser--modal">
        <header>
          <h2>Editar perfil</h2>
          <MdClose onClick={() => setShowModal(false)} />
        </header>
        <FormEditUser
          setShowModal={setShowModal}
          setShowSuccessModal={setShowSuccessModal}
        />
      </div>
    </Container>
  );
};

export default EditUserModal;
