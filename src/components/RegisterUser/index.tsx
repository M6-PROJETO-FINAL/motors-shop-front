import { FormCreatedUser } from "./FormCreatedUser";
import { Container } from "./styles";

const RegisterUser = () => {
  return (
    <Container>
      <div className="content">
        <h1>Cadastro</h1>
        <FormCreatedUser />
      </div>
    </Container>
  );
};

export default RegisterUser;
