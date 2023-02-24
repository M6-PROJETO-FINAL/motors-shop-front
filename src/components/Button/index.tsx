import { ButtonHTMLAttributes, ReactNode } from "react";
import { Button } from "./style";
import { ContainerButtonVehicle } from "./style";

interface IButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
  type?: "button" | "reset" | "submit";
  children: ReactNode | string;
  onClick?: () => void;
  sizebutton?: "default" | "medium" | "login";
  colorbutton?: string;
  width?: string;
}

export const ButtonBase = ({
  children,
  type,
  onClick,
  sizebutton,
  colorbutton,
  width,
  ...rest
}: IButtonProps) => {
  return (
    <Button
      width={width}
      type={type}
      onClick={onClick}
      sizebutton={sizebutton}
      colorbutton={colorbutton}
      {...rest}
    >
      {children}
    </Button>
  );
};


interface IpropsButton {
    onClick: () => void;
  }
  
  const ButtonCars = ({ onClick }: IpropsButton) => {
    return <ContainerButtonVehicle onClick={onClick}>Carros</ContainerButtonVehicle>;
  };

  const ButtonRides = ({ onClick }: IpropsButton) => {
    return <ContainerButtonVehicle onClick={onClick}>Motos</ContainerButtonVehicle>;
  };


  export {ButtonCars, ButtonRides};