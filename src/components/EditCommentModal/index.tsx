import { MdClose } from "react-icons/md";
import { IModalComment } from "../../interfaces/comment.interfaces";

import { FormEditComment } from "./FormEditComment";
import { Container } from "./styles";

const EditCommentModal: React.FC<IModalComment> = ({
  setShowModal,
  setShowSuccessModal,
  comment,
  setIsPost
}) => {
  return (
    <Container>
      <div className="editUser--modal">
        <header>
          <h2>Editar Comentário</h2>
          <MdClose onClick={() => setShowModal(false)} />
        </header>
        <FormEditComment
          setShowModal={setShowModal}
          setShowSuccessModal={setShowSuccessModal}
          comment={comment}
          setIsPost={setIsPost}
        />
      </div>
    </Container>
  );
};

export default EditCommentModal;

