import KsInputField from "../form/inputfield/KsInputField"
import KsButton from "../button/KsButton"
import { Container } from "trunx"

export default function KsRegister(){

    return(
        <Container>
            <KsInputField type="text" labelText="Brukernavn" />
            <KsInputField type="text" labelText="Passord" />
            <KsInputField type="text" labelText="Gjenta Passord" />
            <KsButton buttonText="Registrer" onClickFunction={() => console.log("clicked register")}/>
        </Container>
    )
}