import { createContext, useState } from "react";
import { Ichildren } from "../interfaces/react.interfaces";
import { IUserEditContext } from "../interfaces/user.interface";
import api from "../services/api";

export const EditProfileContext = createContext<IUserEditContext>(
  {} as IUserEditContext
);

export const EditProfileProvider = ({ children }: Ichildren) => {
  const token = localStorage.getItem("@motorsShop:token");

  const [isDone, setIsDone] = useState(false);
  const [isError, setIsError] = useState(false);
  const [message, setMessage] = useState("");

  const editProfile = (id: string, data: {}, address: boolean) => {
    if (address) {
      api
        .patch(`users/address/${id}`, data, {
          headers: { Authorization: `Bearer ${token}` },
        })
        .then((res) => {
          setIsDone(true);
        })
        .catch((err) => {
          setIsError(true);
          setMessage(err.response.data.message);
        });
    } else {
      api
        .patch(`users/${id}`, data, {
          headers: { Authorization: `Bearer ${token}` },
        })
        .then((res) => {
          setIsDone(true);
        })
        .catch((err) => {
          setIsError(true);
          setMessage(err.response.data.message);
        });
    }
  };

  return (
    <EditProfileContext.Provider
      value={{ isDone, isError, message, setIsDone, editProfile }}
    >
      {children}
    </EditProfileContext.Provider>
  );
};
