import { FieldValues } from "react-hook-form";

export interface IUserFullData {
  birthDate: string;
  cellPhone: string;
  city: string;
  complement?: string;
  cpf: string;
  description?: string;
  email: string;
  fullName: string;
  isSeller: boolean;
  number: string;
  password: string;
  passwordConfirm: string;
  state: string;
  street: string;
  zipCode: string;
}

export interface IUserAddressRequest {
  id?: string;
  street: string;
  number: string;
  complement?: string;
  zipCode: string;
  city: string;
  state: string;
}

export interface IUserRequest {
  fullName: string;
  email: string;
  cpf: string;
  cellPhone: string;
  birthDate: string;
  description?: string;
  isSeller: boolean;
  password: string;
  address: IUserAddressRequest;
}

export interface IUserEditContext {
  isDone: boolean;
  isError: boolean;
  message: string;
  setIsDone: React.Dispatch<React.SetStateAction<boolean>>;
  editProfile: Function;
}

export interface IEditProfile {
  id: string;
  data: FieldValues;
  address: boolean;
}
