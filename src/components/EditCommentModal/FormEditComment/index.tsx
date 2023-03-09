import { ButtonBase } from "../../../components/Button";
import { InputBase } from "../../../components/Input";
import { StyledForm } from "./style";
import { yupResolver } from "@hookform/resolvers/yup";
import * as yup from "yup";
import { useForm } from "react-hook-form";
import { useContext, useEffect, useState } from "react";
import api from "../../../services/api";
import { IModalComment } from "../../../interfaces/comment.interfaces";
import { CheckCommentContext } from "../../../context/CheckComment";

interface CommentProps {
  setShowModal: React.Dispatch<React.SetStateAction<boolean>>;
  setShowSuccessModal: React.Dispatch<React.SetStateAction<boolean>>;
  comment: any;
  setIsPost?:React.Dispatch<React.SetStateAction<boolean>>;
}

export const FormEditComment: React.FC<CommentProps> = ({
  setShowModal,
  setShowSuccessModal,
  comment,
  setIsPost
}) => {
  const { isComment, setIsComment } = useContext(CheckCommentContext);

  const userId = localStorage.getItem("@motorsShop:userId");
  const token = localStorage.getItem("@motorsShop:token");

  const schema = yup.object().shape({
    text: yup.string().required("Required field"),
  });

  const {
    register,
    handleSubmit,
    reset,
    formState: { errors },
  } = useForm({ resolver: yupResolver(schema), reValidateMode: "onSubmit" });

  const onSubmit = (data: object) => {
    api
      .patch(`comments/${comment.id}`, data, {
        headers: { Authorization: `Bearer ${token}` },
      })
      .then((res) => {
        if(setIsPost)
        setIsPost(true)
        setShowModal(false);
        setIsComment(!isComment);
      })
      .catch((err) => console.log("Tente novamente mais tarde."));
  };

  const handleClose = () => {
    setShowModal(false)
  }


  useEffect(() => {
    if (comment.text !== undefined) {
      let defaultValues = {} as any;
      defaultValues.text = comment.text;
      reset({ ...defaultValues });
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [reset, comment]);

  return (
    <>
      <StyledForm onSubmit={handleSubmit(onSubmit)}>
        <InputBase
          width="50%"
          type="text"
          label="Modifique seu Comentário"
          placeholder="Ex: Acho esse veículo muito legal"
          register={register}
          name="text"
          error={errors?.text?.message}
        ></InputBase>

        <div className="button--box">
          <ButtonBase
            type="button"
            colorbutton="Negative"
            width="40%"
            onClick={() => handleClose()}
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