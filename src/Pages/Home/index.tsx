import Navbar from "../../components/Navbar";
import { Footer } from "../../components/Footer";
import Header from "../../components/Header";
import CarouselProducts from "../../components/CarouselProducts";
import CardAuction from "../../components/CardAuction";
import { DivContainer } from "./style";


const HomePage = () => {
  const product = {
    time:"01:58:00",
    image:"../../assets/.svg",
    title: "Mercedes Benz A 200 CGI ADVANCE SEDAN Mercedes Benz A 200",
    subtitle: "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem...",
    user:{
    fullName:"Rodrigo Tavares"  
    },
    year: "2013",
    km:"0 KM",
    price:"R$00.000,00"
  }

  return (
    <main>
      <Navbar />
      <Header />
      <DivContainer>
        <h1>Leilão</h1>
        <CardAuction product={product} />
        <CardAuction product={product} />
      </DivContainer>

      {/* <CarouselProducts /> */}
      <Footer />
    </main>
  );
};

export default HomePage;
