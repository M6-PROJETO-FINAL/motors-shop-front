export interface IVehicleComment {
  id: string;
  name: string;
  description: string;
  km: string;
  year: number;
  coverImage: string;
  price: string;
  createdAt: string;
  updatedAt: string;
  vehicleImages?: { id: string; url: string }[];
  user: {
    id: string;
    fullName: string;
    description: string;
    cellPhone: string;
  };
  text: string;
}

export interface IVehicleRegister {
  name: string;
  description: string;
  km: number;
  year: number;
  coverImage: string;
  price: number;
  type: string;
  vehicleImages?: { id: string; url: string }[];
  photo1: string;
  photo2?: string;
  photo3?: string;
  photo4?: string;
  photo5?: string;
  photo6?: string;
}
