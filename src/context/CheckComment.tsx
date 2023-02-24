import { createContext, useState } from "react";
import { ICommentCheck } from "../interfaces/comment.interfaces";
import { Ichildren } from "../interfaces/react.interfaces";

export const CheckCommentContext = createContext<ICommentCheck>(
  {} as ICommentCheck
);

export const CheckCommentProvider = ({ children }: Ichildren) => {
  const [isComment, setIsComment] = useState(false);

  return (
    <CheckCommentContext.Provider value={{ isComment, setIsComment }}>
      {children}
    </CheckCommentContext.Provider>
  );
};
