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

const Navbar = () => {
  const [visible, setVisible] = useState(false);
  return (
    <NavStyled>
      <NavContent>
        <Logotipo className="logo">
          <a href="#">
            <img src={logo} alt="" />
          </a>
        </Logotipo>

        <MenuIconStyled onClick={() => setVisible(!visible)}>
          <HiMenu size={28} />
        </MenuIconStyled>

        <MenuLinks visible={visible}>
          <IoClose size={28} onClick={() => setVisible(false)}/>
          <li>
            <a href={"#cars"}>Carros</a>
          </li>
          <li>
            <a href={"#motorcycle"}>Motos</a>
          </li>
          <li>
            <a href={"auction"}>Leilão</a>
          </li>

          <DivLineHeaderStyled></DivLineHeaderStyled>

          <ButtonLoginStyled>Fazer Login</ButtonLoginStyled>
          <ButtonRegisterStyled>Cadastrar</ButtonRegisterStyled>
        </MenuLinks>
      </NavContent>
    </NavStyled>
  );
};

export default Navbar;
