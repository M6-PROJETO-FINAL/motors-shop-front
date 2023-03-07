import {
  createContext,
  ReactNode,
  useContext,
  useEffect,
  useState,
} from "react";

import api from "../services/api";

interface ProviderProps {
  children: ReactNode;
}

interface IVehicle {
  id: string;
  type: "sale" | "auction";
  title: string;
  year: number;
  km: number;
  price: number;
  description: string;
  coverImage: string;
  type_veihcle: "sale" | "motor";
  image_cover: string;
  first_image: string;
  createdAt: string;
  updatedAt: string;
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
  getAllProducts: () => Promise<void>;
};

const VehicleContext = createContext<vehicleContextType>(
  {} as vehicleContextType
);

export function VehicleProvider({ children }: ProviderProps) {
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

  const getAllProducts = async () => {
    await api
      .get("/vehicles")
      .then((response) => {
        console.log(response.data);
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
        getAllProducts,
      }}
    >
      {children}
    </VehicleContext.Provider>
  );
}

export function useVehicleContext() {
  return useContext(VehicleContext);
}
