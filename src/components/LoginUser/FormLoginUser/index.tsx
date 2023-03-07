import { ButtonBase } from "../../Button";
import { InputBase } from "../../Input";
import { StyledForm } from "./style";
import { yupResolver } from "@hookform/resolvers/yup";
import { useForm } from "react-hook-form";
import { useContext } from "react";
import { AuthContext } from "../../../context/AuthContext";
import { loginSchema } from "../../../validators/loginUser";

export const FormLoginUser = () => {
  const { loginUser } = useContext(AuthContext);

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm({ resolver: yupResolver(loginSchema) });

  return (
    <>
      <StyledForm onSubmit={handleSubmit(loginUser)}>
        <InputBase
          width="50%"
          type="text"
          label="Usuário"
          placeholder="Ex: samuel@kenzie.com.br "
          register={register}
          name="email"
          error={errors?.email?.message}
        ></InputBase>

        <div className="password">
          <InputBase
            width="50%"
            type="password"
            placeholder="Digitar senha"
            label="Senha"
            register={register}
            name="password"
            error={errors?.password?.message}
          ></InputBase>
          <small> Esqueci minha senha</small>
        </div>

        <div className="button--box">
          <ButtonBase type="submit" colorbutton="Brand" width="85%">
            Entrar
          </ButtonBase>

          <p>Ainda não possui conta?</p>

          <ButtonBase type="button" colorbutton="Outline2" width="85%">
            Cadastrar
          </ButtonBase>
        </div>
      </StyledForm>
    </>
  );
};
