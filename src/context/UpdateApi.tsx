import { createContext, useState } from "react";
import { Ichildren } from "../interfaces/react.interfaces";
import { IUpdateApi } from "../interfaces/updateApi.interface";

export const UpdateApiContext = createContext<IUpdateApi>(
  {} as IUpdateApi
);

export const UpdateApiProvider = ({ children }: Ichildren) => {
  const [updateApi, setUpdateApi] = useState(false);

  return (
    <UpdateApiContext.Provider value={{ updateApi, setUpdateApi }}>
      {children}
    </UpdateApiContext.Provider>
  );
};
