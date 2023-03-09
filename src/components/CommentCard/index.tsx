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
  comments: any[];
  setIsPost: React.Dispatch<React.SetStateAction<boolean>>;
}

function CommentCard({ comments, setIsPost }: CommentProps) {
  const [showModal, setShowModal] = useState(false);
  const [showSuccessModal, setShowSuccessModal] = useState(false);
  const [comment, setComment] = useState({} as any);

  const { isComment, setIsComment } = useContext(CheckCommentContext);

  const userId = localStorage.getItem("@motorsShop:userId");
  const token = localStorage.getItem("@motorsShop:token");

  const handleSubmit = (comment: any) => {
    setComment(comment);
    setShowModal(true);
  };

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
        setIsPost(true);
        setIsComment(!isComment);
      })
      .catch((err) => console.error(err));
  };

  return (
    <CommentDiv>
      {showModal && (
        <EditCommentModal
          setShowModal={setShowModal}
          setShowSuccessModal={setShowSuccessModal}
          comment={comment}
          setIsPost={setIsPost}
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
      {comments.map((comment, index) => (
        <div key={index}>
          <div key={index} className="userInfo">
            <div className="sellerPhoto">
              <p>{userInitials(comment.user.fullName)}</p>
            </div>
            <p className="userName">{comment.user.fullName}</p>
            <div className="time">
              <BsFillCircleFill size={5} />
              <span key={index} className="date">
                {calculateTimePassed(comment.user.created_at)}
              </span>
            </div>
          </div>
          <div className="text">{comment.text}</div>
          <div className="buttons">
            <button
              className="editButton"
              onClick={() => handleSubmit(comment)}
            >
              <AiFillEdit size={20} />
            </button>
            <button
              className="deleteButton"
              onClick={() => deleteComment(comment.id)}
            >
              <AiFillDelete color="#4529E6" size={20} />
            </button>
          </div>
        </div>
      ))}
    </CommentDiv>
  );
}

export default CommentCard;
