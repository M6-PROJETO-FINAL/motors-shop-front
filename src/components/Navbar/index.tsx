import { useNavigate } from "react-router-dom";
import logo from "../../assets/img/motors-shop.svg";
import { HiMenu } from "react-icons/hi";
import { IoClose } from "react-icons/io5";

import {
  NavStyled,
  MenuIconStyled,
  MenuLinks,
  Logotipo,
  NavContent,
  ButtonLoginStyled,
  ButtonRegisterStyled,
  DivLineHeaderStyled,
} from "./style";
import { useState } from "react";
import { Link } from "react-router-dom";

const Navbar = () => {
  const navigate = useNavigate();
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
            <a href={"#cars"}>Carros</a>
          </li>
          <li>
            <a href={"#motorhicle"}>Motos</a>
          </li>
          <li>
            <a href={"auction"}>Leilão</a>
          </li>

          <DivLineHeaderStyled></DivLineHeaderStyled>

          <Link to="/login">
            <ButtonLoginStyled>Fazer Login</ButtonLoginStyled>
          </Link>

          <Link to="/register">
            {" "}
            <ButtonRegisterStyled>Cadastrar</ButtonRegisterStyled>
          </Link>
        </MenuLinks>
      </NavContent>
    </NavStyled>
  );
};

export default Navbar;
