export interface IVehicleComment {
  id: string;
  type: "sale" | "auction";
  title: string;
  year: number | string;
  km: number | string;
  price: number | string;
  description: string;
  coverImage: string;
  type_veihcle: "car" | "motorcycle";
  image_cover: string;
  first_image: string;
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
  year: number | string;
  km: number | string;
  price: number | string;
  description: string;
  coverImage: string;
  type_veihcle: "car" | "motorcycle";
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

export interface IVehicleUpdate {
  type?: "sale" | "auction";
  title?: string;
  year: number | string;
  km: number | string;
  price: number | string;
  description?: string;
  coverImage?: string;
  type_veihcle: "car" | "motorcycle";
  image_cover?: string;
  first_image?: string;
  vehicleImages?: { id: string; url: string }[];
  photo1: string;
  photo2?: string;
  photo3?: string;
  photo4?: string;
  photo5?: string;
  photo6?: string;
}
