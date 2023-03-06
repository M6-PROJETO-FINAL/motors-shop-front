import { createContext, ReactNode } from "react";
import { useNavigate } from "react-router-dom";
import api from "../services/api";
import { FieldValues } from "react-hook-form";
import { IUserRequest } from "../interfaces/user.interface";

interface RegisterContextProps {
  onSubmitFunction: (data: FieldValues) => void;
}

interface IRegisterProviderProps {
  children: ReactNode;
}

export const AuthContext = createContext<RegisterContextProps>(
  {} as RegisterContextProps
);

const AuthProvider = ({ children }: IRegisterProviderProps) => {
  const navigate = useNavigate();

  const onSubmitFunction = async (data: FieldValues) => {
    const newUser: IUserRequest = {
      fullName: data.fullName,
      email: data.email,
      birthdate: data.birthdate,
      cellPhone: data.cellPhone,
      cpf: data.cpf,
      description: data.description,
      address: {
        id: "1",
        zipCode: data.zipCode,
        state: data.state,
        city: data.city,
        street: data.street,
        number: data.number,
        complement: data.complement,
      },
      isSeller: data.isSeller,
      password: data.password,
    };
    console.log(newUser);

    await api
      .post("/user", newUser)
      .then((response) => {
        navigate("/login", { replace: true });
      })
      .catch((error) => console.error(error));
  };

  return (
    <AuthContext.Provider
      value={{
        onSubmitFunction,
      }}
    >
      {children}
    </AuthContext.Provider>
  );
};

export default AuthProvider;
