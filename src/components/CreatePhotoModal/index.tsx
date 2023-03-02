import { MdClose } from "react-icons/md";
import { Heading } from "../Heading";
import { Container } from "./styles";

function CreatePhotoModal({ setShowPhotoProductModal }: any) {

  return (
    <Container>
      <div className="modal">
        <header>
          <Heading
            level={2}
            fontWeight={500}
            color={"grey00"}
            size={"small"}
            lineHeight={20}
          >
            Imagem do veículo
          </Heading>
          <MdClose onClick={() => setShowPhotoProductModal(false)} />
        </header>

        <div className="photo-zoom">
          <img src="" alt="" />
        </div>

      </div>
    </Container>
  );
}

export default CreatePhotoModal;
