import Navbar from "../../components/Navbar";
import { Footer } from "../../components/Footer";
import Header from "../../components/Header";
import NavbarLogged from "../../components/NavbarLogged";
import ProfileViewAdmin from "../ProfileViewAdmin";

const HomePage = (): JSX.Element => {
  return (
    <main>
      {/* <Navbar /> */}
      {/* <NavbarLogged /> */}
      <ProfileViewAdmin />
      <Header />
      <Footer />
    </main>
  );
};

export default HomePage;
