import react from 'react';
import "./styles.scss";
import { Button, Icon } from 'trunx';
import { faThumbsUp } from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'

interface KsButtonProperties {
    buttonText: string
}

export default function KsButton({buttonText}: KsButtonProperties){

    return(
        <Button isLink className={"KsButton"}>
            <Icon className="iconHolder">
                <FontAwesomeIcon icon={faThumbsUp} />
            </Icon>
            {buttonText}
            </Button>
    )
}


{/*Hvordan sette størrelsen til en knapp remote? Kan jo ikke sette {props.buttonSize} også pase inn isSmall som attributt?*/}
{/*Hvordan linke til styling på en god måte her? className på button føles så dumt men kan jo ikke ta å style Button generelt 
i scss dokumentet siden det ikke er et html element*/}
{/*Her blir det en blanding av styling med bulma og med stylesheet. Er dette en akseptabel løsning? */}
{/*Hvordan sende inn noe som krever en import? Her lurer jeg på hvordan jeg ville ha sendt inn noe til KsButton som endret hvilke icon som skulle være der */}
