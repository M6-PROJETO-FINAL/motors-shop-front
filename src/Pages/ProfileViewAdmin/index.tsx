import CarouselProducts from "../../components/CarouselProducts";
import { Footer } from "../../components/Footer";
import NavbarLogged from "../../components/NavbarLogged";
import {
  ProfileContent,
  ProfileHeader,
  ContentTitleStyled,
  ButtonLoginStyled,
  DescriptionProfile,
  ButtonCreateAnnouncement,
  BackgroundHeaderStyled,
  BackPageStyled,
} from "./style";

const ProfileViewAdmin = () => {
  return (
    <BackPageStyled>
      <NavbarLogged />
      
      <BackgroundHeaderStyled className="background"></BackgroundHeaderStyled>
      
      <ProfileHeader>

        <ProfileContent>
          <ButtonLoginStyled>SL</ButtonLoginStyled>

          <ContentTitleStyled>
            <p>Nome do Usuário</p>
            <small>Anunciante</small>
          </ContentTitleStyled>

          <DescriptionProfile>
            Lorem Ipsum is simply dummy text of the printing and typesetting
            industry. Lorem Ipsum has been the industry's standard dummy text
            ever since the 1500s
          </DescriptionProfile>

          <ButtonCreateAnnouncement>Criar Anúncio</ButtonCreateAnnouncement>
        </ProfileContent>

      </ProfileHeader>
      {/* <CarouselProducts /> */}
      <Footer />
    </BackPageStyled>
  );
};

export default ProfileViewAdmin;
