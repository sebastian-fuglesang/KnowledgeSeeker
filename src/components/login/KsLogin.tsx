import KsInputField from "../form/inputfield/KsInputField";
import KsButton from "../button/KsButton";
import { Container } from "trunx";




export default function KsLogin(){

    function handleClick(){
        console.log("stuff");
    }

    return (
        <Container>
            <KsInputField type="text" labelText="BrukerNavn" />
            <KsInputField type="text" labelText="Passord" />
            <KsButton onClickFunction={handleClick} buttonText="Logg Inn"/>
            <a>Har du ikke en bruker?</a>
        </Container>
    )
}

