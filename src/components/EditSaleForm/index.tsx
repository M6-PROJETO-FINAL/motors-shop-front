import { InputBase } from "../Input";
import { Form } from "./styles";
import { yupResolver } from "@hookform/resolvers/yup";
import * as yup from "yup";
import { useForm } from "react-hook-form";
import { useContext, useEffect, useState } from "react";
import api from "../../services/api";
import { toast } from "react-toastify";
import { UpdateApiContext } from "../../context/UpdateApi";

function EditSaleForm({
  setShowEditProductModal,
  productId,
  setShowDeleteModal,
}: any) {
  const [vehicleType, setVehicleType] = useState("car");
  const [vehicleInfo, setVehicleInfo] = useState<IVehicleRegister>();
  const { setUpdateApi, updateApi } = useContext(UpdateApiContext);
  useEffect(() => {
    api
      .get(`vehicles/${productId}`)
      .then((res) => setVehicleInfo(res.data))
      .catch((err) => console.log("Tente novamente mais tarde."));
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  const userToken = localStorage.getItem("@motorsShop:token");

  const formSchema = yup.object().shape({
    name: yup.string(),
    description: yup.string().required("Campo obrigatório"),
    km: yup
      .string()
      .required("Campo obrigatório")
      .matches(
        /^[0-9]+(?:-[0-9]+)?(,[0-9]+(?:-[0-9]+)?)*/,
        "Insira apenas números"
      ),
    year: yup
      .string()
      .required("Campo obrigatório")
      .matches(/^(?=.*[0-9])(?=.{4,})/, "Insira apenas 4 números"),
    coverImage: yup.string().required("Campo obrigatório"),
    price: yup.string().required("Campo obrigatório"),
    photo1: yup.string().required("Campo obrigatório"),
    photo2: yup.string(),
    photo3: yup.string(),
    photo4: yup.string(),
    photo5: yup.string(),
    photo6: yup.string(),
  });

  interface IVehicleRegister {
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

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<IVehicleRegister>({
    resolver: yupResolver(formSchema),
  });

  const onSubmit = (data: IVehicleRegister) => {
    const {
      coverImage,
      description,
      km,
      name,
      price,
      year,
      photo1,
      photo2,
      photo3,
      photo4,
      photo5,
      photo6,
    } = data;

    const vehiclePhotos = [photo1];
    if (photo2) {
      vehiclePhotos.push(photo2);
    }
    if (photo3) {
      vehiclePhotos.push(photo3);
    }
    if (photo4) {
      vehiclePhotos.push(photo4);
    }
    if (photo5) {
      vehiclePhotos.push(photo5);
    }
    if (photo6) {
      vehiclePhotos.push(photo6);
    }

    const vehicleData = {
      name,
      description,
      km,
      year,
      coverImage,
      price,
      type: vehicleType,
      vehiclePhotos,
    };

    api
      .patch(`vehicles/${productId}`, vehicleData, {
        headers: { Authorization: `Bearer ${userToken}` },
      })
      .then((res) => {
        toast.success("Anúncio atualizado com sucesso!");
        setTimeout(() => {
          setUpdateApi(!updateApi);
          setShowEditProductModal(false);
        }, 2000);
      })
      .catch((err) => console.log("Tente novamente mais tarde."));
  };

  const handleDeleteButton = () => {
    setShowEditProductModal(false);
    setShowDeleteModal(true);
  };

  return (
    <Form onSubmit={handleSubmit(onSubmit)}>
      <InputBase
        width="100%"
        type="text"
        label="Título"
        placeholder="Digitar título"
        register={register}
        name="name"
        error={errors?.name?.message}
        defaultValue={vehicleInfo?.name}
      />
      <div className="flex-row">
        <InputBase
          width="100%"
          type="text"
          label="Ano"
          placeholder="2018"
          register={register}
          name="year"
          error={errors?.year?.message}
          defaultValue={vehicleInfo?.year}
        />
        <InputBase
          width="100%"
          type="text"
          label="Quilometragem"
          placeholder="0"
          register={register}
          name="km"
          error={errors?.km?.message}
          defaultValue={vehicleInfo?.km}
        />
      </div>
      <InputBase
        width="100%"
        type="text"
        label="Preço"
        placeholder="50.000,00"
        register={register}
        name="price"
        error={errors?.price?.message}
        defaultValue={vehicleInfo?.price}
      />

      <div className="description">
        <label>Descrição</label>
        <textarea
          placeholder="Digitar descrição"
          defaultValue={vehicleInfo?.description}
          {...register("description")}
        ></textarea>
        {errors?.description?.message && (
          <div className="label--error">
            <label>
              <p>{errors?.description?.message}</p>
            </label>
          </div>
        )}
      </div>

      <div className="choose-vehicle">
        <p>Tipo de veículo</p>
        <div className="buttons">
          <button
            className={vehicleType === "car" ? "selected" : "notSelected"}
            type="button"
            onClick={() => setVehicleType("car")}
          >
            Carro
          </button>
          <button
            className={vehicleType === "car" ? "notSelected" : "selected"}
            type="button"
            onClick={() => setVehicleType("motorcycle")}
          >
            Moto
          </button>
        </div>
      </div>

      <InputBase
        width="100%"
        type="text"
        label="Imagem da capa"
        placeholder="http://image.com"
        register={register}
        name="coverImage"
        error={errors?.coverImage?.message}
        defaultValue={vehicleInfo?.coverImage}
      />

      {vehicleInfo?.vehicleImages?.map((elem, index) => (
        <InputBase
          key={index}
          width="100%"
          type="text"
          label={index + 1 + "ª Foto da galeria"}
          placeholder="http://image.com"
          register={register}
          name={`photo${index + 1}`}
          error={index === 0 && errors.photo1?.message}
          defaultValue={elem.url}
        />
      ))}

      <div className="final-buttons">
        <button
          className="cancel"
          type="button"
          onClick={() => handleDeleteButton()}
        >
          Excluir anúncio
        </button>
        <button className="create" type="submit">
          Salvar alterações
        </button>
      </div>
    </Form>
  );
}

export default EditSaleForm;
