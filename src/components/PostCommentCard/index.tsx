import { userInitials } from "../../utils/userInitials";
import { useContext, useEffect, useState } from "react";
import { toast } from "react-toastify";
import { CheckCommentContext } from "../../context/CheckComment";
import api from "../../services/api";
import EditCommentModal from "../EditCommentModal";
import { SuccessModal } from "../Modal";
import { PostCommentDiv } from "./styles";
import { Button } from "../Button/style";

interface CommentProps {
  userName: string;
  commentDate: string;
  text: string;
  commentId: string;
}

function PostCommentCard({
  userName,
  commentId,
}: CommentProps) {
  const [showModal, setShowModal] = useState(false);
  const [showSuccessModal, setShowSuccessModal] = useState(false);
  const [comment, setComment] = useState({} as any);

  const { isComment, setIsComment } = useContext(CheckCommentContext);

  const userId = localStorage.getItem("@motorsShop:userId");
  const token = localStorage.getItem("@motorsShop:token");

  // useEffect(() => {
  //   if (userId !== null) {
  //     api
  //       .get(`comments/${commentId}`)
  //       .then((res) => {
  //         setComment(res.data);
  //       })
  //       .catch((err) => console.log("Tente novamente mais tarde."));
  //   }
  //   // eslint-disable-next-line react-hooks/exhaustive-deps
  // }, []);

  return (
    <PostCommentDiv>
      {showModal && (
        <EditCommentModal
          setShowModal={setShowModal}
          setShowSuccessModal={setShowSuccessModal}
          commentId={commentId}
        />
      )}
      {showSuccessModal && (
        <SuccessModal
          header="Sucesso!"
          setShowSuccessModal={setShowSuccessModal}
          title="Seu comentário foi editado com sucesso!"
          text="Agora você poderá ver seus comentários modificados"
        />
      )}
      <div className="userInfo">
        <div className="sellerPhoto">
          <p>{userInitials(userName)}</p>
        </div>
        <p className="userName">{userName}</p>
      </div>

      <div className="form-content">
        <div className="text-form">
          <form className="text">
            <textarea placeholder="Carro muito confortável, foi uma ótima experiência de compra..."></textarea>
            <div className="button-comment">
              <Button
                type="button"
                colorbutton="Brand"
                width="20%"
                //  onClick={() => handlePost()}
              >
                Comentar
              </Button>
            </div>
          </form>
        </div>
        <div className="suggestion-text">
          <span>Gostei Muito</span>
          <span>Incrível</span>
          <span>Recomendarei para meus amigos!</span>
        </div>
      </div>
    </PostCommentDiv>
  );
}

export default PostCommentCard;
