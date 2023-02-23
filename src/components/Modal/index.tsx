import { useContext } from "react";
import { MdClose } from "react-icons/md";
import { useNavigate } from "react-router-dom";
import { toast } from "react-toastify";
import { UpdateApiContext } from "../../context/UpdateApi";
import {
  IModalDelete,
  IModalSuccess,
} from "../../interfaces/successModal.interfaces";
import api from "../../services/api";
import { ButtonBase } from "../Button";
import { Container } from "./styles";

export const SuccessModal: React.FC<IModalSuccess> = ({
  setShowSuccessModal,
  header,
  text,
  title,
  type,
}) => {
  const navigate = useNavigate();
  return (
    <Container>
      <div className="modal">
        <header>
          <h2>{header}</h2>
          <MdClose onClick={() => setShowSuccessModal(false)} />
        </header>
        <section>
          <h2>{title}</h2>
          <p>{text}</p>
          {type === "signIn" && (
            <ButtonBase
              type="button"
              width="50%"
              colorbutton="Brand"
              onClick={() => navigate("/login")}
            >
              Ir para o login
            </ButtonBase>
          )}
        </section>
      </div>
    </Container>
  );
};

export const DeleteModal: React.FC<IModalDelete> = ({
  setShowDeleteModal,
  productId,
}) => {
  const { setUpdateApi, updateApi} = useContext(UpdateApiContext);
  const userToken = localStorage.getItem("@motorsShop:token");
  const handleDelete = (data: any) => {
    if (data.status === 204) {
      toast.success("Veículo deletado!");
      setShowDeleteModal(false);
      setUpdateApi(!updateApi)
    } else {
      toast.error("Não foi possível deletar!");
    }
  };
  return (
    <Container>
      <div className="modal">
        <header>
          <h2>Excluir anúncio</h2>
          <MdClose onClick={() => setShowDeleteModal(false)} />
        </header>
        <section className="modal--withButton">
          <h2>Tem certeza que deseja remover este anúncio?</h2>
          <p>
            Essa ação não pode ser desfeita. Isso excluirá permanentemente sua
            conta e removerá seus dados de nossos servidores.
          </p>
          <div className="button--box">
            <ButtonBase
              type="button"
              width="50%"
              colorbutton="Negative"
              onClick={() => setShowDeleteModal(false)}
            >
              Cancelar
            </ButtonBase>
            <ButtonBase
              type="button"
              width="50%"
              colorbutton="Alert"
              onClick={() => {
                api
                  .delete(`vehicles/${productId}`, {
                    headers: { Authorization: `Bearer ${userToken}` },
                  })
                  .then((res) => handleDelete(res))
                  .catch((err) => toast.error("Não foi possível deletar!"));
              }}
            >
              Sim, excluir anúncio
            </ButtonBase>
          </div>
        </section>
      </div>
    </Container>
  );
};
