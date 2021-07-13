import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faFacebook } from '@fortawesome/free-brands-svg-icons';
import { faTwitter } from '@fortawesome/free-brands-svg-icons';
import { faInstagram } from '@fortawesome/free-brands-svg-icons';
import { Button, Columns, Column, Icon, Label, Footer } from 'trunx';
import { useForm } from 'react-hook-form';
import { newsletterDB } from '../../utils/firebase';
import "./KsFooter.scss";

interface newsletterProps {
    email: string;
}

const KsFooter = () => {

    const { register, handleSubmit, reset } = useForm<newsletterProps>();

    const onSubmit = (event: any) => {
        console.log(event);
        newsletterDB.add({
            ...event
        })
        reset();
    }


    return (
        <Footer hasBackgroundInfo hasTextWhite className="KsFooter">
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
                            <p style={{ padding: 10 }}>Facebook</p>
                        </Icon>
                    </div>

                    <div>
                        <Icon>
                            <FontAwesomeIcon icon={faTwitter} />
                            <p style={{ padding: 10 }}>Twitter</p>
                        </Icon>
                    </div>

                    <div>
                        <Icon>
                            <FontAwesomeIcon icon={faInstagram} />
                            <p style={{ padding: 10 }}>Instagram</p>
                        </Icon>
                    </div>
                </Column>

                <Column hasTextLeft m2>
                    <form onSubmit={handleSubmit(onSubmit)}>
                        <Label>Aboner på nyhetsbrev</Label>
                        <input placeholder="email" type="text" {...register("email")} />
                        <Button type="submit" isLink isSmall ml2>Ok</Button>
                    </form>

                </Column>

            </Columns>

        </Footer>




    )
}

export default KsFooter