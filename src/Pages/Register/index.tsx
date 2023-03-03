import { Footer } from "../../components/Footer";
import Navbar from "../../components/Navbar";
import RegisterUser from "../../components/RegisterUser";
import { Main } from "./style";

const RegisterPage = () => {
  return (
    <Main>
      <Navbar />
      <RegisterUser />
      <Footer />
    </Main>
  );
};

export default RegisterPage;
