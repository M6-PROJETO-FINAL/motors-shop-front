import { createContext, ReactNode, useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import api from "../services/api";
import { FieldValues } from "react-hook-form";
import { toast } from "react-toastify";

interface LoginContextProps {
  loginUser: (data: FieldValues) => void;
  logoutUser: () => void;
}

interface ILoginProviderProps {
  children: ReactNode;
}

export const AuthContext = createContext<LoginContextProps>(
  {} as LoginContextProps
);

const AuthProvider = ({ children }: ILoginProviderProps) => {
  const [user, setUser] = useState(null);
  const [loading, setLoading] = useState(true);

  const navigate = useNavigate();

  useEffect(() => {
    async function loadUser() {
      const token = localStorage.getItem("@TOKEN:token");
      if (token) {
        try {
          api.defaults.headers.authorization = `Bearer ${token}`;

          const { data } = await api.get("/profile");
          setUser(data);
        } catch (error) {
          console.error(error);
        }
      }
      setLoading(false);
    }
    loadUser();
  }, []);

  const loginUser = async (data: FieldValues) => {
    await api
      .post("/login", data)
      .then((response) => {
        const token = response.data.token;

        api.defaults.headers.common["Authorization"] = `Bearer ${token}`;

        localStorage.clear();
        localStorage.setItem("@motorsShop:token", token);
        toast.success("Login efetuado com sucesso!");
        navigate("/profile", { replace: true });
      })
      .catch((error) => {
        toast.error("Ocorreu algum problema");
        console.error(error);
      });
  };

  const logoutUser = async () => {
    localStorage.clear();
    navigate("/login", { replace: true });
  };

  return (
    <AuthContext.Provider
      value={{
        loginUser,
        logoutUser,
      }}
    >
      {children}
    </AuthContext.Provider>
  );
};

export default AuthProvider;
