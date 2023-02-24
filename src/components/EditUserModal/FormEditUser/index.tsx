import { ButtonBase } from "../../../components/Button";
import { InputBase } from "../../../components/Input";
import { StyledForm } from "./style";
import { yupResolver } from "@hookform/resolvers/yup";
import * as yup from "yup";
import { useForm } from "react-hook-form";
import { IModal } from "../../../interfaces/showModal.interfaces";
import { useContext, useEffect, useState } from "react";
import api from "../../../services/api";
import { IUserRequest } from "../../../interfaces/user.interface";
import { EditProfileContext } from "../../../context/EditProfileContext";
import { checkInfos } from "../../../utils/checkInfos";

export const FormEditUser: React.FC<IModal> = ({
  setShowModal,
  setShowSuccessModal,
}) => {
  const { editProfile } = useContext(EditProfileContext);

  const id = localStorage.getItem("@motorsShop:userId");
  const [user, setUser] = useState({} as IUserRequest);

  useEffect(() => {
    api
      .get(`users/${id}`)
      .then((res) => setUser(res.data))
      .catch((err) => console.log("Tente novamente mais tarde."));
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  const schema = yup.object().shape({
    fullName: yup
      .string()
      .required("Required field")
      .matches(/^[aA-zZ\s]+$/, "Only alphabets are allowed for this field "),
    email: yup.string().email().required("Required field"),
    cpf: yup
      .string()
      .required("Required field")
      .matches(
        /([0-9]{2}[.]?[0-9]{3}[.]?[0-9]{3}[/]?[0-9]{4}[-]?[0-9]{2})|([0-9]{3}[.]?[0-9]{3}[.]?[0-9]{3}[-]?[0-9]{2})/,
        "invalid CPF"
      ),
    cellPhone: yup
      .string()
      .required("Required field")
      .matches(
        /^\s*(\d{2}|\d{0})[-. ]?(\d{5}|\d{4})[-. ]?(\d{4})[-. ]?\s*$/,
        "invalid phone number"
      ),
    birthDate: yup
      .date()
      .required("Required field")
      .typeError("Please enter a valid date")
      .max(
        `${new Date().getUTCFullYear() - 18}-${
          new Date().getUTCMonth() + 1
        }-${new Date().getDate()}`,
        "You are not 18 years old"
      ),
  });

  const {
    register,
    handleSubmit,
    reset,
    formState: { errors },
  } = useForm({ resolver: yupResolver(schema), reValidateMode: "onSubmit" });

  const onSubmit = (data: object) => {
    const fixedData = checkInfos(data, user);
    editProfile(id!, fixedData, false);
    setShowModal(false);
    setShowSuccessModal(true);
  };

  useEffect(() => {
    if (user.fullName !== undefined) {
      let defaultValues: IUserRequest = {} as IUserRequest;
      defaultValues.fullName = user.fullName;
      defaultValues.email = user.email;
      defaultValues.cpf = user.cpf;
      defaultValues.cellPhone = user.cellPhone;
      defaultValues.birthDate = user.birthDate.slice(0, 10);
      defaultValues.description = user.description;

      reset({ ...defaultValues });
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [reset, user]);

  return (
    <>
      <StyledForm onSubmit={handleSubmit(onSubmit)}>
        <div className="subTitle">
          <h2>Infomações pessoais</h2>
        </div>
        <InputBase
          width="50%"
          type="text"
          label="Nome"
          placeholder="Ex: Samuel Leão"
          register={register}
          name="fullName"
          error={errors?.fullName?.message}
        ></InputBase>

        <InputBase
          width="50%"
          type="text"
          label="Email"
          placeholder="Ex: samuel@kenzie.com.br "
          register={register}
          name="email"
          error={errors?.email?.message}
        ></InputBase>

        <InputBase
          width="50%"
          type="text"
          label="CPF"
          placeholder="000.000.000-00"
          register={register}
          name="cpf"
          error={errors?.cpf?.message}
        ></InputBase>

        <InputBase
          width="50%"
          type="text"
          label="Celular"
          placeholder="(DDD) 90000-0000"
          register={register}
          name="cellPhone"
          error={errors?.cellPhone?.message}
        ></InputBase>

        <InputBase
          width="50%"
          type="date"
          label="Data de nascimento"
          register={register}
          name="birthDate"
          error={errors?.birthDate?.message}
        ></InputBase>

        <div className="description">
          <label>Descrição</label>
          <textarea
            placeholder="Digitar descrição"
            {...register("description")}
          ></textarea>
        </div>

        <div className="button--box">
          <ButtonBase
            type="button"
            colorbutton="Negative"
            width="40%"
            onClick={() => setShowModal(false)}
          >
            Cancelar
          </ButtonBase>

          <ButtonBase type="submit" colorbutton="Brand" width="60%">
            Salvar alterações
          </ButtonBase>
        </div>
      </StyledForm>
    </>
  );
};
