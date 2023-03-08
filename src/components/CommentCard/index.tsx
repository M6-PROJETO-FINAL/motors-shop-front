import { calculateTimePassed } from "../../utils/calculateTimePassed";
import { userInitials } from "../../utils/userInitials";
import { useContext, useEffect, useState } from "react";
import { toast } from "react-toastify";
import { CheckCommentContext } from "../../context/CheckComment";
import api from "../../services/api";
import { AiFillEdit, AiFillDelete } from "react-icons/ai";
import EditCommentModal from "../EditCommentModal";
import { SuccessModal } from "../Modal";
import { CommentDiv } from "./styles";
import { BsFillCircleFill } from "react-icons/bs";

interface CommentProps {
  userName: string;
  commentDate: string;
  text: string;
  commentId: string;
}

function CommentCard({ userName, commentDate, text, commentId }: CommentProps) {
  const [showModal, setShowModal] = useState(false);
  const [showSuccessModal, setShowSuccessModal] = useState(false);
  const [comment, setComment] = useState({} as any);

  const { isComment, setIsComment } = useContext(CheckCommentContext);

  const userId = localStorage.getItem("@motorsShop:userId");
  const token = localStorage.getItem("@motorsShop:token");

  useEffect(() => {
    if (userId !== null) {
      api
        .get(`/comments/`)
        .then((res) => {
          setComment(res.data);
        })
        .catch((err) => console.log("Tente novamente mais tarde."));
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  const deleteComment = (commentId: string) => {
    api
      .delete(`/comments/${commentId}`, {
        headers: { Authorization: `Bearer ${token}` },
      })
      .then((res) => {
        toast.success("Comentario deletado com Sucesso");
        setIsComment(!isComment);
      })
      .catch((err) => toast.error("Comentario não foi deletado"));
  };

  return (
    <CommentDiv>
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
      <h2>Comentários</h2>

      <div className="userInfo">
        <div className="sellerPhoto">
          <p>{userInitials(userName)}</p>
        </div>
        <p className="userName">{userName}</p>
        <div className="time">
          <BsFillCircleFill size={5} />
          <span className="date">{calculateTimePassed(commentDate)}</span>
        </div>
      </div>

      <div className="text">{text}</div>
      {comment.user?.id === userId && (
        <>
          <div className="buttons">
            <button className="editButton" onClick={() => setShowModal(true)}>
              <AiFillEdit size={20} />
            </button>
            <button
              className="deleteButton"
              onClick={() => deleteComment(comment.id)}
            >
              <AiFillDelete size={20} />
            </button>
          </div>
        </>
      )}
    </CommentDiv>
  );
}

export default CommentCard;
