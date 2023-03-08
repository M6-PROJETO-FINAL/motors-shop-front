import { IVehicle } from "../context/ProductContext";

export interface IModalSuccess {
  header: string;
  title?: string;
  text?: string;
  type?: string;
  setShowSuccessModal: React.Dispatch<React.SetStateAction<boolean>>;
}

export interface IFormSignIn {
  setShowSuccessModal: React.Dispatch<React.SetStateAction<boolean>>;
}

export interface IModalDelete {
  setShowDeleteModal: React.Dispatch<React.SetStateAction<boolean>>;
  product: IVehicle;
}

export interface IModalEdit {
  product: IVehicle;
  setShowEditProductModal: React.Dispatch<React.SetStateAction<boolean>>;
  setShowDeleteModal: React.Dispatch<React.SetStateAction<boolean>>;
}
