import Navbar from "../../components/Navbar";
import { Footer } from "../../components/Footer";
import Header from "../../components/Header";
import CarouselProducts from "../../components/CarouselProducts";

const products = [
  {
    id: 1,
    name: "Gol",
    description: "Carro bom, um clássico!",
    km: 25.0,
    year: 1996,
    coverImage:
      "https://cdn.wheel-size.com/automobile/body/volkswagen-gol-1995-1999-1486457284.69.jpeg",
    price: 5.0,
    type: "car",
    user: {
      id: 1,
      fullName: "Erica Lopes",
      description: "vendedora de carros",
      cellPhone: "1499819373",
    },
  },
  {
    id: 2,
    name: "Golf",
    description: "um clássico!",
    km: 25.0,
    year: 1996,
    coverImage: "https://heycar.com.br/images/2018/Maio/Golf-1995.jpg",
    price: 5.0,
    type: "car",
    user: {
      id: 1,
      fullName: "Erica Lopes",
      description: "vendedora de carros",
      cellPhone: "1499819373",
    },
  },
  {
    id: 3,
    name: "GS-500",
    description: "um clássico!",
    km: 25.0,
    year: 1996,
    coverImage: "https://heycar.com.br/images/2018/Maio/Golf-1995.jpg",
    price: 5.0,
    type: "motorcycle",
    user: {
      id: 1,
      fullName: "Erica Lopes",
      description: "vendedora de carros",
      cellPhone: "1499819373",
    },
  },
];

const HomePage = () => {
  return (
    <main>
      <Navbar />
      <Header />
      <CarouselProducts props={"car"} arr={products} />
      <CarouselProducts props={"motorcycle"} arr={products} />
      <Footer />
    </main>
  );
};

export default HomePage;
