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
