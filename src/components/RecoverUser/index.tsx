import { FormRecoverUser } from "./FormRecoverUser";
import { Container } from "./styles";

const RecoverUser = () => {
  return (
    <Container>
      <div className="content">
        <h1>Recupere sua senha</h1>
        <FormRecoverUser />
      </div>
    </Container>
  );
};

export default RecoverUser;
