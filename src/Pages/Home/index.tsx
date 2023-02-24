import Navbar from "../../components/Navbar";
import { Footer } from "../../components/Footer";
import Header from "../../components/Header";
import CarouselProducts from "../../components/CarouselProducts";

const HomePage = (): JSX.Element => {
  return (
    <main>
      <Navbar />
      <Header />
      <CarouselProducts />
      <Footer />
    </main>
  );
};

export default HomePage;
