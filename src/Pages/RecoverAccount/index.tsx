import { Footer } from "../../components/Footer";
import Navbar from "../../components/Navbar";
import RecoverUser from "../../components/RecoverUser";
import { Main } from "./style";

const RecoverAccount = () => {
  return (
    <Main>
      <Navbar />
      <RecoverUser />
      <Footer />
    </Main>
  );
};

export default RecoverAccount;
