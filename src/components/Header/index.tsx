import { ButtonCars, ButtonRides } from "../Button";
import { HeaderContent, HeaderStyled } from "./style";
import { DivButton } from "../Button/style";


const Header = () =>{

    const handlerCars = () => {
    }
    const handlerRides = () => {
    }
    
    return(
        <HeaderStyled>
            <HeaderContent>
                <h1>Velocidade e Experiência em um lugar feito pra você</h1>
                <h4>Um ambiente feito para você explorar o seu melhor</h4>
                <DivButton>
                    <ButtonCars onClick={() => handlerCars}/>
                    <ButtonRides onClick={() => handlerRides} />
                </DivButton>
        </HeaderContent>

        </HeaderStyled>

    )
}

export default Header;