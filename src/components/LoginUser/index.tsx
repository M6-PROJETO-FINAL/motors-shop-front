import { FormLoginUser } from "./FormLoginUser";
import { Container } from "./styles";

const LoginUser = () => {
  return (
    <Container>
      <div className="content">
        <h1>Login</h1>
        <FormLoginUser />
      </div>
    </Container>
  );
};

export default LoginUser;
