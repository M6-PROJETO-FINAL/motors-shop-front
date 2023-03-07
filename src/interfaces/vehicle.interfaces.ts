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
  type: "sale" | "auction";
  title: string;
  year: number;
  km: number;
  price: number;
  description: string;
  coverImage: string;
  type_veihcle: "sale" | "motor";
  image_cover: string;
  first_image: string;
  vehicleImages?: { id: string; url: string }[];
  photo1: string;
  photo2?: string;
  photo3?: string;
  photo4?: string;
  photo5?: string;
  photo6?: string;
}
