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
  productId: string;
}
