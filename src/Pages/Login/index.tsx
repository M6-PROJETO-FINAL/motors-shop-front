import { Footer } from "../../components/Footer";
import LoginUser from "../../components/LoginUser";
import Navbar from "../../components/Navbar";
import { Main } from "./style";

const LoginPage = () => {
  return (
    <Main>
      <Navbar />
      <LoginUser />
      <Footer />
    </Main>
  );
};

export default LoginPage;
