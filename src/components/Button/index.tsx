import { ContainerButtonVehicle } from "../../Global/buttonStyle";

interface IpropsButton {
    onClick: () => void;
  }
  
  const ButtonCars = ({ onClick }: IpropsButton) => {
    return <ContainerButtonVehicle onClick={onClick}>Carros</ContainerButtonVehicle>;
  };

  const ButtonRides = ({ onClick }: IpropsButton) => {
    return <ContainerButtonVehicle onClick={onClick}>Motos</ContainerButtonVehicle>;
  };
  
  export {ButtonCars, ButtonRides };