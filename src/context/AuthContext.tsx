import { createContext, useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import { FieldValues } from "react-hook-form";
import {
  IUserRequest,
  IResponseSession,
  LoginContextProps,
  ILoginProviderProps,
} from "../interfaces/user.interface";
import api from "../services/api";
import { toast } from "react-toastify";

export const AuthContext = createContext<LoginContextProps>(
  {} as LoginContextProps
);

const AuthProvider = ({ children }: ILoginProviderProps) => {
  const [user, setUser] = useState<IUserRequest>({} as IUserRequest);
  const [loading, setLoading] = useState(true);

  const navigate = useNavigate();

  useEffect(() => {
    async function loadUser() {
      const token = localStorage.getItem("@motorsShop:token");
      if (token) {
        try {
          api.defaults.headers.common.authorization = `Bearer ${token}`;

          getProfile();
        } catch (error) {
          console.error(error);
          localStorage.clear();
        }
      }
      setLoading(false);
    }
    loadUser();
  }, []);

  const loginUser = async (data: FieldValues) => {
    try {
      await api.post<IResponseSession>("/login", data).then((response) => {
        const token = response.data.token;
        api.defaults.headers.common["Authorization"] = `Bearer ${token}`;

        getProfile();

        localStorage.clear();
        localStorage.setItem("@motorsShop:token", token);
        toast.success("Login efetuado com sucesso!");
        navigate("/profile", { replace: true });
      });
    } catch (error) {
      toast.error("Ocorreu algum problema");
      console.error(error);
    }
  };

  const logoutUser = async () => {
    localStorage.clear();
    navigate("/login", { replace: true });
  };

  const getProfile = async () => {
    const { data } = await api.get<IUserRequest>("/user/profile");
    console.log(data);
    setUser(data);

    localStorage.setItem("@motorsShop:id", data.id);
    localStorage.setItem("@motorsShop:name", data.fullName);
  };

  return (
    <AuthContext.Provider
      value={{
        loginUser,
        logoutUser,
        user,
        loading,
      }}
    >
      {children}
    </AuthContext.Provider>
  );
};

export default AuthProvider;
