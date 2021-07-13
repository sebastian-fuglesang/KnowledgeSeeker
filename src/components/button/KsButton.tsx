import react from 'react';
import "./styles.scss";
import { Button, ButtonProps, Icon } from 'trunx';
import { faThumbsUp } from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'

interface KsButtonProperties extends ButtonProps {
    buttonText: string;
}

export default function KsButton({buttonText}: KsButtonProperties){

    return(
        <Button isLink>
            <Icon className="iconHolder">
                <FontAwesomeIcon icon={faThumbsUp} />
            </Icon>
            {buttonText}
        </Button>
    )
}

{/*Hvordan sende inn noe som krever en import? Her lurer jeg på hvordan jeg ville ha sendt inn noe til KsButton som endret hvilke icon som skulle være der */}
{/* hvorfor må jeg bruke spread operatoren på type her? */}