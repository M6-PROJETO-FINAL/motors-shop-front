import logo from "../../assets/img/motors-shop.svg";
import { HiMenu } from "react-icons/hi";
import { IoClose } from "react-icons/io5";
import { FiSettings } from "react-icons/fi";

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
  ButtonsEditHeader,
} from "./style";
import { useContext, useState } from "react";
import { Link } from "react-router-dom";
import { AuthContext } from "../../context/AuthContext";

const NavbarLogged = () => {
  const { logoutUser } = useContext(AuthContext);
  const [visible, setVisible] = useState(false);
  return (
    <NavStyled>
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

            <div className="buttonsEditHeader">
              <button>Editar Perfil</button>
              <button>Editar Endereço</button>
              <button>Minhas Compras</button>
              <button>Sair</button>
            </div>
          </EditPerfilHeaderModalStyled>

          <ButtonLoginStyled onClick={() => setVisible(!visible)}>
            NU
          </ButtonLoginStyled>

          <ButtonsEditHeader visible={visible}>
            <IoClose size={28} onClick={() => setVisible(false)} />
            <button>Editar Perfil</button>
            <button>Editar Endereço</button>
            <button>Minhas Compras</button>
            <button onClick={logoutUser}>Sair</button>
          </ButtonsEditHeader>

          <ButtonRegisterStyled>Nome do Usuário</ButtonRegisterStyled>
        </MenuLinks>
      </NavContent>
    </NavStyled>
  );
};

export default NavbarLogged;
