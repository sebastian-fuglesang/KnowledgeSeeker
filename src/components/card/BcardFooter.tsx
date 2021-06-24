import { faThumbsUp } from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { Button } from 'trunx'
import { Icon } from 'trunx'

const BcardFooter = () => {
    return (
        <div className="card-footer">
        
        <div className="card-footer-item">
            <Icon isMedium>
                <FontAwesomeIcon icon={faThumbsUp}/>
            </Icon>
        </div>

        <div className="card-footer-item">
            <Button isLink>Endre</Button>
        </div>

    </div>

    )

}

export default BcardFooter