import { createContext, ReactNode, useEffect, useState } from "react";
import { toast } from "react-toastify";
import { IVehicleUpdate } from "../interfaces/vehicle.interfaces";

import api from "../services/api";

interface ProviderProps {
  children: ReactNode;
}

export interface IVehicle {
  id: string;
  type: "sale" | "auction";
  title: string;
  year: string;
  km: string;
  price: string;
  description: string;
  type_veihcle: "car" | "motorcycle";
  image_cover: string;
  first_image: string;
  created_at: string;
  update_at: string;
  vehicleImages?: { id: string; url: string }[];
}

export interface IUser {
  address?: {
    city: string;
    complement?: string;
    id: string;
    number: string;
    state: string;
    street: string;
    zipCode: string;
  };
  birthDate: string;
  cellPhone: string;
  cpf: string;
  description: string;
  email: string;
  fullName: string;
  id: string;
  isSeller: boolean;
  vehicle?: IVehicle[];
}

type vehicleContextType = {
  allVehicles: IVehicle[];
  setAllVehicles: React.Dispatch<React.SetStateAction<IVehicle[]>>;
  logged: boolean;
  setLogged: React.Dispatch<React.SetStateAction<boolean>>;
  user: IUser | undefined;
  setUser: React.Dispatch<React.SetStateAction<IUser | undefined>>;
  getAllVehicle: () => Promise<void>;
};

export const VehicleContext = createContext<vehicleContextType>(
  {} as vehicleContextType
);

export const VehicleProvider = ({ children }: ProviderProps) => {
  const [allVehicles, setAllVehicles] = useState<IVehicle[]>([]);
  const [logged, setLogged] = useState<boolean>(false);
  const [user, setUser] = useState<IUser>();

  useEffect(() => {
    const userId = localStorage.getItem("@motorsShop:userId");

    if (userId) {
      setLogged(true);
      api
        .get(`users/${userId}`)
        .then((res) => {
          setUser(res.data);
        })
        .catch((err) => console.log("Tente novamente mais tarde."));
    }
  }, []);

  const getAllVehicle = async () => {
    await api
      .get("/vehicles")
      .then((response) => {
        setAllVehicles(response.data);
      })
      .catch((error) => {
        console.error(error);
      });
  };

  return (
    <VehicleContext.Provider
      value={{
        allVehicles,
        setAllVehicles,
        logged,
        setLogged,
        user,
        setUser,
        getAllVehicle,
      }}
    >
      {children}
    </VehicleContext.Provider>
  );
};
