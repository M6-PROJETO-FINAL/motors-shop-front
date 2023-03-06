import { ButtonBase } from "../../Button";
import { InputBase } from "../../Input";
import { StyledForm } from "./style";
import { yupResolver } from "@hookform/resolvers/yup";
import { useForm } from "react-hook-form";
import { useState } from "react";
import schema from "../../../validators/registerUser";
import { FieldValues } from "react-hook-form";
import api from "../../../services/api";
import { useNavigate } from "react-router-dom";

export const FormCreatedUser = () => {
  const navigate = useNavigate();

  const [userType, setUserType] = useState(false);

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm({ resolver: yupResolver(schema) });

  const onSubmitFunction = async (data: FieldValues) => {
    const newUser = {
      fullName: data.fullName,
      email: data.email,
      birthdate: data.birthdate,
      cellPhone: data.cellPhone,
      cpf: data.cpf,
      description: data.description,
      address: {
        id: "1",
        zipCode: data.zipCode,
        state: data.state,
        city: data.city,
        street: data.street,
        number: data.number,
        complement: data.complement,
      },
      isSeller: userType,
      password: data.password,
    };
    console.log(newUser);

    await api
      .post("/user", newUser)
      .then((response) => {
        navigate("/login", { replace: true });
      })
      .catch((error) => console.error(error));
  };

  return (
    <>
      <StyledForm onSubmit={handleSubmit(onSubmitFunction)}>
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
          type="text"
          label="Data de nascimento"
          register={register}
          name="birthdate"
          error={errors?.birthdate?.message}
        ></InputBase>

        <div className="description">
          <label>Descrição</label>
          <textarea
            placeholder="Digitar descrição"
            {...register("description")}
          ></textarea>
        </div>

        <div className="subTitle">
          <h2>Infomações de endereço</h2>
        </div>

        <InputBase
          width="50%"
          type="text"
          placeholder="00000-000"
          label="CEP"
          register={register}
          name="zipCode"
          error={errors?.zipCode?.message}
        ></InputBase>

        <InputBase
          width="50%"
          type="text"
          placeholder="Digitar estado"
          label="Estado"
          register={register}
          name="state"
          error={errors?.state?.message}
        ></InputBase>

        <InputBase
          width="50%"
          type="text"
          placeholder="Digitar cidade"
          label="Cidade"
          register={register}
          name="city"
          error={errors?.city?.message}
        ></InputBase>

        <InputBase
          width="50%"
          type="text"
          placeholder="Digitar rua"
          label="Rua"
          register={register}
          name="street"
          error={errors?.street?.message}
        ></InputBase>

        <InputBase
          width="50%"
          type="text"
          placeholder="Digitar número"
          label="Número"
          register={register}
          name="number"
          error={errors?.number?.message}
        ></InputBase>

        <InputBase
          width="50%"
          type="text"
          placeholder="Ex: Apt 306"
          label="Complemento"
          register={register}
          name="complement"
          error={errors?.complement?.message}
        ></InputBase>

        <div className="choose-user">
          <p>Tipo de conta</p>
          <div className="buttons">
            <button
              className={userType === false ? "selected" : "notSelected"}
              type="button"
              value={"Comprador"}
              onClick={() => setUserType(false)}
            >
              Comprador
            </button>
            <button
              className={userType === true ? "notSelected" : "selected"}
              value={"Anunciante"}
              type="button"
              onClick={() => setUserType(true)}
            >
              Anunciante
            </button>
          </div>
        </div>

        <InputBase
          width="50%"
          type="password"
          placeholder="Digitar senha"
          label="Senha"
          register={register}
          name="password"
          error={errors?.password?.message}
        ></InputBase>

        <InputBase
          width="50%"
          type="password"
          placeholder="Digite novamente a senha"
          label="Confirmar Senha"
          register={register}
          name="confirmPassword"
          error={errors?.confirmPassword?.message}
        ></InputBase>

        <div className="button--box">
          <ButtonBase type="submit" colorbutton="Brand" width="85%">
            Finalizar Cadastro
          </ButtonBase>
        </div>
      </StyledForm>
    </>
  );
};
