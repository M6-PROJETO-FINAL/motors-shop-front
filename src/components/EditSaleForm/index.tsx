import { InputBase } from "../Input";
import { Form } from "./styles";
import { yupResolver } from "@hookform/resolvers/yup";
import * as yup from "yup";
import { useForm } from "react-hook-form";
import { useContext, useState } from "react";
import api from "../../services/api";
import { toast } from "react-toastify";
import { IVehicleUpdate } from "../../interfaces/vehicle.interfaces";
import { IModalEdit } from "../../interfaces/successModal.interfaces";
import { UpdateApiContext } from "../../context/UpdateApi";

const EditSaleForm: React.FC<IModalEdit> = ({
  setShowEditProductModal,
  product,
  setShowDeleteModal,
}) => {
  const [vehicleType, setVehicleType] = useState(product?.type_veihcle);
  const [numFotos, setNumFotos] = useState(product?.vehicleImages?.length || 1);

  function adicionarFoto() {
    if (numFotos < 6) {
      setNumFotos(numFotos + 1);
    }
  }

  const userToken = localStorage.getItem("@motorsShop:token");

  const formSchema = yup.object().shape({
    title: yup.string(),
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
    image_cover: yup.string().required("Campo obrigatório"),
    price: yup.string().required("Campo obrigatório"),
    photo1: yup.string().required("Campo obrigatório"),
    photo2: yup.string(),
    photo3: yup.string(),
    photo4: yup.string(),
    photo5: yup.string(),
    photo6: yup.string(),
  });

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<IVehicleUpdate>({
    resolver: yupResolver(formSchema),
  });

  const { updateApi, setUpdateApi } = useContext(UpdateApiContext);

  const onSubmit = (data: IVehicleUpdate) => {
    const {
      title,
      year,
      km,
      price,
      description,
      image_cover,
      photo1,
      photo2,
      photo3,
      photo4,
      photo5,
      photo6,
    } = data;

    const vehicleImages = [photo1];
    if (photo2) {
      vehicleImages.push(photo2);
    }
    if (photo3) {
      vehicleImages.push(photo3);
    }
    if (photo4) {
      vehicleImages.push(photo4);
    }
    if (photo5) {
      vehicleImages.push(photo5);
    }
    if (photo6) {
      vehicleImages.push(photo6);
    }

    const vehicleData = {
      type: vehicleType,
      title,
      year,
      km,
      price,
      description,
      type_veihcle: vehicleType,
      image_cover,
      first_image: photo1,
      // vehicleImages,
    };

    api
      .patch(`vehicles/${product.id}`, vehicleData, {
        headers: { Authorization: `Bearer ${userToken}` },
      })
      .then((res) => {
        toast.success("Anúncio atualizado com sucesso!");
        console.log(res.data);
        setTimeout(() => {
          setUpdateApi(!updateApi);
          setShowEditProductModal(false);
        }, 2000);
      })
      .catch((err) => {
        console.log("Tente novamente mais tarde.");
        console.error(err);
      });
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
        name="title"
        error={errors?.title?.message}
        defaultValue={product?.title}
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
          defaultValue={product?.year}
        />
        <InputBase
          width="100%"
          type="text"
          label="Quilometragem"
          placeholder="0"
          register={register}
          name="km"
          error={errors?.km?.message}
          defaultValue={product?.km}
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
        defaultValue={product?.price}
      />

      <div className="description">
        <label>Descrição</label>
        <textarea
          placeholder="Digitar descrição"
          defaultValue={product?.description}
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
            onClick={() => setVehicleType("motorhicle")}
          >
            Moto
          </button>
        </div>
      </div>

      <div className="published">
        <p>Publicado</p>
        <div className="buttons">
          <button
            className={vehicleType === "car" ? "selected" : "notSelected"}
            type="button"
            onClick={() => setVehicleType("car")}
          >
            Sim
          </button>
          <button
            className={vehicleType === "car" ? "notSelected" : "selected"}
            type="button"
            onClick={() => setVehicleType("motorhicle")}
          >
            Não
          </button>
        </div>
      </div>

      <InputBase
        width="100%"
        type="text"
        label="Imagem da capa"
        placeholder="http://image.com"
        register={register}
        name="image_cover"
        error={errors?.coverImage?.message}
        defaultValue={product?.image_cover}
      />

      {product?.vehicleImages?.map((elem, index) => (
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

      {[...Array(numFotos - (product?.vehicleImages?.length || 0))].map(
        (_, index) => (
          <InputBase
            key={(product?.vehicleImages?.length || 0) + index}
            width="100%"
            type="text"
            label={
              (product?.vehicleImages?.length || 0) +
              index +
              1 +
              "ª Foto da galeria"
            }
            placeholder="http://image.com"
            register={register}
            name={`photo${(product?.vehicleImages?.length || 0) + index + 1}`}
          />
        )
      )}

      <button type="button" onClick={adicionarFoto} className="btn-add-photos">
        Adicionar foto (máx: 6)
      </button>

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
};

export default EditSaleForm;
