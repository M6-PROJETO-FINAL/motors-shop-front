import logo from "../../assets/img/motors-shop.svg";
import { HiMenu } from "react-icons/hi";
import { IoClose } from "react-icons/io5";
import { FiSettings } from "react-icons/fi";
import { userInitials } from "../../utils/userInitials";

import {
  NavStyled,
  MenuIconStyled,
  MenuLinks,
  Logotipo,
  NavContent,
  ButtonLoginStyled,
  ButtonRegisterStyled,
  DivLineHeaderStyled,
  EditPerfilHeaderModalStyled,
  ButtonsEditHeaderMobile,
} from "./style";
import { useContext, useState } from "react";
import { Link } from "react-router-dom";
import { AuthContext } from "../../context/AuthContext";
import EditUserModal from "../EditUserModal";
import EditAddressModal from "../EditAdressModal";

const NavbarLogged = () => {
  const { logoutUser, user } = useContext(AuthContext);
  const [visible, setVisible] = useState(false);
  const [showModal, setShowModal] = useState(false);
  const [showSuccessModal, setShowSuccessModal] = useState(false);

  const [showAddressModal, setShowAddressModal] = useState(false);
  const [showAddressSuccessModal, setShowAddressSuccessModal] = useState(false);

  return (
    <NavStyled>
      {showModal && (
        <EditUserModal
          setShowModal={setShowModal}
          setShowSuccessModal={setShowSuccessModal}
        />
      )}
      {showAddressModal && (
        <EditAddressModal
          setShowAddressModal={setShowAddressModal}
          setShowAddressSuccessModal={setShowAddressSuccessModal}
        />
      )}

      <NavContent>
        <Logotipo className="logo">
          <Link to="/home">
            <img src={logo} alt="" />
          </Link>
        </Logotipo>

        <MenuIconStyled onClick={() => setVisible(!visible)}>
          <HiMenu size={28} />
        </MenuIconStyled>

        <MenuLinks visible={visible}>
          <IoClose size={28} onClick={() => setVisible(false)} />
          <li>
            <a href="#cars">Carros</a>
          </li>
          <li>
            <a href="#motocicle">Motos</a>
          </li>
          <li>
            <a href="auction">Leilão</a>
          </li>

          <DivLineHeaderStyled></DivLineHeaderStyled>

          <EditPerfilHeaderModalStyled>
            <div className="titleEditHeader">
              <FiSettings />
              <h4>Configurações</h4>
            </div>

            {user.isSeller ? (
              <>
                <button onClick={() => setShowModal(true)}>
                  Editar Perfil
                </button>
                <button onClick={() => setShowAddressModal(true)}>
                  Editar Endereço
                </button>
                <button>
                  <a href="#cars">Meus Anúncios</a>
                </button>
                <button onClick={() => logoutUser()}>Sair</button>
              </>
            ) : (
              <>
                <button onClick={() => setShowModal(true)}>
                  Editar Perfil
                </button>
                <button onClick={() => setShowAddressModal(true)}>
                  Editar Endereço
                </button>
                <button onClick={() => logoutUser()}>Sair</button>
              </>
            )}
          </EditPerfilHeaderModalStyled>

          <ButtonLoginStyled onClick={() => setVisible(!visible)}>
            {userInitials(user.fullName)}
          </ButtonLoginStyled>

          <ButtonRegisterStyled>{user.fullName}</ButtonRegisterStyled>

          <ButtonsEditHeaderMobile visible={visible}>
            <IoClose size={28} onClick={() => setVisible(false)} />

            {user.isSeller ? (
              <>
                <button onClick={() => setShowModal(true)}>
                  Editar Perfil
                </button>
                <button onClick={() => setShowAddressModal(true)}>
                  Editar Endereço
                </button>
                <button>
                  <a href="#cars">Meus Anúncios</a>
                </button>
                <button onClick={() => logoutUser()}>Sair</button>
              </>
            ) : (
              <>
                <button onClick={() => setShowModal(true)}>
                  Editar Perfil
                </button>
                <button onClick={() => setShowAddressModal(true)}>
                  Editar Endereço
                </button>
                <button onClick={() => logoutUser()}>Sair</button>
              </>
            )}
          </ButtonsEditHeaderMobile>
        </MenuLinks>
      </NavContent>
    </NavStyled>
  );
};

export default NavbarLogged;
