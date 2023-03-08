export interface IModal {
  setShowModal: React.Dispatch<React.SetStateAction<boolean>>;
  setShowSuccessModal: React.Dispatch<React.SetStateAction<boolean>>;
}

export interface IModalAddress {
  setShowAddressModal: React.Dispatch<React.SetStateAction<boolean>>;
  setShowAddressSuccessModal: React.Dispatch<React.SetStateAction<boolean>>;
}
