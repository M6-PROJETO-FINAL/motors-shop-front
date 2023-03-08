import { Dispatch } from "react";

export interface ICommentCheck {
  isComment: boolean;
  setIsComment: React.Dispatch<React.SetStateAction<boolean>>;
}

export interface IModalComment {
  setShowModal: React.Dispatch<React.SetStateAction<boolean>>;
  setShowSuccessModal: React.Dispatch<React.SetStateAction<boolean>>;
  comment: any;
  setIsPost?:React.Dispatch<React.SetStateAction<boolean>>;
}
