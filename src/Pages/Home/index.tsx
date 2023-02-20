import Navbar from "../../components/Navbar";
import { Footer } from "../../components/Footer";
import { ButtonCars, ButtonRides } from "../../components/ButtonVehicles";


const HomePage = () => {
  const handlerCars = () => {
  }
  const handlerRides = () => {
  }

  return (
    <main>
      <Navbar />
      <ButtonCars onClick={() => handlerCars}/>
      <ButtonRides onClick={() => handlerRides} />
      <h1>Página HomePage!!</h1>

      <Footer />
    </main>
  );
};

export default HomePage;
