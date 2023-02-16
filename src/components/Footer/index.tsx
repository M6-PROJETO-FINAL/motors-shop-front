import { ContainerFooter } from "./style";
import { FaAngleUp } from "react-icons/fa";
import logo from "../../assets/Motors-shop.svg";

export const Footer = (): JSX.Element => {
  return (
    <ContainerFooter>
      <div className="footer-div-main">
        <img src={logo} alt="logo Motors Shop" />
        <p>© 2023 - Todos os direitos reservados.</p>
        <div
          className="footer-div-btn"
          onClick={() => {
            window.scrollTo(0, 0);
          }}
          aria-label="Voltar para o topo do site"
        >
          <button>
            <FaAngleUp />
          </button>
        </div>
      </div>
    </ContainerFooter>
  );
};
