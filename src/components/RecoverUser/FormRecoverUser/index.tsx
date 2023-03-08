import { ButtonBase } from "../../Button";
import { InputBase } from "../../Input";
import { StyledForm } from "./style";
import { yupResolver } from "@hookform/resolvers/yup";
import { useForm } from "react-hook-form";
import { useContext, useState } from "react";
import { AuthContext } from "../../../context/AuthContext";
import { loginSchema } from "../../../validators/loginUser";
import { SuccessModal } from "../../Modal";

export const FormRecoverUser = () => {
  const [showSuccessModal, setShowSuccessModal] = useState(false);

  const { loginUser } = useContext(AuthContext);

  const recoverPassword = () => {
    
  }

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm({ resolver: yupResolver(loginSchema) });

  return (
    <>
      {showSuccessModal && (
        <SuccessModal
          header="Sucesso!"
          setShowSuccessModal={setShowSuccessModal}
          title="Seu email de recuperação foi enviado com sucesso!"
          text="Acesse seu email para recuperaração de senha!"
        />
      )}
      <StyledForm onSubmit={handleSubmit(recoverPassword)}>
        <InputBase
          width="50%"
          type="text"
          label="Digite o email cadastrado em sua conta:"
          placeholder="Ex: samuel@kenzie.com.br "
          register={register}
          name="email"
          error={errors?.email?.message}
        ></InputBase>

        <div className="button--box">
          <ButtonBase
            type="submit"
            colorbutton="Brand"
            width="85%"
            onClick={() => setShowSuccessModal(true)}
          >
            Enviar
          </ButtonBase>
        </div>
      </StyledForm>
    </>
  );
};
