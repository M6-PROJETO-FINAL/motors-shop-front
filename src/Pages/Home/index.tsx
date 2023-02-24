// import Navbar from "../../components/Navbar";
import { Footer } from "../../components/Footer";
import NavbarLogged from "../../components/NavbarLogged";
import ProfileViewAdmin from "../ProfileViewAdmin";

const HomePage = () => {
  const token = localStorage.getItem("@Token");
  const idUser = localStorage.getItem("@UserId");

  return (
    <main>
      {/* {token ? <NavbarLogged /> : <Navbar />} */}
      {/* <NavbarLogged /> */}
      {/* <Navbar /> */}
      {/* <h1>Página HomePage!!</h1> */}
      {/* <Footer /> */}
      <ProfileViewAdmin />
      
      
    </main>
  );
};

export default HomePage;
