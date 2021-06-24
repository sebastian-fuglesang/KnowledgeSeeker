import {FontAwesomeIcon} from '@fortawesome/react-fontawesome'
import {faFacebook} from '@fortawesome/free-brands-svg-icons'
import { faTwitter } from '@fortawesome/free-brands-svg-icons'
import { faInstagram } from '@fortawesome/free-brands-svg-icons'
import { Button } from 'trunx'
import { Column } from 'trunx'
import { Columns } from 'trunx'
import { Icon } from 'trunx'

const KsFooter = () => {

    return (
        <footer className="footer has-background-info has-text-white">
            <div className="content has-text-centered">
                <Columns>
                    
                    <Column hasTextLeft m2>
                        <p>KnowledgeSeeker</p>
                        <p>@ KnowledgeSeeker 2021</p>
                    </Column>
                    
                    <Column hasTextLeft m2>
                        <p>Om oss</p>
                        <p>Kontakt</p>
                        <p>Brukervilkår</p>
                        <p>Informasjonskapsler (Cookies)</p>
                    </Column>
                    
                    <Column hasTextLeft m2>
                        <div>
                            <Icon>
                                <FontAwesomeIcon icon={faFacebook} />
                                <p style={{padding:10}}>Facebook</p>
                            </Icon>
                        </div>

                        <div>
                            <Icon>
                                <FontAwesomeIcon icon={faTwitter} />
                                <p style={{padding:10}}>Twitter</p>
                            </Icon>
                        </div>

                        <div>
                            <Icon>
                                <FontAwesomeIcon icon={faInstagram} />
                                <p style={{padding:10}}>Instagram</p>
                            </Icon>
                        </div>
                    </Column>
                    
                    <Column hasTextLeft m2>
                        <p>Aboner på nyhetsbrev</p>
                        <div>
                            <input type="text" />
                            <Button isLink isSmall ml2>Ok</Button>
                        </div>
                    </Column>
                
                </Columns>

            </div>

        </footer>




    )
}

export default KsFooter