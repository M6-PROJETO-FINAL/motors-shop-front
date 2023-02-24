import Navbar from "../../components/Navbar";
import { Footer } from "../../components/Footer";
<<<<<<< HEAD
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
      
      
=======
import Header from "../../components/Header";
import CarouselProducts from "../../components/CarouselProducts";

const HomePage = (): JSX.Element => {
  return (
    <main>
      <Navbar />
      <Header />
      <CarouselProducts />
      <Footer />
>>>>>>> a84fab9f0985e5cc457c430e73a966ae7e1d76a4
    </main>
  );
};

export default HomePage;
