import { Footer } from "../../components/Footer";
import NavbarLogged from "../../components/NavbarLogged";
import ProductDetails from "../../components/ProductDetails";
import { BackgroundHeaderStyled, BackPageStyled } from "./style";
import { products } from "../ProfileViewAdmin";

const ProductPage = () => {
  return (
    <BackPageStyled>
      <NavbarLogged />
      <BackgroundHeaderStyled className="background"></BackgroundHeaderStyled>
      <ProductDetails
        product={products[0]}
        productId={products[0].id}
        sellerId={products[0].user.id}
      />

      <Footer />
    </BackPageStyled>
  );
};

export default ProductPage;

