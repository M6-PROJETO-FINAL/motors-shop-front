import { Footer } from "../../components/Footer";
import NavbarLogged from "../../components/NavbarLogged";
import { BackgroundHeaderStyled } from "./style";

const ProductPage = () => {
  return (
    <>
      <NavbarLogged />
      <BackgroundHeaderStyled className="background"></BackgroundHeaderStyled>
      

      <Footer />
    </>
  );
};

export default ProductPage;
