import Navbar from "../../components/Navbar";
import { Footer } from "../../components/Footer";
import Header from "../../components/Header";
import CarouselProducts from "../../components/CarouselProducts";
import { CaroselTitle } from "./style";

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
    coverImage:
      "https://p.turbosquid.com/ts-thumb/q0/BbBmqk/8l7xTpeD/0/jpg/1401122241/1920x1080/fit_q99/7e1bce7e8a8ba1335ab81feb068745a1dbef763f/0.jpg",
    price: 5.0,
    type: "motorcycle",
    user: {
      id: 1,
      fullName: "Erica Lopes",
      description: "vendedora de carros",
      cellPhone: "1499819373",
    },
  },
  {
    id: 4,
    name: "Kawasaki Ninja",
    description: "um clássico!",
    km: 25.0,
    year: 1996,
    coverImage:
      "https://kawasaki-global-admin.com/ContentStorage/KMB/Products/5489/c7122247-9d3e-4574-ba23-f59cf841833f.png?w=767",
    price: 5.0,
    type: "motorcycle",
    user: {
      id: 1,
      fullName: "Erica Lopes",
      description: "vendedora de carros",
      cellPhone: "1499819373",
    },
  },
  {
    id: 5,
    name: "Kawasaki Ninja",
    description: "um clássico!",
    km: 25.0,
    year: 1996,
    coverImage:
      "https://kawasaki-global-admin.com/ContentStorage/KMB/Products/5489/c7122247-9d3e-4574-ba23-f59cf841833f.png?w=767",
    price: 5.0,
    type: "motorcycle",
    user: {
      id: 1,
      fullName: "Erica Lopes",
      description: "vendedora de carros",
      cellPhone: "1499819373",
    },
  },
  {
    id: 6,
    name: "Kawasaki Ninja",
    description: "um clássico!",
    km: 25.0,
    year: 1996,
    coverImage:
      "https://kawasaki-global-admin.com/ContentStorage/KMB/Products/5489/c7122247-9d3e-4574-ba23-f59cf841833f.png?w=767",
    price: 5.0,
    type: "motorcycle",
    user: {
      id: 1,
      fullName: "Erica Lopes",
      description: "vendedora de carros",
      cellPhone: "1499819373",
    },
  },
  {
    id: 7,
    name: "Kawasaki Ninja",
    description: "um clássico!",
    km: 25.0,
    year: 1996,
    coverImage:
      "https://kawasaki-global-admin.com/ContentStorage/KMB/Products/5489/c7122247-9d3e-4574-ba23-f59cf841833f.png?w=767",
    price: 5.0,
    type: "motorcycle",
    user: {
      id: 1,
      fullName: "Erica Lopes",
      description: "vendedora de carros",
      cellPhone: "1499819373",
    },
  },
  {
    id: 8,
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
    id: 9,
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
    id: 10,
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
];

const HomePage = () => {
  return (
    <main>
      <Navbar />
      <Header />
      <CaroselTitle id="cars">Carros</CaroselTitle>
      <CarouselProducts props={"car"} arr={products} />
      <CaroselTitle id="motorcycle">Motos</CaroselTitle>
      <CarouselProducts props={"motorcycle"} arr={products} />
      <Footer />
    </main>
  );
};

export default HomePage;
